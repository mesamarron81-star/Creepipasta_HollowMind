/* ============================================
   CREEPIPASTA HOLLOWMIND — EFFECTS ENGINE
   Consciencia visual del manuscrito infectado
   ============================================ */

const HMEffects = {
  noiseCanvas: null,
  noiseCtx: null,
  vhsInterference: null,
  isGlitching: false,
  mutationIntervals: [],

  init() {
    this.createNoiseCanvas();
    this.createVHSInterference();
    this.createCorruptedImages();
    this.startGlitchCycle();
    this.startVHSCycle();
    this.startTextShiftCycle();
    this.startPaperFlutter();
    this.startTitleMutation();
    this.startGhostLinks();
  },

  /* === NOISE CANVAS === */
  createNoiseCanvas() {
    this.noiseCanvas = document.createElement('canvas');
    this.noiseCanvas.className = 'hm-noise-canvas';
    this.noiseCanvas.width = 200;
    this.noiseCanvas.height = 200;
    document.body.appendChild(this.noiseCanvas);
    this.noiseCtx = this.noiseCanvas.getContext('2d');
    this.animateNoise();
  },

  animateNoise() {
    if (!this.noiseCtx) return;
    const w = this.noiseCanvas.width;
    const h = this.noiseCanvas.height;
    const imageData = this.noiseCtx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const val = Math.random() * 180;
      data[i] = val * 0.7;
      data[i + 1] = val * 0.5;
      data[i + 2] = val * 0.3;
      data[i + 3] = 22;
    }
    this.noiseCtx.putImageData(imageData, 0, 0);
    requestAnimationFrame(() => setTimeout(() => this.animateNoise(), 90));
  },

  /* === VHS INTERFERENCE === */
  createVHSInterference() {
    this.vhsInterference = document.createElement('div');
    this.vhsInterference.className = 'vhs-interference';
    document.body.appendChild(this.vhsInterference);
  },

  /* === CORRUPTED IMAGE PLACEHOLDERS === */
  createCorruptedImages() {
    document.querySelectorAll('.story-card-image, .story-hero-image, .section-banner').forEach(el => {
      if (el.querySelector('.corrupted-img-placeholder')) return;
      const placeholder = document.createElement('div');
      placeholder.className = 'corrupted-img-placeholder';
      placeholder.style.cssText = `
        position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
        font-family:var(--font-manuscript); font-size:10px; color:var(--paper-ash);
        letter-spacing:2px; text-transform:uppercase; z-index:1;
        background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(26,14,8,0.15) 3px, rgba(26,14,8,0.15) 4px);
      `;
      const symbols = ['⚠ DATO PERDIDO', '█ IMAGEN CORROMPIDA', '░ ARCHIVO DAÑADO', '▓ SEÑAL NO ENCONTRADA', '╠ FICHERO INCOMPLETO'];
      placeholder.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.position = 'relative';
      el.appendChild(placeholder);
    });
  },

  /* === GLITCH CYCLE === */
  startGlitchCycle() {
    const schedule = () => {
      const delay = 5000 + Math.random() * 22000;
      setTimeout(() => { this.triggerGlitch(); schedule(); }, delay);
    };
    schedule();
  },

  triggerGlitch() {
    if (this.isGlitching) return;
    this.isGlitching = true;
    document.body.style.animation = 'micro-shake 0.08s steps(2) 1';
    if (this.vhsInterference) this.vhsInterference.classList.add('active');
    setTimeout(() => {
      document.body.style.animation = '';
      if (this.vhsInterference) this.vhsInterference.classList.remove('active');
      this.isGlitching = false;
    }, 80 + Math.random() * 180);
  },

  /* === VHS FLICKER === */
  startVHSCycle() {
    const schedule = () => {
      const delay = 8000 + Math.random() * 35000;
      setTimeout(() => { this.triggerVHSFlicker(); schedule(); }, delay);
    };
    schedule();
  },

  triggerVHSFlicker() {
    document.body.style.opacity = '0.96';
    setTimeout(() => { document.body.style.opacity = '1'; }, 35 + Math.random() * 70);
  },

  /* === TEXT SHIFT === */
  startTextShiftCycle() {
    const schedule = () => {
      const delay = 7000 + Math.random() * 18000;
      setTimeout(() => { this.triggerTextShift(); schedule(); }, delay);
    };
    schedule();
  },

  triggerTextShift() {
    const elements = document.querySelectorAll('.story-card-title, .dashboard-hub-card h4, .nav-link');
    if (elements.length === 0) return;
    const el = elements[Math.floor(Math.random() * elements.length)];
    el.style.animation = 'text-shift 0.3s steps(3) 1';
    el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
  },

  /* === PAPER FLUTTER === */
  startPaperFlutter() {
    const schedule = () => {
      const delay = 10000 + Math.random() * 28000;
      setTimeout(() => {
        const cards = document.querySelectorAll('.dashboard-hub-card, .story-card, .wiki-sidebar-widget');
        if (cards.length > 0) {
          const card = cards[Math.floor(Math.random() * cards.length)];
          card.style.animation = 'paper-flutter 2s ease-in-out 1';
          card.addEventListener('animationend', () => { card.style.animation = ''; }, { once: true });
        }
        schedule();
      }, delay);
    };
    schedule();
  },

  /* === TITLE MUTATION (wiki viviente) === */
  startTitleMutation() {
    const schedule = () => {
      const delay = 15000 + Math.random() * 45000;
      setTimeout(() => {
        this.mutateRandomTitle();
        schedule();
      }, delay);
    };
    schedule();
  },

  mutateRandomTitle() {
    const titles = document.querySelectorAll('.story-card-title');
    if (titles.length === 0) return;
    const el = titles[Math.floor(Math.random() * titles.length)];
    const original = el.textContent;
    const mutations = [
      original + ' [editado]',
      original.replace(/./g, (c, i) => i % 5 === 0 && c !== ' ' ? '█' : c),
      original.split('').reverse().join(''),
      original + ' ←',
      original.replace(/o/gi, '0').replace(/a/gi, '@'),
      '¿' + original + '?'
    ];
    el.textContent = mutations[Math.floor(Math.random() * mutations.length)];
    el.style.color = 'var(--blood-fresh)';
    el.style.fontStyle = 'italic';
    setTimeout(() => {
      el.textContent = original;
      el.style.color = '';
      el.style.fontStyle = '';
    }, 1500 + Math.random() * 2000);
  },

  /* === GHOST LINKS (enlaces fantasma) === */
  startGhostLinks() {
    const schedule = () => {
      const delay = 20000 + Math.random() * 60000;
      setTimeout(() => {
        this.createGhostLink();
        schedule();
      }, delay);
    };
    schedule();
  },

  createGhostLink() {
    const ghostTitles = [
      'El Niño que Susurraba', 'Archivo 000', 'La Señal Perdida',
      'No Mires Abajo', 'El Último Mensaje', 'Frecuencia Fantasma',
      'La Habitación Sellada', 'Protocolo Olvidado', 'Las Cenizas Hablan',
      'El Espejo Roto', 'Diario del Abismo', 'El Sueño de todos'
    ];
    const grid = document.querySelector('.cards-grid');
    if (!grid) return;
    const card = document.createElement('a');
    card.href = '#';
    card.className = 'story-card';
    card.style.textDecoration = 'none';
    card.style.opacity = '0';
    card.style.transition = 'opacity 3s ease';
    card.innerHTML = `
      <div class="story-card-image" style="background:var(--void-surface); position:relative;">
        <div class="corrupted-img-placeholder" style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-family:var(--font-manuscript); font-size:9px; color:var(--blood-fresh); letter-spacing:2px;">█ ARCHIVO INESTABLE</div>
      </div>
      <div class="story-card-body">
        <h3 class="story-card-title" style="color:var(--blood-fresh); font-style:italic;">${ghostTitles[Math.floor(Math.random() * ghostTitles.length)]}</h3>
        <p class="story-card-excerpt" style="color:var(--blood-fresh); opacity:0.6;">Este fragmento acaba de aparecer en el archivo. No intente acceder.</p>
        <div class="story-card-meta">
          <span class="story-card-terror">T-???/10</span>
          <span class="story-card-time">Instantánea</span>
        </div>
      </div>
    `;
    grid.insertBefore(card, grid.firstChild);
    requestAnimationFrame(() => { card.style.opacity = '1'; });
    setTimeout(() => {
      card.style.opacity = '0';
      setTimeout(() => card.remove(), 3000);
    }, 8000 + Math.random() * 7000);
  },

  /* === UTILITY === */
  applyGlitchToElement(el, duration = 400) {
    el.style.animation = `ink-corrupt ${duration}ms steps(3, jump-none)`;
    el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
  },

  applyCorruptToText(el) {
    const original = el.textContent;
    const corruptChars = '█▓▒░╬╫╪┼╫╪╬╠╣╦╩─│┌┐└┘├┤┬┴';
    let corrupted = '';
    for (let i = 0; i < original.length; i++) {
      corrupted += Math.random() < 0.08 ? corruptChars[Math.floor(Math.random() * corruptChars.length)] : original[i];
    }
    el.textContent = corrupted;
    setTimeout(() => { el.textContent = original; }, 150);
  },

  destroy() {
    if (this.noiseCanvas) this.noiseCanvas.remove();
    if (this.vhsInterference) this.vhsInterference.remove();
    this.mutationIntervals.forEach(id => clearInterval(id));
  }
};
