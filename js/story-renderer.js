/* ============================================
   CREEPIPASTA HOLLOWMIND — STORY RENDERER
   Renderizado de manuscritos
   ============================================ */

const HMStoryRenderer = {

  renderStoryCard(story) {
    const terrorColor = getTerrorColor(story.terror);
    return `
      <a href="story.html?id=${story.id}" class="story-card" style="text-decoration:none;">
        <div class="story-card-image" style="background: linear-gradient(135deg, var(--void-surface) 0%, var(--void) 100%);"></div>
        <div class="story-card-body">
          <h3 class="story-card-title">${story.title}</h3>
          <p class="story-card-excerpt">${story.excerpt}</p>
          <div class="story-card-meta">
            <span class="story-card-terror" style="color:${terrorColor};">T-${story.terror}/10</span>
            <span class="story-card-time">${story.readTime}</span>
          </div>
        </div>
      </a>
    `;
  },

  renderStoryPage(story) {
    const terrorColor = getTerrorColor(story.terror);
    const terrorLabel = getTerrorLabel(story.terror);

    let contentHtml = story.content.map((paragraph, i) => {
      if (paragraph.startsWith('[') || paragraph.includes('CLASIFICACIÓN') || paragraph.includes('ARCHIVO') || paragraph.includes('REGISTRO')) {
        return `<div class="corrupt-fragment"><span class="corrupt-text">${paragraph}</span></div>`;
      }
      if (paragraph.includes('\n')) {
        const lines = paragraph.split('\n').map(l => l.trim()).filter(l => l);
        return lines.map(l => {
          if (l.startsWith('[') || l.includes('CLASIFICACIÓN')) {
            return `<div class="corrupt-fragment"><span class="corrupt-text">${l}</span></div>`;
          }
          return `<p>${l}</p>`;
        }).join('');
      }
      return `<p>${paragraph}</p>`;
    }).join('');

    const categoriesHtml = story.categories.map(c =>
      `<a href="section.html?tag=${c}" class="tag">${c}</a>`
    ).join('');

    const tagsHtml = story.tags.map(t =>
      `<a href="section.html?tag=${t}" class="tag tag-blood">${t}</a>`
    ).join('');

    const relatedStories = HM_STORIES
      .filter(s => s.id !== story.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const relatedHtml = relatedStories.map(s => this.renderStoryCard(s)).join('');
    const commentsHtml = this.generateFakeComments(story);

    return `
      <div class="story-page-layout container">
        <nav class="breadcrumbs">
          <a href="index.html">HollowMind</a>
          <span class="separator">/</span>
          <a href="section.html?id=archivo">Archivo</a>
          <span class="separator">/</span>
          <span class="current">${story.title}</span>
        </nav>

        <div class="story-header">
          <h1 class="story-title glitch" data-text="${story.title}">${story.title}</h1>
          <div class="story-categories">${categoriesHtml} ${tagsHtml}</div>

          <div class="story-terror-display">
            <div class="terror-number" style="color:${terrorColor};">${story.terror}</div>
            <div class="terror-description">
              <div class="level">Nivel de Peligro</div>
              <div class="classification" style="color:${terrorColor};">${terrorLabel}</div>
            </div>
            <div class="terror-meter" style="flex:1; max-width:180px;">
              <div class="terror-bar">
                <div class="terror-bar-fill" style="width:${story.terror * 10}%; background: linear-gradient(90deg, var(--rune-dim), ${terrorColor});"></div>
              </div>
            </div>
          </div>

          <div class="story-meta-bar">
            <div class="story-meta-item">
              <span class="label">Autor:</span>
              <span class="value author">${story.author}</span>
            </div>
            <div class="story-meta-item">
              <span class="label">Fecha:</span>
              <span class="value">${story.date}</span>
            </div>
            <div class="story-meta-item">
              <span class="label">Lectura:</span>
              <span class="value">${story.readTime}</span>
            </div>
          </div>
        </div>

        <div class="story-hero-image" style="background: linear-gradient(135deg, var(--void-surface) 0%, var(--void) 100%);"></div>

        <div class="story-content" id="story-content">
          ${contentHtml}
        </div>

        <div class="story-actions">
          <button class="story-action-btn" onclick="this.classList.toggle('active')">
            ★ Marcar
          </button>
          <button class="story-action-btn" onclick="navigator.share ? navigator.share({title:'${story.title}', url:window.location.href}) : alert('Link copiado')">
            ↗ Compartir
          </button>
          <button class="story-action-btn">
            ↻ Posición: #${Math.floor(Math.random() * 20) + 1}
          </button>
        </div>

        <div class="related-stories">
          <h3>Fragmentos Relacionados</h3>
          <div class="related-grid">${relatedHtml}</div>
        </div>

        <div class="comments-section">
          <h3>Testimonios de la Red (${commentsHtml.count})</h3>
          <div class="comment-form">
            <textarea class="comment-textarea font-manuscript" placeholder="> Escriba su testimonio aquí..."></textarea>
            <button class="hm-btn btn-blood comment-submit font-manuscript">> SELLAR TESTIMONIO</button>
          </div>
          <div id="comments-list">${commentsHtml.html}</div>
        </div>
      </div>
    `;
  },

  generateFakeComments(story) {
    const users = ['Investigador_99', 'Anonimo_83', 'Sysop_Hollow', 'Operador_Radio', 'Testigo_F', 'Cipher_0', 'Vecto_Sombra', 'Archivo_666'];
    const texts = [
      'Este fragmento es perturbador. He verificado los datos y todo coincide con los reportes oficiales del manuscrito.',
      'Alguien más notó las anomalías en el texto? Hay patrones que se repiten en cada lectura.',
      'No deberíamos tener acceso a esto. Algunas páginas deberían permanecer selladas.',
      'Confirmo la verificación del contenido. Fui testigo directo de uno de los incidentes documentados.',
      'La clasificación de peligro parece baja. Esto debería ser Nivel 9 mínimo.',
      'He estado investigando esto durante meses. Las conexiones con otros fragmentos son inquietantes.',
      'El manuscrito cambia entre cada lectura. Las palabras no permanecen en el mismo lugar.',
      'Si están leyendo esto, ya es tarde. El archivo ya registra su presencia.'
    ];

    const count = 3 + Math.floor(Math.random() * 5);
    let html = '';

    for (let i = 0; i < count; i++) {
      const user = users[Math.floor(Math.random() * users.length)];
      const text = texts[Math.floor(Math.random() * texts.length)];
      const hours = Math.floor(Math.random() * 72);
      const timeStr = hours === 0 ? 'Hace minutos' : `Hace ${hours}h`;

      html += `
        <div class="comment-item">
          <div class="comment-header">
            <span class="comment-author">${user}</span>
            <span class="comment-date">${timeStr}</span>
          </div>
          <div class="comment-body">${text}</div>
        </div>
      `;
    }

    return { html, count };
  },

  renderSectionPage(sectionId, stories) {
    const section = HM_SECTIONS[sectionId] || HM_SECTIONS.archivo;
    const storiesHtml = stories.map(s => this.renderStoryCard(s)).join('');

    return `
      <div class="section-page-layout container">
        <nav class="breadcrumbs">
          <a href="index.html">HollowMind</a>
          <span class="separator">/</span>
          <span class="current">${section.name}</span>
        </nav>

        <div class="section-banner" style="background: linear-gradient(135deg, var(--void-surface) 0%, var(--void) 100%);">
          <div class="section-banner-content">
            <h1 class="font-manuscript glitch" data-text="${section.name}" style="font-size:var(--text-2xl); color:${section.color}; margin-bottom:var(--space-sm); letter-spacing:3px;">${section.name}</h1>
            <p class="font-handwritten" style="color:var(--paper-burnt); max-width:550px; line-height:1.6;">${section.description}</p>
          </div>
        </div>

        <div class="filter-bar">
          <button class="filter-btn active" data-sort="recent">Recientes</button>
          <button class="filter-btn" data-sort="popular">Populares</button>
          <button class="filter-btn" data-sort="terror">Peligro ↓</button>
          <button class="filter-btn" data-sort="short">Cortos</button>
        </div>

        <div class="cards-grid" id="section-stories-grid">
          ${storiesHtml || '<p class="font-manuscript" style="color:var(--paper-ash); text-align:center; padding:var(--space-2xl); letter-spacing:1px;">> NO SE ENCONTRARON FRAGMENTOS EN ESTE SELLO</p>'}
        </div>

        ${stories.length > 0 ? `
        <div class="pagination">
          <button class="pagination-btn">← Anterior</button>
          <button class="pagination-btn active">I</button>
          <button class="pagination-btn">II</button>
          <button class="pagination-btn">III</button>
          <button class="pagination-btn">Siguiente →</button>
        </div>
        ` : ''}
      </div>
    `;
  }
};
