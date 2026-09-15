/* ============================================================
   Ink & Pierce — behaviour
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var navLinks = document.querySelectorAll('[data-nav]');
  var sections = Array.prototype.map.call(navLinks, function (link) {
    var id = link.getAttribute('href');
    return id && id.indexOf('#') === 0 ? document.querySelector(id) : null;
  });

  function updateActiveNav() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var activeIndex = -1;
    sections.forEach(function (section, i) {
      if (section && section.offsetTop <= scrollPos) activeIndex = i;
    });
    navLinks.forEach(function (link, i) {
      link.classList.toggle('active', i === activeIndex);
    });
  }
  document.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ---------- Hero word swap (TATTOO / STUDIO) ---------- */
  var swapWords = document.querySelectorAll('.hero-swap-word');
  if (swapWords.length > 1) {
    var current = 0;
    setInterval(function () {
      swapWords[current].classList.remove('is-visible');
      current = (current + 1) % swapWords.length;
      swapWords[current].classList.add('is-visible');
    }, 2600);
  }

  /* ---------- Testimonial slider ---------- */
  var track = document.getElementById('testimonialTrack');
  var dotsWrap = document.getElementById('testimonialDots');
  var prevBtn = document.getElementById('testimonialPrev');
  var nextBtn = document.getElementById('testimonialNext');

  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll('.testimonial-card'));
    var activeIndex = 0;
    var autoplayId;

    cards.forEach(function (card, i) {
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function render() {
      cards.forEach(function (card, i) {
        card.classList.toggle('is-active', i === activeIndex);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === activeIndex);
      });
    }

    function goTo(i) {
      activeIndex = (i + cards.length) % cards.length;
      render();
      restartAutoplay();
    }

    function restartAutoplay() {
      clearInterval(autoplayId);
      autoplayId = setInterval(function () { goTo(activeIndex + 1); }, 6000);
    }

    prevBtn.addEventListener('click', function () { goTo(activeIndex - 1); });
    nextBtn.addEventListener('click', function () { goTo(activeIndex + 1); });

    render();
    restartAutoplay();
  }

  /* ---------- Contact form (front-end only placeholder) ---------- */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'Thanks — your message has been noted. Connect this form to your backend or a form service to actually send it.';
      form.reset();
    });
  }
})();
