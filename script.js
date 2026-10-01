// GuardSphere — minimal vanilla JS (mobile nav toggle only, no dependencies)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (!toggle || !header) return;

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the mobile menu after a nav link is tapped.
  var links = header.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
