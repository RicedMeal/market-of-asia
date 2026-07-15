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

const storeTimeZone = 'Europe/Berlin';
const storeHours = {
  Monday: { label: '09:00–12:30 · 14:00–17:30', periods: [[540, 750], [840, 1050]] },
  Tuesday: { label: '09:00–12:30 · 14:00–17:30', periods: [[540, 750], [840, 1050]] },
  Wednesday: { label: '09:00–12:30 · 14:00–17:30', periods: [[540, 750], [840, 1050]] },
  Thursday: { label: '09:00–12:30 · 14:00–17:30', periods: [[540, 750], [840, 1050]] },
  Friday: { label: '09:00–12:30 · 14:00–17:30', periods: [[540, 750], [840, 1050]] },
  Saturday: { label: '09:00–13:00', periods: [[540, 780]] },
  Sunday: { label: 'Closed', periods: [] },
};

const storeTimeParts = new Intl.DateTimeFormat('en-US', {
  timeZone: storeTimeZone,
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
}).formatToParts(new Date());
const storeTime = Object.fromEntries(storeTimeParts.map(({ type, value }) => [type, value]));
const today = storeHours[storeTime.weekday];
const minutesNow = Number(storeTime.hour) * 60 + Number(storeTime.minute);
const isOpen = today.periods.some(([opens, closes]) => minutesNow >= opens && minutesNow < closes);
const statusText = isOpen ? 'Open now' : 'Closed now';

document.querySelector('#store-status').textContent = statusText;
document.querySelector('#today-hours').textContent = today.label;
document.querySelector('#hours-status').textContent = statusText;
