/* ============================================
   CREEPIPASTA HOLLOWMIND — NAVIGATION
   Barrera ritual de acceso
   ============================================ */

const HMNavigation = {
  init() {
    this.initMobileToggle();
    this.initMegaMenu();
  },

  initMobileToggle() {
    const toggle = document.getElementById('nav-mobile-toggle');
    const menu = document.getElementById('nav-mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hm-navbar') && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  },

  initMegaMenu() {
    if (window.innerWidth >= 768) return;

    const trigger = document.getElementById('categories-menu-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')) return;
      e.preventDefault();
      const panel = trigger.querySelector('.mega-menu-panel');
      if (panel) {
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
};
