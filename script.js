const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Sticky on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});
