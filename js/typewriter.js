/* ============================================
   CREEPIPASTA HOLLOWMIND — TYPEWRITER
   Efecto de tinta escribiéndose
   ============================================ */

const HMTypewriter = {
  type(element, text, options = {}) {
    const speed = options.speed || 35;
    const delay = options.delay || 0;
    const callback = options.callback || null;
    const corrupt = options.corrupt || false;

    return new Promise(resolve => {
      setTimeout(() => {
        let i = 0;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--blood-fresh)';
        element.style.animation = 'cursor-blink 0.9s step-end infinite';

        const interval = setInterval(() => {
          if (i < text.length) {
            let char = text[i];
            if (corrupt && Math.random() < 0.04) {
              const corruptChars = '█▓▒░╬╫╪┼╫╪╬';
              char = corruptChars[Math.floor(Math.random() * corruptChars.length)];
            }
            element.textContent += char;
            i++;

            if ('.!?,;:—'.includes(text[i - 1])) {
              setTimeout(() => {}, 250);
            }
          } else {
            clearInterval(interval);
            setTimeout(() => {
              element.style.borderRight = 'none';
              element.style.animation = '';
              if (callback) callback();
              resolve();
            }, 600);
          }
        }, speed);
      }, delay);
    });
  },

  typeLineByLine(container, lines, options = {}) {
    const speed = options.speed || 22;
    const lineDelay = options.lineDelay || 350;
    const className = options.className || 'boot-line';

    return new Promise(resolve => {
      let lineIndex = 0;

      const typeNextLine = () => {
        if (lineIndex >= lines.length) {
          resolve();
          return;
        }

        const line = lines[lineIndex];
        const el = document.createElement('div');
        el.className = className + ' ' + (line.class || '');
        container.appendChild(el);

        this.type(el, line.text, {
          speed: speed,
          corrupt: line.corrupt || false
        }).then(() => {
          lineIndex++;
          setTimeout(typeNextLine, lineDelay);
        });
      };

      typeNextLine();
    });
  },

  typeInElement(element, text, speed = 35) {
    return this.type(element, text, { speed });
  }
};
