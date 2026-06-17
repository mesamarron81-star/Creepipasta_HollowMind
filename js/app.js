/* ============================================
   CREEPIPASTA HOLLOWMIND — APP MAIN
   Orquestador del archivo autoconsciente
   ============================================ */

const HMApp = {
  isLoading: false,
  userId: null,
  totalVisits: 0,

  async init() {
    this.initUserIdentity();
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
    this.startAudio();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) document.body.classList.add('reduced-motion');
  },

  /* === USER IDENTITY (el archivo lo recuerda) === */
  initUserIdentity() {
    this.userId = localStorage.getItem('hm-user-id');
    if (!this.userId) {
      this.userId = 'AGENT_' + Math.random().toString(36).substring(2, 8).toUpperCase();
      localStorage.setItem('hm-user-id', this.userId);
    }
    this.totalVisits = parseInt(localStorage.getItem('hm-total-visits') || '0') + 1;
    localStorage.setItem('hm-total-visits', this.totalVisits.toString());
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

  /* === WIKI AWARENESS (el archivo reacciona al usuario) === */
  initWikiAwareness() {
    this.welcomeBackMessage();
    this.startWatchingCursor();
    this.trackReadingTime();
  },

  welcomeBackMessage() {
    if (this.totalVisits <= 1) {
      setTimeout(() => {
        HMSystemMessages.show('Primera visita registrada. Bienvenido, ' + this.userId + '.');
      }, 5000);
    } else if (this.totalVisits > 5) {
      setTimeout(() => {
        HMSystemMessages.show('Ha vuelto ' + this.totalVisits + ' veces. El archivo lo está estudiando.');
      }, 6000);
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
            '¿Sigue ahí? El archivo nota su ausencia...',
            'El archivo está siendo editado mientras no mira.',
            'Algo se movió en el borde de su visión.',
            'Las secciones se están reordenando solas.',
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
