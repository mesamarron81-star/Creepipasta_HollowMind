/* ============================================
   CREEPIPASTA HOLLOWMIND — RETRO EFFECTS
   Windows 95 / Web 1.0 / Analog Horror
   ============================================ */

const HMRetro = {
  isInitialized: false,
  flickerInterval: null,
  glitchInterval: null,
  systemLogInterval: null,

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.startFlicker();
    this.startMicroGlitches();
    this.startSystemLog();
    this.startCorruptedText();
    this.startHoverDelay();
    this.startSignalLost();
    this.startCursorTrail();
  },

  /* === FLICKER IRREGULAR (parpadeo inestable) === */
  startFlicker() {
    const schedule = () => {
      const delay = 3000 + Math.random() * 12000;
      setTimeout(() => {
        this.triggerFlicker();
        schedule();
      }, delay);
    };
    schedule();
  },

  triggerFlicker() {
    const targets = document.querySelectorAll('.hm-header, .hm-logo, .system-log');
    if (targets.length === 0) return;
    const el = targets[Math.floor(Math.random() * targets.length)];
    el.style.opacity = '0.7';
    el.style.filter = 'brightness(1.2)';
    setTimeout(() => {
      el.style.opacity = '';
      el.style.filter = '';
    }, 50 + Math.random() * 150);
  },

  /* === MICRO GLITCHES (glitches sutiles al mover cursor) === */
  startMicroGlitches() {
    let lastGlitch = 0;
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastGlitch < 2000) return;
      if (Math.random() > 0.02) return;
      lastGlitch = now;
      this.triggerMicroGlitch(e.clientX, e.clientY);
    });
  },

  triggerMicroGlitch(x, y) {
    const glitch = document.createElement('div');
    glitch.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${20 + Math.random() * 60}px;
      height: ${2 + Math.random() * 4}px;
      background: linear-gradient(90deg,
        transparent,
        rgba(0,255,0,0.1),
        rgba(255,0,0,0.05),
        transparent
      );
      pointer-events: none;
      z-index: 99999;
      mix-blend-mode: screen;
    `;
    document.body.appendChild(glitch);
    setTimeout(() => glitch.remove(), 100 + Math.random() * 200);
  },

  /* === SYSTEM LOG (consola de sistema) === */
  startSystemLog() {
    const logContainer = document.querySelector('.system-log');
    if (!logContainer) return;

    const messages = [
      { level: 'info', msg: 'SEÑAL DE ENTRADA DETECTADA' },
      { level: 'info', msg: 'CARGANDO FRAGMENTOS...' },
      { level: 'warn', msg: 'INTEGRIDAD: 67% — DATOS CORROMPIDOS' },
      { level: 'info', msg: 'USUARIO IDENTIFICADO' },
      { level: 'error', msg: 'ERROR: PÁGINA NO ENCONTRADA' },
      { level: 'warn', msg: 'ADVERTENCIA: ARCHIVO INESTABLE' },
      { level: 'info', msg: 'SINCRONIZANDO MEMORIA...' },
      { level: 'error', msg: 'FALLA EN SECCIÓN 0x7A' },
      { level: 'info', msg: 'SEÑAL RESTAURADA' },
      { level: 'warn', msg: 'EL ARCHIVO ESTÁ SIENDO EDITADO' },
      { level: 'info', msg: 'NODO CONECTADO' },
      { level: 'error', msg: 'PERMISO DENEGADO' },
      { level: 'info', msg: 'ESCRIBIENDO LOG...' },
      { level: 'warn', msg: 'FRECUENCIA ANÓMALA DETECTADA' },
      { level: 'info', msg: 'BUFFER CARGADO' },
      { level: 'error', msg: 'SIGNAL LOST' },
      { level: 'info', msg: 'RECONECTANDO...' },
      { level: 'warn', msg: 'EL ARCHIVO LE ESTÁ MIRANDO' },
    ];

    const addEntry = () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      const time = new Date().toLocaleTimeString('es-ES', { hour12: false });
      const entry = document.createElement('div');
      entry.className = 'system-log-entry';
      entry.innerHTML = `<span class="timestamp">[${time}]</span> <span class="level-${msg.level}">${msg.msg}</span>`;
      logContainer.appendChild(entry);
      logContainer.scrollTop = logContainer.scrollHeight;

      const entries = logContainer.querySelectorAll('.system-log-entry');
      if (entries.length > 50) entries[0].remove();
    };

    addEntry();
    addEntry();
    addEntry();

    this.systemLogInterval = setInterval(() => {
      if (Math.random() > 0.3) addEntry();
    }, 3000 + Math.random() * 5000);
  },

  /* === CORRUPTED TEXT (texto que se corrompe) === */
  startCorruptedText() {
    const schedule = () => {
      const delay = 8000 + Math.random() * 25000;
      setTimeout(() => {
        this.corruptRandomText();
        schedule();
      }, delay);
    };
    schedule();
  },

  corruptRandomText() {
    const elements = document.querySelectorAll('.story-card-title, .genre-card-name, .category-group h3');
    if (elements.length === 0) return;
    const el = elements[Math.floor(Math.random() * elements.length)];
    const original = el.textContent;
    const corruptChars = '█▓▒░╬╫╪┼╫╪╬╠╣╦╩─│┌┐└┘├┤┬┴';
    let corrupted = '';
    for (let i = 0; i < original.length; i++) {
      corrupted += Math.random() < 0.15
        ? corruptChars[Math.floor(Math.random() * corruptChars.length)]
        : original[i];
    }
    el.textContent = corrupted;
    el.style.color = 'var(--sick-green-text)';
    setTimeout(() => {
      el.textContent = original;
      el.style.color = '';
    }, 200 + Math.random() * 400);
  },

  /* === HOVER DELAY (sistema lento) === */
  startHoverDelay() {
    const cards = document.querySelectorAll('.story-card, .dashboard-hub-card, .genre-card, .category-item');
    cards.forEach(card => {
      card.style.transition = 'all 0.4s ease 0.2s';
      card.addEventListener('mouseenter', () => {
        card.style.transitionDelay = '0s';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transitionDelay = '0.2s';
      });
    });
  },

  /* === SIGNAL LOST (señal perdida) === */
  startSignalLost() {
    const schedule = () => {
      const delay = 60000 + Math.random() * 180000;
      setTimeout(() => {
        this.triggerSignalLost();
        schedule();
      }, delay);
    };
    schedule();
  },

  triggerSignalLost() {
    const overlay = document.createElement('div');
    overlay.className = 'signal-lost-overlay';
    overlay.innerHTML = `
      <div class="signal-lost-text">SIGNAL LOST</div>
      <div style="font-size: 11px; margin-top: 12px; letter-spacing: 2px; opacity: 0.6;">FRAME CORRUPTED</div>
      <div style="font-size: 10px; margin-top: 8px; letter-spacing: 1px; opacity: 0.4;">USER NOT FOUND</div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('active'));

    setTimeout(() => {
      overlay.classList.remove('active');
      setTimeout(() => overlay.remove(), 300);
    }, 800 + Math.random() * 1200);
  },

  /* === CURSOR TRAIL (estela de cursor pixelado) === */
  startCursorTrail() {
    let lastX = 0, lastY = 0;
    document.addEventListener('mousemove', (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) < 20) return;
      lastX = e.clientX;
      lastY = e.clientY;

      if (Math.random() > 0.3) return;

      const trail = document.createElement('div');
      trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        background: var(--sick-green-text);
        pointer-events: none;
        z-index: 99998;
        opacity: 0.4;
        transition: opacity 0.5s;
      `;
      document.body.appendChild(trail);
      setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => trail.remove(), 500);
      }, 50);
    });
  },

  /* === UTILITY === */
  destroy() {
    if (this.flickerInterval) clearInterval(this.flickerInterval);
    if (this.glitchInterval) clearInterval(this.glitchInterval);
    if (this.systemLogInterval) clearInterval(this.systemLogInterval);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  HMRetro.init();
});
