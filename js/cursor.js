/* ============================================
   CREEPIPASTA HOLLOWMIND — CURSOR
   Linterna de papel que sigue al usuario
   ============================================ */

const HMCursor = {
  lanternEl: null,
  isActive: false,

  init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    this.createLantern();
    this.bindEvents();
    this.isActive = true;
  },

  createLantern() {
    this.lanternEl = document.createElement('div');
    this.lanternEl.className = 'hm-cursor-lantern';
    document.body.appendChild(this.lanternEl);
  },

  bindEvents() {
    let ticking = false;

    document.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (this.lanternEl) {
            this.lanternEl.style.left = e.clientX + 'px';
            this.lanternEl.style.top = e.clientY + 'px';
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      if (this.lanternEl) this.lanternEl.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (this.lanternEl) this.lanternEl.style.opacity = '1';
    });
  },

  destroy() {
    if (this.lanternEl) {
      this.lanternEl.remove();
      this.lanternEl = null;
    }
    this.isActive = false;
  }
};
