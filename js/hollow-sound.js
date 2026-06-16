/* ============================================
   CREEPIPASTA HOLLOWMIND — HOLLOW SOUND ENGINE
   Audio orgánico y atmosférico
   ============================================ */

const HollowSound = {
  ctx: null,
  masterGain: null,
  isPlaying: false,
  isMuted: false,
  volume: 0.25,
  layers: [],

  init() {
    this.masterGain = null;
    this.isPlaying = false;
  },

  async start() {
    if (this.isPlaying) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.volume;
      this.masterGain.connect(this.ctx.destination);

      this.createDeepDrone();
      this.createOrganicWind();
      this.createWhispers();
      this.createDrips();
      this.createCreaks();
      this.createHeartbeat();

      this.isPlaying = true;
    } catch (e) {
      console.warn('HollowSound: Web Audio API no disponible', e);
    }
  },

  stop() {
    if (!this.isPlaying) return;
    this.layers.forEach(layer => {
      try { layer.stop(); } catch(e) {}
    });
    this.layers = [];
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
    this.isPlaying = false;
  },

  setVolume(val) {
    this.volume = val;
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(val, this.ctx.currentTime, 0.15);
    }
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : this.volume,
        this.ctx.currentTime,
        0.15
      );
    }
    return this.isMuted;
  },

  createDeepDrone() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.value = 40;
    filter.type = 'lowpass';
    filter.frequency.value = 80;
    gain.gain.value = 0.12;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 8;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();

    osc.start();
    this.layers.push(osc, lfo);
  },

  createOrganicWind() {
    if (!this.ctx) return;
    const bufferSize = 2 * this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.5;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 200;
    filter.Q.value = 0.3;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.04;

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.03;
    lfoGain.gain.value = 80;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start();

    this.layers.push(noise, lfo);
  },

  createWhispers() {
    if (!this.ctx) return;
    const scheduleWhisper = () => {
      if (!this.isPlaying || !this.ctx) return;

      const bufferSize = this.ctx.sampleRate * 0.8;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        const envelope = Math.sin(Math.PI * i / bufferSize);
        output[i] = (Math.random() * 2 - 1) * envelope * 0.3;
      }

      const source = this.ctx.createBufferSource();
      source.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200 + Math.random() * 2500;
      filter.Q.value = 1.5;

      const gain = this.ctx.createGain();
      gain.gain.value = 0.015;

      source.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      source.start();

      setTimeout(scheduleWhisper, 4000 + Math.random() * 10000);
    };

    setTimeout(scheduleWhisper, 3000);
  },

  createDrips() {
    if (!this.ctx) return;
    const scheduleDrip = () => {
      if (!this.isPlaying || !this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 1800 + Math.random() * 3500;
      gain.gain.value = 0.025;

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.06);

      setTimeout(scheduleDrip, 3000 + Math.random() * 8000);
    };

    setTimeout(scheduleDrip, 5000);
  },

  createCreaks() {
    if (!this.ctx) return;
    const scheduleCreak = () => {
      if (!this.isPlaying || !this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.value = 80 + Math.random() * 60;
      filter.type = 'bandpass';
      filter.frequency.value = 400;
      filter.Q.value = 3;
      gain.gain.value = 0.008;

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.008, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.frequency.linearRampToValueAtTime(60, now + 0.3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.3);

      setTimeout(scheduleCreak, 8000 + Math.random() * 20000);
    };

    setTimeout(scheduleCreak, 7000);
  },

  createHeartbeat() {
    if (!this.ctx) return;
    const scheduleBeat = () => {
      if (!this.isPlaying || !this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 35;

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.4);

      setTimeout(scheduleBeat, 1200 + Math.random() * 400);
    };

    setTimeout(scheduleBeat, 2000);
  }
};
