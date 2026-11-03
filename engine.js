// MultiTrainer v2: the learning rules. No screen code here, so it can be tested on its own.
// Each fact (3×7 and 7×3 are the same fact) moves through boxes 0–5. A fact comes back when it is due:
// soon after a mistake, days later once it is known.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MTEngine = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var DAY = 86400000;
  var INTERVALS = [0, 0, DAY, 3 * DAY, 7 * DAY, 21 * DAY];
  // Easiest tables first: new facts arrive in this order.
  var ORDER = [1, 10, 2, 5, 3, 4, 9, 6, 7, 8, 11, 12];

  function key(a, b) { return Math.min(a, b) + 'x' + Math.max(a, b); }
  function rank(a, b) { return Math.min(ORDER.indexOf(a), ORDER.indexOf(b)); }
  function fact(p, a, b) { return p.facts[key(a, b)] || { box: 0, seen: 0, right: 0, wrong: 0, ms: 0, due: 0 }; }
  function shuffle(list, rng) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function fastLimit(mode) { return mode === 'keypad' ? 7000 : 5000; }

  // Saves one answer. A retry straight after a mistake never moves a fact forward.
  function record(p, a, b, ok, ms, o) {
    o = o || {};
    if (a === 0 || b === 0) return;
    var now = o.now || Date.now(), k = key(a, b), f = fact(p, a, b);
    f.seen++;
    f.ms = f.ms ? Math.round(f.ms * 0.7 + ms * 0.3) : Math.round(ms);
    f.last = now;
    if (o.retry) { if (ok) f.right++; else f.wrong++; p.facts[k] = f; return; }
    if (ok) {
      f.right++;
      var fast = ms <= fastLimit(o.answer);
      // Low boxes move on every right answer; higher ones only when the fact was really due, so a long
      // practice session can't "master" a fact in one sitting.
      // An early or slow right answer leaves the date alone, otherwise a fact asked too soon would never fall due.
      if (f.box < 2 || (fast && now >= f.due)) {
        f.box = Math.min(5, f.box + 1);
        f.due = now + INTERVALS[f.box];
      }
    } else {
      f.wrong++;
      f.box = Math.max(0, f.box - 2);
      f.due = now;
    }
    p.facts[k] = f;
  }

  function allFacts(tables, max) {
    var seen = {}, out = [];
    tables.forEach(function (a) {
      for (var b = 1; b <= max; b++) {
        var k = key(a, b);
        if (!seen[k]) { seen[k] = 1; out.push([Math.min(a, b), Math.max(a, b)]); }
      }
    });
    return out;
  }

  function toQuestion(p, pair, rng, tables) {
    var a = pair[0], b = pair[1], f = fact(p, a, b);
    // Show the chosen table first; otherwise either way round.
    if (tables && tables.length && tables.indexOf(a) < 0) { var s = a; a = b; b = s; }
    else if ((!tables || tables.indexOf(b) >= 0) && rng() < 0.5) { var t = a; a = b; b = t; }
    return { a: a, b: b, kind: f.box >= 3 && b > 0 && rng() < 0.3 ? 'missing' : 'product' };
  }

  // The list of questions for one game: what is due, then a few new facts, then what is weakest.
  function plan(p, o) {
    var rng = o.rng || Math.random, now = o.now || Date.now(), count = o.count || 10, max = o.max || 10;
    var tables = o.tables && o.tables.length ? o.tables : ORDER.filter(function (n) { return n <= max; });
    var facts = allFacts(tables, max), info = facts.map(function (pair) { return { pair: pair, f: fact(p, pair[0], pair[1]) }; });
    var due = info.filter(function (x) { return x.f.seen > 0 && x.f.due <= now; })
      .sort(function (x, y) { return x.f.box - y.f.box || x.f.due - y.f.due; });
    var fresh = info.filter(function (x) { return x.f.seen === 0; })
      .sort(function (x, y) { return rank(x.pair[0], x.pair[1]) - rank(y.pair[0], y.pair[1]); });
    var later = shuffle(info.filter(function (x) { return x.f.seen > 0 && x.f.due > now; }), rng)
      .sort(function (x, y) { return x.f.box - y.f.box; });
    var weak = info.filter(function (x) { return x.f.seen > 0 && x.f.box < 2; }).length;
    var newCount = o.free ? count : (weak >= 8 ? 1 : 3);
    var picks = due.slice(0, count - Math.min(newCount, fresh.length, count));
    picks = picks.concat(fresh.slice(0, Math.min(newCount, count - picks.length)));
    picks = picks.concat(due.slice(picks.length).slice(0, Math.max(0, count - picks.length)));
    picks = picks.concat(later.slice(0, Math.max(0, count - picks.length)));
    picks = picks.concat(fresh.slice(Math.min(newCount, fresh.length)).slice(0, Math.max(0, count - picks.length)));
    var questions = shuffle(picks, rng).map(function (x) { return toQuestion(p, x.pair, rng, o.tables); });
    // Few facts (one small table) and many questions: go round again.
    var round = 0;
    while (questions.length < count && info.length && round++ < 50) {
      shuffle(info, rng).forEach(function (x) { if (questions.length < count) questions.push(toQuestion(p, x.pair, rng, o.tables)); });
    }
    // «× 0», as in the first version, when practising freely.
    if (o.zero && tables.length) {
      var n = Math.max(1, Math.round(count / 11));
      for (var i = 0; i < n && questions.length; i++) {
        questions[Math.floor(rng() * questions.length)] = { a: tables[Math.floor(rng() * tables.length)], b: 0, kind: 'product' };
      }
    }
    return separate(questions, rng);
  }

  // Never the same fact twice in a row, when it can be avoided.
  function separate(q, rng) {
    for (var i = 1; i < q.length; i++) {
      if (key(q[i].a, q[i].b) !== key(q[i - 1].a, q[i - 1].b)) continue;
      for (var j = i + 1; j < q.length; j++) {
        if (key(q[j].a, q[j].b) !== key(q[i - 1].a, q[i - 1].b)) { var t = q[i]; q[i] = q[j]; q[j] = t; break; }
      }
    }
    return q;
  }

  function answerOf(q) { return q.kind === 'missing' ? q.b : q.a * q.b; }

  // Wrong answers that tempt: the neighbouring products, a + b, swapped digits. Never just random numbers.
  function choices(q, rng, n) {
    rng = rng || Math.random; n = n || 4;
    var right = answerOf(q), a = q.a, b = q.b, c = [];
    if (q.kind === 'missing') c = [b - 1, b + 1, b - 2, b + 2, a, Math.round((a * b) / 2), b + 3];
    else {
      c = [a * (b + 1), a * (b - 1), (a + 1) * b, (a - 1) * b, a + b, a * b + 10, a * b - 10, a, b, 1];
      if (right > 9) c.push(Number(String(right).split('').reverse().join('')));
    }
    var seen = {}, wrong = [];
    seen[right] = 1;
    shuffle(c, rng).forEach(function (v) {
      if (v >= 0 && !seen[v] && wrong.length < n - 1 && !(q.kind === 'missing' && v === 0)) { seen[v] = 1; wrong.push(v); }
    });
    for (var v = right + 1; wrong.length < n - 1; v++) { if (!seen[v]) { seen[v] = 1; wrong.push(v); } }
    return shuffle(wrong.concat([right]), rng);
  }

  // A table's monster: 0 egg, 1 hatched, 2 grown, 3 crowned.
  function stage(p, table, max) {
    max = max || 10;
    var total = 0, b1 = 0, b2 = 0, b4 = 0;
    for (var b = 1; b <= max; b++) {
      var f = fact(p, table, b);
      total++;
      if (f.box >= 1) b1++;
      if (f.box >= 2) b2++;
      if (f.box >= 4) b4++;
    }
    if (b4 === total) return 3;
    if (b2 / total >= 0.7) return 2;
    if (b1 / total >= 0.3) return 1;
    return 0;
  }

  function progress(p, table, max) {
    max = max || 10;
    var sum = 0;
    for (var b = 1; b <= max; b++) sum += fact(p, table, b).box;
    return sum / (5 * max);
  }

  function stars(correct, total) {
    var r = total ? correct / total : 0;
    return r >= 0.9 ? 3 : r >= 0.7 ? 2 : r >= 0.4 ? 1 : 0;
  }

  function dayKey(t) {
    var d = new Date(t || Date.now());
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // Days in a row, counting today or, if not played yet today, up to yesterday.
  function dayStreak(days, now) {
    var set = {}, n = 0, t = now || Date.now();
    (days || []).forEach(function (d) { set[d] = 1; });
    if (!set[dayKey(t)]) t -= DAY;
    while (set[dayKey(t)]) { n++; t -= DAY; }
    return n;
  }

  function weakest(p, n) {
    return Object.keys(p.facts).map(function (k) {
      var x = k.split('x'), f = p.facts[k];
      return { a: +x[0], b: +x[1], f: f, score: f.box * 2 + f.right / Math.max(1, f.seen) - f.wrong / Math.max(1, f.seen) };
    }).filter(function (x) { return x.f.wrong > 0 && x.f.box < 4; })
      .sort(function (x, y) { return x.score - y.score; }).slice(0, n || 5);
  }

  return { key: key, fact: fact, record: record, plan: plan, choices: choices, answerOf: answerOf, stage: stage, progress: progress,
    stars: stars, dayKey: dayKey, dayStreak: dayStreak, weakest: weakest, shuffle: shuffle, ORDER: ORDER, DAY: DAY };
});
