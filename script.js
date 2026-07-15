const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('is-open');
  nav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('is-open');
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
