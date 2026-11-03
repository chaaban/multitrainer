// MultiTrainer v2: the screens. The learning rules are in engine.js, the drawings in monsters.js.
// Everything a child does stays in this browser (localStorage): no account, no statistics, nothing sent anywhere.
(function () {
  'use strict';
  var E = window.MTEngine, M = window.MTMonsters;
  var KEY = 'multitrainer.v2';

  var T = {
    fr: {
      hello: 'Bonjour', play: 'Jouer', playSub: '10 questions choisies pour toi', tableOf: 'La table de', nextEgg: 'Fais éclore ce monstre !', nextBaby: 'Fais-le grandir !', nextGrown: 'Gagne sa couronne !', allCrowned: 'Tous tes monstres ont leur couronne !',
      free: 'Libre', freeSub: 'Tes tables, tes règles', chrono: 'Chrono', chronoSub: '60 secondes, à fond !', duel: 'Duel', duelSub: 'À deux sur le même écran', learn: 'Apprendre', learnSub: 'Comprendre chaque table',
      monsters: 'Mes monstres', progress: 'Mes progrès', settings: 'Réglages', back: 'Retour', days: 'jours de suite', day: 'jour',
      newPlayer: 'Qui joue ?', yourName: 'Ton prénom', namePh: 'Écris ton prénom', pickPet: 'Choisis ton monstre', letsGo: "C'est parti !", player: 'Champion',
      tables: 'Quelles tables ?', all: 'Toutes', none: 'Aucune', pickOne: 'Choisis au moins une table.', answerType: 'Comment répondre ?', choices: 'Choix', keypad: 'Clavier', questions: 'Questions', timer: 'Temps par question', off: 'Sans', sec: 's', start: 'Commencer',
      quit: 'Quitter', timeUp: 'Temps écoulé !', cont: 'Continuer', answerIs: 'La réponse', rowsOf: 'rangées de', ok: 'OK', erase: 'Effacer', score: 'Score', combo: 'de suite',
      perfect: 'Parfait !', great: 'Bravo !', good: 'Bien joué !', keepGoing: 'Continue, tu progresses !', correct: 'justes', avgTime: 'secondes par question', bestCombo: 'meilleure série', replay: 'Rejouer', home: 'Accueil', hatched: 'a éclos !', grown: 'a grandi !', crowned: 'a gagné sa couronne !', newBadge: 'Nouveau trophée', answered: 'réponses justes', bestScore: 'Ton record', newBest: 'Nouveau record !',
      p1: 'Joueur 1', p2: 'Joueur 2', wins: 'gagne !', firstTo: 'Le premier à 10 gagne', rematch: 'Revanche',
      revealAll: 'Tout montrer', hideAll: 'Tout cacher', practice: "S'entraîner", tapHint: 'Touche une ligne pour voir la réponse.',
      zoo: 'Ma collection', chart: 'Le tableau de mes tables', legendNew: 'Pas encore vu', legendWeak: 'À revoir', legendOk: 'En route', legendGood: 'Presque', legendBest: 'Je sais', legendMaster: 'Maîtrisé', toReview: 'À revoir en priorité', history: 'Mes dernières parties', trophies: 'Mes trophées', noData: 'Joue une partie et tout apparaîtra ici.', free_: 'Libre', mission_: 'Partie', chrono_: 'Chrono', v1_: 'Ancienne version',
      language: 'Langue', theme: 'Couleurs', light: 'Clair', dark: 'Sombre', sound: 'Sons', voice: 'Voix', on: 'Oui', offv: 'Non', max: 'Jusqu’à la table de', players: 'Joueurs', addPlayer: 'Ajouter un joueur', current: 'en jeu', remove: 'Supprimer', confirmRemove: 'Supprimer ce joueur et tous ses progrès ?', privacy: 'Tes progrès restent sur cet appareil. Rien n’est envoyé.', install: 'Astuce : ajoute le jeu à l’écran d’accueil pour jouer même sans internet.',
      say: function (a, b, c) { return a + ' fois ' + b + ' égale ' + c; },
      praise: ['Bravo !', 'Super !', 'Excellent !', 'Génial !', 'Parfait !', 'Tu es fort !', 'Oui !', 'Magnifique !', 'Bien vu !'],
      cheer: ['Presque !', 'Pas grave !', 'On regarde ensemble.', 'Tu vas y arriver !'],
      tips: { 1: 'Fois 1 : le nombre ne change pas.', 2: 'Fois 2 : c’est le double.', 3: 'Fois 3 : compte de 3 en 3.', 4: 'Fois 4 : le double du double.', 5: 'Fois 5 : ça finit toujours par 0 ou 5.', 6: 'Fois 6 : un nombre pair garde son chiffre, 6 × 4 = 24, 6 × 8 = 48.', 7: 'Fois 7 : retiens 7 × 8 = 56, comme 5, 6, 7, 8.', 8: 'Fois 8 : double trois fois de suite.', 9: 'Fois 9 : les deux chiffres font toujours 9 ensemble, 9 × 4 = 36.', 10: 'Fois 10 : ajoute un 0.', 11: 'Fois 11 : le chiffre se répète, 11 × 4 = 44.', 12: 'Fois 12 : fois 10, puis ajoute le double.' },
      badges: { first: 'Première partie', perfect: 'Sans faute', combo10: '10 de suite', combo25: '25 de suite', days3: '3 jours de suite', days7: '7 jours de suite', chrono20: '20 au chrono', hatch: 'Premier monstre', grown: 'Monstre adulte', crown: 'Première couronne', collect: 'Tous éclos' }
    },
    en: {
      hello: 'Hello', play: 'Play', playSub: '10 questions picked for you', tableOf: 'The table of', nextEgg: 'Hatch this monster!', nextBaby: 'Help it grow!', nextGrown: 'Win its crown!', allCrowned: 'All your monsters have their crown!',
      free: 'Free play', freeSub: 'Your tables, your rules', chrono: 'Time rush', chronoSub: '60 seconds, go go go!', duel: 'Duel', duelSub: 'Two players, one screen', learn: 'Learn', learnSub: 'Understand each table',
      monsters: 'My monsters', progress: 'My progress', settings: 'Settings', back: 'Back', days: 'days in a row', day: 'day',
      newPlayer: 'Who is playing?', yourName: 'Your name', namePh: 'Type your name', pickPet: 'Pick your monster', letsGo: "Let's go!", player: 'Champion',
      tables: 'Which tables?', all: 'All', none: 'None', pickOne: 'Pick at least one table.', answerType: 'How to answer?', choices: 'Choices', keypad: 'Keypad', questions: 'Questions', timer: 'Time per question', off: 'None', sec: 's', start: 'Start',
      quit: 'Quit', timeUp: "Time's up!", cont: 'Continue', answerIs: 'The answer', rowsOf: 'rows of', ok: 'OK', erase: 'Erase', score: 'Score', combo: 'in a row',
      perfect: 'Perfect!', great: 'Well done!', good: 'Good game!', keepGoing: "Keep going, you're improving!", correct: 'correct', avgTime: 'seconds per question', bestCombo: 'best streak', replay: 'Play again', home: 'Home', hatched: 'has hatched!', grown: 'has grown!', crowned: 'won its crown!', newBadge: 'New trophy', answered: 'right answers', bestScore: 'Your record', newBest: 'New record!',
      p1: 'Player 1', p2: 'Player 2', wins: 'wins!', firstTo: 'First to 10 wins', rematch: 'Rematch',
      revealAll: 'Show all', hideAll: 'Hide all', practice: 'Practise', tapHint: 'Tap a line to see the answer.',
      zoo: 'My collection', chart: 'My tables chart', legendNew: 'Not seen yet', legendWeak: 'Needs work', legendOk: 'Getting there', legendGood: 'Nearly', legendBest: 'I know it', legendMaster: 'Mastered', toReview: 'Practise these first', history: 'My last games', trophies: 'My trophies', noData: 'Play a game and everything will show up here.', free_: 'Free play', mission_: 'Game', chrono_: 'Time rush', v1_: 'Old version',
      language: 'Language', theme: 'Colours', light: 'Light', dark: 'Dark', sound: 'Sounds', voice: 'Voice', on: 'Yes', offv: 'No', max: 'Up to the table of', players: 'Players', addPlayer: 'Add a player', current: 'playing', remove: 'Remove', confirmRemove: 'Remove this player and all their progress?', privacy: 'Your progress stays on this device. Nothing is sent anywhere.', install: 'Tip: add the game to your home screen to play without internet.',
      say: function (a, b, c) { return a + ' times ' + b + ' is ' + c; },
      praise: ['Well done!', 'Great!', 'Excellent!', 'Awesome!', 'Perfect!', "You're strong!", 'Yes!', 'Wonderful!', 'Nice one!'],
      cheer: ['Almost!', "That's okay!", "Let's look together.", "You'll get it!"],
      tips: { 1: 'Times 1: the number stays the same.', 2: 'Times 2: just double it.', 3: 'Times 3: count in threes.', 4: 'Times 4: double, then double again.', 5: 'Times 5: it always ends in 0 or 5.', 6: 'Times 6: an even number keeps its digit, 6 × 4 = 24, 6 × 8 = 48.', 7: 'Times 7: remember 7 × 8 = 56, like 5, 6, 7, 8.', 8: 'Times 8: double three times in a row.', 9: 'Times 9: the two digits always add up to 9, 9 × 4 = 36.', 10: 'Times 10: add a 0.', 11: 'Times 11: the digit repeats, 11 × 4 = 44.', 12: 'Times 12: times 10, then add the double.' },
      badges: { first: 'First game', perfect: 'No mistakes', combo10: '10 in a row', combo25: '25 in a row', days3: '3 days in a row', days7: '7 days in a row', chrono20: '20 in Time rush', hatch: 'First monster', grown: 'Grown monster', crown: 'First crown', collect: 'All hatched' }
    },
    ar: {
      hello: 'مرحبًا', play: 'العب', playSub: '10 أسئلة اخترناها لك', tableOf: 'جدول', nextEgg: 'أخرج هذا الوحش من بيضته!', nextBaby: 'ساعده لينمو!', nextGrown: 'اربح تاجه!', allCrowned: 'كل وحوشك نالت تيجانها!',
      free: 'لعب حر', freeSub: 'جداولك وقواعدك', chrono: 'سباق الوقت', chronoSub: '60 ثانية بأقصى سرعة!', duel: 'مبارزة', duelSub: 'لاعبان على شاشة واحدة', learn: 'تعلّم', learnSub: 'افهم كل جدول',
      monsters: 'وحوشي', progress: 'تقدّمي', settings: 'الإعدادات', back: 'رجوع', days: 'أيام متتالية', day: 'يوم',
      newPlayer: 'من يلعب؟', yourName: 'اسمك', namePh: 'اكتب اسمك', pickPet: 'اختر وحشك', letsGo: 'هيا بنا!', player: 'البطل',
      tables: 'أي جداول؟', all: 'الكل', none: 'لا شيء', pickOne: 'اختر جدولًا واحدًا على الأقل.', answerType: 'كيف تجيب؟', choices: 'اختيارات', keypad: 'لوحة أرقام', questions: 'الأسئلة', timer: 'الوقت لكل سؤال', off: 'بلا', sec: 'ث', start: 'ابدأ',
      quit: 'خروج', timeUp: 'انتهى الوقت!', cont: 'متابعة', answerIs: 'الجواب', rowsOf: 'صفوف في كل صف', ok: 'تم', erase: 'مسح', score: 'النتيجة', combo: 'متتالية',
      perfect: 'ممتاز!', great: 'أحسنت!', good: 'لعب جميل!', keepGoing: 'استمر، أنت تتحسن!', correct: 'صحيحة', avgTime: 'ثانية لكل سؤال', bestCombo: 'أفضل سلسلة', replay: 'العب من جديد', home: 'الرئيسية', hatched: 'خرج من بيضته!', grown: 'كبر!', crowned: 'ربح تاجه!', newBadge: 'كأس جديدة', answered: 'إجابات صحيحة', bestScore: 'رقمك القياسي', newBest: 'رقم قياسي جديد!',
      p1: 'اللاعب 1', p2: 'اللاعب 2', wins: 'فاز!', firstTo: 'من يصل إلى 10 أولًا يفوز', rematch: 'مباراة أخرى',
      revealAll: 'أظهر الكل', hideAll: 'أخفِ الكل', practice: 'تدرّب', tapHint: 'المس سطرًا لترى الجواب.',
      zoo: 'مجموعتي', chart: 'لوحة جداولي', legendNew: 'لم يظهر بعد', legendWeak: 'يحتاج مراجعة', legendOk: 'في الطريق', legendGood: 'تقريبًا', legendBest: 'أعرفه', legendMaster: 'أتقنته', toReview: 'راجع هذه أولًا', history: 'آخر ألعابي', trophies: 'كؤوسي', noData: 'العب مرة وسيظهر كل شيء هنا.', free_: 'لعب حر', mission_: 'لعبة', chrono_: 'سباق الوقت', v1_: 'النسخة القديمة',
      language: 'اللغة', theme: 'الألوان', light: 'فاتح', dark: 'داكن', sound: 'الأصوات', voice: 'الصوت المنطوق', on: 'نعم', offv: 'لا', max: 'حتى جدول', players: 'اللاعبون', addPlayer: 'أضف لاعبًا', current: 'يلعب الآن', remove: 'حذف', confirmRemove: 'حذف هذا اللاعب وكل تقدمه؟', privacy: 'تقدمك يبقى على هذا الجهاز ولا يُرسل إلى أي مكان.', install: 'نصيحة: أضف اللعبة إلى الشاشة الرئيسية لتلعب بلا إنترنت.',
      say: function (a, b, c) { return a + ' ضرب ' + b + ' يساوي ' + c; },
      praise: ['أحسنت!', 'رائع!', 'ممتاز!', 'مدهش!', 'بطل!', 'أنت قوي!', 'نعم!', 'جميل جدًا!'],
      cheer: ['قريب جدًا!', 'لا بأس!', 'لننظر معًا.', 'ستنجح!'],
      tips: { 1: 'ضرب 1: العدد لا يتغير.', 2: 'ضرب 2: هو الضعف.', 3: 'ضرب 3: عُدّ ثلاثة ثلاثة.', 4: 'ضرب 4: ضعف الضعف.', 5: 'ضرب 5: ينتهي دائمًا بـ 0 أو 5.', 6: 'ضرب 6: العدد الزوجي يحتفظ برقمه، 6 × 4 = 24 و6 × 8 = 48.', 7: 'ضرب 7: تذكّر 7 × 8 = 56، مثل 5، 6، 7، 8.', 8: 'ضرب 8: ضاعف ثلاث مرات.', 9: 'ضرب 9: مجموع الرقمين دائمًا 9، مثل 9 × 4 = 36.', 10: 'ضرب 10: أضف صفرًا.', 11: 'ضرب 11: يتكرر الرقم، 11 × 4 = 44.', 12: 'ضرب 12: ضرب 10 ثم أضف الضعف.' },
      badges: { first: 'أول لعبة', perfect: 'بلا أخطاء', combo10: '10 متتالية', combo25: '25 متتالية', days3: '3 أيام متتالية', days7: '7 أيام متتالية', chrono20: '20 في سباق الوقت', hatch: 'أول وحش', grown: 'وحش كبير', crown: 'أول تاج', collect: 'خرجت كلها' }
    }
  };

  var ICONS = {
    back: '<path d="M15 5l-7 7 7 7"/>', gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.4"/><circle cx="9" cy="17" r="2.4"/>', bolt: '<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>',
    versus: '<path d="M4 4l9 9M4 8V4h4M20 4l-9 9M20 8V4h-4M7 14l-3 3 3 3 3-3zM17 14l3 3-3 3-3-3z"/>', book: '<path d="M12 6.5C10 5 7 4.5 3.5 5v14c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v14"/>',
    flame: '<path d="M12 2.5c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 1-3-.5-6 1-9.500z"/>', close: '<path d="M6 6l12 12M18 6 6 18"/>', erase: '<path d="M9 5h11v14H9l-6-7zM13 9.500l5 5M18 9.500l-5 5"/>', chevron: '<path d="M9 5l7 7-7 7"/>'
  };
  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true" class="STATE"><path d="M12 2.500l2.900 6.100 6.700.900-4.900 4.600 1.200 6.600L12 17.500l-5.900 3.200 1.200-6.600L2.400 9.500l6.700-.9z"/></svg>';

  function icon(n) { return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[n] + '</svg>'; }

  // ---------- storage ----------
  function load(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function newProfile(name, pet) {
    return { id: 'p' + Date.now().toString(36) + Math.floor(Math.random() * 1e4), name: name, pet: pet, facts: {}, sessions: [], best: { chrono: 0 }, badges: [], days: [],
      cfg: { tables: [2, 3, 4, 5], answer: 'choice', count: 10, timer: 0 } };
  }
  // The first version's name, settings and results come along. Its own data is left in place.
  function fromV1() {
    var s = { v: 1, lang: 'fr', theme: null, sound: true, voice: true, max: 10, cur: null, profiles: [] };
    var old = load('mt_v2_config') || {}, names = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('results_') === 0 && Array.isArray((load(k) || {}).sessions)) names.push(k.slice(8));
      }
    } catch (e) {}
    if (typeof old.name === 'string' && old.name.trim() && names.indexOf(old.name) < 0) names.unshift(old.name);
    names.forEach(function (name, n) {
      if (!name.trim() || name === 'Anonyme' || name === 'Anonymous') return;
      var p = newProfile(name.slice(0, 24), (n % 10) + 1);
      p.sessions = ((load('results_' + name) || {}).sessions || []).map(function (x) {
        return { t: Date.parse(x.date) || 0, mode: 'v1', correct: +x.correct || 0, total: +x.total || 0, avg: +x.avgTime || 0 };
      }).filter(function (x) { return x.total > 0; });
      s.profiles.push(p);
      if (name === old.name) {
        s.cur = p.id;
        if (Array.isArray(old.enabledTables) && old.enabledTables.length) p.cfg.tables = old.enabledTables.filter(function (t) { return t >= 1 && t <= 10; });
        if (old.answerMode === 'input') p.cfg.answer = 'keypad';
        if (Number.isFinite(old.goal)) p.cfg.count = Math.min(20, Math.max(5, old.goal));
      }
    });
    if (!s.cur && s.profiles[0]) s.cur = s.profiles[0].id;
    if (['fr', 'en'].indexOf(old.language) >= 0) s.lang = old.language;
    if (['light', 'dark'].indexOf(old.theme) >= 0) s.theme = old.theme;
    if (typeof old.soundEnabled === 'boolean') s.sound = old.soundEnabled;
    return s;
  }
  var S = load(KEY);
  if (!S || S.v !== 1 || !Array.isArray(S.profiles)) S = fromV1();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function me() { return S.profiles.filter(function (p) { return p.id === S.cur; })[0] || null; }
  function t() { return T[S.lang] || T.fr; }
  function range() { var o = []; for (var i = 1; i <= S.max; i++) o.push(i); return o; }

  function applyLook() {
    var dark = S.theme ? S.theme === 'dark' : !!(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    var h = document.documentElement;
    h.dataset.theme = dark ? 'dark' : 'light';
    h.lang = S.lang;
    h.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
    var m = document.querySelector('meta[name=theme-color]');
    if (m) m.content = dark ? '#1D1A4E' : '#FFD84D';
  }

  // ---------- small DOM helper: text always goes in as text ----------
  function el(tag, attrs) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === false || v === null || v === undefined) return;
      if (k === 'html') e.innerHTML = v; // only ever our own icons and drawings
      else if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), v);
      else if (k === 'style') Object.keys(v).forEach(function (s) { if (s.indexOf('--') === 0) e.style.setProperty(s, v[s]); else e.style[s] = v[s]; });
      else e.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) c.forEach(function (x) { add(e, x); });
    else e.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
  }
  function pet(n, stage, cls) { return el('div', { class: cls || 'pet', html: M.monster(n, stage) }); }
  function barTop(title, backTo) {
    return el('header', { class: 'bar' },
      el('button', { class: 'btn round', 'aria-label': t().back, html: icon('back'), style: { transform: S.lang === 'ar' ? 'scaleX(-1)' : '' }, onclick: function () { show(backTo || 'home'); } }),
      el('h1', { tabindex: '-1' }, title));
  }
  function seg(options, value, onpick, label) {
    var box = el('div', { class: 'seg', role: 'group', 'aria-label': label || null });
    options.forEach(function (o) {
      box.appendChild(el('button', { type: 'button', 'aria-pressed': String(o[0] === value), onclick: function () {
        box.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        this.setAttribute('aria-pressed', 'true');
        onpick(o[0]);
      } }, o[1]));
    });
    return box;
  }
  function eqText(q, typed) {
    var box = el('div', { class: 'eq', dir: 'ltr' });
    var slot = el('span', { class: 'slot js-slot' }, typed || '?');
    if (q.kind === 'missing') add(box, [q.a + ' × ', slot, ' = ' + q.a * q.b]);
    else add(box, [q.a + ' × ' + q.b + ' = ', slot]);
    return box;
  }

  // ---------- sound ----------
  var ctx = null;
  function audio() {
    if (!S.sound) return null;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    } catch (e) { return null; }
  }
  function tone(freq, at, len, type, vol) {
    var c = audio();
    if (!c) return;
    var o = c.createOscillator(), g = c.createGain(), s = c.currentTime + at;
    o.type = type || 'triangle'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, s);
    g.gain.exponentialRampToValueAtTime(vol || 0.22, s + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, s + len);
    o.connect(g); g.connect(c.destination);
    o.start(s); o.stop(s + len + 0.03);
  }
  // Right answers climb a scale as the run gets longer.
  var SCALE = [523, 587, 659, 784, 880, 1047, 1175, 1319];
  function soundRight(run) { var n = SCALE[Math.min(run, SCALE.length - 1)]; tone(n, 0, 0.14); tone(n * 1.5, 0.09, 0.2); }
  function soundWrong() { tone(233, 0, 0.18, 'sine', 0.2); tone(196, 0.14, 0.28, 'sine', 0.2); }
  function soundWin() { [523, 659, 784, 1047].forEach(function (n, i) { tone(n, i * 0.11, 0.26); }); }
  function clap() { if (!S.sound || typeof Audio === 'undefined') return; try { new Audio('sounds/clapping.wav').play().catch(function () {}); } catch (e) {} }
  function speak(text) {
    if (!S.sound || !S.voice || !window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
    try {
      var code = S.lang === 'fr' ? 'fr' : S.lang === 'ar' ? 'ar' : 'en';
      var voice = speechSynthesis.getVoices().filter(function (v) { return v.lang.toLowerCase().indexOf(code) === 0; })[0];
      if (!voice && code === 'ar') return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = code === 'fr' ? 'fr-FR' : code === 'ar' ? 'ar' : 'en-US';
      if (voice) u.voice = voice;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function confetti() {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var cv = el('canvas', { class: 'confetti', 'aria-hidden': 'true' }), g = cv.getContext && cv.getContext('2d');
    if (!g) return;
    document.body.appendChild(cv);
    var W = cv.width = innerWidth, H = cv.height = innerHeight, cols = ['#D81F5C', '#3451E0', '#0F8F83', '#FFC700', '#7A4DE8', '#FF8A1F'];
    var bits = []; for (var i = 0; i < 110; i++) bits.push({ x: Math.random() * W, y: -Math.random() * H * 0.6, s: 6 + Math.random() * 8, v: 2.4 + Math.random() * 3.4, r: Math.random() * 6, w: 0.08 + Math.random() * 0.14, c: cols[i % cols.length] });
    var start = performance.now();
    (function frame(now) {
      g.clearRect(0, 0, W, H);
      bits.forEach(function (b) { b.y += b.v; b.x += Math.sin(b.r) * 1.2; b.r += b.w; g.save(); g.translate(b.x, b.y); g.rotate(b.r); g.fillStyle = b.c; g.fillRect(-b.s / 2, -b.s / 3, b.s, b.s * 0.66); g.restore(); });
      if (now - start < 3200 && cv.isConnected) requestAnimationFrame(frame); else cv.remove();
    })(start);
  }

  // ---------- screens ----------
  var app, timers = [], keyHandler = null, G = null;
  function later(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); return id; }
  function clearAll() {
    timers.forEach(clearTimeout); timers = [];
    if (G && G.tick) clearInterval(G.tick);
    if (window.speechSynthesis) { try { speechSynthesis.cancel(); } catch (e) {} }
    keyHandler = null; G = null;
  }
  function show(name, arg) {
    clearAll();
    applyLook();
    if (!me() && name !== 'player') { name = 'player'; arg = null; }
    app.replaceChildren();
    if (name !== 'game' && name !== 'duel') window.scrollTo(0, 0);
    SCREENS[name](arg);
    var h = app.querySelector('h1[tabindex]');
    if (h && name !== 'home') h.focus({ preventScroll: true });
    if (name !== 'home') { try { history.pushState({ s: name }, ''); } catch (e) {} }
  }

  function nextTable(p) {
    var list = E.ORDER.filter(function (n) { return n <= S.max; });
    for (var i = 0; i < list.length; i++) if (E.stage(p, list[i], S.max) < 3) return list[i];
    return null;
  }

  var SCREENS = {
    home: function () {
      var p = me(), L = t(), target = nextTable(p), run = E.dayStreak(p.days);
      var stage = target ? E.stage(p, target, S.max) : 3, shown = target || (p.pet || 1);
      var screen = el('main', { class: 'screen' },
        el('header', { class: 'bar' },
          el('button', { class: 'who', 'aria-label': L.players + ': ' + p.name, onclick: function () { show('settings'); } }, pet(p.pet, 2), el('span', {}, p.name)),
          el('div', { class: 'spacer' }),
          run > 0 && el('span', { class: 'chip', title: run + ' ' + (run > 1 ? L.days : L.day), html: icon('flame') + '<span>' + run + '</span>' }),
          el('button', { class: 'btn round', 'aria-label': L.settings, html: icon('gear'), onclick: function () { show('settings'); } })),
        el('h1', { class: 'sr', tabindex: '-1' }, 'MultiTrainer'),
        el('section', { class: 'card' },
          el('div', { class: 'hero' },
            el('div', { class: 'pet-bob', html: M.monster(shown, stage) }),
            el('div', {},
              el('h2', {}, target ? L.tableOf + ' ' + target : L.allCrowned),
              target && el('p', {}, stage === 0 ? L.nextEgg : stage === 1 ? L.nextBaby : L.nextGrown),
              target && el('div', { class: 'meter', role: 'img', 'aria-label': Math.round(E.progress(p, target, S.max) * 100) + '%' }, el('i', { style: { width: Math.round(E.progress(p, target, S.max) * 100) + '%' } })))),
          el('button', { class: 'btn go big', style: { marginTop: '14px' }, onclick: function () { startGame({ mode: 'mission' }); } }, L.play),
          el('p', { style: { textAlign: 'center', color: 'var(--soft)', marginTop: '10px' } }, L.playSub)),
        el('nav', { class: 'modes', 'aria-label': L.play },
          modeTile('m-free', 'sliders', L.free, L.freeSub, function () { show('setup', 'free'); }),
          modeTile('m-chrono', 'bolt', L.chrono, L.chronoSub, function () { show('setup', 'chrono'); }),
          modeTile('m-duel', 'versus', L.duel, L.duelSub, function () { show('setup', 'duel'); }),
          modeTile('m-learn', 'book', L.learn, L.learnSub, function () { show('learn'); })),
        el('button', { class: 'card shelf', onclick: function () { show('progress'); } },
          el('b', {}, L.progress),
          el('div', { class: 'row', 'aria-hidden': 'true' }, range().slice(0, 10).map(function (n) { return pet(n, E.stage(p, n, S.max), ''); })),
          el('span', { html: icon('chevron'), style: { transform: S.lang === 'ar' ? 'scaleX(-1)' : '', display: 'flex' } })));
      app.appendChild(screen);
    },

    player: function (editing) {
      var L = t(), name = '', petN = 1 + S.profiles.length % 10;
      var input = el('input', { type: 'text', id: 'name', maxlength: '24', autocomplete: 'off', placeholder: L.namePh, oninput: function () { go.disabled = !input.value.trim(); } });
      var pets = el('div', { class: 'pets', role: 'group', 'aria-label': L.pickPet });
      range().slice(0, 10).forEach(function (n) {
        pets.appendChild(el('button', { type: 'button', 'aria-pressed': String(n === petN), 'aria-label': String(n), html: M.monster(n, 2), onclick: function () {
          petN = n; pets.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); }); this.setAttribute('aria-pressed', 'true');
        } }));
      });
      var go = el('button', { class: 'btn go big', disabled: true, onclick: function () {
        name = input.value.trim().slice(0, 24);
        if (!name) return;
        var p = newProfile(name, petN);
        S.profiles.push(p); S.cur = p.id; save();
        show('home');
      } }, L.letsGo);
      app.appendChild(el('main', { class: 'screen' },
        S.profiles.length ? barTop(L.addPlayer, 'settings') : el('header', { class: 'bar' }, el('h1', { tabindex: '-1' }, L.newPlayer)),
        el('div', { class: 'card field' }, el('label', { for: 'name' }, L.yourName), input),
        el('div', { class: 'card field' }, el('span', { class: 'lab' }, L.pickPet), pets),
        !S.profiles.length && el('div', { class: 'card field' }, el('span', { class: 'lab' }, L.language), seg([['fr', 'Français'], ['en', 'English'], ['ar', 'العربية']], S.lang, function (v) { S.lang = v; save(); show('player'); }, L.language)),
        go));
    },

    setup: function (mode) {
      var p = me(), L = t(), cfg = p.cfg, chosen = cfg.tables.filter(function (n) { return n <= S.max; });
      var msg = el('p', { class: 'err', role: 'alert' });
      var grid = el('div', { class: 'tables' + (S.max > 10 ? ' t12' : ''), role: 'group', 'aria-label': L.tables });
      function paint() { grid.querySelectorAll('.t').forEach(function (b) { b.setAttribute('aria-pressed', String(chosen.indexOf(+b.textContent) >= 0)); }); msg.textContent = ''; }
      range().forEach(function (n) {
        grid.appendChild(el('button', { type: 'button', class: 't', onclick: function () {
          var i = chosen.indexOf(n);
          if (i >= 0) chosen.splice(i, 1); else chosen.push(n);
          paint();
        } }, n));
      });
      var countText = el('b', {}, cfg.count);
      var parts = [el('div', { class: 'card field' }, el('span', { class: 'lab' }, L.tables), grid,
        el('div', { class: 'links' },
          el('button', { type: 'button', class: 'link', onclick: function () { chosen = range(); paint(); } }, L.all),
          el('button', { type: 'button', class: 'link', onclick: function () { chosen = []; paint(); } }, L.none)))];
      if (mode === 'free') {
        parts.push(el('div', { class: 'card field' }, el('span', { class: 'lab' }, L.answerType), seg([['choice', L.choices], ['keypad', L.keypad]], cfg.answer, function (v) { cfg.answer = v; }, L.answerType)));
        parts.push(el('div', { class: 'card field' }, el('label', { for: 'count' }, L.questions, ': ', countText),
          el('input', { type: 'range', id: 'count', min: '5', max: '20', step: '1', value: String(cfg.count), oninput: function () { cfg.count = +this.value; countText.textContent = cfg.count; } })));
        parts.push(el('div', { class: 'card field' }, el('span', { class: 'lab' }, L.timer), seg([[0, L.off], [10, '10' + L.sec], [7, '7' + L.sec], [5, '5' + L.sec], [3, '3' + L.sec]], cfg.timer, function (v) { cfg.timer = v; }, L.timer)));
      }
      if (mode === 'chrono' && p.best.chrono) parts.push(el('p', { style: { textAlign: 'center' } }, L.bestScore + ': ', el('b', {}, p.best.chrono)));
      if (mode === 'duel') parts.push(el('p', { style: { textAlign: 'center' } }, L.firstTo));
      app.appendChild(el('main', { class: 'screen' }, barTop(L[mode]), parts, msg,
        el('button', { class: 'btn go big', onclick: function () {
          if (!chosen.length) { msg.textContent = L.pickOne; return; }
          cfg.tables = chosen.slice().sort(function (a, b) { return a - b; });
          save();
          if (mode === 'duel') show('duel', { tables: cfg.tables }); else startGame({ mode: mode, tables: cfg.tables });
        } }, L.start)));
      paint();
    },

    game: function (o) { runGame(o); },
    duel: function (o) { runDuel(o); },

    summary: function (r) {
      var L = t(), p = me(), n = r.stars;
      var title = r.mode === 'chrono' ? (r.record ? L.newBest : L.good) : n === 3 ? (r.correct === r.total ? L.perfect : L.great) : n === 2 ? L.great : n === 1 ? L.good : L.keepGoing;
      var starBox = el('div', { class: 'stars', role: 'img', 'aria-label': n + '/3' });
      for (var i = 0; i < 3; i++) starBox.insertAdjacentHTML('beforeend', STAR.replace('STATE', i < n ? 'on' : ''));
      var nums = r.mode === 'chrono'
        ? [[r.correct, L.answered], [p.best.chrono, L.bestScore], [r.bestRun, L.bestCombo]]
        : [[r.correct + '/' + r.total, L.correct], [r.avg.toFixed(1), L.avgTime], [r.bestRun, L.bestCombo]];
      var news = r.grew.map(function (g) {
        return el('div', { class: 'card new' }, pet(g.table, g.stage), el('b', {}, L.tableOf + ' ' + g.table + ' ', g.stage === 3 ? L.crowned : g.stage === 2 ? L.grown : L.hatched));
      }).concat(r.badges.map(function (b) {
        return el('div', { class: 'card new' }, el('div', { class: 'pet', html: STAR.replace('STATE', 'on') , style: { width: '40px', fill: 'var(--gold)', stroke: 'var(--line)' } }), el('span', {}, L.newBadge + ': ', el('b', {}, L.badges[b])));
      }));
      app.appendChild(el('main', { class: 'screen done' },
        pet(r.grew[0] ? r.grew[0].table : p.pet, r.grew[0] ? r.grew[0].stage : 2, 'pet-big pet-bob'),
        r.mode !== 'chrono' && starBox,
        el('h1', { tabindex: '-1' }, title),
        el('div', { class: 'nums' }, nums.map(function (x) { return el('div', {}, el('b', { dir: 'ltr' }, x[0]), el('small', {}, x[1])); })),
        news.length ? el('div', { class: 'news' }, news) : null,
        el('div', { class: 'actions' },
          el('button', { class: 'btn', onclick: function () { show('home'); } }, L.home),
          el('button', { class: 'btn go', onclick: function () { startGame(r.again); } }, L.replay))));
      if (n >= 2 || r.grew.length || r.record) { confetti(); soundWin(); if (r.mode !== 'chrono' && r.correct / Math.max(1, r.total) >= 0.8) clap(); }
    },

    progress: function () {
      var p = me(), L = t(), max = S.max, played = p.sessions.length || Object.keys(p.facts).length;
      var zoo = el('div', { class: 'zoo' + (max > 10 ? ' t12' : '') });
      range().forEach(function (n) {
        var pct = Math.round(E.progress(p, n, max) * 100);
        zoo.appendChild(el('button', { type: 'button', 'aria-label': L.tableOf + ' ' + n + ', ' + pct + '%', onclick: function () { show('table', n); } },
          pet(n, E.stage(p, n, max), ''), el('span', {}, n), el('div', { class: 'mini-meter' }, el('i', { style: { width: pct + '%' } }))));
      });
      var detail = el('p', { role: 'status', style: { minHeight: '1.5em', textAlign: 'center', marginTop: '8px' } });
      var cells = el('div', { class: 'mgrid', style: { gridTemplateColumns: 'repeat(' + (max + 1) + ', 1fr)' } }, el('span', { class: 'h' }, '×'));
      range().forEach(function (n) { cells.appendChild(el('span', { class: 'h' }, n)); });
      range().forEach(function (a) {
        cells.appendChild(el('span', { class: 'h' }, a));
        range().forEach(function (b) {
          var f = E.fact(p, a, b), c = f.seen ? 'm' + Math.max(1, f.box) : 'm0';
          cells.appendChild(el('button', { type: 'button', class: c, 'aria-label': a + ' × ' + b, onclick: function () {
            detail.textContent = a + ' × ' + b + ' = ' + a * b + (f.seen ? ' (' + f.right + ' ✓, ' + f.wrong + ' ✗)' : '');
          } }, f.seen ? a * b : ''));
        });
      });
      var legend = el('div', { class: 'legend' }, [['m0', L.legendNew], ['m1', L.legendWeak], ['m2', L.legendOk], ['m3', L.legendGood], ['m4', L.legendBest], ['m5', L.legendMaster]].map(function (x) {
        return el('span', {}, el('i', { class: x[0] }), x[1]);
      }));
      var weak = E.weakest(p, 6);
      var last = p.sessions.slice(0, 20).reverse();
      app.appendChild(el('main', { class: 'screen' }, barTop(L.progress),
        el('section', { class: 'card' }, el('h2', {}, L.zoo), zoo),
        el('section', { class: 'card' }, el('h2', {}, L.chart), el('div', { class: 'grid-wrap' }, cells), detail, legend),
        weak.length ? el('section', { class: 'card' }, el('h2', {}, L.toReview), el('div', { class: 'tags', dir: 'ltr' }, weak.map(function (w) { return el('span', { class: 'got' }, w.a + ' × ' + w.b); })),
          el('button', { class: 'btn blue', style: { marginTop: '12px', width: '100%' }, onclick: function () { startGame({ mode: 'review', list: weak.map(function (w) { return { a: w.a, b: w.b, kind: 'product' }; }) }); } }, L.practice)) : null,
        el('section', { class: 'card' }, el('h2', {}, L.history),
          !played ? el('p', {}, L.noData) : el('div', {},
            last.length > 1 ? el('div', { class: 'bars', role: 'img', 'aria-hidden': 'true' }, last.map(function (s) { var pct = s.mode === 'chrono' ? 100 : Math.round(s.correct / s.total * 100); return el('i', { class: pct >= 80 ? 'top' : '', style: { height: Math.max(6, pct) + '%' } }); })) : null,
            el('div', { class: 'list', style: { marginTop: '8px' } }, p.sessions.slice(0, 8).map(function (s) {
              var name = L[s.mode === 'review' ? 'mission_' : s.mode + '_'] || '';
              return el('div', {}, el('span', {}, new Date(s.t).toLocaleDateString(S.lang === 'ar' ? 'ar-LB-u-nu-latn' : S.lang), ' ', name), el('b', { dir: 'ltr' }, s.mode === 'chrono' ? s.correct : s.correct + '/' + s.total));
            })))),
        el('section', { class: 'card' }, el('h2', {}, L.trophies), el('div', { class: 'tags' }, Object.keys(L.badges).map(function (b) { return el('span', { class: p.badges.indexOf(b) >= 0 ? 'got' : '' }, L.badges[b]); })))));
    },

    learn: function () {
      var p = me(), L = t(), zoo = el('div', { class: 'zoo' + (S.max > 10 ? ' t12' : '') });
      range().forEach(function (n) {
        zoo.appendChild(el('button', { type: 'button', 'aria-label': L.tableOf + ' ' + n, onclick: function () { show('table', n); } }, pet(n, Math.max(1, E.stage(p, n, S.max)), ''), el('span', {}, n)));
      });
      app.appendChild(el('main', { class: 'screen' }, barTop(L.learn), el('section', { class: 'card' }, zoo)));
    },

    table: function (n) {
      var p = me(), L = t(), box = el('div', { class: 'facts' }), open = false;
      var dotsBox = el('div', { 'aria-hidden': 'true', style: { marginTop: '4px' } });
      var buttons = [];
      range().forEach(function (b) {
        var btn = el('button', { type: 'button', class: 'fact-b', 'aria-pressed': 'false', onclick: function () {
          buttons.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
          btn.setAttribute('aria-pressed', 'true');
          btn.textContent = n + ' × ' + b + ' = ' + n * b;
          btn.classList.add('open');
          dotsBox.replaceChildren(dots(n, b, M.color(n)));
          speak(L.say(n, b, n * b));
        } }, n + ' × ' + b + ' = ?');
        buttons.push(btn); box.appendChild(btn);
      });
      var toggle = el('button', { type: 'button', class: 'btn', onclick: function () {
        open = !open;
        buttons.forEach(function (x, i) { x.textContent = n + ' × ' + (i + 1) + ' = ' + (open ? n * (i + 1) : '?'); x.classList.toggle('open', open); });
        toggle.textContent = open ? L.hideAll : L.revealAll;
      } }, L.revealAll);
      app.appendChild(el('main', { class: 'screen' }, barTop(L.tableOf + ' ' + n, 'learn'),
        el('section', { class: 'card learn-head' }, pet(n, Math.max(1, E.stage(p, n, S.max)), ''), el('p', {}, L.tips[n])),
        el('section', { class: 'card' }, el('p', { style: { marginBottom: '10px', color: 'var(--soft)' } }, L.tapHint), box, dotsBox),
        el('div', { class: 'actions' }, toggle, el('button', { class: 'btn go', onclick: function () { startGame({ mode: 'free', tables: [n], count: 10 }); } }, L.practice))));
    },

    settings: function () {
      var L = t(), list = el('div', { class: 'list' });
      S.profiles.forEach(function (p) {
        list.appendChild(el('div', { style: { alignItems: 'center' } },
          el('button', { class: 'who', style: { boxShadow: 'none', maxWidth: '70%', background: p.id === S.cur ? 'var(--gold)' : 'var(--well)', color: p.id === S.cur ? '#1D1A4E' : 'var(--ink)' }, 'aria-pressed': String(p.id === S.cur), onclick: function () { S.cur = p.id; save(); show('home'); } }, pet(p.pet, 2), el('span', {}, p.name)),
          S.profiles.length > 1 ? el('button', { class: 'link', onclick: function () {
            if (!window.confirm(L.confirmRemove)) return;
            S.profiles = S.profiles.filter(function (x) { return x.id !== p.id; });
            if (S.cur === p.id) S.cur = S.profiles[0].id;
            save(); show('settings');
          } }, L.remove) : null));
      });
      app.appendChild(el('main', { class: 'screen' }, barTop(L.settings),
        el('section', { class: 'card' }, el('h2', {}, L.players), list, el('button', { class: 'btn', style: { width: '100%', marginTop: '10px' }, onclick: function () { show('player'); } }, L.addPlayer)),
        el('section', { class: 'card field' },
          el('span', { class: 'lab' }, L.language), seg([['fr', 'Français'], ['en', 'English'], ['ar', 'العربية']], S.lang, function (v) { S.lang = v; save(); show('settings'); }, L.language),
          el('span', { class: 'lab' }, L.theme), seg([['light', L.light], ['dark', L.dark]], document.documentElement.dataset.theme, function (v) { S.theme = v; save(); applyLook(); }, L.theme),
          el('span', { class: 'lab' }, L.sound), seg([[true, L.on], [false, L.offv]], S.sound, function (v) { S.sound = v; save(); }, L.sound),
          el('span', { class: 'lab' }, L.voice), seg([[true, L.on], [false, L.offv]], S.voice, function (v) { S.voice = v; save(); }, L.voice),
          el('span', { class: 'lab' }, L.max), seg([[10, '10'], [12, '12']], S.max, function (v) { S.max = v; save(); }, L.max)),
        el('p', { style: { textAlign: 'center', color: 'var(--soft)' } }, L.privacy),
        el('p', { style: { textAlign: 'center', color: 'var(--soft)' } }, L.install)));
    }
  };
  function modeTile(cls, ic, title, sub, fn) {
    return el('button', { class: 'mode ' + cls, onclick: fn }, el('span', { html: icon(ic), style: { display: 'flex' } }), el('b', {}, title), el('small', {}, sub));
  }
  function dots(a, b, color) {
    var biggest = Math.max(a, b), d = biggest > 8 ? 11 : biggest > 5 ? 14 : 18;
    var box = el('div', { class: 'dots', style: { gridTemplateColumns: 'repeat(' + b + ', var(--d))', '--d': d + 'px', '--g': Math.round(d / 3) + 'px', '--c': color } });
    for (var i = 0; i < a * b; i++) box.appendChild(el('i'));
    return box;
  }

  // ---------- the game ----------
  function startGame(o) {
    var p = me();
    var mode = o.mode, count = o.count || (mode === 'free' ? p.cfg.count : 10), list;
    if (mode === 'review') list = E.shuffle(o.list, Math.random).map(function (q) { return Object.assign({}, q); });
    else if (mode === 'chrono') list = [];
    else if (mode === 'free') list = E.plan(p, { tables: o.tables, count: count, free: true, zero: true, max: S.max });
    else list = E.plan(p, { count: 10, max: S.max });
    show('game', { mode: mode, list: list, tables: o.tables, again: o, answer: mode === 'chrono' ? 'choice' : p.cfg.answer, timer: mode === 'free' ? p.cfg.timer : 0 });
  }

  function runGame(o) {
    var p = me(), L = t();
    var g = G = { mode: o.mode, queue: o.list, tables: o.tables, total: o.list.length, answered: 0, correct: 0, run: 0, bestRun: 0, ms: 0, q: null, locked: false, typed: '', again: o.again, started: Date.now(),
      before: {}, answer: o.answer, limit: o.timer, tick: null, end: 0 };
    range().forEach(function (n) { g.before[n] = E.stage(p, n, S.max); });
    var track = el('i'), clock = el('span', { class: 'clock', 'aria-live': 'off' }), combo = el('span', { class: 'chip', hidden: true });
    var petBox = pet(p.pet, 2, 'g-pet'), flash = el('p', { class: 'flash', role: 'status', 'aria-live': 'polite' }), eqBox = el('div'), tbar = el('div', { class: 'tbar', hidden: true }, el('i')), answers = el('div');
    var live = g.mode === 'chrono';
    var root = el('main', { class: 'game' },
      el('div', { class: 'g-top' },
        el('button', { class: 'btn round', 'aria-label': L.quit, html: icon('close'), onclick: function () { show('home'); } }),
        live ? el('span', { style: { flex: 1, textAlign: 'center', fontWeight: 800, fontSize: '1.5rem' } }, clock) : el('div', { class: 'track', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(g.total) }, track),
        combo),
      el('div', { class: 'stage' }, petBox, eqBox, flash),
      tbar, answers);
    app.appendChild(root);

    if (live) {
      g.end = Date.now() + 60000;
      clock.textContent = '60';
      g.tick = setInterval(function () {
        var left = Math.ceil((g.end - Date.now()) / 1000);
        clock.textContent = String(Math.max(0, left));
        if (left <= 0) { clearInterval(g.tick); finish(); }
      }, 200);
    }

    function nextChronoBatch() { g.queue = E.plan(p, { tables: g.tables, count: 20, free: true, max: S.max }); }
    function ask() {
      if (live && !g.queue.length) nextChronoBatch();
      if (!g.queue.length) { finish(); return; }
      g.q = g.queue.shift(); g.locked = false; g.typed = ''; g.shownAt = performance.now();
      if (!live) { track.style.width = (g.answered / g.total * 100) + '%'; track.parentNode.setAttribute('aria-valuenow', String(g.answered)); }
      flash.textContent = ''; flash.className = 'flash';
      petBox.className = 'g-pet';
      eqBox.replaceChildren(eqText(g.q));
      answers.replaceChildren(g.answer === 'keypad' ? keypad() : choiceGrid());
      if (g.limit) startClock();
    }
    function choiceGrid() {
      var right = E.answerOf(g.q);
      var box = el('div', { class: 'answers', dir: 'ltr' });
      E.choices(g.q).forEach(function (v) {
        box.appendChild(el('button', { type: 'button', class: 'ans', 'data-v': String(v), onclick: function () { answer(v, this); } }, v));
      });
      box.dataset.right = right;
      return box;
    }
    function typedShow() { var s = eqBox.querySelector('.js-slot'); if (s) s.textContent = g.typed || '?'; }
    function press(d) {
      if (g.locked) return;
      if (d === 'x') g.typed = g.typed.slice(0, -1);
      else if (d === 'ok') { if (g.typed !== '') answer(Number(g.typed)); return; }
      else if (g.typed.length < 3) g.typed = (g.typed === '0' ? '' : g.typed) + d;
      typedShow();
    }
    function keypad() {
      var box = el('div', { class: 'keypad', dir: 'ltr' });
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(function (d) { box.appendChild(el('button', { type: 'button', onclick: function () { press(d); } }, d)); });
      box.appendChild(el('button', { type: 'button', 'aria-label': L.erase, html: icon('erase'), onclick: function () { press('x'); } }));
      box.appendChild(el('button', { type: 'button', onclick: function () { press('0'); } }, '0'));
      box.appendChild(el('button', { type: 'button', class: 'ok', onclick: function () { press('ok'); } }, L.ok));
      return box;
    }
    function startClock() {
      tbar.hidden = false; tbar.classList.remove('late');
      var bar = tbar.firstChild, ms = g.limit * 1000;
      bar.style.transition = 'none'; bar.style.transform = 'scaleX(1)';
      void bar.offsetWidth;
      bar.style.transition = 'transform ' + ms + 'ms linear'; bar.style.transform = 'scaleX(0)';
      g.lateId = later(function () { tbar.classList.add('late'); }, ms * 0.7);
      g.limitId = later(function () { if (!g.locked) answer(null); }, ms);
    }
    function stopClock() {
      clearTimeout(g.limitId); clearTimeout(g.lateId);
      if (!tbar.hidden) { var b = tbar.firstChild; b.style.transform = getComputedStyle(b).transform; b.style.transition = 'none'; }
    }
    function answer(v, btn) {
      if (g.locked || !g.q) return;
      g.locked = true;
      stopClock();
      var q = g.q, right = E.answerOf(q), ok = v === right, ms = performance.now() - g.shownAt, first = !q.retry;
      E.record(p, q.a, q.b, ok, ms, { retry: q.retry, answer: g.answer });
      if (first) { g.answered++; g.ms += ms; if (ok) g.correct++; }
      if (ok) { g.run++; g.bestRun = Math.max(g.bestRun, g.run); } else g.run = 0;
      showCombo();
      answers.querySelectorAll('.ans').forEach(function (b) {
        b.disabled = true;
        if (Number(b.dataset.v) === right) b.classList.add('right');
      });
      if (btn && !ok) btn.classList.add('wrong');
      var s = eqBox.querySelector('.js-slot'); if (s) s.textContent = right;
      save();
      if (ok) {
        soundRight(g.run);
        var word = pick(L.praise);
        flash.textContent = word; flash.className = 'flash ok';
        petBox.className = 'g-pet happy';
        if (g.run && g.run % 5 === 0) speak(word);
        later(ask, live ? 320 : 720);
        return;
      }
      soundWrong();
      flash.className = 'flash no'; flash.textContent = v === null ? L.timeUp : pick(L.cheer);
      petBox.className = 'g-pet sad';
      speak(L.say(q.a, q.b, q.a * q.b));
      if (live) { later(ask, 900); return; }
      // It comes back two questions later, so the right answer sticks straight away.
      if ((q.tries || 0) < 2 && q.b !== 0) g.queue.splice(Math.min(2, g.queue.length), 0, Object.assign({}, q, { retry: true, tries: (q.tries || 0) + 1 }));
      teach(q);
    }
    function teach(q) {
      var product = q.a * q.b, small = Math.min(q.a, q.b), big = Math.max(q.a, q.b), steps = [];
      if (q.b !== 0) for (var i = 1; i <= q.a && i <= 12; i++) steps.push(i * q.b);
      var tipTable = [9, 5, 10, 2, 11, 4, 1, 8, 6, 7, 12, 3].filter(function (n) { return n === small || n === big; })[0];
      var sheet = el('section', { class: 'teach', role: 'dialog', 'aria-modal': 'true', 'aria-label': L.answerIs },
        el('div', { class: 'big', dir: 'ltr' }, q.a + ' × ' + q.b + ' = ' + product),
        q.b !== 0 && el('div', { 'aria-hidden': 'true' }, dots(q.a, q.b, M.color(q.a <= 12 && q.a > 0 ? q.a : 1))),
        q.b !== 0 && el('p', {}, q.a + ' ' + L.rowsOf + ' ' + q.b),
        q.b !== 0 && el('div', { class: 'count', dir: 'ltr' }, steps.join(', ')),
        tipTable && el('p', { class: 'tip' }, L.tips[tipTable]),
        el('button', { class: 'btn blue big', onclick: function () { sheet.remove(); g.sheet = null; ask(); } }, L.cont));
      g.sheet = sheet;
      root.appendChild(sheet);
      sheet.querySelector('button').focus({ preventScroll: true });
    }
    function showCombo() {
      if (g.run >= 3) {
        combo.hidden = false; combo.textContent = g.run + ' ' + L.combo;
        combo.classList.remove('combo'); void combo.offsetWidth; combo.classList.add('combo');
      } else combo.hidden = true;
    }
    function finish() {
      if (g.finished) return;
      g.finished = true;
      clearInterval(g.tick);
      if (!g.answered) { show('home'); return; }
      var total = g.answered, day = E.dayKey();
      var rec = { t: Date.now(), mode: g.mode, correct: g.correct, total: total, avg: Number((g.ms / total / 1000).toFixed(1)), run: g.bestRun };
      p.sessions.unshift(rec);
      if (p.sessions.length > 200) p.sessions.length = 200;
      if (p.days.indexOf(day) < 0) { p.days.push(day); if (p.days.length > 400) p.days.shift(); }
      var record = false;
      if (g.mode === 'chrono' && g.correct > p.best.chrono) { record = p.best.chrono > 0; p.best.chrono = g.correct; }
      var grew = [];
      range().forEach(function (n) { var s = E.stage(p, n, S.max); if (s > g.before[n]) grew.push({ table: n, stage: s }); });
      var earned = awards(p, rec);
      save();
      show('summary', { mode: g.mode, correct: g.correct, total: total, avg: rec.avg, bestRun: g.bestRun, stars: g.mode === 'chrono' ? 0 : E.stars(g.correct, total), grew: grew.slice(0, 3), badges: earned, again: g.again, record: record });
    }
    keyHandler = function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (g.sheet) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); g.sheet.querySelector('button').click(); } return; }
      if (e.key === 'Escape') { show('home'); return; }
      if (g.answer === 'keypad') {
        if (/^[0-9]$/.test(e.key)) press(e.key);
        else if (e.key === 'Backspace') press('x');
        else if (e.key === 'Enter') press('ok');
      } else if (/^[1-4]$/.test(e.key)) {
        var b = answers.querySelectorAll('.ans')[Number(e.key) - 1];
        if (b && !b.disabled) b.click();
      }
    };
    audio();
    ask();
  }

  function awards(p, rec) {
    var all = range(), stages = all.map(function (n) { return E.stage(p, n, S.max); }), run = E.dayStreak(p.days), have = p.badges, out = [];
    function give(id, cond) { if (cond && have.indexOf(id) < 0) { have.push(id); out.push(id); } }
    give('first', true);
    give('perfect', rec.mode !== 'chrono' && rec.total >= 5 && rec.correct === rec.total);
    give('combo10', rec.run >= 10); give('combo25', rec.run >= 25);
    give('days3', run >= 3); give('days7', run >= 7);
    give('chrono20', rec.mode === 'chrono' && rec.correct >= 20);
    give('hatch', stages.some(function (s) { return s >= 1; }));
    give('grown', stages.some(function (s) { return s >= 2; }));
    give('crown', stages.some(function (s) { return s === 3; }));
    give('collect', stages.every(function (s) { return s >= 1; }));
    return out.slice(0, 3);
  }

  // ---------- duel: two players, same question, the screen is shared face to face ----------
  function runDuel(o) {
    var L = t(), p = me(), d = G = { score: [0, 0], q: null, locked: [false, false], busy: false, tables: o.tables, bag: [] };
    var sides = [0, 1].map(function (i) {
      var score = el('b', {}, '0'), eq = el('div', { class: 'eq', dir: 'ltr' }), grid = el('div', { class: 'answers', dir: 'ltr' });
      var box = el('section', { class: 'side ' + (i ? 'bottom' : 'top'), 'aria-label': i ? L.p2 : L.p1 }, el('div', { class: 'who-d' }, el('span', {}, i ? L.p2 : L.p1), score), eq, grid);
      return { box: box, score: score, eq: eq, grid: grid };
    });
    var mid = el('div', { class: 'mid' }, el('span', {}, L.firstTo), el('button', { class: 'btn ghost', onclick: function () { show('home'); } }, L.quit));
    app.appendChild(el('main', { class: 'duel' }, sides[0].box, mid, sides[1].box));
    function question() {
      if (!d.bag.length) d.bag = E.plan({ facts: {} }, { tables: d.tables, count: 30, free: true, max: S.max });
      d.q = d.bag.shift(); d.q.kind = 'product'; d.locked = [false, false]; d.busy = false;
      sides.forEach(function (s, i) {
        s.box.classList.remove('lost');
        s.eq.textContent = d.q.a + ' × ' + d.q.b;
        s.grid.replaceChildren();
        E.choices(d.q).forEach(function (v) {
          var fired = false, b = el('button', { type: 'button', class: 'ans', 'data-v': String(v) }, v);
          function go() { if (!fired) { fired = true; hit(i, v, b); } }
          b.addEventListener('pointerdown', go);
          b.addEventListener('click', function (e) { if (e.detail === 0) go(); });
          s.grid.appendChild(b);
        });
      });
    }
    function reveal() {
      var right = E.answerOf(d.q);
      sides.forEach(function (s) {
        s.eq.textContent = d.q.a + ' × ' + d.q.b + ' = ' + right;
        s.grid.querySelectorAll('.ans').forEach(function (b) { b.disabled = true; if (Number(b.dataset.v) === right) b.classList.add('right'); });
      });
    }
    function hit(i, v, btn) {
      if (d.busy || d.locked[i]) return;
      if (v === E.answerOf(d.q)) {
        d.busy = true;
        d.score[i]++;
        sides[i].score.textContent = d.score[i];
        soundRight(d.score[i]);
        reveal();
        if (d.score[i] >= 10) { later(function () { end(i); }, 900); return; }
        later(question, 1000);
      } else {
        d.locked[i] = true;
        btn.classList.add('wrong');
        sides[i].box.classList.add('lost');
        sides[i].grid.querySelectorAll('.ans').forEach(function (b) { b.disabled = true; });
        soundWrong();
        if (d.locked[0] && d.locked[1]) { d.busy = true; reveal(); later(question, 1500); }
      }
    }
    function end(winner) {
      var day = E.dayKey();
      if (p.days.indexOf(day) < 0) { p.days.push(day); save(); }
      app.replaceChildren(el('main', { class: 'screen done' }, pet(p.pet, 3, 'pet-big pet-bob'),
        el('h1', { tabindex: '-1' }, (winner ? L.p2 : L.p1) + ' ' + L.wins),
        el('div', { class: 'nums', style: { gridTemplateColumns: '1fr 1fr' } }, el('div', {}, el('b', {}, d.score[0]), el('small', {}, L.p1)), el('div', {}, el('b', {}, d.score[1]), el('small', {}, L.p2))),
        el('div', { class: 'actions' },
          el('button', { class: 'btn', onclick: function () { show('home'); } }, L.home),
          el('button', { class: 'btn go', onclick: function () { show('duel', { tables: d.tables }); } }, L.rematch))));
      confetti(); soundWin(); clap();
    }
    audio();
    question();
  }

  // ---------- start ----------
  function boot() {
    app = document.getElementById('app');
    document.addEventListener('keydown', function (e) { if (keyHandler) keyHandler(e); });
    window.addEventListener('popstate', function () { show('home'); });
    if (window.matchMedia) {
      var mq = matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', function () { if (!S.theme) applyLook(); });
    }
    if (S.profiles.length) save();
    show(me() ? 'home' : 'player');
    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  window.__mt = { state: function () { return S; }, show: show };
})();
