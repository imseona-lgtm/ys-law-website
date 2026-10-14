const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

siteNav.querySelectorAll('a:not(.nav-parent)').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

document.querySelectorAll('.nav-parent').forEach((parent) => {
  parent.addEventListener('click', (e) => {
    if (!window.matchMedia('(max-width: 860px)').matches) return;
    e.preventDefault();
    const item = parent.closest('.has-sub');
    const isOpen = item.classList.toggle('is-open');
    parent.setAttribute('aria-expanded', String(isOpen));
  });
});
