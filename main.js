/* ===== MØRKEFJORD KOMMUNE — MAIN JS ===== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Language Toggle ---
  const savedLang = localStorage.getItem('mf-lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  function setLanguage(lang) {
    document.documentElement.className = `lang-${lang}`;
    localStorage.setItem('mf-lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  // --- Navbar scroll effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // --- Mobile hamburger ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // --- Fade-in on scroll ---
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    faders.forEach(el => observer.observe(el));
  } else {
    faders.forEach(el => el.classList.add('visible'));
  }

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
