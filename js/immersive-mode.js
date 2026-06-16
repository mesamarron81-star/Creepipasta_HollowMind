/* ============================================
   CREEPIPASTA HOLLOWMIND — IMMERSIVE MODE
   Modo de profundidad del manuscrito
   ============================================ */

const HMImmersive = {
  isActive: false,
  toggleBtn: null,
  depthValEl: null,

  init() {
    this.toggleBtn = document.getElementById('immersive-toggle-btn');
    this.depthValEl = document.getElementById('sidebar-depth-val');

    const saved = localStorage.getItem('hm-immersive');
    if (saved === 'true') {
      this.activate(false);
    }

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }
  },

  toggle() {
    if (this.isActive) {
      this.deactivate();
    } else {
      this.activate(true);
    }
  },

  activate(save = true) {
    this.isActive = true;
    document.body.classList.add('immersive-mode');

    if (this.toggleBtn) {
      this.toggleBtn.classList.add('active');
      this.toggleBtn.querySelector('.btn-text').textContent = 'PROFUNDIDAD: ON';
    }

    if (this.depthValEl) {
      this.depthValEl.textContent = 'PROFUNDO';
      this.depthValEl.style.color = 'var(--blood-bright)';
    }

    if (save) localStorage.setItem('hm-immersive', 'true');
  },

  deactivate() {
    this.isActive = false;
    document.body.classList.remove('immersive-mode');

    if (this.toggleBtn) {
      this.toggleBtn.classList.remove('active');
      this.toggleBtn.querySelector('.btn-text').textContent = 'PROFUNDIDAD: OFF';
    }

    if (this.depthValEl) {
      this.depthValEl.textContent = 'NORMAL';
      this.depthValEl.style.color = 'var(--blood-fresh)';
    }

    localStorage.setItem('hm-immersive', 'false');
  }
};
