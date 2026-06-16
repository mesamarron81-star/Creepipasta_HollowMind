/* ============================================
   CREEPIPASTA HOLLOWMIND — APP MAIN
   Orquestador del manuscrito autoconsciente
   ============================================ */

const HMApp = {
  isLoading: true,
  userId: null,
  totalVisits: 0,

  async init() {
    this.initUserIdentity();
    this.handleLoadingScreen();
    HMNavigation.init();
    HMSearch.init();
    HMCursor.init();
    HMImmersive.init();
    HMSystemMessages.init();
    HMEffects.init();

    this.renderCurrentPage();
    this.initAudioControl();
    this.initRecentStories();
    this.initPopularTags();
    this.initWikiAwareness();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) document.body.classList.add('reduced-motion');
  },

  /* === USER IDENTITY (el wiki lo recuerda) === */
  initUserIdentity() {
    this.userId = localStorage.getItem('hm-user-id');
    if (!this.userId) {
      this.userId = 'AGENT_' + Math.random().toString(36).substring(2, 8).toUpperCase();
      localStorage.setItem('hm-user-id', this.userId);
    }
    this.totalVisits = parseInt(localStorage.getItem('hm-total-visits') || '0') + 1;
    localStorage.setItem('hm-total-visits', this.totalVisits.toString());
  },

  /* === LOADING SCREEN === */
  handleLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const bootTerminal = document.getElementById('boot-terminal');
    const enterPrompt = document.querySelector('.boot-enter-prompt');
    if (!loadingScreen || !bootTerminal) return;

    const isFirstVisit = this.totalVisits <= 1;
    const visitMsg = isFirstVisit
      ? '> Primera visita detectada. Bienvenido al manuscrito.'
      : `> Visitas previas: ${this.totalVisits}. El manuscrito le recuerda.`;

    const bootLines = [
      { text: '> SYSTEM_ARCHIVE_01 v1.99.4', class: 'line-system' },
      { text: '> Iniciando terminal...', class: 'line-ok' },
      { text: '> Identificando usuario: ' + this.userId, class: 'line-system' },
      { text: visitMsg, class: isFirstVisit ? 'line-ok' : 'line-warn' },
      { text: '> Verificando integridad del archivo...', class: 'line-ok' },
      { text: '> Sincronizando fragmentos...', class: 'line-ok' },
      { text: '> ADVERTENCIA: ARCHIVO COMPROMETIDO', class: 'line-warn' },
      { text: '> Cargando 12 documentos sellados...', class: 'line-ok' },
      { text: '> SIGNAL LOST... RECONECTANDO...', class: 'line-error' },
      { text: '> SEÑAL RESTAURADA', class: 'line-ok' },
      { text: '> El archivo le ha dado la bienvenida.', class: 'line-highlight' }
    ];

    HMTypewriter.typeLineByLine(bootTerminal, bootLines, {
      speed: 16,
      lineDelay: 280
    }).then(() => {
      setTimeout(() => {
        if (enterPrompt) {
          enterPrompt.classList.add('visible');
          enterPrompt.addEventListener('click', () => {
            loadingScreen.classList.add('hidden');
            this.isLoading = false;
            this.startAudio();
          });
        } else {
          loadingScreen.classList.add('hidden');
          this.isLoading = false;
          this.startAudio();
        }
      }, 500);
    });
  },

  startAudio() {
    HollowSound.init();
    HollowSound.start();
  },

  /* === AUDIO CONTROL === */
  initAudioControl() {
    const audioToggle = document.getElementById('audio-toggle-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const audioIcon = document.querySelector('.audio-icon');
    if (audioToggle) {
      audioToggle.addEventListener('click', () => {
        const muted = HollowSound.toggleMute();
        if (audioIcon) audioIcon.textContent = muted ? '🔇' : '🔊';
      });
    }
    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        HollowSound.setVolume(parseFloat(e.target.value));
      });
    }
  },

  renderCurrentPage() {},

  /* === RECENT STORIES === */
  initRecentStories() {
    const grid = document.getElementById('recent-stories-grid');
    if (!grid) return;
    const recent = [...HM_STORIES].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
    grid.innerHTML = recent.map(s => HMStoryRenderer.renderStoryCard(s)).join('');
  },

  /* === POPULAR TAGS === */
  initPopularTags() {
    const container = document.getElementById('popular-tags-container');
    if (!container) return;
    const allTags = {};
    HM_STORIES.forEach(story => {
      story.tags.forEach(tag => { allTags[tag] = (allTags[tag] || 0) + 1; });
    });
    const sorted = Object.entries(allTags).sort((a, b) => b[1] - a[1]).slice(0, 12);
    container.innerHTML = sorted.map(([tag, count]) =>
      `<a href="section.html?tag=${tag}" class="tag">${tag} <span style="color:var(--paper-ash);">(${count})</span></a>`
    ).join('');
  },

  /* === WIKI AWARENESS (el wiki reacciona al usuario) === */
  initWikiAwareness() {
    this.welcomeBackMessage();
    this.startWatchingCursor();
    this.trackReadingTime();
  },

  welcomeBackMessage() {
    if (this.totalVisits <= 1) {
      setTimeout(() => {
        HMSystemMessages.show('Primera visita registrada. Bienvenido, ' + this.userId + '.');
      }, 8000);
    } else if (this.totalVisits > 5) {
      setTimeout(() => {
        HMSystemMessages.show('Ha vuelto ' + this.totalVisits + ' veces. El manuscrito lo está estudiando.');
      }, 10000);
    }
  },

  startWatchingCursor() {
    let idleTime = 0;
    let idleInterval = null;

    const resetIdle = () => {
      idleTime = 0;
      if (idleInterval) clearInterval(idleInterval);
      idleInterval = setInterval(() => {
        idleTime += 1;
        if (idleTime > 45 && idleTime % 15 === 0) {
          const msgs = [
            '¿Sigue ahí? El manuscrito nota su ausencia...',
            'El archivo está being editado mientras no mira.',
            'Algo se movió en el borde de su visión.',
            'Las páginas se están reordenando solas.',
            'El sistema detecta inactividad sospechosa.'
          ];
          HMSystemMessages.show(msgs[Math.floor(Math.random() * msgs.length)]);
        }
      }, 1000);
    };

    document.addEventListener('mousemove', resetIdle);
    document.addEventListener('keydown', resetIdle);
    document.addEventListener('scroll', resetIdle);
    resetIdle();
  },

  trackReadingTime() {
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const readLog = JSON.parse(localStorage.getItem('hm-read-log') || '[]');
      readLog.push({ time: new Date().toISOString(), seconds: elapsed, page: window.location.pathname });
      if (readLog.length > 50) readLog.shift();
      localStorage.setItem('hm-read-log', JSON.stringify(readLog));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  HMApp.init();
});
