// Gist-bullet search. Results show the MATCHING SUMMARY LINE, not a body snippet —
// so the answer arrives without opening the page. Index is built at build time.
(function () {
  var q = document.getElementById('q');
  var out = document.getElementById('results');
  if (!q || !out) return;
  var data = null, loading = false;

  function load() {
    if (data || loading) return;
    loading = true;
    fetch('/search.json').then(function (r) { return r.json(); })
      .then(function (j) { data = j; loading = false; render(); })
      .catch(function () { loading = false; });
  }

  function esc(s) { return s.replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function mark(text, terms) {
    var h = esc(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      h = h.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return h;
  }

  function render() {
    var v = q.value.trim();
    if (!v) { out.hidden = true; out.innerHTML = ''; return; }
    if (!data) { load(); return; }
    var terms = v.toLowerCase().split(/\s+/);
    var hits = data.filter(function (d) {
      var hay = (d.b + ' ' + d.t).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    }).slice(0, 8);

    out.hidden = false;
    if (!hits.length) {
      out.innerHTML = '<li class="noresults">Nothing matches &ldquo;' + esc(v) +
        '&rdquo;. Try a word you&rsquo;d use out loud &mdash; the search looks at the summary lines, not the whole page.</li>';
      return;
    }
    out.innerHTML = hits.map(function (d) {
      return '<li><p class="where">' + esc(d.s) + '</p>' +
             '<p class="ttl"><a href="' + d.u + '">' + esc(d.t) + '</a></p>' +
             '<p class="ans">' + mark(d.b, terms) + '</p></li>';
    }).join('');
  }

  q.addEventListener('focus', load);
  q.addEventListener('input', render);
})();
