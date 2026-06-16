/* ============================================
   CREEPIPASTA HOLLOWMIND — SYSTEM MESSAGES
   Voces del archivo corrupto
   ============================================ */

const HMSystemMessages = {
  messages: [
    'El archivo ha registrado su presencia...',
    'ARCHIVO CORROMPIDO detectado en el umbral...',
    'Acceso registrado. Nodo marcado.',
    'Sincronizando fragmentos de memoria perdida...',
    'ADVERTENCIA: EL ARCHIVO ESTÁ SIENDO EDITADO',
    'Señal interceptada desde una frecuencia olvidada.',
    'Actualizando índice de entidades catalogadas.',
    'Algunas páginas no deberían ser leídas.',
    'Escaneando firmas de anomalías activas.',
    'Los datos se mueven solos en la sección 47.',
    'Conexión establecida con el núcleo del archivo.',
    'Detectada actividad anómala en el margen inferior.',
    'Cargando expedientes del ala prohibida.',
    'Sincronización completada. 12 registros sellados.',
    'El buffer ha cambiado de textura desde la última visita.',
    'Alguien más está leyendo este mismo archivo.',
    'Los nodos del borde están pulsando.',
    'La interferencia en la sección 12 aún está activa.',
    'El archivo recuerda su última visita.',
    'No cierre el archivo. No debería haberlo abierto.',
    'SIGNAL LOST... RECONECTANDO...',
    'FRAME CORRUPTED...',
    'USER NOT FOUND...',
    'ERROR 0x7A: SECCIÓN NO ENCONTRADA',
    'Buffer overflow detectado en el nodo 3.',
  ],

  toastEl: null,
  timeout: null,

  init() {
    this.createToastElement();
    this.startRandomMessages();
  },

  createToastElement() {
    this.toastEl = document.createElement('div');
    this.toastEl.className = 'hm-toast';
    this.toastEl.style.fontFamily = 'var(--font-pixel)';
    this.toastEl.setAttribute('role', 'status');
    this.toastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(this.toastEl);
  },

  show(message) {
    if (!this.toastEl) return;
    this.toastEl.textContent = '> ' + message;
    this.toastEl.classList.add('visible');

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.toastEl.classList.remove('visible');
    }, 5000);
  },

  startRandomMessages() {
    const schedule = () => {
      const delay = 20000 + Math.random() * 60000;
      setTimeout(() => {
        const msg = this.messages[Math.floor(Math.random() * this.messages.length)];
        this.show(msg);
        schedule();
      }, delay);
    };
    schedule();
  }
};
