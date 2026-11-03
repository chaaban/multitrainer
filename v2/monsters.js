// The monsters: one for each table. Table N's monster carries N spots, set out in rows of five, so looking at it
// is already counting. Stages: 0 egg, 1 baby, 2 grown, 3 crowned. Everything is drawn from numbers, no outside input.
(function (root) {
  'use strict';
  var C = ['#FF5A5F', '#FF8A1F', '#2BB6A8', '#4B6BFB', '#E0398F', '#7A4DE8', '#16A34A', '#00A5D8', '#F0568C', '#C2410C', '#0F9D8A', '#5B5BD6'];
  var INK = '#1D1A4E';
  function spots(n, cx, cy, r, gap) {
    var out = '', rows = Math.ceil(n / 5);
    for (var i = 0; i < n; i++) {
      var row = Math.floor(i / 5), inRow = row < rows - 1 ? 5 : n - row * 5, col = i % 5;
      var x = cx + (col - (inRow - 1) / 2) * gap, y = cy + (row - (rows - 1) / 2) * gap;
      out += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + INK + '"/>';
    }
    return out;
  }
  function tops(n, c) {
    var s = 'stroke="' + INK + '" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
    switch (n % 4) {
      case 0: return '<path d="M34 34 22 8 50 24zM86 34 98 8 70 24z" fill="' + c + '" ' + s + '/>';
      case 1: return '<path d="M42 26C40 14 34 10 28 10M78 26c2-12 8-16 14-16" fill="none" ' + s + '/><circle cx="26" cy="10" r="6" fill="#FFD84D" ' + s + '/><circle cx="94" cy="10" r="6" fill="#FFD84D" ' + s + '/>';
      case 2: return '<ellipse cx="26" cy="34" rx="12" ry="18" fill="' + c + '" ' + s + ' transform="rotate(-24 26 34)"/><ellipse cx="94" cy="34" rx="12" ry="18" fill="' + c + '" ' + s + ' transform="rotate(24 94 34)"/>';
      default: return '<path d="M38 28 44 8l8 16 8-20 8 20 8-16 6 20z" fill="#FFD84D" ' + s + '/>';
    }
  }
  function monster(n, stage) {
    var c = C[(n - 1) % C.length], s = 'stroke="' + INK + '" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
    var open = '<svg class="monster" viewBox="0 0 120 130" aria-hidden="true" focusable="false">';
    if (!stage) {
      return open + '<ellipse cx="60" cy="122" rx="30" ry="5" fill="' + INK + '" opacity=".18"/>'
        + '<path d="M60 10C84 10 98 48 98 76c0 26-17 44-38 44S22 102 22 76C22 48 36 10 60 10z" fill="#FFFDF5" ' + s + '/>'
        + spots(Math.min(n, 12), 60, 76, 4.2, 12).replace(new RegExp(INK, 'g'), c)
        + '<path d="M48 30l7 6 5-7 6 7" fill="none" ' + s + '/></svg>';
    }
    var scale = stage === 1 ? 0.8 : 1, mood = n % 3;
    var eyes = mood === 0
      ? '<circle cx="60" cy="50" r="15" fill="#fff" ' + s + '/><circle cx="62" cy="52" r="7" fill="' + INK + '"/><circle cx="65" cy="48" r="2.4" fill="#fff"/>'
      : '<circle cx="44" cy="50" r="12" fill="#fff" ' + s + '/><circle cx="76" cy="50" r="12" fill="#fff" ' + s + '/><circle cx="46" cy="52" r="5.5" fill="' + INK + '"/><circle cx="78" cy="52" r="5.5" fill="' + INK + '"/><circle cx="48" cy="49" r="1.9" fill="#fff"/><circle cx="80" cy="49" r="1.9" fill="#fff"/>';
    var mouth = mood === 1
      ? '<path d="M46 70c6 8 22 8 28 0z" fill="' + INK + '" ' + s + '/><path d="M53 72v4M67 72v4" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
      : '<path d="M48 70c5 6 19 6 24 0" fill="none" ' + s + '/>';
    var arms = stage >= 2
      ? '<path d="M20 74C8 70 6 58 10 50M100 74c12-4 14-16 10-24" fill="none" stroke="' + INK + '" stroke-width="11" stroke-linecap="round"/><path d="M20 74C8 70 6 58 10 50M100 74c12-4 14-16 10-24" fill="none" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>'
      : '';
    var crown = stage === 3
      ? '<path d="M38 26 34 2l14 11L60-2l12 15L86 2l-4 24z" fill="#FFC700" ' + s + '/><circle cx="60" cy="16" r="3.4" fill="#FF5A5F"/>'
      : '';
    return open + '<ellipse cx="60" cy="122" rx="' + (32 * scale) + '" ry="5" fill="' + INK + '" opacity=".18"/>'
      + '<g transform="translate(' + (60 - 60 * scale) + ' ' + (120 - 120 * scale) + ') scale(' + scale + ')">'
      + (stage === 3 ? '' : tops(n, c)) + arms
      + '<path d="M60 22c30 0 42 26 42 54 0 18-4 34-12 40-8 5-12-4-16-4s-8 8-14 8-10-8-14-8-8 9-16 4c-8-6-12-22-12-40 0-28 12-54 42-54z" fill="' + c + '" ' + s + '/>'
      + '<ellipse cx="60" cy="94" rx="33" ry="' + (n > 10 ? 18 : n > 5 ? 15 : 12) + '" fill="#FFFDF5" stroke="' + INK + '" stroke-width="2.6"/>'
      + spots(n, 60, 94, n > 10 ? 3 : 3.4, n > 10 ? 9.4 : 10) + eyes + mouth + crown + '</g></svg>';
  }
  var api = { monster: monster, color: function (n) { return C[(n - 1) % C.length]; } };
  if (typeof module === 'object' && module.exports) module.exports = api; else root.MTMonsters = api;
})(typeof self !== 'undefined' ? self : this);
