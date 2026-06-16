/* ============================================
   CREEPIPASTA HOLLOWMIND — SEARCH
   Búsqueda en el manuscrito
   ============================================ */

const HMSearch = {
  inputEl: null,
  resultsEl: null,
  debounceTimer: null,

  init() {
    this.inputEl = document.getElementById('search-input');
    this.resultsEl = document.getElementById('search-results');
    if (!this.inputEl || !this.resultsEl) return;

    this.inputEl.addEventListener('input', () => this.onInput());
    this.inputEl.addEventListener('focus', () => this.onInput());
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.terminal-search-wrapper')) {
        this.hideResults();
      }
    });
  },

  onInput() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      const query = this.inputEl.value.trim();
      if (query.length < 2) {
        this.hideResults();
        return;
      }
      const results = searchStories(query);
      this.renderResults(results, query);
    }, 250);
  },

  renderResults(results, query) {
    if (results.length === 0) {
      this.resultsEl.innerHTML = `
        <div class="search-result-item" style="justify-content:center;">
          <span class="font-manuscript" style="color:var(--paper-ash); font-size:var(--text-xs); letter-spacing:1px;">
            > NINGÚN REGISTRO PARA "${query.toUpperCase()}"
          </span>
        </div>
      `;
      this.showResults();
      return;
    }

    this.resultsEl.innerHTML = results.map(story => `
      <a href="story.html?id=${story.id}" class="search-result-item" style="text-decoration:none;">
        <div class="search-result-info">
          <div class="search-result-title">${this.highlightMatch(story.title, query)}</div>
          <div class="search-result-meta">${story.author} · ${story.readTime} · ${story.categories.join(', ')}</div>
        </div>
        <div class="search-result-terror">T-${story.terror}/10</div>
      </a>
    `).join('');

    this.showResults();
  },

  highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="color:var(--blood-fresh);">$1</span>');
  },

  showResults() {
    this.resultsEl.style.display = 'block';
  },

  hideResults() {
    this.resultsEl.style.display = 'none';
  }
};
