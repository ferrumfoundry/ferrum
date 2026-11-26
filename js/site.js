// Ferrum company site — reveal-on-scroll, progressive enhancement only.
// Content is fully visible without JS; the .js class gates the hidden start state.
document.documentElement.classList.add('js');

(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('seen'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
