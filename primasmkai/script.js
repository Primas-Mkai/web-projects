var DEMO_URLS = ['https://prime-codes.onrender.com'];

window.addEventListener('load', function () {
  DEMO_URLS.forEach(function (url) {
    var key = 'woke:' + url;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch (e) {}
    try {
      fetch(url, { mode: 'no-cors', cache: 'no-store', credentials: 'omit' }).catch(function () {});
    } catch (e) {}
  });
});

(function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
