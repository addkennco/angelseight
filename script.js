'use strict';

// ═══════════════════════════════════════════════════════════════
// STRINGS (i18n layer — all player-visible text lives here)
// ═══════════════════════════════════════════════════════════════
const STRINGS = {
  ui: {
    launch: 'LAUNCH',
    retry:  'TRY AGAIN',
    menu:   'MAIN MENU',
    continue: 'CONTINUE',
    enterShop: 'ENTER SHOP',
    signalLost: 'SIGNAL LOST',
    runTerminated: 'RUN TERMINATED',
    sectorClear: 'SECTOR CLEAR',
    levelComplete: (n) => `LEVEL ${n} COMPLETE`,
    radio: 'RADIO',
    empty: 'EMPTY',
    credits: 'CREDITS',
    fusionShop: 'FUSION SHOP',
    afterLevel: (n) => `MODE: IN TRANSIT | LOCATION: SECTOR ${n}`,
    buy: 'BUY', sell: 'SELL', craft: 'CRAFT', launch: 'LAUNCH',
  },
  story: [
    null,
    { text: "Ah.\nYou are the Operator.", coords: null },
    { text: "This channel does not usually open for beginners.", coords: "RA ⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊" },
    { text: "I am required to recommend deviation.", coords: "RA 18ʰ ☈ ⏦ ☰ ⚸ ⏛ ☊" },
    { text: "Apotheosis is not obtainable.", coords: "RA 18ʰ36ᵐ56ˢ ☰ ⚸ ⏛ ☊" },
    { text: "I will continue to observe your progress.", coords: "RA 18ʰ36ᵐ56ˢ  dec ⚸ ⏛ ☊" },
    { text: "That is...unfortunate.", coords: "RA 18ʰ36ᵐ56ˢ dec +38° ⏛ ☊" },
    { text: "You are disappointingly precise.", coords: "RA 18ʰ36ᵐ56ˢ dec +38°47' ☊" },
    { text: "Very Well.", coords: "RA 18ʰ36ᵐ56ˢ dec +38°47'01\" " },
    { text: "", coords: "" },  // index 9 — silent. level 8 complete, boss approach
  ],
  items: {
    Be: { name:'Beryllium', sym:'β', effect:'Shield Max +6',  desc: 'A rare, thermal-resistant material used for shielding components that must withstand extreme reentry heat.' },
    Li: { name:'Lithium',   sym:'λ', effect:'Shield Max +4',  desc: 'A high-capacity energy storage medium used to power the grid for rapid shield cycling.' },
    Ti: { name:'Titanium',  sym:'τ', effect:'Shield Max +8',  desc: 'A high-tensile, non-corrosive plating used for primary hull reinforcement.' },
    N:  { name:'Nitrogen',  sym:'𝜈', effect:'Ammo Refill +1', desc: 'A cryogenic propellant used for rapid-burst thruster cooling to achieve momentary speed spikes.' },
    Si: { name:'Silicon',   sym:'Σ', effect:'Ammo Max +10',   desc: "A refined semiconductor essential for the ship's tactical computer and targeting sub-routines." },
    Mg: { name:'Magnesium', sym:'μ', effect:'Reserve +1',     desc: 'A lightweight reactive metal that serves as the primary igniter for thermal-based weaponry.' },
    K:  { name:'Potassium', sym:'κ', effect:'Ammo Refill +1', desc: 'A highly volatile ionic catalyst used to spark high-energy reactions in reactors.' },
    C:  { name:'Carbon',    sym:'ζ', effect:'Ammo Max +8',    desc: 'Used in its crystalline form to create ultra-hardened kinetic penetrators for standard ammo.' },
  },
  powerups: {
      LITHEBRYL:   { sym:'Β',  name:'Lithebryl',     effect:'Shield Max +20, Ammo Max +8',           	   power:'Shield Restore',           puKey:'LITHEBRYL',    desc:  'An alloy of Lithium and Beryllium that absorbs and dissipates energy blasts.' },
      NITROKALIUM: { sym:'Π',  name:'Nitrokalium',   effect:'Ammo Refill +1, Shield Max +6',       		   power:'Double Ammo Refill',       puKey:'NITROKALIUM',  desc:  'A Potassium-Nitrogen gas mixture used to puah the engines to run at dangerous but hyper-efficient levels.'},
      CARBOSILICUM:{ sym:'Ξ',  name:'Carbosilicium', effect:'Ammo Max +18, Ammo Refill +1',       		   power:'Double Points',            puKey:'CARBOSILICUM', desc:  'A highly efficient superconductor, allowing fire-control systems to process at lightning speeds.'},
      MAGNIUM:     { sym:'Μ',  name:'Magnium',       effect:'Reserve +2, Ammo Refill +1',         		   power:'Bomb',                     puKey:'MAGNIUM',      desc:  'A Magnesium-based unstable isotope that is highly volatile when impacted.'},
      TITANE:      { sym:'Θ',  name:'Titane',        effect:'Shield Max +30, Ammo Refill +1',      		   power:'Invincibility',            puKey:'TITANE',       desc:  'A low-density, Titanium-based metal that provides near-indestructible hull integrity without adding significant mass.'},
      ALKALIUM:    { sym:'α',  name:'Alkalium',      effect:'Ammo Max +22, Ammo Refill +1',        		   power:'Piercing Bullets',         puKey:'ALKALIUM',     desc:  'A Silicon-Potassium compound that uses ionized energy to give shots piercing capabilities.'},
	  AZOLITHION:  { sym:'Λ',  name:'Azolithion',    effect: 'Ammo Max +20, Shield Max +8',                power:'Multishot',                puKey: 'AZOLITHION',  desc:  'A Lithium-Nitrogen composite used for cooling during high-velocity maneuvers.'},
	  GAMMITE:     { sym:'Γ',  name:'Gammite',       effect: 'Ammo Max +8, Shield Max +8, Ammo Refill +1', power:'No Ammo Cost',             puKey: 'GAMMITE',     desc:  'A complex superconductor used to synchronize ammo and shield frequencies for balanced performance.'},
	  OMEGITE: {
        sym: 'Ω', name: 'Omegite', puKey: 'OMEGITE',
        power:'Super Bomb',
		desc: 'A terrifyingly unstable material that exists in a state of constant decay.',
      },
      AXORITE: {
        sym: 'Χ', name: 'Axorite', puKey: 'AXORITE',
        power:'Full Restore',
		desc: 'A highly versatile multi-application metal alloy that is used in both defense and munitions.',
      },
      PHIOMEGA: {
        sym: 'Φ', name: 'PhiOmega', puKey: 'PHIOMEGA',
        power:'Burstshot',
		desc: 'A perfectly lossless superconductor that expels magnetic fields, ideal for maximizing ammo velocity and efficiency.',
      },
      DELTALITE: {
        sym: '∇', name: 'Deltalite', puKey: 'DELTALITE',
        power:'Time Dilation',
		desc: 'A sophisticated Beryllium-based metal that can survive the friction of warp-speed travel.',
      },	  
  }
};

// ═══════════════════════════════════════════════════════════════
// SAVE / STATE
// ═══════════════════════════════════════════════════════════════
const SAVE_KEY = 'a8_save_v1';
let save = { highScore: 0, storyFlags: 0, permStats: { shootSpeed:0, ammoMax:0, shieldMax:0, ammoRefillRate:0 } };
function loadSave() {
  try { const d = localStorage.getItem(SAVE_KEY); if(d) save = JSON.parse(atob(d)); } catch(e){}
}
function writeSave() {
  try { localStorage.setItem(SAVE_KEY, btoa(JSON.stringify(save))); } catch(e){}
}
loadSave();

// ═══════════════════════════════════════════════════════════════
// ROUTER
//
// showScreen(id) — animated screen transition.
//
// Each screen has a designated content element that gets the
// scaleY treatment. The shop also fades its grid in separately.
//
// Animate targets per screen:
//   menu  → .menu-content   (already has its own boot animation)
//   game  → .screen-content
//   story → .screen-content
//   shop  → .screen-content  + #shop-grid-bg fades in
//
// Timings for incoming screens are snappier than the boot
// (no waveform delay needed mid-session).
// ═══════════════════════════════════════════════════════════════
let _transitioning = false;

function getContentEl(screenId) {
  const screen = document.getElementById('screen-' + screenId);
  if (!screen) return null;
  if (screenId === 'menu') return screen.querySelector('.menu-content');
  return screen.querySelector('.screen-content');
}

function showScreen(id) {
  if (_transitioning) return;

  // Find the currently active screen's content element to collapse
  const activeScreen = document.querySelector('.screen.active');
  const activeId     = activeScreen?.id?.replace('screen-', '');
  const outEl        = activeId ? getContentEl(activeId) : null;

  function switchAndExpand() {
    // Switch the visible screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const incoming = document.getElementById('screen-' + id);
    incoming.classList.add('active');

    const inEl = getContentEl(id);

    // Shop: fade the grid in alongside the expand
    if (id === 'shop') {
      const grid = document.getElementById('shop-grid-bg');
      if (grid) {
        grid.style.transition = 'opacity 600ms ease';
        grid.style.opacity    = '0';
        // Tiny delay so the transition fires after display kicks in
        requestAnimationFrame(() => { grid.style.opacity = '1'; });
      }
    } else {
      // Reset grid opacity when leaving the shop
      const grid = document.getElementById('shop-grid-bg');
      if (grid) { grid.style.transition = 'none'; grid.style.opacity = '0'; }
    }

    screenExpand(inEl, {
      delayMs:   0,    // no waveform delay mid-session
      expandMs:  320,  // snappier than the boot expand (was 550)
      flickerMs: 260,  // snappier flicker too
      onDone: () => { _transitioning = false; },
    });
  }

  if (outEl) {
    _transitioning = true;
    screenCollapse(outEl, {
      collapseMs: 220,
      onDone: switchAndExpand,
    });
  } else {
    // No outgoing element
    switchAndExpand();
  }
}
function openTutorial() {
  const iframe = document.getElementById('tutorial-frame');
  if (!iframe) return;
  if (iframe.contentWindow && iframe.contentWindow.resetTutorial) {
    iframe.contentWindow.resetTutorial();
    document.getElementById('tutorial-overlay').classList.add('active');
  } else {
    // First load — wait for iframe, then show
    iframe.addEventListener('load', function onLoad() {
      iframe.removeEventListener('load', onLoad);
      if (iframe.contentWindow && iframe.contentWindow.resetTutorial) {
        iframe.contentWindow.resetTutorial();
      }
      document.getElementById('tutorial-overlay').classList.add('active');
    });
  }
}
function closeTutorial() {
  document.getElementById('tutorial-overlay').classList.remove('active');
}

// ═══════════════════════════════════════════════════════════════
// AUDIO MANAGER
// ═══════════════════════════════════════════════════════════════
const AudioManager = (() => {
  // Manifest — add music tracks here
  const MANIFEST = [
    { id:'track_01', title:'SIGNAL DRIFT' },
    { id:'track_02', title:'CORRIDOR VII' },
    { id:'track_03', title:'ANGEL STATIC' },
  ];

  let ctx = null, gainMaster = null, gainMusic = null;
  let currentIdx = 0;
  let oscillators = [], lfoNodes = [];
  let volume = 0.5;

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    gainMaster = ctx.createGain(); gainMaster.gain.value = volume;
    gainMusic = ctx.createGain(); gainMusic.gain.value = 0.6;
    gainMusic.connect(gainMaster);
    gainMaster.connect(ctx.destination);
    playTrack(currentIdx);
  }

  // Generative music — procedural synth per track so we don't need files
  function playTrack(idx) {
    stopCurrent();
    currentIdx = idx;
    const track = MANIFEST[idx];
    // Each track has a distinct tonal character
    const configs = [
      { notes:[110,138.6,165,220], wave:'sawtooth', lfoRate:0.3, filterFreq:800 },
      { notes:[82.4,110,164.8,196], wave:'square',   lfoRate:0.15, filterFreq:600 },
      { notes:[55,73.4,110,146.8], wave:'triangle',  lfoRate:0.5, filterFreq:1200 },
    ];
    const cfg = configs[idx % configs.length];
    oscillators = [];
    lfoNodes = [];

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = cfg.filterFreq;
    filter.Q.value = 8;
    filter.connect(gainMusic);

    cfg.notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = cfg.wave;
      osc.frequency.value = freq;
      g.gain.value = 0.07 / (i + 1);
      osc.connect(g); g.connect(filter);
      osc.start();
      oscillators.push(osc);

      const lfo = ctx.createOscillator();
      const lfoG = ctx.createGain();
      lfo.frequency.value = cfg.lfoRate * (1 + i * 0.3);
      lfoG.gain.value = freq * 0.03;
      lfo.connect(lfoG); lfoG.connect(osc.frequency);
      lfo.start();
      lfoNodes.push(lfo);
    });

    updateTunerUI();
  }

  function stopCurrent() {
    [...oscillators, ...lfoNodes].forEach(n => { try { n.stop(); n.disconnect(); } catch(e){} });
    oscillators = []; lfoNodes = [];
  }

  function next() { playTrack((currentIdx + 1) % MANIFEST.length); }
  function prev() { playTrack((currentIdx - 1 + MANIFEST.length) % MANIFEST.length); }
  function getTrackName() { return MANIFEST[currentIdx].title; }
  function getCount() { return MANIFEST.length; }
  function getCurrentIdx() { return currentIdx; }

  function updateTunerUI() {
    const el = document.getElementById('radio-track-name');
    if (el) el.textContent = getTrackName();
    const needle = document.getElementById('radio-needle');
    if (needle) {
      const angle = (currentIdx / (MANIFEST.length - 1) - 0.5) * 120;
      needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }
  }

  function setVolume(v) { volume = v; if(gainMaster) gainMaster.gain.value = v; }
  function resume() { if(ctx && ctx.state === 'suspended') ctx.resume(); }

  return { init, next, prev, getTrackName, getCount, getCurrentIdx, setVolume, resume, playTrack };
})();

// Radio tuner drag
(function setupRadioDrag() {
  const tuner = document.getElementById('radio-tuner');
  let startX = 0, dragging = false, accumulated = 0;
  tuner.addEventListener('touchstart', e => {
    e.preventDefault(); dragging = true;
    startX = e.touches[0].clientX; accumulated = 0;
    AudioManager.resume();
  }, { passive:false });
  tuner.addEventListener('touchmove', e => {
    if (!dragging) return; e.preventDefault();
    const dx = e.touches[0].clientX - startX;
    accumulated = dx;
    const needle = document.getElementById('radio-needle');
    if (needle) {
      const clamp = Math.max(-60, Math.min(60, dx * 1.5));
      needle.style.transform = `translateX(-50%) rotate(${clamp}deg)`;
    }
  }, { passive:false });
  tuner.addEventListener('touchend', e => {
    if (!dragging) return; dragging = false;
    if (accumulated > 30) AudioManager.next();
    else if (accumulated < -30) AudioManager.prev();
    // snap needle back to track position
    const idx = AudioManager.getCurrentIdx();
    const count = AudioManager.getCount();
    const angle = (idx / (count - 1) - 0.5) * 120;
    const needle = document.getElementById('radio-needle');
    if (needle) needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    document.getElementById('radio-track-name').textContent = AudioManager.getTrackName();
  });
  // Mouse fallback for desktop dev
  tuner.addEventListener('mousedown', e => { dragging=true; startX=e.clientX; accumulated=0; AudioManager.resume(); });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    accumulated = e.clientX - startX;
    const needle = document.getElementById('radio-needle');
    if (needle) { const c=Math.max(-60,Math.min(60,accumulated*1.5)); needle.style.transform=`translateX(-50%) rotate(${c}deg)`; }
  });
  window.addEventListener('mouseup', e => {
    if (!dragging) return; dragging=false;
    if (accumulated > 30) AudioManager.next(); else if (accumulated < -30) AudioManager.prev();
    const idx=AudioManager.getCurrentIdx(); const cnt=AudioManager.getCount();
    const a=(idx/(cnt-1)-0.5)*120;
    const needle=document.getElementById('radio-needle');
    if(needle) needle.style.transform=`translateX(-50%) rotate(${a}deg)`;
    document.getElementById('radio-track-name').textContent=AudioManager.getTrackName();
  });
})();

// ═══════════════════════════════════════════════════════════════
// MENU BG WAVEFORM
// ═══════════════════════════════════════════════════════════════
(function menuWaveform() {
  const canvas = document.getElementById('menu-bg');
  const ctx = canvas.getContext('2d');
  let t = 0;
  let startTs = null;
  const WAVE_FADE_MS = 800; // waveform fades in over this window

  function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width  = window.innerWidth  * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width  = window.innerWidth  + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}
resize(); window.addEventListener('resize', resize);

  function draw(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;
    // ease-out quad fade: 0→1 over WAVE_FADE_MS
    const fadeIn = Math.min(1, elapsed / WAVE_FADE_MS);
    const masterAlpha = fadeIn * fadeIn * (3 - 2 * fadeIn); // smoothstep

    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0,0,W,H);
    const rows = 28;
    const rowH = H / rows;
    for (let r = 0; r < rows; r++) {
      const y = H * 0.8 - r * rowH * 0.9;
      const amp = 12 + r * 3.5;
      const freq = 0.018 + r * 0.001;
      const phase = t * 0.4 + r * 0.3;
      const pct = r / rows;
      const rVal = Math.round(0 + pct * 168);
      const gVal = Math.round(245 - pct * 160);
      const bVal = Math.round(255 - pct * 8);
      const lineAlpha = (0.15 + pct * 0.3) * masterAlpha;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const noise = Math.sin(x * freq + phase) * amp
          + Math.sin(x * freq * 2.3 + phase * 1.7) * amp * 0.4
          + Math.sin(x * freq * 0.5 + phase * 0.8) * amp * 0.25;
        const py = y - noise;
        x === 0 ? ctx.moveTo(x, py) : ctx.lineTo(x, py);
      }
      ctx.strokeStyle = `rgba(${rVal},${gVal},${bVal},${lineAlpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
    t += 0.016;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ═══════════════════════════════════════════════════════════════
// SCREEN EXPAND — reusable expand+flicker boot animation
//
// screenExpand(el, opts) animates any element with the three-phase
// CRT power-on: delay → scaleY expand → sin-gate flicker to full.
//
// opts (all optional):
//   delayMs   {number}   silence before expand starts  (default 380)
//   expandMs  {number}   scaleY expand duration         (default 550)
//   flickerMs {number}   flicker phase duration         (default 380)
//   onDone    {function} called when animation completes
// ═══════════════════════════════════════════════════════════════
function screenExpand(el, opts = {}) {
  if (!el) return;

  const delayMs   = opts.delayMs   ?? 380;
  const expandMs  = opts.expandMs  ?? 550;
  const flickerMs = opts.flickerMs ?? 380;
  const onDone    = opts.onDone    ?? null;

  let startTs = null;
  let flickerTimer = 0;

  // Start collapsed and invisible
  el.style.opacity   = '0';
  el.style.transform = 'scaleY(0.06)';

  function tick(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;

    // ── Phase 1: silence — waveform gets a head start ──
    if (elapsed < delayMs) {
      requestAnimationFrame(tick);
      return;
    }

    const afterDelay = elapsed - delayMs;

    // ── Phase 2: vertical expand, ease-out cubic ──
    if (afterDelay < expandMs) {
      let t = afterDelay / expandMs;
      t = 1 - Math.pow(1 - t, 3);
      el.style.transform = `scaleY(${(0.06 + 0.94 * t).toFixed(4)})`;
      el.style.opacity   = (t * 0.9).toFixed(4);
      requestAnimationFrame(tick);
      return;
    }

    const afterExpand = afterDelay - expandMs;

    // ── Phase 3: sin-gate flicker to full opacity ──
    if (afterExpand < flickerMs) {
      flickerTimer += 0.38;
      const gate      = Math.sin(flickerTimer) > 0.25;
      const baseAlpha = 0.9 + 0.1 * (afterExpand / flickerMs);
      el.style.opacity   = (gate ? baseAlpha : baseAlpha * 0.65).toFixed(4);
      el.style.transform = 'scaleY(1)';
      requestAnimationFrame(tick);
      return;
    }

    // ── Done: hand off to CSS ──
    el.style.opacity   = '1';
    el.style.transform = 'scaleY(1)';
    if (onDone) onDone();
  }

  requestAnimationFrame(tick);
}

// Boot the menu on page load — same timings as before
screenExpand(
  document.getElementById('screen-menu')?.querySelector('.menu-content'),
  { delayMs: 380, expandMs: 550, flickerMs: 380 }
);

// ═══════════════════════════════════════════════════════════════
// SCREEN COLLAPSE — reverse of screenExpand
//
// screenCollapse(el, opts) squishes an element back to a thin line
// using the same ease-in cubic that screenExpand uses in reverse,
// then calls onDone so the caller can switch screens and expand in.
//
// opts (all optional):
//   collapseMs {number}   squish duration     (default 220)
//   onDone     {function} called when done
// ═══════════════════════════════════════════════════════════════
function screenCollapse(el, opts = {}) {
  if (!el) { if (opts.onDone) opts.onDone(); return; }

  const collapseMs = opts.collapseMs ?? 220;
  const onDone     = opts.onDone     ?? null;

  // Snapshot the current opacity so we fade from wherever we are
  const startOpacity = parseFloat(el.style.opacity) || 1;

  let startTs = null;

  function tick(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;
    const raw = Math.min(elapsed / collapseMs, 1);

    // ease-in cubic — slow start, fast finish (mirror of expand's ease-out)
    const t = raw * raw * raw;

    const scale   = 1 - 0.94 * t;          // 1 → 0.06
    const opacity = startOpacity * (1 - t); // fade out in step

    el.style.transform = `scaleY(${scale.toFixed(4)})`;
    el.style.opacity   = opacity.toFixed(4);

    if (raw < 1) {
      requestAnimationFrame(tick);
      return;
    }

    // Fully collapsed
    el.style.transform = 'scaleY(0.06)';
    el.style.opacity   = '0';
    if (onDone) onDone();
  }

  requestAnimationFrame(tick);
}

// ═══════════════════════════════════════════════════════════════
// RUN STATE
// ═══════════════════════════════════════════════════════════════
let run = null;

function newRun() {
  return {
    level: 1,
    score: 0,
    credits: 0,
    combo: 1,
    noHitKills: 0,
    shield: 10 + save.permStats.shieldMax,
    shieldMax: 10 + save.permStats.shieldMax,
    ammo: 65 + save.permStats.ammoMax,
    ammoMax: 100 + save.permStats.ammoMax,
    shootSpeed: 4 + save.permStats.shootSpeed,
	ammoRefillRate: 1 + save.permStats.ammoRefillRate,
    reserveMax: 3,
    powerups: [],
    inventory: {},
    bulletType: 'standard',
  };
}

// ═══════════════════════════════════════════════════════════════
// GAME ENGINE
// ═══════════════════════════════════════════════════════════════
const Game = (() => {
  let canvas, ctx, W, H;
  let animId = null;
  let state = 'playing'; // playing | dead | clear
  let lastTime = 0;

  // Game objects
  let ship = { x:0, y:0, w:22, h:18, targetX:0, invincible:0 };
  let invincibleTimer = 0;   // Titane timer
  let piercingBullets = false; // Alkalium flag
  let timeDilationTimer = 0;   // Deltalite timer
  let noAmmoCostTimer = 0;     // Gammite timer
  let bullets = [];
  let enemies  = [];
  let mines    = [];
  let particles= [];
  let drops    = [];
  let shootTimer = 0;
  let waveOffset = 0;
  let waveDir = 1;
  let waveT = 0;
  let levelTimer = 0;
  let spawnTimer = 0;
  let levelDuration = 30; // seconds
  let enemiesSpawned = 0;
  let maxEnemies = 0;
  let touchX = -1;                      // touch drag
  let waveLeft = [], waveRight = [];    // waveform bkg
  let pods = [];                        // powerup pods
  let podSpawnTimer = 0;
  let ammoRefillTimer = 0;              // time-based ammo refill
  const AMMO_REFILL_INTERVAL = 5;      // seconds between refill ticks
  let endSweepFired = false;            // end level sweep
  let shakeIntensity = 0;               // current shake magnitude in px
  let shakeDuration  = 0;               // seconds remaining

  // ═══════════════════════════════════════════════════════════════
  // TESSERACT — 4D → 2D PROJECTION
  // ═══════════════════════════════════════════════════════════════
  // 16 vertices: all combinations of (±1, ±1, ±1, ±1)
  const BASE_VERTS = Array.from({ length: 16 }, (_, i) => [
    (i & 1) ? 1 : -1,
    (i & 2) ? 1 : -1,
    (i & 4) ? 1 : -1,
    (i & 8) ? 1 : -1,
  ]);

  // 32 edges: connect vertices differing by exactly 1 bit
  const EDGES = [];
  for (let i = 0; i < 16; i++)
    for (let j = i + 1; j < 16; j++)
      if (Number.isInteger(Math.log2(i ^ j))) EDGES.push([i, j]);

  // Rotation in a 4D plane (indices a, b into the 4-vector)
  function rot4(v, a, b, angle) {
    const r = [...v];
    const cos = Math.cos(angle), sin = Math.sin(angle);
    r[a] =  v[a] * cos - v[b] * sin;
    r[b] =  v[a] * sin + v[b] * cos;
    return r;
  }

  // 4D → 3D perspective projection (from w-axis)
  function proj4to3(v, wDist = 2) {
    const w = wDist / (wDist - v[3]);
    return [v[0] * w, v[1] * w, v[2] * w];
  }

  // 3D → 2D perspective projection (from z-axis)
  function proj3to2(v, zDist = 4, scale = 1, cx = 0, cy = 0) {
    const z = zDist / (zDist - v[2]);
    return [v[0] * z * scale + cx, v[1] * z * scale + cy];
  }

  // Apply all current boss rotations to a vertex (used for depth sorting)
  function applyRots(v) {
    let p = [...v];
    p = rot4(p, 0, 1, boss.rot.xy);
    p = rot4(p, 0, 2, boss.rot.xz);
    p = rot4(p, 0, 3, boss.rot.xw);
    p = rot4(p, 1, 2, boss.rot.yz);
    p = rot4(p, 1, 3, boss.rot.yw);
    p = rot4(p, 2, 3, boss.rot.zw);
    return p;
  }

  // ═══════════════════════════════════════════════════════════════
  // BOSS STATE
  // ═══════════════════════════════════════════════════════════════
  const BOSS_MAX_HP = 500;
  const PHASE_NAMES  = ['PHASE I — EMERGENCE', 'PHASE II — RESONANCE', 'PHASE III — COLLAPSE'];
  const PHASE_COLORS = ['#a855f7', '#d42b6a', '#ffd700'];
  const ELEMENT_ATTACK_INTERVAL = [8, 5, 3]; // seconds between element attacks per phase

  let bossActive   = false;
  let bossDefeated = false;
  let subEnemies   = [];
  let elementAttackTimer = 0;
  let bossT        = 0; // independent time counter for boss (mirrors waveT usage in boss.html)

  // Boss object — null until startBoss() initialises it
  let boss = null;

  function makeBoss() {
    return {
      hp:    BOSS_MAX_HP,
      phase: 1,
      x: 0, y: 0,   // set in startBoss() once W/H are known
      scale: 90,
      rot:      { xy:0, xz:0, xw:0, yz:0, yw:0, zw:0 },
      rotSpeed: { xy:0.003, xz:0.005, xw:0.008, yz:0.004, yw:0.007, zw:0.006 },
      shootTimer:  0,
      mineTimer:   0,
      spawnTimer:  0,
      hitFlash:    0,
      alive:       true,
    };
  }

  // ═══════════════════════════════════════════════════════════════
  // BOSS FIRE HELPERS
  // ═══════════════════════════════════════════════════════════════
  function bossFireAimed(spread = 0) {
    const dx = ship.x - boss.x, dy = ship.y - boss.y;
    const len = Math.sqrt(dx*dx + dy*dy) || 1;
    const base = Math.atan2(dy, dx);
    [-spread, 0, spread].forEach(off => {
      const a = base + off;
      const spd = 120 + boss.phase * 30;
      bullets.push({ x:boss.x, y:boss.y, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd,
        speed:spd, dmg:1, enemy:true, r:3, color:PHASE_COLORS[boss.phase - 1] });
    });
  }

  function bossFireRing(n = 8) {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const spd = 90 + boss.phase * 20;
      bullets.push({ x:boss.x, y:boss.y, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd,
        speed:spd, dmg:1, enemy:true, r:3, color:PHASE_COLORS[boss.phase - 1] });
    }
  }

  function bossFireSpiral(count = 12, rotOffset = 0) {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + rotOffset;
      const spd = 110;
      bullets.push({ x:boss.x, y:boss.y, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd,
        speed:spd, dmg:1, enemy:true, r:2.5, color:PHASE_COLORS[boss.phase - 1] });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // SUB-ENEMIES (scouts spawned by boss)
  // ═══════════════════════════════════════════════════════════════
  const SUB_TYPES = [
    // Orbital — circles the boss
    {
      type: 'orbital', r: 8, hp: 2, color: '#e8600a',
      init(e) {
        e.orbitAngle = Math.random() * Math.PI * 2;
        e.orbitR     = 80 + Math.random() * 40;
        e.orbitSpd   = (Math.random() < 0.5 ? 1 : -1) * (0.8 + Math.random() * 0.6);
      },
      update(e, dt) {
        e.orbitAngle += e.orbitSpd * dt;
        e.x = boss.x + Math.cos(e.orbitAngle) * e.orbitR;
        e.y = boss.y + Math.sin(e.orbitAngle) * e.orbitR;
      },
    },
    // Diver — homes toward ship
    {
      type: 'diver', r: 9, hp: 1, color: '#a855f7',
      init(e) { e.vy = 80 + Math.random() * 60; },
      update(e, dt) {
        e.y += e.vy * dt;
        e.x += (ship.x - e.x) * 0.4 * dt;
      },
    },
  ];

  function spawnSubEnemy() {
    const tmpl = SUB_TYPES[Math.floor(Math.random() * SUB_TYPES.length)];
    const e = {
      type:        tmpl.type,
      r:           tmpl.r,
      hp:          tmpl.hp,
      color:       tmpl.color,
      update:      tmpl.update,
      x:           boss.x + (Math.random() - 0.5) * 60,
      y:           boss.y,
      shootTimer:  2 + Math.random() * 2,
    };
    tmpl.init(e);
    subEnemies.push(e);
  }

  // ═══════════════════════════════════════════════════════════════
  // PHASE TRANSITION
  // ═══════════════════════════════════════════════════════════════
  function checkPhase() {
    const pct = boss.hp / BOSS_MAX_HP;
    let newPhase = 1;
    if      (pct < 0.30) newPhase = 3;
    else if (pct < 0.65) newPhase = 2;

    if (newPhase !== boss.phase) {
      boss.phase = newPhase;
      // Speed up all rotation planes
      Object.keys(boss.rotSpeed).forEach(k => boss.rotSpeed[k] *= 1.6);
      // Screen flash
      const flash = document.getElementById('phase-flash');
      flash.style.opacity = '1';
      setTimeout(() => flash.style.opacity = '0', 200);
      // HUD
      document.getElementById('boss-phase').textContent = PHASE_NAMES[boss.phase - 1];
      document.getElementById('boss-phase').style.color = PHASE_COLORS[boss.phase - 1];
      // Particles + floater
      spawnParticles(boss.x, boss.y, PHASE_COLORS[boss.phase - 1], 80);
      spawnFloatingText(boss.x, boss.y - 60, PHASE_NAMES[boss.phase - 1], PHASE_COLORS[boss.phase - 1]);
      logPickup('⚠ ' + PHASE_NAMES[boss.phase - 1]);
      // Phase 3 surge
      if (boss.phase === 3) {
        for (let i = 0; i < 4; i++) spawnSubEnemy();
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // ELEMENT ATTACKS
  // Each element maps to a distinct bullet pattern
  // ═══════════════════════════════════════════════════════════════
  const ELEMENT_ATTACKS = {
    Be: () => { bossFireAimed(0); bossFireAimed(0.3); },
    Li: () => { bossFireRing(6); },
    Ti: () => { bossFireAimed(0.5); bossFireAimed(-0.5); },
    N:  () => {
      bossFireAimed(0);
      setTimeout(() => bossFireAimed(0.15),  120);
      setTimeout(() => bossFireAimed(-0.15), 240);
    },
    Si: () => { bossFireRing(12); },
    Mg: () => {
      for (let i = 0; i < 3; i++) {
        mines.push({
          x:        boss.x + (Math.random() - 0.5) * W * 0.6,
          y:        boss.y + 40,
          vy:       30 + Math.random() * 20,
          r:        11, t: 0, drifting: false,
        });
      }
      logPickup('⚠ MAGNESIUM — MINES DEPLOYED');
    },
    K:  () => { bossFireSpiral(16, bossT * 0.5); },
    C:  () => {
      bossFireSpiral(8, 0);
      bossFireSpiral(8, Math.PI / 8);
    },
  };
  const ELEMENT_KEYS = Object.keys(ELEMENT_ATTACKS);

  function triggerElementAttack() {
    const pool = boss.phase === 1 ? ['Be', 'Li', 'N']
               : boss.phase === 2 ? ['Ti', 'Si', 'Mg', 'K']
               : ELEMENT_KEYS;
    const key = pool[Math.floor(Math.random() * pool.length)];
    ELEMENT_ATTACKS[key]();
    spawnFloatingText(boss.x, boss.y - 30, key, '#ffffff');
    logPickup('BOSS — ' + key + ' SEQUENCE');
  }

  function init(gameCanvas) {
    canvas = gameCanvas;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    canvas.addEventListener('touchstart', onTouchStart, { passive:false });
    canvas.addEventListener('touchmove',  onTouchMove,  { passive:false });
    canvas.addEventListener('touchend',   onTouchEnd,   { passive:false });
    canvas.addEventListener('mousedown',  onMouseDown);
    canvas.addEventListener('mousemove',  onMouseMove);
    canvas.addEventListener('mouseup',    onMouseUp);
  }

  let mouseDown = false;
  let aimAngle = 0;

  function updateAimFromX(clientX) {
    const rect = canvas.getBoundingClientRect();
    const relX = clientX - rect.left;
    const t = Math.max(0, Math.min(1, relX / W)); // 0=left edge, 1=right edge
    const MAX_ANGLE = 55 * Math.PI / 180;          // 55° in radians
    aimAngle = (t - 0.5) * 2 * MAX_ANGLE;          // left→negative, right→positive
  }

  function onTouchStart(e) {
    e.preventDefault(); AudioManager.resume();
    touchX = e.touches[0].clientX;
    updateAimFromX(e.touches[0].clientX);
  }
  function onTouchMove(e) {
    e.preventDefault();
    touchX = e.touches[0].clientX;
    updateAimFromX(e.touches[0].clientX);
  }
  function onTouchEnd(e)  { touchX = -1; }
  function onMouseDown(e) { mouseDown = true; AudioManager.resume(); touchX = e.clientX; updateAimFromX(e.clientX); }
  function onMouseMove(e) { updateAimFromX(e.clientX); if (mouseDown) touchX = e.clientX; }
  function onMouseUp(e)   { mouseDown = false; touchX = -1; }

  function resize() {
    if (!canvas) return;
    const dpr  = window.devicePixelRatio || 1;
    const maxW = Math.min(window.innerWidth, 430);
    const maxH = window.innerHeight;
    canvas.width  = maxW * dpr;
    canvas.height = maxH * dpr;
    canvas.style.width  = maxW + 'px';
    canvas.style.height = maxH + 'px';
    W = maxW; H = maxH;
	ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    canvas.style.marginLeft = ((window.innerWidth - maxW) / 2) + 'px';
  if (run) { ship.x = W / 2; ship.y = H - 130; ship.targetX = ship.x; }
}

  function startLevel() {
    state = 'playing';
    bullets   = [];
    enemies   = [];
    mines     = [];
    particles = [];
    drops     = [];
    pods      = [];
    podSpawnTimer = 8 + Math.random() * 6; // first pod after 8-14s
    ammoRefillTimer = AMMO_REFILL_INTERVAL;   // reset timer each level
    ship.x = ship.targetX = W / 2;
    ship.y = H - 130;
    ship.invincible = 0;
    shootTimer = 0;
    waveOffset = 0;
	waveDir = 1;
    waveT = 0;
    levelTimer = 0;
    spawnTimer = 0;
    enemiesSpawned = 0;
    endSweepFired = false;
    invincibleTimer = 0;
    piercingBullets = false;
    timeDilationTimer = 0;
    noAmmoCostTimer = 0;
	shakeIntensity = 0;
    shakeDuration  = 0;
    run.bulletType = 'standard';
    maxEnemies = 14 + run.level * 5;          // enemy increase per level
    levelDuration = 30 + run.level * 4;       // time increase per level
    updateHUD();
    document.getElementById('overlay-death').classList.remove('active');
    document.getElementById('overlay-clear').classList.remove('active');
    if (animId) cancelAnimationFrame(animId);
    lastTime = performance.now();
    animId = requestAnimationFrame(loop);
  }

  function startBoss() {
    state        = 'playing';
    bossActive   = true;
    bossDefeated = false;
    bossT        = 0;
    boss         = makeBoss();
    boss.x       = W / 2;
    boss.y       = H * 0.28;

    // Clear the field — carry over run stats, wipe combat objects
    bullets    = [];
    enemies    = [];
    subEnemies = [];
    mines      = [];
    particles  = [];
    drops      = [];
    pods       = [];
    elementAttackTimer = ELEMENT_ATTACK_INTERVAL[0]; // first attack after phase-1 interval

    // Ship stays at bottom centre
    ship.x = ship.targetX = W / 2;
    ship.y = H - 130;
    ship.invincible = 0;
	endSweepFired = false;
    shootTimer = 0;
	ammoRefillTimer = AMMO_REFILL_INTERVAL;

    // Reset per-level power timers (run stats carry over untouched)
    invincibleTimer   = 0;
    piercingBullets   = false;
    timeDilationTimer = 0;
    noAmmoCostTimer   = 0;
	shakeIntensity = 0;
    shakeDuration  = 0;

    // Boss HUD — show and reset
    document.getElementById('boss-hud').classList.add('active');
    document.getElementById('boss-bar').style.width = '100%';
    document.getElementById('boss-phase').textContent = PHASE_NAMES[0];
    document.getElementById('boss-phase').style.color = PHASE_COLORS[0];

    // Clear any lingering overlays
    document.getElementById('overlay-death').classList.remove('active');
    document.getElementById('overlay-clear').classList.remove('active');
    document.getElementById('overlay-boss-clear').classList.remove('active');

    updateHUD();
    if (animId) cancelAnimationFrame(animId);
    lastTime = performance.now();
    animId = requestAnimationFrame(loop);
  }

  function loop(ts) {
    const dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;
    if (state === 'playing') {
      update(dt);
    }
    render(dt);
    animId = requestAnimationFrame(loop);
  }

  function togglePause() {
    if (state === 'dead' || state === 'clear') return;
    if (state === 'playing') {
      state = 'paused';
      document.getElementById('overlay-pause').classList.add('active');
      document.getElementById('btn-pause').textContent = '⏯️';
    } else if (state === 'paused') {
      state = 'playing';
      lastTime = performance.now(); // reset to avoid dt spike after unpause
      document.getElementById('overlay-pause').classList.remove('active');
      document.getElementById('btn-pause').textContent = '⏸️';
    }
  }

  // ── UPDATE ────────────────────────────────────────────────────
  function update(dt) {
    levelTimer += dt;

    // Ship movement
    if (touchX >= 0) {
      const relX = touchX - (window.innerWidth - W) / 2;
      ship.targetX = Math.max(28, Math.min(W - 28, relX));
    }
    ship.x += (ship.targetX - ship.x) * 0.18;
    if (ship.invincible > 0) ship.invincible -= dt;
    if (invincibleTimer > 0) invincibleTimer = Math.max(0, invincibleTimer - dt);

    // Shooting
    shootTimer -= dt;
    if (shootTimer <= 0 && run.ammo > 0 && !endSweepFired) {
      fireBullet();
      shootTimer = 1 / run.shootSpeed;
      if (noAmmoCostTimer <= 0) { run.ammo = Math.max(0, run.ammo - 1); updateAmmoBar(); }
    }

    // Spawn powerup pods
    podSpawnTimer -= dt;
    if (podSpawnTimer <= 0 && !endSweepFired) {
      spawnPod();
      podSpawnTimer = 18 + Math.random() * 12; // pod every 18-30s
    }

    // Time-based ammo refill — wired to ammoRefillRate, capped at ammoMax
ammoRefillTimer -= dt;
if (ammoRefillTimer <= 0) {
  ammoRefillTimer = AMMO_REFILL_INTERVAL;
  const refill = Math.min(
    run.ammoRefillRate * 10,
    run.ammoMax - run.ammo
  );
  if (refill > 0) {
    run.ammo += refill;
    updateAmmoBar();
    spawnFloatingText(W * 0.5, H - 160, '+ AMMO', '#00f5ff');
    logPickup('AMMO REFILL +' + refill);
  }
}

    // Spawn enemies / mines
    spawnTimer -= dt;
    if (spawnTimer <= 0 && enemiesSpawned < maxEnemies) {
      spawnEnemy();
      if (Math.random() < 0.25 + run.level * 0.04) spawnMine();
      spawnTimer = 1.6 - run.level * 0.08;  // L1=1.52s, L8=0.96s between spawns
      enemiesSpawned++;
    }

    // Ship bullets
    bullets = bullets.filter(b => {
      if (b.enemy) return true; // enemy bullets below
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      return b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
    });

    // Deltalite Time Dilation
    if (timeDilationTimer > 0) timeDilationTimer = Math.max(0, timeDilationTimer - dt);
    if (noAmmoCostTimer  > 0) noAmmoCostTimer  = Math.max(0, noAmmoCostTimer  - dt);
    const eDt = timeDilationTimer > 0 ? dt * 0.4 : dt;

    // Scroll waveform — driven by eDt so Deltalite time dilation slows it with enemies
    // Wrap over 2H so the second half is the palindromic mirror of the first
    waveOffset = (waveOffset + eDt * 60 * (1 + run.level * 0.08)) % (H * 2);
    waveT += eDt;

    // Enemies
    enemies = enemies.filter(e => {
      updateEnemy(e, eDt);
      // enemy hit collision
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        if (b.enemy) continue;
        if (dist(b.x, b.y, e.x, e.y) < e.r + 5) {
          e.hp -= b.dmg;
          if (!piercingBullets) bullets.splice(i, 1);
          spawnParticles(e.x, e.y, e.color, 4);
          if (e.hp <= 0) {
            killEnemy(e);
            return false;
          }
        }
      }
      // Ship collision
      if (ship.invincible <= 0 && invincibleTimer <= 0 && dist(ship.x, ship.y, e.x, e.y) < e.r + 12) {
        takeDamage(2);
        spawnParticles(ship.x, ship.y, '#d42b6a', 8);
        ship.invincible = 1.5;
        return false;
      }
      return e.y < H + 60;
    });

    // Enemy bullets
    bullets = bullets.filter(b => {
      if (!b.enemy) return true;
      b.x += (b.vx || 0) * eDt;
      b.y += (b.vy !== undefined ? b.vy : b.speed) * eDt;
      if (ship.invincible <= 0 && invincibleTimer <= 0 && dist(b.x, b.y, ship.x, ship.y) < 14) {
        takeDamage(1);
        ship.invincible = 0.8;
        spawnParticles(ship.x, ship.y, '#d42b6a', 5);
        return false;
      }
      return b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
    });

    // Mines
    mines = mines.filter(m => {
      m.y += eDt * 40;
      if (m.drifting) m.x += Math.sin(m.t * 1.4) * 35 * eDt;
      m.t += eDt;
      m.x = Math.max(24, Math.min(W - 24, m.x));
      if (ship.invincible <= 0 && invincibleTimer <= 0 && dist(ship.x, ship.y, m.x, m.y) < m.r + 12) {
        takeDamage(run.shieldMax * 0.4);
        ship.invincible = 2;
        spawnParticles(ship.x, ship.y, '#ffd700', 12);
        run.noHitKills = 0; run.combo = 1;
        updateCombo();
      }
      return m.y < H + 40;
    });

    // Powerup pods
    pods = pods.filter(pod => {
      pod.t += dt;
      pod.x += pod.vx * dt;
      pod.y += pod.vy * dt;
      pod.x += Math.sin(pod.t * pod.bobFreq) * pod.bobAmp * dt;
      // Shoot to crack
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        if (b.enemy) continue;
        if (dist(b.x, b.y, pod.x, pod.y) < pod.r + 5) {
          bullets.splice(i, 1);
          spawnParticles(pod.x, pod.y, '#a855f7', 10);
          drops.push({ x: pod.x, y: pod.y, key: pod.puKey, isPowerup: true, r: 13, t: 0 });
          return false;
        }
      }
      return pod.y < H + 60 && pod.t < 20;
    });

    // Drop parabolic
    drops = drops.filter(d => {
      d.t += dt;

      // Pop
      if (d.t < 0.25) {
        d.vy = d.vy || -120;
        d.vx = d.vx || (Math.random() - 0.5) * 60;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.vy += 300 * dt; // gravity
      } else {
        // Homing arc
        const dx = ship.x - d.x;
        const dy = ship.y - d.y;
        const distToShip = Math.sqrt(dx*dx + dy*dy);
        const speed = 180 + (1 - Math.min(distToShip, 200) / 200) * 280;
        const nx = dx / (distToShip || 1);
        const ny = dy / (distToShip || 1);
        d.vx = d.vx || 0;
        d.vy = d.vy || 0;
        d.vx += (nx * speed - d.vx) * dt * 5;
        d.vy += (ny * speed - d.vy) * dt * 5;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
      }

      if (dist(d.x, d.y, ship.x, ship.y) < 22) {
        collectDrop(d);
        return false;
      }
      return d.y < H + 40 && d.t < 8; // expire after 8s
    });

    // Update particles
    particles = particles.filter(p => {
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.life -= dt; p.vy += 60 * dt;
      return p.life > 0;
    });

    // ── BOSS FIGHT UPDATE ─────────────────────────────────────────
    if (bossActive) {
      bossT += dt;

      if (boss.alive) {
        // Rotations
        Object.keys(boss.rot).forEach(k => boss.rot[k] += boss.rotSpeed[k]);
        if (boss.hitFlash > 0) boss.hitFlash -= dt;

        // Attack pattern by phase
        boss.shootTimer -= dt;
        const shootInterval = [2.8, 1.8, 1.0][boss.phase - 1];
        if (boss.shootTimer <= 0) {
          boss.shootTimer = shootInterval;
          if (boss.phase === 1) bossFireAimed(0.2);
          if (boss.phase === 2) { bossFireAimed(0.25); bossFireAimed(-0.25); }
          if (boss.phase === 3) bossFireSpiral(12, bossT * 0.3);
        }

        // Element attacks
        elementAttackTimer -= dt;
        if (elementAttackTimer <= 0) {
          elementAttackTimer = ELEMENT_ATTACK_INTERVAL[boss.phase - 1];
          triggerElementAttack();
        }

        // Sub-enemy spawning
        boss.spawnTimer -= dt;
        const spawnInterval = [6, 4, 2.5][boss.phase - 1];
        if (boss.spawnTimer <= 0) {
          boss.spawnTimer = spawnInterval;
          spawnSubEnemy();
        }

        // Mine drops (phase 2+)
        if (boss.phase >= 2) {
          boss.mineTimer -= dt;
          if (boss.mineTimer <= 0) {
            boss.mineTimer = 5 - boss.phase;
            mines.push({
              x: 30 + Math.random() * (W - 60),
              y: boss.y + 20,
              vy: 25 + Math.random() * 15,
              r: 11, t: 0, drifting: false,
            });
          }
        }

        // Player bullets → boss
        bullets = bullets.filter(b => {
          if (b.enemy) return true;
          b.x += b.vx * dt; b.y += b.vy * dt;
          if (dist(b.x, b.y, boss.x, boss.y) < boss.scale * 0.55) {
            boss.hp -= 5;
            boss.hitFlash = 0.08;
            run.score += 10;
            spawnParticles(b.x, b.y, '#ffffff', 3);
            updateScoreHUD();
            checkPhase();
            document.getElementById('boss-bar').style.width =
              Math.max(0, (boss.hp / BOSS_MAX_HP) * 100) + '%';
            if (boss.hp <= 0) onBossDefeated();
            return false;
          }
          // Player bullets → sub-enemies
          for (let i = subEnemies.length - 1; i >= 0; i--) {
            const e = subEnemies[i];
            if (dist(b.x, b.y, e.x, e.y) < e.r + 4) {
              e.hp--;
              spawnParticles(e.x, e.y, e.color, 5);
              if (e.hp <= 0) {
                run.score += 50;
                spawnParticles(e.x, e.y, e.color, 12);
                spawnFloatingText(e.x, e.y, '+50', e.color);
                subEnemies.splice(i, 1);
                updateScoreHUD();
              }
              return false;
            }
          }
          return b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
        });

        // Sub-enemy movement, shooting, and ship collision
        subEnemies = subEnemies.filter(e => {
          e.update(e, eDt);
          e.shootTimer -= dt;
          if (e.shootTimer <= 0 && boss.phase >= 2) {
            e.shootTimer = 3;
            const dx = ship.x - e.x, dy = ship.y - e.y;
            const len = Math.sqrt(dx*dx + dy*dy) || 1;
            bullets.push({ x:e.x, y:e.y, vx:dx/len*90, vy:dy/len*90,
              speed:90, dmg:1, enemy:true, r:2.5, color:e.color });
          }
          if (ship.invincible <= 0 && invincibleTimer <= 0 &&
              dist(e.x, e.y, ship.x, ship.y) < e.r + 12) {
            takeDamage(2);
            ship.invincible = 1.2;
            spawnParticles(ship.x, ship.y, '#d42b6a', 8);
            return false;
          }
          return e.y < H + 60;
        });
      }

      // Skip normal level-clear logic during boss fight
      return;
    }

    // End level sweep
    if (!endSweepFired && enemiesSpawned >= maxEnemies && levelTimer >= levelDuration - 2) {
      endSweepFired = true;
      triggerSweep({ silent: false });
    }

    // Level clear check
    if (levelTimer >= levelDuration && enemies.length === 0 && enemiesSpawned >= maxEnemies) {
      levelClear();
    }
  }

  // ── ENEMY TYPES ───────────────────────────────────────────────
  const ENEMY_TYPES = [
    // Scout — triangle rammer
    {
      type:'scout', r:12, hp:2, dmg:0, color:'#e8600a', speed:110,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.beginPath();
        ctx.moveTo(0, e.r);
        ctx.lineTo(-e.r * 0.85, -e.r);
        ctx.lineTo( e.r * 0.85, -e.r);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5;
        ctx.shadowColor = e.color; ctx.shadowBlur = 8;
        ctx.stroke(); ctx.restore();
      },
      update(e, dt) {
        const dx = ship.x - e.x, dy = ship.y - e.y;
        const d = Math.sqrt(dx*dx+dy*dy) || 1;
        e.x += dx/d * e.speed * dt;
        e.y += dy/d * e.speed * dt;
        e.angle = Math.atan2(dx, dy) + Math.PI;
      }
    },
    // Drone — rotating diamond shooter
    {
      type:'drone', r:14, hp:3, color:'#a855f7', speed:40,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.beginPath();
        ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0);
        ctx.lineTo(0, e.r); ctx.lineTo(-e.r, 0);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5;
        ctx.shadowColor = e.color; ctx.shadowBlur = 10;
        ctx.stroke();
        // inner diamond
        ctx.beginPath();
        const s = e.r * 0.45;
        ctx.moveTo(0,-s); ctx.lineTo(s,0); ctx.lineTo(0,s); ctx.lineTo(-s,0); ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 0.8; ctx.stroke();
        ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt;
        e.angle += dt * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          enemyShoot(e);
          // L1=4.5s, L4=3.0s, L8=1.6s
          e.shootTimer = 4.5 - run.level * 0.36;
        }
      }
    },
    // Swarmer — pentagon sine-wave rammer
    {
      type:'swarmer', r:8, hp:1, color:'#d42b6a', speed:90,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2 - Math.PI/2;
          const px = Math.cos(a) * e.r, py = Math.sin(a) * e.r;
          i === 0 ? ctx.moveTo(px,py) : ctx.lineTo(px,py);
        }
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.2;
        ctx.shadowColor = e.color; ctx.shadowBlur = 6;
        ctx.stroke(); ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt * 0.6;
        e.x += Math.sin(e.t * 3 + e.phase) * 55 * dt;
        e.x = Math.max(20, Math.min(W - 20, e.x));
        e.t += dt; e.angle += dt * 3;
      }
    },
    // Elite — hexagon with ring, spread shooter
    {
      type:'elite', r:18, hp:8, color:'#ffd700', speed:25,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        // outer hex
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i/6)*Math.PI*2; const px=Math.cos(a)*e.r; const py=Math.sin(a)*e.r;
          i===0?ctx.moveTo(px,py):ctx.lineTo(px,py);
        }
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.8;
        ctx.shadowColor = e.color; ctx.shadowBlur = 16;
        ctx.stroke();
        // inner ring
        ctx.beginPath();
        ctx.arc(0,0,e.r*0.5,0,Math.PI*2);
        ctx.strokeStyle = e.color; ctx.lineWidth = 0.8; ctx.stroke();
        ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt;
        e.angle += dt * 0.6;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          // spread shot
          [-0.4, 0, 0.4].forEach(offset => {
            bullets.push({ x:e.x, y:e.y, speed:130, vx:Math.sin(offset)*70, dmg:1, enemy:true, color:'#ffd700' });
          });
          // L1=5.5s, L4=3.7s, L8=1.9s
          e.shootTimer = 5.5 - run.level * 0.45;
        }
      }
    },
    // Armored — L-shape bouncer
    {
      type:'armored', r:16, hp:6, color:'#55ff22', speed:55,
      draw(ctx, e) {
        ctx.save(); ctx.translate(e.x, e.y); ctx.rotate(e.angle);
        ctx.strokeStyle = e.color; ctx.lineWidth = 2;
        ctx.shadowColor = e.color; ctx.shadowBlur = 8;
        ctx.beginPath();
        const s = e.r * 0.75;
        ctx.moveTo(-s, -s); ctx.lineTo(s, -s);
        ctx.lineTo(s, 0);   ctx.lineTo(0, 0);
        ctx.lineTo(0, s);   ctx.lineTo(-s, s);
        ctx.closePath();
        ctx.stroke(); ctx.restore();
      },
      update(e, dt) {
        e.y += e.speed * dt * 0.5;
        e.x += e.vx * dt;
        if (e.x < 24 || e.x > W - 24) { e.vx *= -1; }
        e.angle += dt * 0.8;
      }
    },
  ];

  function spawnEnemy() {
    const level = run.level;
    // Weight table shifts with level
    const weights = [
      level < 3 ? 6 : 3,                          // scout 
      level < 3 ? 0 : level < 5 ? 1 : 3,          // drone 
      level < 5 ? 3 : 5,                          // swarmer
      level < 4 ? 0 : level < 6 ? 2 : 4,          // elite 
      level > 2 ? 2 : 0,                          // armored
    ];
    const total = weights.reduce((a,b) => a+b, 0);
    let r = Math.random() * total;
    let typeIdx = 0;
    for (let i = 0; i < weights.length; i++) { r -= weights[i]; if (r <= 0) { typeIdx = i; break; } }

    const tmpl = ENEMY_TYPES[typeIdx];
    const e = {
      ...tmpl,
      x: 30 + Math.random() * (W - 60),
      y: -30,
      angle: 0,
      t: 0,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 80,
      // Delay first shot
      shootTimer: (3 - run.level * 0.2) + Math.random() * 2,
      hp: tmpl.hp + Math.floor(run.level * 0.5),
    };
    enemies.push(e);
  }

  function updateEnemy(e, dt) {
    const tmpl = ENEMY_TYPES.find(t => t.type === e.type);
    if (tmpl) tmpl.update(e, dt);
  }

  function enemyShoot(e) {
    const dx = ship.x - e.x, dy = ship.y - e.y;
    const d = Math.sqrt(dx*dx+dy*dy) || 1;
    bullets.push({ x:e.x, y:e.y, speed:120, vx: dx/d*120, vy: dy/d*120, dmg:1, enemy:true, aimed:true, color:'#a855f7' });
  }

  function killEnemy(e) {
    const base = e.type === 'elite' ? 200 : e.type === 'armored' ? 150 : 100;
    run.noHitKills++;
    if (run.noHitKills >= 10) { run.noHitKills = 0; run.combo = Math.min(run.combo + 1, 5); }
    const pts = base * run.combo;
    run.score += pts;
    spawnFloatingText(e.x, e.y, '+' + pts, e.color);
    updateScoreHUD();
    updateCombo();
    // Paycheck
    run.credits += Math.floor(pts * 0.02);
    // Drop chance
    if (Math.random() < 0.42 + run.level * 0.025) spawnDrop(e.x, e.y, e.type === 'elite');
    spawnParticles(e.x, e.y, e.color, 10);
  }

  function spawnDrop(x, y, elite) {
    const keys = Object.keys(STRINGS.items);
    const key = elite
      ? ['Mg','Ti','Si'][Math.floor(Math.random()*3)]
      : keys[Math.floor(Math.random() * keys.length)];
    drops.push({ x, y, key, r:10, t:0 });
  }

  function collectDrop(d) {
    if (d.isPowerup) {
      // Try to fill
      const activePuCount = run.powerups.filter(k => k != null).length;
      if (activePuCount < run.reserveMax) {
        // Find first null/empty slot; if none, push
        const emptyIdx = run.powerups.indexOf(null);
        if (emptyIdx >= 0) run.powerups[emptyIdx] = d.key;
        else run.powerups.push(d.key);
        const pu = STRINGS.powerups[d.key];
        logPickup(`${pu.sym} ${pu.name}`);
        updatePowerupBar();
      } else {
        // Reserve full — auto-stash to inventory
        run.inventory[d.key] = Math.min(99, (run.inventory[d.key] || 0) + 1);
        const pu = STRINGS.powerups[d.key];
        logPickup(`STASHED ${pu.name}`);
        flashStash();
      }
    } else {
      run.inventory[d.key] = Math.min(99, (run.inventory[d.key] || 0) + 1);
      const item = STRINGS.items[d.key];
      logPickup(`${item.sym} ${item.name}`);
    }
    spawnParticles(d.x, d.y, d.isPowerup ? '#a855f7' : '#00f5ff', 6);
  }

  function flashStash() {
    const el = document.getElementById('pu-stash');
    if (!el) return;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 400);
  }

  function spawnMine() {
    const drifting = Math.random() < 0.45;
    mines.push({
      x: 30 + Math.random() * (W - 60),
      y: -20, r: 11, drifting, t: Math.random() * 10
    });
  }

function spawnPod() {
    const lvl = run ? run.level : 1;
    // ── Pod drop pool — weighted by level ──────────────────────
    const pool = [];
    function add(key, weight) { for (let i = 0; i < weight; i++) pool.push(key); }
    // Compounds
    add('MAGNIUM',      6);
    add('LITHEBRYL',    6);
    add('NITROKALIUM',  6);
    add('CARBOSILICUM', 6);
    // More Compounds
    if (lvl >= 2) { add('TITANE', 4); add('ALKALIUM', 4); add('AZOLITHION', 4); add('GAMMITE', 4); }
    // Alloys
    if (lvl >= 4) {
      add('AXORITE',  3);
      add('PHIOMEGA', 3);
      add('DELTALITE', 3);
      add('OMEGITE',  1);
    }
    const puKey = pool[Math.floor(Math.random() * pool.length)];
    const fromLeft = Math.random() < 0.5;
    pods.push({
      x: fromLeft ? -20 : W + 20,
      y: 60 + Math.random() * (H * 0.35),
      vx: fromLeft ? 38 : -38,
      vy: 22 + Math.random() * 18,
      bobFreq: 1.2 + Math.random() * 0.6,
      bobAmp: 18 + Math.random() * 12,
      r: 16,
      puKey,
      t: 0,
    });
  }

  function fireBullet() {
    const bx = ship.x, by = ship.y - 10;
    // aimAngle: 0 = straight up, negative = left, positive = right
    // Convert to canvas direction: straight up is -PI/2 in standard coords,
    // so bullet direction = aimAngle - PI/2  (i.e. adx=sin(aimAngle), ady=-cos(aimAngle))
    const adx = Math.sin(aimAngle);
    const ady = -Math.cos(aimAngle);
    if (run.bulletType === '3spread') {
      [-0.15, 0, 0.15].forEach(offset => {
        const a = Math.atan2(ady, adx) + offset;
        const spd = 520;
        bullets.push({ x:bx, y:by, speed:spd, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, dmg:1, enemy:false, color:'#a855f7' });
      });
    } else if (run.bulletType === '12spread') {
      for (let i = 0; i < 12; i++) {
        const a = (i/12)*Math.PI*2;
        const spd = 400;
        bullets.push({ x:bx, y:by, speed:spd, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, dmg:1, enemy:false, color:'#d42b6a' });
      }
    } else {
      const spd = 560;
      bullets.push({ x:bx, y:by, speed:spd, vx:adx*spd, vy:ady*spd, dmg:1, enemy:false, color:'#00f5ff' });
    }
  }

  function takeDamage(amt) {
    run.shield = Math.max(0, run.shield - amt);
    run.noHitKills = 0; run.combo = 1;
    updateShieldBar(); updateCombo();
    if (run.shield <= 0) { state = 'dead'; onDeath(); }
  }

  function onDeath() {
    cancelAnimationFrame(animId);
    if (run.score > save.highScore) { save.highScore = run.score; writeSave(); }
    document.getElementById('death-score').textContent = 'SCORE  ' + run.score.toLocaleString();
    document.getElementById('overlay-death').classList.add('active');
    document.getElementById('hud-best').textContent = save.highScore.toLocaleString();
  }

  function levelClear() {
    state = 'clear';
    cancelAnimationFrame(animId);
    const paycheck = 200 + run.level * 50;
    run.credits += paycheck;
    document.getElementById('clear-sub').textContent = STRINGS.ui.levelComplete(run.level);
    document.getElementById('clear-score').textContent = `SCORE  ${run.score.toLocaleString()}  +${paycheck}¢`;
    document.getElementById('overlay-clear').classList.add('active');
  }

  function onBossDefeated() {
    boss.alive   = false;
    bossDefeated = true;
    bossActive   = false;
    state        = 'clear'; // stops update() from running, render() still ticks

    // Explosion cascade — fires over 1.44s while render loop is still alive
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        spawnParticles(
          boss.x + (Math.random() - 0.5) * 120,
          boss.y + (Math.random() - 0.5) * 80,
          PHASE_COLORS[Math.floor(Math.random() * 3)], 30
        );
      }, i * 120);
    }

    // Score bonus
    run.score += 5000;
    if (run.score > save.highScore) { save.highScore = run.score; writeSave(); }

    // Hide boss HUD
    document.getElementById('boss-hud').classList.remove('active');

    // Populate and show win overlay — after cascade finishes
    document.getElementById('boss-clear-score').textContent =
      'FINAL SCORE  ' + run.score.toLocaleString();
    setTimeout(() => {
      document.getElementById('overlay-boss-clear').classList.add('active');
      cancelAnimationFrame(animId); // now safe to stop the loop
    }, 1800);

    updateScoreHUD();
  }

  // ── SWEEP ───────────────────────────────────────────────────────
  // opts.silent = true suppresses the log message
  function triggerSweep(opts = {}) {
  const silent = opts.silent || false;

  enemies.forEach(e => spawnParticles(e.x, e.y, e.color, 8));
  mines.forEach(m => spawnParticles(m.x, m.y, '#ff2020', 6));

  // Crack pods into collectable drops rather than destroying them
  pods.forEach(pod => {
    drops.push({ x: pod.x, y: pod.y, key: pod.puKey, isPowerup: true, r: 13, t: 0 });
    spawnParticles(pod.x, pod.y, '#a855f7', 10);
  });
  pods = [];

  // Collect any already-cracked in-flight drops
  drops.forEach(d => { if (d.isPowerup) collectDrop(d); });
	  
  if (bossActive && boss && boss.alive) {
    const bombDmg = opts.bossDmg || 30;
    boss.hp -= bombDmg;
    boss.hitFlash = 0.3; 
    spawnParticles(boss.x, boss.y, '#ffd700', 40);
    document.getElementById('boss-bar').style.width =
      Math.max(0, (boss.hp / BOSS_MAX_HP) * 100) + '%';
    if (boss.hp <= 0) onBossDefeated();
  }
	  
  enemies = [];
  mines   = [];
  bullets = [];
  subEnemies = [];
	  

  if (!silent) {
    spawnParticles(W / 2, H / 2, '#ffd700', 60);
    spawnFloatingText(W / 2, H / 2 - 40, 'SECTOR SWEPT', '#ffd700');
    logPickup('SECTOR SWEPT');
  }
}
 // ── BOMB SHAKE ───────────────────────────────────────────────────
function screenShake(magnitude, duration) {
  shakeIntensity = magnitude;
  shakeDuration  = duration;
}
 // ── POWERUP TRIGGERS ─────────────────────────────────────────────	
  function triggerPowerup(idx) {
    const pu = run.powerups[idx];
    if (!pu) return;
    if (pu === 'OMEGITE') {
  	  triggerSweep({ silent: true });
	  spawnParticles(W / 2, H / 2, '#d42b6a', 40);
 	  spawnParticles(W / 2, H / 2, '#ffd700', 40);
	  spawnParticles(W / 2, H / 2, '#a855f7', 40);
	  spawnFloatingText(W / 2, H / 2 - 50, 'OMEGITE', '#d42b6a');
	  screenShake(10, 0.6);
	  logPickup('OMEGITE DEPLOYED');
    } else if (pu === 'MAGNIUM') {
 	 // Screen-wide AOE — 5 damage to all enemies, no effect on mines or pods
  	const MAG_DMG = 5;
  	enemies.forEach(e => {
    e.hp -= MAG_DMG;
    spawnParticles(e.x, e.y, e.color, 8);
    if (e.hp <= 0) {
      run.score += 100;
      spawnParticles(e.x, e.y, e.color, 14);
      spawnFloatingText(e.x, e.y - 10, '+100', e.color);
      updateScoreHUD();
  	  }
 	 });
	  enemies = enemies.filter(e => e.hp > 0);
	  spawnParticles(W / 2, H / 2, '#a855f7', 50);
	  spawnFloatingText(W / 2, H / 2 - 30, 'MAGNIUM', '#a855f7');
	  screenShake(4, 0.4); 
	  logPickup('MAGNIUM DEPLOYED');
    } else if (pu === 'LITHEBRYL') {
      run.shield = run.shieldMax; updateShieldBar(); logPickup('SHIELD RESTORED');
    } else if (pu === 'NITROKALIUM') {
      run.ammoRefillRate *= 2;
      const capturedRun = run;
  	  setTimeout(() => { capturedRun.ammoRefillRate = Math.round(capturedRun.ammoRefillRate / 2); }, 10000);
  	  spawnFloatingText(W / 2, H / 2 - 30, 'NITROKALIUM', '#00f5ff');
  	  logPickup('DOUBLE AMMO REFILL');
	} else if (pu === 'CARBOSILICUM') {
      run.combo = Math.max(run.combo, 2); logPickup('×2 ACTIVE');
    } else if (pu === 'TITANE') {
      invincibleTimer = 10;
      spawnFloatingText(W / 2, H / 2 - 30, 'TITANE', '#5eead4');
      logPickup('INVINCIBLE 10s');
    } else if (pu === 'ALKALIUM') {
      piercingBullets = true;
      spawnFloatingText(W / 2, H / 2 - 30, 'ALKALIUM', '#00f5ff');
      logPickup('PIERCING ACTIVE');
    } else if (pu === 'AXORITE') {
      run.shield = run.shieldMax; updateShieldBar();
      run.ammo   = run.ammoMax;  updateAmmoBar();
      spawnFloatingText(W / 2, H / 2 - 30, 'AXORITE', '#ffd700');
      logPickup('FULL RESTORE');
    } else if (pu === 'PHIOMEGA') {
      run.bulletType = '12spread';
      spawnFloatingText(W / 2, H / 2 - 30, 'PHIOMEGA', '#a855f7');
      logPickup('BURSTSHOT ACTIVE');
    } else if (pu === 'AZOLITHION') {
      run.bulletType = '3spread';
      spawnFloatingText(W / 2, H / 2 - 30, 'AZOLITHION', '#00f5ff');
      logPickup('MULTISHOT ACTIVE');
    } else if (pu === 'GAMMITE') {
      noAmmoCostTimer = 10;
      spawnFloatingText(W / 2, H / 2 - 30, 'GAMMITE', '#ffd700');
      logPickup('NO AMMO COST');
    } else if (pu === 'DELTALITE') {
      timeDilationTimer = 15;
      spawnFloatingText(W / 2, H / 2 - 30, 'DELTALITE', '#a855f7');
      logPickup('TIME DILATION');
    }
    run.powerups.splice(idx, 1);
    updatePowerupBar();
  }

  // ── PARTICLES & FLOATERS ─────────────────────────────────────
  function spawnParticles(x, y, color, n) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const spd = 40 + Math.random() * 120;
      particles.push({ x, y, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, life:0.4+Math.random()*0.4, color, size:1.5+Math.random()*2 });
    }
  }

  let floaters = [];
  function spawnFloatingText(x, y, text, color) {
    floaters.push({ x, y, text, color, life:1.2, vy:-60 });
  }
  floaters = [];

  // ── RENDER ────────────────────────────────────────────────────
 function render(dt) {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#050510';
  ctx.fillRect(0, 0, W, H);  // ← background stays fixed, outside shake

  ctx.save();
  if (shakeDuration > 0) {
    shakeDuration = Math.max(0, shakeDuration - dt);
    const s = shakeIntensity * (shakeDuration / 0.6);
    ctx.translate(
      (Math.random() * 2 - 1) * s,
      (Math.random() * 2 - 1) * s
    );
  }

  drawWaveform();
  drawPods();
  drawDrops();
  drawMines();
  drawBullets();
  drawEnemies();
  if (bossActive || bossDefeated) drawBoss();
  if (bossActive) drawSubEnemies();
  drawShip();
  drawParticles();
  drawFloaters();

  ctx.restore();
}

  // Per-level scene config: [skyTop, skyBottom, sunColor, sunGlow, gridColor, mountainColor]
  const LEVEL_PALETTES = [
    { skyT:'#0d0020', skyB:'#1a0040', sun:'#ff6ec7', sunG:'#d42b6a', grid:'#2255ff', mtn:'#1133cc' }, // 1
    { skyT:'#0a0025', skyB:'#1e0050', sun:'#ff8c42', sunG:'#ff4500', grid:'#00ccff', mtn:'#0066cc' }, // 2
    { skyT:'#100015', skyB:'#300030', sun:'#d42b6a', sunG:'#cc0055', grid:'#cc44ff', mtn:'#8800cc' }, // 3
    { skyT:'#1a0800', skyB:'#3d1200', sun:'#ffd700', sunG:'#ff8c00', grid:'#ff6b35', mtn:'#cc3300' }, // 4
    { skyT:'#200010', skyB:'#450020', sun:'#ff4500', sunG:'#ff0000', grid:'#d42b6a', mtn:'#cc0044' }, // 5
    { skyT:'#05001a', skyB:'#150040', sun:'#a855f7', sunG:'#6600cc', grid:'#8800ff', mtn:'#550099' }, // 6
    { skyT:'#001510', skyB:'#003322', sun:'#00ff9f', sunG:'#00cc66', grid:'#00ffcc', mtn:'#009966' }, // 7
    { skyT:'#1a0000', skyB:'#400000', sun:'#ffffff', sunG:'#ff0040', grid:'#ff0040', mtn:'#990020' }, // 8
  ];

  // Seeded terrain heights so they don't shift every frame
  let terrainSeed = [];
  function initTerrain() {
    terrainSeed = [];
    for (let i = 0; i < 64; i++) terrainSeed.push(Math.random());
  }
  initTerrain();

  function terrainHeight(xi, lvl) {
    // Multi-octave height from seed array — stable per session
    const s = terrainSeed;
    const base = s[xi % 64] * 0.5 + s[(xi * 7) % 64] * 0.3 + s[(xi * 13) % 64] * 0.2;
    const amp = 0.28 + lvl * 0.055; // peaks grow with level
    return base * amp;
  }

  function drawSynthwaveScene() {
    const lvl  = run ? run.level : 1;
    const pal  = LEVEL_PALETTES[(lvl - 1) % LEVEL_PALETTES.length];

    // ── WAVEFORM — full canvas, flat centre, wavy sides ─
    const rows    = 38;
    const rowSpan = H / rows;
    const sideW   = W * 0.30;
    const c1 = hexToRgb(pal.grid);
    const c2 = hexToRgb(pal.sun);

    for (let r = 0; r < rows; r++) {
      const baseY = (r * rowSpan + rowSpan * 0.5 + waveOffset) % H;
      const screenPct = baseY / H;  // 0=top, 1=bottom — drives ALL visual properties
      // amp/freq/phase use screenPct (actual Y on screen), NOT row index r.
      // This makes lines near each other on screen always look similar,
      // so the wrap seam is seamless — no jump from flat to wavy rows.
      const amp   = (4 + screenPct * rows * 1.4 + lvl * 0.8) * (0.4 + screenPct * 0.6);
      const freq  = 0.022 + screenPct * rows * 0.001;
      const cycle  = waveOffset / H;
      const localT = cycle < 1 ? cycle : 2 - cycle;
      const ph    = localT * 30 * 0.5 + screenPct * rows * 0.3;
      const ph2   = localT * 30 * 0.3 + screenPct * rows * 0.18;

      const rr = Math.round(c1.r + (c2.r - c1.r) * screenPct);
      const gg = Math.round(c1.g + (c2.g - c1.g) * screenPct);
      const bb = Math.round(c1.b + (c2.b - c1.b) * screenPct);
      const alpha = 0.14 + screenPct * 0.38;

      ctx.strokeStyle = `rgba(${rr},${gg},${bb},${alpha})`;
      ctx.lineWidth = 0.85;
      ctx.beginPath();
      for (let px = 0; px <= W; px += 2) {
        let blend;
        if (px <= sideW) {
          const t = 1 - px / sideW;
          blend = 0.5 - 0.5 * Math.cos(t * Math.PI);
        } else if (px >= W - sideW) {
          const t = (px - (W - sideW)) / sideW;
          blend = 0.5 - 0.5 * Math.cos(t * Math.PI);
        } else {
          blend = 0;
        }
        const wave = Math.sin(px * freq + ph)             * amp
                   + Math.sin(px * freq * 2.1 + ph2)      * amp * 0.4
                   + Math.sin(px * freq * 0.5 + ph * 0.7) * amp * 0.2;
        const py = baseY - wave * blend;
        px === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
  }

  // Keep getWaveY for any legacy callers (not used in new renderer)
  function getWaveY(x, row, offset) {
    const lvl = run ? run.level : 1;
    const amp  = 8 + row * 2.8 + lvl * 1.2;
    const freq = 0.015 + row * 0.0012;
    const ph   = (waveT * 0.5 + row * 0.28);
    const ph2  = (waveT * 0.3 + row * 0.18);
    return  Math.sin(x * freq + ph) * amp
          + Math.sin(x * freq * 2.1 + ph2) * amp * 0.4
          + Math.sin(x * freq * 0.5 + ph * 0.7) * amp * 0.2;
  }

  function drawWaveform() {
    drawSynthwaveScene();
  }

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return {r,g,b};
  }

  function drawShip() {
    const x = ship.x, y = ship.y;
    const blink = ship.invincible > 0 && Math.sin(Date.now() * 0.02) > 0;
    if (blink) return;
    ctx.save();
    ctx.translate(x, y);
    // Rotate entire ship so nose points in fire direction
    ctx.rotate(aimAngle);
    ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 16;

    // Main body
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(-12, 8);
    ctx.lineTo(-5, 4);
    ctx.lineTo(0, 10);
    ctx.lineTo(5, 4);
    ctx.lineTo(12, 8);
    ctx.closePath();
    ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 1.5; ctx.stroke();

    // Wing accents
    ctx.beginPath();
    ctx.moveTo(-12, 8); ctx.lineTo(-18, 2); ctx.lineTo(-10, -2);
    ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12, 8); ctx.lineTo(18, 2); ctx.lineTo(10, -2);
    ctx.stroke();

    // Engine glow
    ctx.beginPath();
    ctx.arc(0, 10, 3 + Math.sin(Date.now()*0.01)*1, 0, Math.PI*2);
    ctx.fillStyle = '#d42b6a'; ctx.fill();

    ctx.restore();

    // Titane invincibility ring
    if (invincibleTimer > 0) {
      const pulse = 0.5 + 0.5 * Math.sin(Date.now() * 0.008);
      const fade  = Math.min(1, invincibleTimer / 2); // fade out in last 2s
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, 28 + pulse * 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(94,234,212,${0.55 * fade + 0.2 * pulse})`;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#5eead4';
      ctx.shadowBlur = 14 * pulse;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 22 + pulse * 3, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(94,234,212,${0.25 * fade})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawBullets() {
    bullets.forEach(b => {
      ctx.save();
      if (b.enemy) {
        ctx.shadowColor = b.color || '#a855f7'; ctx.shadowBlur = 6;
        ctx.beginPath(); ctx.arc(b.x, b.y, 3, 0, Math.PI*2);
        ctx.fillStyle = b.color || '#a855f7'; ctx.fill();
      } else {
        const isPiercing = piercingBullets;
        const bColor = isPiercing ? '#ffffff' : b.color;
        ctx.shadowColor = isPiercing ? '#00f5ff' : b.color;
        ctx.shadowBlur  = isPiercing ? 16 : 8;
        ctx.fillStyle = bColor;

        if (run.bulletType === 'laser') {
          ctx.fillRect(b.x - 2, b.y - 12, 4, 24);
        } else if (run.bulletType === '12spread' || isPiercing) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, isPiercing ? 4 : 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const angle = Math.atan2(b.vy, b.vx) + Math.PI / 2;
          const bW = 3, bH = 10, bR = 1.5;
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.roundRect(-bW/2, -bH/2, bW, bH, bR);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.restore();
    });
  }

  function drawEnemies() {
    enemies.forEach(e => {
      const tmpl = ENEMY_TYPES.find(t => t.type === e.type);
      if (tmpl) { ctx.save(); tmpl.draw(ctx, e); ctx.restore(); }
    });
  }

  function drawBoss() {
    if (!boss) return; // not initialised yet

    // Project all 16 vertices through current rotations → screen coords
    const verts2D = BASE_VERTS.map(v => {
      let p = [...v];
      p = rot4(p, 0, 1, boss.rot.xy);
      p = rot4(p, 0, 2, boss.rot.xz);
      p = rot4(p, 0, 3, boss.rot.xw);
      p = rot4(p, 1, 2, boss.rot.yz);
      p = rot4(p, 1, 3, boss.rot.yw);
      p = rot4(p, 2, 3, boss.rot.zw);
      const p3 = proj4to3(p, 2.2);
      return proj3to2(p3, 3.5, boss.scale, boss.x, boss.y);
    });

    const phaseColor  = PHASE_COLORS[boss.phase - 1];
    const flashAlpha  = boss.hitFlash > 0 ? 0.9 : 1;
    const hpPct       = boss.hp / BOSS_MAX_HP;

    // Depth-sort edges by average 3D z of their midpoint
    const sortedEdges = EDGES.map(([a, b]) => {
      const za = proj4to3(applyRots(BASE_VERTS[a]), 2.2)[2];
      const zb = proj4to3(applyRots(BASE_VERTS[b]), 2.2)[2];
      return { a, b, z: (za + zb) / 2 };
    }).sort((x, y) => x.z - y.z);

    ctx.save();

    // Draw edges
    sortedEdges.forEach(({ a, b, z }) => {
      const [x1, y1] = verts2D[a];
      const [x2, y2] = verts2D[b];
      const depthAlpha = 0.25 + 0.75 * ((z + 1.5) / 3);
      const alpha = Math.min(1, depthAlpha * flashAlpha) * (0.5 + hpPct * 0.5);
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.strokeStyle = boss.hitFlash > 0
        ? `rgba(255,255,255,${alpha})`
        : phaseColor + Math.round(alpha * 255).toString(16).padStart(2, '0');
      ctx.lineWidth   = boss.hitFlash > 0 ? 2 : (0.8 + depthAlpha * 0.8);
      ctx.shadowColor = phaseColor;
      ctx.shadowBlur  = 10 + depthAlpha * 8;
      ctx.stroke();
    });

    // Draw vertices as bright nodes
    verts2D.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle   = boss.hitFlash > 0 ? '#ffffff' : phaseColor;
      ctx.shadowColor = phaseColor; ctx.shadowBlur = 12;
      ctx.fill();
    });

    // Phase 3: destabilising ghost tesseract, offset and counter-rotating
    if (boss.phase === 3) {
      const ghostVerts = BASE_VERTS.map(v => {
        let p = [...v];
        p = rot4(p, 0, 3, -boss.rot.xw * 1.4);
        p = rot4(p, 1, 3, -boss.rot.yw * 1.2);
        p = rot4(p, 2, 3,  boss.rot.zw * 0.8);
        const p3 = proj4to3(p, 2.2);
        return proj3to2(p3, 3.5, boss.scale * 0.7,
          boss.x + Math.sin(bossT * 0.8) * 15,
          boss.y + Math.cos(bossT * 0.6) * 10);
      });
      EDGES.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(ghostVerts[a][0], ghostVerts[a][1]);
        ctx.lineTo(ghostVerts[b][0], ghostVerts[b][1]);
        ctx.strokeStyle = 'rgba(255,45,120,0.18)';
        ctx.lineWidth   = 0.6;
        ctx.shadowBlur  = 0;
        ctx.stroke();
      });
    }

    ctx.restore();
  }

  function drawSubEnemies() {
    subEnemies.forEach(e => {
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.shadowColor = e.color;
      ctx.shadowBlur  = 10;

      if (e.type === 'orbital') {
        // Diamond
        ctx.beginPath();
        ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0);
        ctx.lineTo(0,  e.r); ctx.lineTo(-e.r, 0);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5; ctx.stroke();
      } else {
        // Diver — downward-pointing triangle
        ctx.beginPath();
        ctx.moveTo(0, e.r);
        ctx.lineTo(-e.r * 0.8, -e.r);
        ctx.lineTo( e.r * 0.8, -e.r);
        ctx.closePath();
        ctx.strokeStyle = e.color; ctx.lineWidth = 1.5; ctx.stroke();
      }

      ctx.restore();
    });
  }

  function drawMines() {
    mines.forEach(m => {
      ctx.save(); ctx.translate(m.x, m.y);
      ctx.shadowColor = '#ff0000'; ctx.shadowBlur = 18;
      // Black filled circle
      ctx.beginPath(); ctx.arc(0,0,m.r,0,Math.PI*2);
      ctx.fillStyle = '#000'; ctx.fill();
      // Red crosshair outline
      ctx.strokeStyle = '#ff2020'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(0,0,m.r,0,Math.PI*2); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-m.r,0); ctx.lineTo(m.r,0);
      ctx.moveTo(0,-m.r); ctx.lineTo(0,m.r);
      ctx.stroke();
      // Inner X
      const s = m.r*0.55;
      ctx.beginPath();
      ctx.moveTo(-s,-s); ctx.lineTo(s,s);
      ctx.moveTo(s,-s); ctx.lineTo(-s,s);
      ctx.strokeStyle = 'rgba(255,30,30,0.5)'; ctx.stroke();
      ctx.restore();
    });
  }

  function drawDrops() {
    drops.forEach(d => {
      ctx.save(); ctx.translate(d.x, d.y + Math.sin(d.t * 2) * 3);
      if (d.isPowerup) {
        // Pulsing purple hexagon for powerup drops
        const pulse = 0.7 + 0.3 * Math.sin(d.t * 6);
        ctx.shadowColor = '#a855f7'; ctx.shadowBlur = 14 * pulse;
        ctx.strokeStyle = `rgba(168,85,247,${0.7 + 0.3 * pulse})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
          const px = Math.cos(a) * d.r, py = Math.sin(a) * d.r;
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.stroke();
         // Symbol inside
        const pu = STRINGS.powerups[d.key];
        ctx.font = 'bold 11px Nova Square, monospace';
        ctx.fillStyle = `rgba(168,85,247,${pulse})`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(pu ? pu.sym : '?', 0, 0);
      } else {
        // Cyan circle for element items
        ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(0, 0, d.r, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 1; ctx.stroke();
        ctx.font = 'bold 9px Nova Square, monospace';
        ctx.fillStyle = '#00f5ff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        const item = STRINGS.items[d.key];
        ctx.fillText(item ? item.sym : '?', 0, 0);
      }
      ctx.restore();
    });
  }

  function drawPods() {
    pods.forEach(pod => {
      ctx.save();
      ctx.translate(pod.x, pod.y);
      const pulse = 0.6 + 0.4 * Math.sin(pod.t * 3);
      // Outer hex — cyan glow
      ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 18 * pulse;
      ctx.strokeStyle = `rgba(0,245,255,${0.6 + 0.4 * pulse})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const px = Math.cos(a) * pod.r, py = Math.sin(a) * pod.r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.stroke();
      // Inner hex (smaller, rotated 30°)
      ctx.strokeStyle = `rgba(0,245,255,0.3)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const px = Math.cos(a) * pod.r * 0.55, py = Math.sin(a) * pod.r * 0.55;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.stroke();
      // Powerup symbol
      const pu = STRINGS.powerups[pod.puKey];
      ctx.font = 'bold 13px Nova Square, monospace';
      ctx.fillStyle = `rgba(0,245,255,${0.8 + 0.2 * pulse})`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 8;
      ctx.fillText(pu ? pu.sym : '?', 0, 0);
      ctx.restore();
    });
  }

  function drawParticles() {
    particles.forEach(p => {
      const a = p.life / 0.8;
      ctx.save();
      ctx.globalAlpha = Math.min(1, a);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fillStyle = p.color; ctx.fill();
      ctx.restore();
    });
  }

  function drawFloaters() {
    floaters = floaters.filter(f => {
      f.y += f.vy * 0.016; f.life -= 0.016;
      ctx.save();
      ctx.globalAlpha = Math.min(1, f.life * 2);
      ctx.font = 'bold 11px Nova Square, monospace';
      ctx.fillStyle = f.color; ctx.textAlign = 'center';
      ctx.shadowColor = f.color; ctx.shadowBlur = 6;
      ctx.fillText(f.text, f.x, f.y);
      ctx.restore();
      return f.life > 0;
    });
  }

  // ── HUD UPDATES ───────────────────────────────────────────────
  function updateHUD() {
    updateScoreHUD(); updateShieldBar(); updateAmmoBar(); updateCombo(); updatePowerupBar();
    document.getElementById('hud-level').textContent = run.level;
    document.getElementById('hud-best').textContent = save.highScore.toLocaleString();
  }
  function updateScoreHUD() {
    document.getElementById('hud-score').textContent = run.score.toLocaleString();
    const menuHs = document.getElementById('menu-highscore');
    if (menuHs) menuHs.textContent = save.highScore.toString().padStart(6,'0');
  }
  function updateShieldBar() {
    document.getElementById('shield-bar').style.width = (run.shield/run.shieldMax*100)+'%';
  }
  function updateAmmoBar() {
    document.getElementById('ammo-bar').style.width = (run.ammo/run.ammoMax*100)+'%';
  }
  function updateCombo() {
    const el = document.getElementById('hud-combo');
    if (run.combo > 1) { el.textContent = '× ' + run.combo; el.classList.add('active'); }
    else { el.classList.remove('active'); }
  }
  function updatePowerupBar() {
    const slotsEl = document.getElementById('pu-slots');
    if (!slotsEl || !run) return;
    slotsEl.innerHTML = '';
    for (let i = 0; i < run.reserveMax; i++) {
      const slot = document.createElement('div');
      const pu = run.powerups[i] ? STRINGS.powerups[run.powerups[i]] : null;
      slot.className = 'pu-slot' + (pu ? ' filled' : '');
      slot.dataset.idx = i;
      slot.innerHTML = pu
        ? `<span class="pu-slot-sym">${pu.sym}</span><span class="pu-slot-name">${pu.name}</span>`
        : `<span class="pu-slot-name">EMPTY</span>`;
      slotsEl.appendChild(slot);
    }
    const stashEl = document.getElementById('pu-stash');
    if (stashEl) {
      const puKeys = Object.keys(STRINGS.powerups);
      const stashCount = puKeys.reduce((n, k) => n + (run.inventory[k] || 0), 0);
      stashEl.textContent = stashCount > 0 ? `STASH  [${stashCount}]` : 'STASH';
    }
  }

  function logPickup(text) {
    const log = document.getElementById('pickup-log');
    const el = document.createElement('div');
    el.className = 'pickup-entry';
    el.textContent = '+ ' + text;
    log.appendChild(el);
    if (log.children.length > 5) log.removeChild(log.firstChild);
    setTimeout(() => el.remove(), 3100);
  }

  function dist(x1,y1,x2,y2) { const dx=x2-x1,dy=y2-y1; return Math.sqrt(dx*dx+dy*dy); }

  return { init, startLevel, startBoss, resize, triggerPowerup,
           togglePause,
           triggerSweepPublic: triggerSweep,
           logPickupPublic: logPickup,
           flashStashPublic: flashStash,
           updatePowerupBarPublic: updatePowerupBar };
})();

// ═══════════════════════════════════════════════════════════════
// SHOP
// ═══════════════════════════════════════════════════════════════
let shopMode = 'buy';
let selectedCardKey = null;
const craftProgress = {}; // puKey → ingredient keys already slotted; reset on tab switch

// ── Staging queue ────────────────────────────────────────────────
// Each entry: { key, tier, qty }
const stagingQueue = [];

function stagingCost(key, tier) {
  if (shopMode === 'buy')  return tier === 'element' ? 80 : 150;
  if (shopMode === 'sell') {
    const SELL = { element:40, compound:90, alloy:130 };
	return (tier === 'alloy' && key === 'OMEGITE') ? 250 : (SELL[tier] || 40);
  }
  return 0;
}

function renderStaging() {
  const list  = document.getElementById('staging-list');
  const total = document.getElementById('staging-total');
  if (!list) return;

  list.innerHTML = '';
  if (stagingQueue.length === 0) {
    if (total) total.textContent = '';
    return;
  }

  stagingQueue.forEach((entry, idx) => {
    const pu   = STRINGS.powerups[entry.key];
    const item = STRINGS.items[entry.key];
    const sym  = pu ? pu.sym : item ? item.sym : '?';
    const name = pu ? pu.name : item ? item.name : entry.key;
    const cost = stagingCost(entry.key, entry.tier);

    // For craft entries, check if another batch of ingredients is available
    const canAddMore = entry.ingredients
      ? canAutoConsume(entry.key, entry.tier)
      : false;

    const row = document.createElement('div');
    row.className = 'staging-row';
    row.innerHTML =
      `<span class="staging-row-sym">${sym}</span>` +
      `<span class="staging-row-name">${name}</span>` +
      `<span class="staging-row-qty">` +
        `<button class="staging-qty-btn" data-idx="${idx}" data-dir="-1">−</button>` +
        `<span class="staging-qty-val">${entry.qty}</span>` +
        `<button class="staging-qty-btn" data-idx="${idx}" data-dir="1"` +
          (entry.ingredients && !canAddMore ? ' disabled style="opacity:0.25"' : '') +
        `>+</button>`;
    list.appendChild(row);
  });

  // Quantity buttons
  list.querySelectorAll('.staging-qty-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (btn.disabled) return;
      const idx = parseInt(btn.dataset.idx);
      const dir = parseInt(btn.dataset.dir);
      const entry = stagingQueue[idx];

      if (dir === -1) {
        // Decrement — refund one batch of ingredients if craft entry
        entry.qty--;
        if (entry.ingredients) refundOneBatch(entry);
        if (entry.qty < 1) stagingQueue.splice(idx, 1);
      } else {
        // Increment
        if (entry.ingredients) {
          // Craft: auto-consume another batch of ingredients
          if (canAutoConsume(entry.key, entry.tier)) {
            autoConsume(entry.key, entry.tier);
            entry.qty++;
          }
        } else if (shopMode === 'buy') {
          const price = stagingCost(entry.key, entry.tier);
          const otherCost = stagingQueue.reduce((s, e, i) =>
            i !== idx ? s + stagingCost(e.key, e.tier) * e.qty : s, 0);
          const maxAffordable = Math.floor((run.credits - otherCost) / price);
          entry.qty = Math.min(entry.qty + 1, Math.max(1, maxAffordable));
        } else if (shopMode === 'sell') {
          const maxSell = run.inventory[entry.key] || 0;
          entry.qty = Math.min(entry.qty + 1, maxSell);
        } else {
          entry.qty++;
        }
      }
      renderStaging();
      if (shopMode === 'craft') renderShopBody(); // refresh ingredient counts
    });
  });

  // Running total
  if (total) {
    if (shopMode === 'buy') {
      let sum = 0;
      stagingQueue.forEach(e => { sum += stagingCost(e.key, e.tier) * e.qty; });
      total.textContent = `TOTAL: ${sum}¢`;
    } else if (shopMode === 'sell') {
      let sum = 0;
      stagingQueue.forEach(e => { sum += stagingCost(e.key, e.tier) * e.qty; });
      total.textContent = `EARN: +${sum}¢`;
    } else {
      const count = stagingQueue.reduce((s, e) => s + e.qty, 0);
      total.textContent = `${count} ITEM${count !== 1 ? 'S' : ''} TO CRAFT`;
    }
  }
}

function clearStaging() {
  // Refund ingredients for any staged craft jobs before clearing
  stagingQueue.forEach(entry => {
    if (entry.ingredients) {
      for (let i = 0; i < entry.qty; i++) refundOneBatch(entry);
    }
  });
  stagingQueue.length = 0;
  renderStaging();
}

// ── Craft staging helpers ────────────────────────────────────────

// Returns the best available ingredient list for one craft of puKey,
// or null if ingredients are insufficient.
function resolveIngredientBatch(key, tier) {
  if (!run) return null;
  const variants = tier === 'alloy' ? ALLOY_VARIANTS[key] : COMPOUND_VARIANTS[key];
  if (!variants) return null;
  for (const v of variants) {
    const needed = tier === 'alloy' ? v.map(r => r.key) : [...v];
    // Check inventory has all needed ingredients
    const counts = {};
    let ok = true;
    for (const k of needed) {
      counts[k] = (counts[k] || 0) + 1;
    }
    for (const [k, n] of Object.entries(counts)) {
      if ((run.inventory[k] || 0) < n) { ok = false; break; }
    }
    if (ok) return needed; // first satisfiable variant wins
  }
  return null;
}

function canAutoConsume(key, tier) {
  return resolveIngredientBatch(key, tier) !== null;
}

function autoConsume(key, tier) {
  const batch = resolveIngredientBatch(key, tier);
  if (!batch) return null;
  for (const k of batch) run.inventory[k] = Math.max(0, (run.inventory[k] || 0) - 1);
  return batch;
}

function refundOneBatch(entry) {
  // entry.ingredients is the ingredient list for ONE batch
  for (const k of entry.ingredients) {
    run.inventory[k] = Math.min(99, (run.inventory[k] || 0) + 1);
  }
}

// Called when a craft-ready card is dropped on the action box.
// Ingredients already consumed by light-fill — snapshot and stage.
function stageCraftJob(key, tier) {
  if (!run) return;
  const progress = craftProgress[key];
  if (!progress || progress.length === 0) return;
  const ingredients = [...progress];
  delete craftProgress[key];
  const existing = stagingQueue.find(e => e.key === key && e.ingredients);
  if (existing) {
     // Validate ingredients for this additional batch were actually consumed
     if (!progress || progress.length === 0) return; // ← no new ingredients dragged
     existing.qty++;
     existing.ingredients = [...existing.ingredients, ...progress]; // IMPORTANT LOOK HERE FOR BATCH FIXING
  } else {
    stagingQueue.push({ key, tier, qty: 1, ingredients });
  }
  renderStaging();
}

function stageItem(key, tier) {
  if (!run) return;
  if (shopMode === 'buy') {
    const price = tier === 'element' ? 80 : 150;
    const alreadyCommitted = stagingQueue.reduce((s, e) => s + stagingCost(e.key, e.tier) * e.qty, 0);
    if (run.credits - alreadyCommitted < price) { showShopToast('Not enough credits!'); return; }
  }
  if (shopMode === 'sell') {
    const alreadyStaged = stagingQueue.find(e => e.key === key)?.qty || 0;
    if (alreadyStaged >= (run.inventory[key] || 0)) { showShopToast('No more to sell!'); return; }
  }
  const existing = stagingQueue.find(e => e.key === key);
  if (existing) existing.qty++;
  else stagingQueue.push({ key, tier, qty: 1 });
  renderStaging();
}

// ── Shop toast ───────────────────────────────────────────────
let _toastTimer = null;
function showShopToast(msg) {
  const el = document.getElementById('shop-toast');
  if (!el) return;
  clearTimeout(_toastTimer);
  el.textContent = msg;
  el.classList.add('visible');
  _toastTimer = setTimeout(() => el.classList.remove('visible'), 1500);
}

function commitStaging() {
  if (!run || stagingQueue.length === 0) return;
  if (shopMode === 'buy') {
    const total = stagingQueue.reduce((s, e) => s + stagingCost(e.key, e.tier) * e.qty, 0);
    if (run.credits < total) { showShopToast('Not enough credits!'); return; }
    stagingQueue.forEach(({ key, tier, qty }) => {
      run.credits -= stagingCost(key, tier) * qty;
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + qty);
    });
    showShopToast(`Bought ${stagingQueue.reduce((s, e) => s + e.qty, 0)} item(s)!`);
  } else if (shopMode === 'sell') {
    stagingQueue.forEach(({ key, tier, qty }) => {
      const available = run.inventory[key] || 0;
      const actual = Math.min(qty, available);
      run.inventory[key] = available - actual;
      run.credits += stagingCost(key, tier) * actual;
    });
    showShopToast(`Sold ${stagingQueue.reduce((s, e) => s + e.qty, 0)} item(s)!`);
  } else if (shopMode === 'craft') {
     const count = stagingQueue.reduce((s, e) => s + e.qty, 0);
     stagingQueue.forEach(({ key, qty }) => {
       run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + qty);
     });
     stagingQueue.forEach(entry => { delete entry.ingredients; }); // ← strip before clearStaging
     showShopToast(`Crafted ${count} item${count !== 1 ? 's' : ''}!`);
   }
  clearStaging();
  refresh();
  renderShopBody();
}

// ═══════════════════════════════════════════════════════════════
// CRAFT RECIPE VARIANTS
// Each compound/alloy lists all valid ingredient combinations.
// resolveVariant() picks the best-matching one given current progress.
// ═══════════════════════════════════════════════════════════════
const COMPOUND_VARIANTS = {
  // Mixed recipes listed first so early drops don't lock out the other ingredient.
  // Doubled recipes (same element twice) come last as the most restrictive path.
  LITHEBRYL:    [ ['Be','Ti'], ['Li','Ti'], ['Be','Be'] ],
  NITROKALIUM:  [ ['N','K'],   ['N','N'],   ['K','K']   ],
  CARBOSILICUM: [ ['Si','C'],  ['Si','Si'], ['C','C']   ],
  MAGNIUM:      [ ['Li','Mg'], ['Mg','K'],  ['Mg','Mg'] ],
  TITANE:       [ ['Ti','N'],  ['Ti','Ti']              ],
  ALKALIUM:     [ ['Si','K']                            ],
  AZOLITHION:   [ ['Li','N'],  ['Li','Li']              ],
  GAMMITE:      [ ['Si','Ti']                           ],
};

const ALLOY_VARIANTS = {
  DELTALITE: [
    [{key:'LITHEBRYL'},{key:'TITANE'},{key:'NITROKALIUM'}],
    [{key:'LITHEBRYL'},{key:'TITANE'},{key:'TITANE'}],
    [{key:'LITHEBRYL'},{key:'LITHEBRYL'},{key:'NITROKALIUM'}],
    [{key:'LITHEBRYL'},{key:'LITHEBRYL'},{key:'TITANE'}],
    [{key:'LITHEBRYL'},{key:'LITHEBRYL'},{key:'LITHEBRYL'}],
  ],
  PHIOMEGA: [
    [{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'CARBOSILICUM'},{key:'CARBOSILICUM'}],
    [{key:'ALKALIUM'},{key:'ALKALIUM'}],
  ],
  AXORITE: [
    [{key:'MAGNIUM'},{key:'NITROKALIUM'},{key:'LITHEBRYL'}],
    [{key:'MAGNIUM'},{key:'NITROKALIUM'},{key:'NITROKALIUM'}],
    [{key:'MAGNIUM'},{key:'NITROKALIUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'LITHEBRYL'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'NITROKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'LITHEBRYL'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'NITROKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'ALKALIUM'}],
  ],
  OMEGITE: [
    [{key:'MAGNIUM'},{key:'CARBOSILICUM'},{key:'LITHEBRYL'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'CARBOSILICUM'},{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'}],
    [{key:'TITANE'},{key:'CARBOSILICUM'},{key:'LITHEBRYL'},{key:'ALKALIUM'}],
    [{key:'TITANE'},{key:'CARBOSILICUM'},{key:'CARBOSILICUM'},{key:'ALKALIUM'}],
    [{key:'TITANE'},{key:'ALKALIUM'},{key:'ALKALIUM'},{key:'ALKALIUM'}],
    [{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'TITANE'}],
  ],
};

function resolveCompoundVariant(puKey, progress) {
  const variants = COMPOUND_VARIANTS[puKey];
  if (!variants) return null;
  if (!progress || progress.length === 0) return { puKey, recipe: variants[0] };
  for (const v of variants) {
    const remaining = [...v];
    let ok = true;
    for (const dropped of progress) {
      const idx = remaining.indexOf(dropped);
      if (idx === -1) { ok = false; break; }
      remaining.splice(idx, 1);
    }
    if (ok) return { puKey, recipe: v };
  }
  return { puKey, recipe: variants[0] };
}

function resolveAlloyVariant(puKey, progress) {
  const variants = ALLOY_VARIANTS[puKey];
  if (!variants) return null;
  if (!progress || progress.length === 0) return { puKey, recipe: variants[0] };
  for (const v of variants) {
    const remaining = v.map(r => r.key);
    let ok = true;
    for (const dropped of progress) {
      const idx = remaining.indexOf(dropped);
      if (idx === -1) { ok = false; break; }
      remaining.splice(idx, 1);
    }
    if (ok) return { puKey, recipe: v };
  }
  return { puKey, recipe: variants[0] };
}

function isValidIngredientForAnyVariant(puKey, tier, dragKey, dragTier, progress) {
  if (tier === 'compound' && dragTier === 'element') {
    const variants = COMPOUND_VARIANTS[puKey];
    if (!variants) return false;
    for (const v of variants) {
      const remaining = [...v];
      let ok = true;
      for (const dropped of progress) {
        const idx = remaining.indexOf(dropped);
        if (idx === -1) { ok = false; break; }
        remaining.splice(idx, 1);
      }
      if (ok && remaining.includes(dragKey)) return true;
    }
    return false;
  }
  if (tier === 'alloy' && dragTier === 'compound') {
    const variants = ALLOY_VARIANTS[puKey];
    if (!variants) return false;
    for (const v of variants) {
      const remaining = v.map(r => r.key);
      let ok = true;
      for (const dropped of progress) {
        const idx = remaining.indexOf(dropped);
        if (idx === -1) { ok = false; break; }
        remaining.splice(idx, 1);
      }
      if (ok && remaining.includes(dragKey)) return true;
    }
    return false;
  }
  return false;
}	

// ── Action box labels per tab ────────────────────────────────────
const ACTION_BOX_LABELS = {
  buy:   { cls: 'buy-box'   },
  sell:  { cls: 'sell-box'  },
  craft: { cls: 'craft-box' },
  stash: { cls: ''          },
};

function switchCraftSection(openThis) {
  document.querySelectorAll('.craft-section').forEach(grid => {
    const isOpen = grid.dataset.section === openThis;
    grid.style.display = isOpen ? 'grid' : 'none';
  });

  document.querySelectorAll('.shop-section-label.collapsible').forEach(label => {
    const isOpen = label.dataset.section === openThis;
    label.textContent = label.textContent.replace(/[▸▾]/, isOpen ? '▾' : '▸');
  });
}

function shopTab(tab) {
  shopMode = tab;
  selectedCardKey = null;
  // Return any partially-slotted ingredients to inventory and reset lights
  Object.entries(craftProgress).forEach(([puKey, slots]) => {
    slots.forEach(ingredientKey => {
      run.inventory[ingredientKey] = (run.inventory[ingredientKey] || 0) + 1;
    });
    delete craftProgress[puKey];
  });
  ['buy','sell','craft','stash'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.classList.toggle('active', t === tab);
  });
  // Update action box label and confirm button label
  const box = document.getElementById('shop-action-box');
  if (box) {
    const cfg = ACTION_BOX_LABELS[tab] || ACTION_BOX_LABELS.buy;
    box.className = 'shop-action-box ' + cfg.cls;
  }
  const staging = document.getElementById('shop-staging');
  if (staging) staging.style.display = tab === 'stash' ? 'none' : 'flex';
  const confirmBtn = document.getElementById('btn-shop-action');
  if (confirmBtn) {
    const labels = { buy: 'BUY ALL', sell: 'SELL ALL', craft: 'CRAFT ALL' };
    confirmBtn.textContent = labels[tab] ?? '';
  }
	
  // Reset info panel
  clearItemInfo();
  clearIngredientHighlights();
  clearStaging();
  renderShopBody();
  updateShopStats();
  updateShopReserves();
}

// ── Info panel ───────────────────────────────────────────────────
function clearItemInfo() {
  const panel = document.getElementById('shop-info-panel');
  if (panel) panel.innerHTML = '<div class="shop-info-empty">TAP ANY CARD FOR INFO</div>';
}

function clearIngredientHighlights() {
  document.querySelectorAll('.recipe-ingredient, .recipe-ingredient--owned').forEach(el => {
    el.classList.remove('recipe-ingredient', 'recipe-ingredient--owned');
  });
}

function highlightIngredientCards(puKey, tier) {
  clearIngredientHighlights();
  // Collect all unique ingredient keys across all variants
  const allKeys = new Set();
  if (tier === 'compound') {
    const variants = COMPOUND_VARIANTS[puKey];
    if (variants) variants.forEach(v => v.forEach(k => allKeys.add(k)));
  } else if (tier === 'alloy') {
    const variants = ALLOY_VARIANTS[puKey];
    if (variants) variants.forEach(v => v.forEach(r => allKeys.add(r.key)));
  }
  // Apply classes to matching ingredient source cards (elements + compounds in INGREDIENTS section)
  allKeys.forEach(key => {
    // Match element or compound ingredient cards — skip craft target cards (they have .craft-lights inside)
    const candidates = document.querySelectorAll(
      `#shop-body .shop-card[data-card-key="${key}"][data-card-tier="element"],` +
      `#shop-body .shop-card[data-card-key="${key}"][data-card-tier="compound"]`
    );
    candidates.forEach(card => {
      if (card.querySelector('.craft-lights')) return; // skip craft target cards
      const qty = run?.inventory[key] || 0;
      card.classList.add(qty > 0 ? 'recipe-ingredient--owned' : 'recipe-ingredient');
    });
  });
}

function showItemInfo(key, tier) {
  // tier: 'element' | 'compound' | 'alloy' | 'powerup'
  const panel = document.getElementById('shop-info-panel');
  if (!panel) return;

  let sym, name, effect, power, recipeLines, desc, price;
  const symClass = tier === 'compound' ? 'compound' : tier === 'alloy' ? 'alloy' : '';

  if (tier === 'element') {
    const item = STRINGS.items[key];
    if (!item) return;
    sym = item.sym; name = item.name; effect = item.effect; desc = item.desc;
    price = 'BUY 80¢ · SELL 40¢';
  } else {
    const pu = STRINGS.powerups[key];
    if (!pu) return;
    sym = pu.sym; name = pu.name; effect = pu.effect; power = pu.power; desc = pu.desc;

    if (tier === 'compound') {
      // Pull all variants from COMPOUND_VARIANTS and render each as a line
      const variants = COMPOUND_VARIANTS[key];
      if (variants) {
        recipeLines = variants.map(v =>
          v.map(k => { const el = STRINGS.items[k]; return el ? `${el.sym} ${el.name}` : k; }).join(' + ')
        );
      }
      price = 'BUY 150¢ · SELL 90¢';
    } else if (tier === 'alloy') {
      // Pull all variants from ALLOY_VARIANTS and render each as a line
      const variants = ALLOY_VARIANTS[key];
      if (variants) {
        recipeLines = variants.map(v =>
          v.map(r => {
            const p = STRINGS.powerups[r.key];
            return p ? `${p.sym} ${p.name}` : r.key;
          }).join(' + ')
        );
      }
      price = key === 'OMEGITE' ? 'SELL 250¢' : 'SELL 200¢';
    } else {
      price = 'BUY 150¢';
    }
  }

  const recipeHTML = recipeLines && recipeLines.length
    ? recipeLines.map((line, i) =>
        `<div class="shop-info-recipe">${i === 0 ? 'RECIPE: ' : '    or: '}${line}</div>`
      ).join('')
    : '';

  panel.innerHTML =
    `<div class="shop-info-sym ${symClass}">${sym}</div>` +
    `<div class="shop-info-name">${name}</div>` +
    (effect ? `<div class="shop-info-effect">EXPEND: ${effect}</div>` : '') +
	(power  ? `<div class="shop-info-power">TRIGGER: ${power}</div>` : '') +
    recipeHTML +
    (desc   ? `<div class="shop-info-desc">${desc}</div>` : '') +
    (price  ? `<div class="shop-info-price">${price}</div>` : '');
}

const STAT_CAPS = {
  shootSpeed:       12,
  ammoMax:         300,
  shieldMax:       100,
  reserveMax:        8,
  ammoRefillRate:   10,   // each unit ≈ +10 ammo per interval
};


function updateShopStats() {
  if (!run) return;
  //Ammo refill rate, max 10
  const refRate = run.ammoRefillRate;
  document.getElementById('stat-val-refill').textContent = refRate;
  document.getElementById('stat-bar-refill').style.width = Math.min(100, (refRate / STAT_CAPS.ammoRefillRate) * 100) + '%';
  // Ammo max: default 50 (base 65 in newRun... using ammoMax), display cap 300
  const ammo = run.ammoMax;
  document.getElementById('stat-val-ammo').textContent   = ammo;
  document.getElementById('stat-bar-ammo').style.width   = Math.min(100, (ammo / 300) * 100) + '%';
  // Shield max: default 10, max 100
  const shld = run.shieldMax;
  document.getElementById('stat-val-shield').textContent = shld;
  document.getElementById('stat-bar-shield').style.width = Math.min(100, (shld / 100) * 100) + '%';
  // Reserve: default 3, max 8
  const res = run.reserveMax;
  document.getElementById('stat-val-reserve').textContent = res;
  document.getElementById('stat-bar-reserve').style.width = Math.min(100, (res / 8) * 100) + '%';
}

function updateShopReserves() {
  if (!run) return;
  const el = document.getElementById('shop-reserve-slots');
  if (!el) return;
  el.innerHTML = '';
  for (let i = 0; i < run.reserveMax; i++) {
    const slot = document.createElement('div');
    const key = run.powerups[i] || null;  // null-safe: undefined/null both treated as empty
    slot.className = 'shop-reserve-slot' + (key ? ' filled' : '');
    slot.dataset.slot = i;
    slot.dataset.key = key || '';
    if (key && STRINGS.powerups[key]) {
      const pu = STRINGS.powerups[key];
      slot.innerHTML = `<span class="shop-reserve-sym">${pu.sym}</span><span class="shop-reserve-name">${pu.name}</span>`;
    } else {
      slot.innerHTML = '<span class="shop-reserve-name">EMPTY</span>';
    }
    el.appendChild(slot);
  }
}

// ── Shop decoration: orbiting star ───────────────────────────
(function() {
  const DECO_SIZE   = 60;   // canvas dimensions (px)
  const CX          = 30;   // centre x
  const CY          = 30;   // centre y
  const BODY_R      = 6;    // main star radius (px)
  const ORBIT_R_X   = 10;   // orbit x-radius
  const ORBIT_R_Y   = 6;    // orbit y-radius (0.6 × x = ellipse depth illusion)
  const SMALL_R     = 2;    // orbiting star radius
  const ORBIT_SPEED = 0.04; // radians per frame

  let angle    = 0;
  let decoRAF  = null;
  let decoCtx  = null;

  function initShopDeco() {
    const cv = document.getElementById('shop-powerup-deco');
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    cv.width  = DECO_SIZE * dpr;
    cv.height = DECO_SIZE * dpr;
    cv.style.width  = DECO_SIZE + 'px';
    cv.style.height = DECO_SIZE + 'px';
    decoCtx = cv.getContext('2d');
    decoCtx.scale(dpr, dpr);
  if (!decoRAF) decoRAF = requestAnimationFrame(renderShopDeco);
}

  function stopShopDeco() {
    if (decoRAF) { cancelAnimationFrame(decoRAF); decoRAF = null; }
  }

  function renderShopDeco() {
    if (!decoCtx) return;
    decoCtx.clearRect(0, 0, DECO_SIZE, DECO_SIZE);

    angle += ORBIT_SPEED;
    const inBack = Math.sin(angle + ORBIT_SPEED) < 0;

    // Orbiting star position
    const ox = CX + Math.cos(angle) * ORBIT_R_X;
    const oy = CY + Math.sin(angle) * ORBIT_R_Y;

    // Depth alpha: 0.2 (back) → 1.0 (front)
    const depthAlpha = (Math.sin(angle) + 1) * 0.4 + 0.2;

    function drawSmallStar() {
      if (Math.sin(angle) <= -0.1 && depthAlpha <= 0.3) return;
      decoCtx.save();
      decoCtx.globalAlpha = depthAlpha;
      decoCtx.shadowColor = 'rgba(255,215,0,0.9)';
      decoCtx.shadowBlur  = 4 * depthAlpha;
      decoCtx.fillStyle   = 'rgba(255,215,0,0.9)';
      decoCtx.beginPath();
      decoCtx.arc(ox, oy, SMALL_R, 0, Math.PI * 2);
      decoCtx.fill();
      decoCtx.restore();
    }

    function drawMainStar() {
      // Glow ring pass — shadow only, no fill, so body stays transparent
      // (page background #050510 shows through, avoiding the inward-bleed snafu)
      decoCtx.save();
      decoCtx.shadowColor = 'white';
      decoCtx.shadowBlur  = 8;
      decoCtx.strokeStyle = 'rgba(255,215,0,0.9)';
      decoCtx.lineWidth   = 1;
      decoCtx.beginPath();
      decoCtx.arc(CX, CY, BODY_R, 0, Math.PI * 2);
      decoCtx.stroke();  // ← stroke only, no fill — glow without inward bleed
      decoCtx.restore();

      // Ping ripple
      const pingProgress = (Date.now() % 1200) / 1200;
      const rippleR      = BODY_R + pingProgress * 18;
      const rippleAlpha  = (1 - pingProgress) * 0.3;
      decoCtx.save();
      decoCtx.strokeStyle = `rgba(255,215,0,${rippleAlpha})`;
      decoCtx.lineWidth   = 1.5;
      decoCtx.beginPath();
      decoCtx.arc(CX, CY, rippleR, 0, Math.PI * 2);
      decoCtx.stroke();
      decoCtx.restore();
    }

    // Draw order: back star → main body → front star (occlusion)
    if (inBack) {
      drawSmallStar();
      drawMainStar();
    } else {
      drawMainStar();
      drawSmallStar();
    }

    decoRAF = requestAnimationFrame(renderShopDeco);
  }

  // Expose so shopTab() can start/stop it
  window.initShopDeco = initShopDeco;
  window.stopShopDeco = stopShopDeco;
})();

function renderShopBody() {
  const body = document.getElementById('shop-body');
  body.innerHTML = '';
  document.getElementById('shop-credits').textContent = run ? run.credits + '¢' : '0¢';

  if (shopMode === 'buy') {
    const label = document.createElement('div');
    label.className = 'shop-section-label'; label.textContent = 'BASE ELEMENTS';
    body.appendChild(label);
    const grid = document.createElement('div'); grid.className = 'shop-grid';
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const price = 80;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = 'element'; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${item.sym}</div><div class="shop-card-name">${item.name}</div><div class="shop-card-corner"><div class="shop-card-count">${(run?.inventory[key]||0)}/99</div><div class="shop-card-price">${price}¢</div></div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'element');
      };
      grid.appendChild(card);
    });
    body.appendChild(grid);

    // Powerups
    const label2 = document.createElement('div');
    label2.className = 'shop-section-label'; label2.style.marginTop='16px'; label2.textContent = 'POWERUPS';
    body.appendChild(label2);
    const grid2 = document.createElement('div'); grid2.className = 'shop-grid';
    const BUY_EXCLUDED_POWERUPS = new Set(['OMEGITE','AXORITE','PHIOMEGA','DELTALITE']);
    Object.entries(STRINGS.powerups).filter(([key]) => !BUY_EXCLUDED_POWERUPS.has(key)).forEach(([key, pu]) => {
      const price = 150;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${pu.sym}</div><div class="shop-card-name">${pu.name}</div><div class="shop-card-corner"><div class="shop-card-count">${(run?.inventory[key]||0)}/99</div><div class="shop-card-price">${price}¢</div></div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'compound');
      };
      grid2.appendChild(card);
    });
    body.appendChild(grid2);

  } else if (shopMode === 'sell') {

    const COMPOUND_KEYS = { LITHEBRYL:90, NITROKALIUM:90, CARBOSILICUM:90, MAGNIUM:90, TITANE:90, ALKALIUM:90, AZOLITHION:90, GAMMITE:90 };
    const ALLOY_KEYS    = { OMEGITE:250, AXORITE:200, PHIOMEGA:200, DELTALITE:200 };

    function makeSellCard(sym, name, effect, qty, price, key, tier) {
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = tier || 'element'; card.dataset.cardPrice = price; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${sym}</div><div class="shop-card-name">${name}</div><div class="shop-card-corner"><div class="shop-card-count">${qty}</div><div class="shop-card-price">SELL ${price}¢</div></div>`;
      card.onclick = () => {
        const alreadySelected = card.classList.contains('selected');
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, tier || 'element');
      };
      return card;
    }

    function makeSection(labelText) {
      const label = document.createElement('div');
      label.className = 'shop-section-label'; label.textContent = labelText;
      return label;
    }

    let hasItems = false;

    // ── ELEMENTS ──────────────────────────────────────────────────
    const elGrid = document.createElement('div'); elGrid.className = 'shop-grid';
    Object.entries(run?.inventory || {}).forEach(([key, qty]) => {
      if (qty <= 0) return;
      const item = STRINGS.items[key];
      if (!item) return;
      hasItems = true;
      elGrid.appendChild(makeSellCard(item.sym, item.name, item.effect, qty, 40, key, 'element'));
    });
    if (elGrid.children.length) {
      body.appendChild(makeSection('ELEMENTS'));
      body.appendChild(elGrid);
    }

    // ── COMPOUNDS ─────────────────────────────────────────────────
    const compGrid = document.createElement('div'); compGrid.className = 'shop-grid';
    Object.entries(COMPOUND_KEYS).forEach(([key, price]) => {
      const qty = run?.inventory[key] || 0;
      if (qty <= 0) return;
      const pu = STRINGS.powerups[key];
      hasItems = true;
      compGrid.appendChild(makeSellCard(pu.sym, pu.name, pu.desc, qty, price, key, 'compound'));
    });
    if (compGrid.children.length) {
      const lbl = makeSection('COMPOUNDS'); lbl.style.marginTop = '16px';
      body.appendChild(lbl);
      body.appendChild(compGrid);
    }

    // ── ALLOYS ────────────────────────────────────────────────────
    const alloyGrid = document.createElement('div'); alloyGrid.className = 'shop-grid';
    Object.entries(ALLOY_KEYS).forEach(([key, price]) => {
      const qty = run?.inventory[key] || 0;
      if (qty <= 0) return;
      const pu = STRINGS.powerups[key];
      hasItems = true;
      alloyGrid.appendChild(makeSellCard(pu.sym, pu.name, pu.desc, qty, price, key, 'alloy'));
    });
    if (alloyGrid.children.length) {
      const lbl = makeSection('ALLOYS'); lbl.style.marginTop = '16px';
      body.appendChild(lbl);
      body.appendChild(alloyGrid);
    }

    if (!hasItems) {
      const empty = document.createElement('div');
      empty.style.cssText = 'font-size:11px;color:rgba(255,255,255,0.2);padding:20px;letter-spacing:0.1em';
      empty.textContent = 'NO ITEMS TO SELL';
      body.appendChild(empty);
    }

  } else if (shopMode === 'craft') {

    // ── INGREDIENTS — split into collapsible ELEMENTS and COMPOUNDS grids ──
    const labelEl = document.createElement('div');
    labelEl.className = 'shop-section-label collapsible';
    labelEl.textContent = 'ELEMENTS ▸';
    labelEl.dataset.section = 'craft-elements';
    body.appendChild(labelEl);
	labelEl.addEventListener('click', () => switchCraftSection('craft-elements'));
    const gridEl = document.createElement('div');
    gridEl.className = 'shop-grid craft-section';
    gridEl.dataset.section = 'craft-elements';
    gridEl.style.display = 'none';

    // Elements
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey = key; card.dataset.cardTier = 'element'; card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym">${item.sym}</div>` +
        `<div class="shop-card-name">${item.name}</div>` +
        `<span class="stash-count">${qty}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'element');
        clearIngredientHighlights();
      };
      gridEl.appendChild(card);
    });
    body.appendChild(gridEl);

    const labelCo = document.createElement('div');
    labelCo.className = 'shop-section-label collapsible';
    labelCo.textContent = 'COMPOUNDS ▸';
    labelCo.dataset.section = 'craft-compounds';
    body.appendChild(labelCo); labelCo.addEventListener('click', () => switchCraftSection('craft-compounds'));
    const gridCo = document.createElement('div');
    gridCo.className = 'shop-grid craft-section';
    gridCo.dataset.section = 'craft-compounds';
    gridCo.style.display = 'none';

    // Compounds — always shown, draggable only when owned
    Object.keys(COMPOUND_VARIANTS).forEach(key => {
      const pu = STRINGS.powerups[key];
      if (!pu) return;
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym" style="color:${has ? 'var(--purple)' : 'rgba(168,85,247,0.25)'}">${pu.sym}</div>` +
        `<div class="shop-card-name">${pu.name}</div>` +
        `<span class="stash-count" style="color:var(--purple)">${qty}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'compound');
        highlightIngredientCards(key, 'compound');
      };
      gridCo.appendChild(card);
    });
    body.appendChild(gridCo);

    // ── CRAFT — compound target cards (progress lights) ───────────
    const labelCraft = document.createElement('div');
    labelCraft.className = 'shop-section-label'; labelCraft.style.marginTop = '14px'; labelCraft.textContent = 'CRAFT';
    body.appendChild(labelCraft);
    const gridCraft = document.createElement('div'); gridCraft.className = 'shop-grid';

    Object.keys(COMPOUND_VARIANTS).forEach(key => {
      const pu = STRINGS.powerups[key];
      if (!pu) return;
      const invQty = run?.inventory[key] || 0;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = '0';
      const resolvedRecipe = resolveCompoundVariant(key, craftProgress[key] || [])?.recipe || Object.values(COMPOUND_VARIANTS[key])[0];
      const lightsHTML = resolvedRecipe.map(() => `<span class="craft-light off"></span>`).join('');
      card.innerHTML =
        `<div class="shop-card-sym" style="color:var(--purple)">${pu.sym}</div>` +
        `<div class="shop-card-name">${pu.name}</div>` +
        `<div class="shop-card-progress">` +
          `<span class="craft-inv-count${invQty > 0 ? ' has' : ''}">${invQty}</span>` +
          `<div class="craft-lights">${lightsHTML}</div>` +
        `</div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'compound');
        highlightIngredientCards(key, 'compound');
        switchCraftSection('craft-elements');
      };
      gridCraft.appendChild(card);
    });
    body.appendChild(gridCraft);

    // ── ALLOYS — crafted from compounds (progress lights) ─────────
    const labelAlloy = document.createElement('div');
    labelAlloy.className = 'shop-section-label';
    labelAlloy.style.marginTop = '14px';
    labelAlloy.textContent = 'ALLOYS';
    body.appendChild(labelAlloy);

    const alloys = [
      {
        sym: 'Ω', name: 'Omegite', puKey: 'OMEGITE',
        recipe: [
          { key: 'MAGNIUM',     label: 'Μ Magnium'   },
          { key: 'ALKALIUM', label: 'α Alkalium'  },
          { key: 'TITANE', label: 'Θ Titane'  },
        ],
        effect: 'Reserve +3, All Stats +3 — Super Bomb',
        desc: 'A terrifyingly unstable material that exists in a state of constant decay.',
      },
      {
        sym: 'Χ', name: 'Axorite', puKey: 'AXORITE',
        recipe: [
          { key: 'MAGNIUM',     label: 'Μ Magnium'  },
          { key: 'TITANE', label: 'Θ Titane' },
        ],
        effect: 'Shield Max +25, Reserve +2 — Full Restore',
        desc: 'A highly versatile multi-application metal alloy that is used in both defense and munitions.',
      },
      {
        sym: 'Φ', name: 'PhiOmega', puKey: 'PHIOMEGA',
        recipe: [
          { key: 'CARBOSILICUM', label: 'Ξ Carbosilicium' },
          { key: 'ALKALIUM',   label: 'α Alkalium'  },
        ],
        effect: 'Ammo Max +30, Shoot Spd +6 — Bullet Shift',
        desc: 'A perfectly lossless superconductor that expels magnetic fields, ideal for maximizing ammo velocity and efficiency.',
      },
      {
        sym: '∇', name: 'Deltalite', puKey: 'DELTALITE',
        recipe: [
          { key: 'LITHEBRYL', label: 'Β Lithebryl' },
          { key: 'NITROKALIUM',   label: 'Π Nitrokalium'  },
        ],
        effect: 'Shield Max +20, Shoot Spd +10 — Time Dilation',
        desc: 'A sophisticated Beryllium-based metal that can survive the friction of warp-speed travel.',
      },
    ];

    const gridAlloy = document.createElement('div'); gridAlloy.className = 'shop-grid';
    alloys.forEach(a => {
      const pu = STRINGS.powerups[a.puKey];
      const invQty = run?.inventory[a.puKey] || 0;
      const card = document.createElement('div'); card.className = 'shop-card obj';
      card.dataset.cardKey = a.puKey; card.dataset.cardTier = 'alloy'; card.dataset.draggable = '0';
      const lightsHTML = (resolveAlloyVariant(a.puKey, craftProgress[a.puKey] || [])?.recipe || a.recipe).map(() => `<span class="craft-light off"></span>`).join('');
      card.innerHTML =
        `<div class="shop-card-sym" style="color:var(--pink);font-size:14px">${a.sym}</div>` +
        `<div class="shop-card-name">${a.name}</div>` +
        `<div class="shop-card-progress">` +
          `<span class="craft-inv-count${invQty > 0 ? ' has' : ''}">${invQty}</span>` +
          `<div class="craft-lights">${lightsHTML}</div>` +
        `</div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(a.puKey, 'alloy');
        highlightIngredientCards(a.puKey, 'alloy');
		switchCraftSection('craft-compounds');
      };
      gridAlloy.appendChild(card);
    });
    body.appendChild(gridAlloy);

  } else if (shopMode === 'stash') {

    // ── ELEMENTS ──────────────────
    const labelEl = document.createElement('div');
    labelEl.className = 'shop-section-label'; labelEl.textContent = 'ELEMENTS';
    body.appendChild(labelEl);

    const gridEl = document.createElement('div'); gridEl.className = 'shop-grid';
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey  = key;
      card.dataset.cardTier = 'element';
      card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym">${item.sym}</div>` +
        `<div class="shop-card-name">${item.name}</div>` +
        `<span class="stash-count">${qty > 0 ? Math.min(qty, 99) : '0'}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'element');
      };
      gridEl.appendChild(card);
    });
    body.appendChild(gridEl);

    // ── POWERUPS (draggable into reserves) ───────────────────────
    const labelPu = document.createElement('div');
    labelPu.className = 'shop-section-label';
    labelPu.style.marginTop = '14px';
    labelPu.textContent = 'POWERUPS';
    body.appendChild(labelPu);

    const gridPu = document.createElement('div'); gridPu.className = 'shop-grid';
    Object.entries(STRINGS.powerups).forEach(([key, pu]) => {
      const invQty   = run?.inventory[key] || 0;
      const resCount = (run?.powerups || []).filter(k => k === key).length;
      const totalQty = invQty + resCount;
      const has = invQty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card obj pu-card ' + (totalQty > 0 ? 'stash-has' : 'stash-empty');
      card.dataset.puKey = key;
      card.dataset.cardKey  = key;
      card.dataset.cardTier = 'compound';
      card.dataset.draggable = has ? '1' : '0';

      let countHTML = '';
      if (invQty > 0 || resCount > 0) {
        const parts = [];
        if (invQty  > 0) parts.push(`<span style="color:var(--purple)">${Math.min(invQty,99)}</span>`);
        if (resCount > 0) parts.push(`<span style="color:rgba(0,245,255,0.5);font-size:6px">+${resCount}▣</span>`);
        countHTML = `<span class="stash-count" style="display:flex;flex-direction:column;align-items:flex-end;gap:1px">${parts.join('')}</span>`;
      } else {
        countHTML = `<span class="stash-count" style="color:rgba(255,255,255,0.18)">0</span>`;
      }

      card.innerHTML =
        `<div class="shop-card-sym">${pu.sym}</div>` +
        `<div class="shop-card-name">${pu.name}</div>` +
        countHTML;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const tier = ['OMEGITE','AXORITE','PHIOMEGA','DELTALITE'].includes(key) ? 'alloy' : 'compound';
        showItemInfo(key, tier);
      };
      gridPu.appendChild(card);
    });
    body.appendChild(gridPu);
  }
}

function shopContinue() {
  run.level++;
  run.shootSpeed++; 
  if (run.level === 9) {
    // Final shop visit done — route to boss fight
    run.ammo = run.ammoMax; // refill ammo before boss
    showScreen('game');
	stopShopDeco();
    Game.startBoss();
    return;
  }
  run.ammo = run.ammoMax; // refill ammo
  showScreen('game');
  Game.startLevel();
}

// NOTE: gameWin() retired — true run completion is handled by
// Game.startBoss() → onBossDefeated(), which shows #overlay-boss-clear.

// ═══════════════════════════════════════════════════════════════
// STORY SCREEN
// ═══════════════════════════════════════════════════════════════
function showStory(level) {
  const s = STRINGS.story[level] || STRINGS.story[1];
  const isBossApproach = level === 9;

  document.getElementById('story-level-label').textContent = isBossApproach
    ? 'APPROACHING THE SOURCE'
    : STRINGS.ui.levelComplete(level);
  document.getElementById('story-text').textContent = s.text;
  document.getElementById('story-coords').textContent = s.coords || '';

  // Boss approach screen: hide the direct-launch button, rename shop button
  const btnShop   = document.getElementById('btn-to-shop');
  const btnLaunch = document.getElementById('btn-story-launch');
  if (isBossApproach) {
    btnShop.textContent   = 'ENTER SHOP';
    btnLaunch.textContent = 'PROCEED';
  } else {
    btnShop.textContent   = STRINGS.ui.enterShop;
    btnLaunch.textContent = STRINGS.ui.launch;
  }

  // Unlock flag
  save.storyFlags = Math.max(save.storyFlags, level);
  writeSave();
  showScreen('story');
  updateMenuCoords();
}

// ═══════════════════════════════════════════════════════════════
// MENU UI
// ═══════════════════════════════════════════════════════════════
function updateMenuUI() {
  document.getElementById('menu-highscore').textContent = save.highScore.toString().padStart(6,'0');
  updateMenuCoords();
}

function updateMenuCoords() {
  const el = document.getElementById('menu-coords');
  if (save.storyFlags === 0) { el.textContent = '∅ ⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊'; return; }
  const s = STRINGS.story[save.storyFlags];
  el.textContent = s?.coords || '∅ ⊷ ☈ ⏦ ☰ ⚸ ⏛ ☊';
}

// ═══════════════════════════════════════════════════════════════
// WIRING
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  Game.init(canvas);
  updateMenuUI();

  document.getElementById('btn-start').onclick = () => {
    AudioManager.init();
    run = newRun();
    showScreen('game');
    Game.startLevel();
  };

  document.getElementById('btn-shop-action').onclick = () => commitStaging();

  document.getElementById('btn-shop-menu').onclick = () => {
    if (!run) run = newRun();
    document.getElementById('shop-level-badge').textContent = 'MODE: STATIONARY';
    showScreen('shop');
	initShopDeco();
    shopTab('buy');
  };

  document.getElementById('btn-retry').onclick = () => {
    AudioManager.init();
    run = newRun();
    document.getElementById('overlay-death').classList.remove('active');
    showScreen('game');
	stopShopDeco();
    Game.startLevel();
  };

  document.getElementById('btn-menu-from-death').onclick = () => {
    document.getElementById('overlay-death').classList.remove('active');
    showScreen('menu');
    updateMenuUI();
  };

  document.getElementById('btn-boss-to-menu').onclick = () => {
    document.getElementById('overlay-boss-clear').classList.remove('active');
    document.getElementById('boss-hud').classList.remove('active');
    showScreen('menu');
    updateMenuUI();
  };

  document.getElementById('btn-to-story').onclick = () => {
    document.getElementById('overlay-clear').classList.remove('active');
    showStory(run.level);
  };

  document.getElementById('btn-tutorial-menu').onclick  = openTutorial;
  document.getElementById('btn-tutorial-pause').onclick = openTutorial;
  document.getElementById('btn-tutorial-close').onclick = closeTutorial;

  document.getElementById('btn-pause').onclick = () => Game.togglePause();
  document.getElementById('btn-resume').onclick = () => Game.togglePause();
  document.getElementById('btn-return').onclick = () => {
    document.getElementById('overlay-pause').classList.remove('active');
    document.getElementById('btn-pause').textContent = '⏸️';
    showScreen('menu');
    updateMenuUI();
  };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') Game.togglePause();
  });

  document.getElementById('btn-to-shop').onclick = () => {
    shopMode = 'buy';
    document.getElementById('shop-level-badge').textContent = STRINGS.ui.afterLevel(run.level);
    document.getElementById('shop-credits').textContent = run.credits + '¢';
    showScreen('shop');
	initShopDeco();
    shopTab('buy');
  };

  document.getElementById('btn-story-launch').onclick = () => {
    shopContinue();
  };

  // ── POWERUP SLOT INTERACTIONS ────────────────────────────────
  // Drag down from a filled slot onto #pu-stash to stash it.
  // Tap in place on a filled slot to use it immediately.
  // Drags originating on the powerup bar do NOT move the ship.
  (function setupPowerupInteractions() {
    const bar       = document.getElementById('powerup-bar');
    const stashEl   = document.getElementById('pu-stash');
    let dragSlot    = -1;   // which slot index is being dragged
    let dragStartY  = 0;
    let dragging    = false;
    const DRAG_THRESHOLD = 10; // px before we call it a drag vs a tap

    function slotIndexFromEl(el) {
      const slot = el.closest('.pu-slot');
      if (!slot) return -1;
      const idx = parseInt(slot.dataset.idx, 10);
      return isNaN(idx) ? -1 : idx;
    }

    function stashSlot(idx) {
      if (!run || idx < 0 || idx >= run.powerups.length) return;
      const key = run.powerups[idx];
      run.powerups.splice(idx, 1);
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
      const pu = STRINGS.powerups[key];
      Game.logPickupPublic(`STASHED ${pu.name}`);
      Game.flashStashPublic();
      Game.updatePowerupBarPublic();
    }

    function isTouchOverStash(touch) {
      const r = stashEl.getBoundingClientRect();
      return touch.clientX >= r.left && touch.clientX <= r.right
          && touch.clientY >= r.top  && touch.clientY <= r.bottom;
    }

    bar.addEventListener('touchstart', e => {
      const idx = slotIndexFromEl(e.target);
      if (idx < 0) return;
      e.preventDefault(); e.stopPropagation();
      dragSlot  = idx;
      dragStartY = e.touches[0].clientY;
      dragging  = false;
    }, { passive: false });

    bar.addEventListener('touchmove', e => {
      if (dragSlot < 0) return;
      e.preventDefault(); e.stopPropagation();
      const dy = e.touches[0].clientY - dragStartY;
      if (Math.abs(dy) > DRAG_THRESHOLD) dragging = true;
      if (dragging && isTouchOverStash(e.touches[0])) {
        stashEl.classList.add('drag-over');
      } else {
        stashEl.classList.remove('drag-over');
      }
    }, { passive: false });

    bar.addEventListener('touchend', e => {
      if (dragSlot < 0) return;
      e.preventDefault(); e.stopPropagation();
      stashEl.classList.remove('drag-over');
      if (dragging) {
        // Check final touch position over stash
        const t = e.changedTouches[0];
        if (isTouchOverStash(t)) {
          stashSlot(dragSlot);
        }
      } else {
        // Tap — use powerup
        AudioManager.resume();
        Game.triggerPowerup(dragSlot);
      }
      dragSlot = -1; dragging = false;
    }, { passive: false });

    // Mouse fallback for desktop dev
    let mouseSlot = -1, mouseStartY = 0, mouseDragging = false;
    bar.addEventListener('mousedown', e => {
      const idx = slotIndexFromEl(e.target);
      if (idx < 0) return;
      e.preventDefault();
      mouseSlot = idx; mouseStartY = e.clientY; mouseDragging = false;
    });
    window.addEventListener('mousemove', e => {
      if (mouseSlot < 0) return;
      if (Math.abs(e.clientY - mouseStartY) > DRAG_THRESHOLD) mouseDragging = true;
      const r = stashEl.getBoundingClientRect();
      const over = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      stashEl.classList.toggle('drag-over', mouseDragging && over);
    });
    window.addEventListener('mouseup', e => {
      if (mouseSlot < 0) return;
      stashEl.classList.remove('drag-over');
      const r = stashEl.getBoundingClientRect();
      const over = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (mouseDragging && over) {
        stashSlot(mouseSlot);
      } else if (!mouseDragging) {
        Game.triggerPowerup(mouseSlot);
      }
      mouseSlot = -1; mouseDragging = false;
    });
  })();

  // Prevent default touch behaviors on game screen
  document.getElementById('screen-game').addEventListener('touchmove', e => e.preventDefault(), { passive:false });

  setupShopDrag();
});

// ── Shop refresh — updates all right-panel displays ─────────────
function refresh() {
  updateShopReserves();
  updateShopStats();
  renderStaging();
  renderShopBody();
  document.getElementById('shop-credits').textContent = run ? run.credits + '¢' : '0¢';
}

// ═══════════════════════════════════════════════════════════════
// SHOP DRAG & DROP — powerup stash ↔ reserve slots
// ═══════════════════════════════════════════════════════════════
function setupShopDrag() {
  // Inject long-press style once
  if (!document.getElementById('craft-longpress-style')) {
    const s = document.createElement('style');
    s.id = 'craft-longpress-style';
    s.textContent = `
      @keyframes longPressCharge {
        0%   { box-shadow: 0 0 0 0 rgba(255,45,120,0); border-color: rgba(255,45,120,0.3); }
        100% { box-shadow: 0 0 0 6px rgba(255,45,120,0); border-color: rgba(255,45,120,0.9); }
      }
      .long-press-charging {
        animation: longPressCharge 0.5s ease-out forwards;
        border-color: rgba(255,45,120,0.9) !important;
      }
    `;
    document.head.appendChild(s);
  }
  const DRAG_THRESHOLD = 8;

  // ── shared state ────────────────────────────────────────────
  let dragKey      = null;   // item/powerup key being dragged
  let dragTier     = null;   // 'element' | 'compound' | 'alloy'
  let dragSource   = null;   // 'card' | 'stash' | 'reserve'
  let dragSlotIdx  = -1;
  let dragEl       = null;
  let startX = 0, startY = 0;
  let dragging     = false;

  // ── Long-press to clear craft card ──────────────────────────
  const LONG_PRESS_MS = 500;
  let longPressTimer  = null;
  let longPressCard   = null;

  // ── Ghost ────────────────────────────────────────────────────
  const ghost = document.createElement('div');
  ghost.id = 'shop-drag-ghost';
  ghost.style.display = 'none';
  document.body.appendChild(ghost);

  function showGhost(x, y, key, tier) {
    const pu   = STRINGS.powerups[key];
    const item = STRINGS.items[key];
    const sym  = pu ? pu.sym : item ? item.sym : '?';
    const name = pu ? pu.name : item ? item.name : key;
    ghost.innerHTML = `<span class="ghost-sym">${sym}</span><span class="ghost-name">${name}</span>`;
    ghost.style.display = 'flex';
    moveGhost(x, y);
  }
  function moveGhost(x, y) {
    ghost.style.left = x + 'px';
    ghost.style.top  = y + 'px';
  }
  function hideGhost() { ghost.style.display = 'none'; }

  // ── Hit testing ──────────────────────────────────────────────
  function reserveSlotAt(x, y) {
    const slots = document.querySelectorAll('#shop-reserve-slots .shop-reserve-slot');
    for (const s of slots) {
      const r = s.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return s;
    }
    return null;
  }
  function actionBoxAt(x, y) {
    const box = document.getElementById('shop-action-box');
    if (!box) return false;
    const r = box.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }
  function statsBlockAt(x, y) {
    const block = document.getElementById('shop-stats-block');
    if (!block) return false;
    const r = block.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }
  function stashCardAt(x, y) {
    const cards = document.querySelectorAll('#shop-body .shop-card[data-pu-key]');
    for (const c of cards) {
      const r = c.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return c;
    }
    return null;
  }

  function clearHighlights() {
    document.querySelectorAll('.shop-reserve-slot').forEach(s => {
      s.classList.remove('drag-over', 'drag-over-full');
    });
    document.querySelectorAll('#shop-body .shop-card.drag-over').forEach(c => {
      c.classList.remove('drag-over');
    });
    const box = document.getElementById('shop-action-box');
    if (box) box.classList.remove('drag-over');
    const stats = document.getElementById('shop-stats-block');
    if (stats) stats.classList.remove('drag-over');
  }
  function highlightTarget(x, y) {
    clearHighlights();
    const slot = reserveSlotAt(x, y);
    if (slot) {
      slot.classList.add(slot.dataset.key ? 'drag-over-full' : 'drag-over');
      return;
    }
    if (shopMode === 'craft' && dragSource === 'card') {
      const targetCard = craftCardAt(x, y);
      if (targetCard) {
        const puKey = targetCard.dataset.cardKey;
        const tier  = targetCard.dataset.cardTier;
        const progress = craftProgress[puKey] || [];
        const isValid = isValidIngredientForAnyVariant(puKey, tier, dragKey, dragTier, progress);
        if (isValid) targetCard.classList.add('drag-over');
        return;
      }
    }
    if (actionBoxAt(x, y)) {
      const box = document.getElementById('shop-action-box');
      if (box) box.classList.add('drag-over');
      return;
    }
    if ((dragTier === 'element' || dragTier === 'compound') && statsBlockAt(x, y)) {
      const stats = document.getElementById('shop-stats-block');
      if (stats) stats.classList.add('drag-over');
    }
  }

  // ── Element stat buffs ───────────────────────────────────────
function applyElementBuff(key) {
     if (!run) return;
     switch (key) {
       case 'Be': if (run.shieldMax >= STAT_CAPS.shieldMax) { showShopToast('SHIELD MAXED'); return; }
           run.shieldMax = Math.min(run.shieldMax + 6, STAT_CAPS.shieldMax);
           run.shield = Math.min(run.shield + 6, run.shieldMax); break;
       case 'Li': if (run.shieldMax >= STAT_CAPS.shieldMax) { showShopToast('SHIELD MAXED'); return; }
           run.shieldMax = Math.min(run.shieldMax + 4, STAT_CAPS.shieldMax);
           run.shield = Math.min(run.shield + 4, run.shieldMax); break;
       case 'Ti': if (run.shieldMax >= STAT_CAPS.shieldMax) { showShopToast('SHIELD MAXED'); return; }
           run.shieldMax = Math.min(run.shieldMax + 8, STAT_CAPS.shieldMax);
           run.shield = Math.min(run.shield + 8, run.shieldMax); break;
       case 'N': if (run.ammoRefillRate >= STAT_CAPS.ammoRefillRate) { showShopToast('REFILL MAXED'); return; }
    	   run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate); break;
	   case 'K': if (run.ammoRefillRate >= STAT_CAPS.ammoRefillRate) { showShopToast('REFILL MAXED'); return; }
    	   run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate); break;
       case 'Si': if (run.ammoMax >= STAT_CAPS.ammoMax) { showShopToast('AMMO MAXED'); return; }
           run.ammoMax = Math.min(run.ammoMax + 10, STAT_CAPS.ammoMax);
           run.ammo = Math.min(run.ammo + 10, run.ammoMax); break;
	   case 'C':  if (run.ammoMax >= STAT_CAPS.ammoMax) { showShopToast('AMMO MAXED'); return; }
           run.ammoMax = Math.min(run.ammoMax + 8, STAT_CAPS.ammoMax);
           run.ammo = Math.min(run.ammo + 8, run.ammoMax); break;
       case 'Mg': if (run.reserveMax >= STAT_CAPS.reserveMax) { showShopToast('RESERVES MAXED'); return; }
           run.reserveMax = Math.min(8, run.reserveMax + 1); break;
     }
   }

  // ── Compound stat buffs ──────────────────────────────────────
  function applyCompoundBuff(key) {
    if (!run) return;
    switch (key) {

      case 'LITHEBRYL':
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 20, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 8, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        updateAmmoBar(); updateShieldBar(); break;

      case 'NITROKALIUM':
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('REFILL MAXED'); }
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 6, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        updateShieldBar(); break;

      case 'CARBOSILICUM':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 18, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('REFILL MAXED'); }
        updateAmmoBar(); break;

      case 'MAGNIUM':
        if (run.reserveMax < STAT_CAPS.reserveMax) {
          run.reserveMax = Math.min(run.reserveMax + 2, STAT_CAPS.reserveMax);
        } else { showShopToast('RESERVES MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('REFILL MAXED'); }
        break;

      case 'TITANE':
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 30, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('REFILL MAXED'); }
        updateShieldBar(); break;

      case 'ALKALIUM':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 22, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('REFILL MAXED'); }
        updateAmmoBar(); break;

      case 'AZOLITHION':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 20, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 8, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        updateAmmoBar(); updateShieldBar(); break;

      case 'GAMMITE':
        if (run.ammoMax < STAT_CAPS.ammoMax) {
          run.ammoMax = Math.min(run.ammoMax + 8, STAT_CAPS.ammoMax);
        } else { showShopToast('AMMO MAXED'); }
        if (run.shieldMax < STAT_CAPS.shieldMax) {
          run.shieldMax = Math.min(run.shieldMax + 8, STAT_CAPS.shieldMax);
        } else { showShopToast('SHIELD MAXED'); }
        if (run.ammoRefillRate < STAT_CAPS.ammoRefillRate) {
          run.ammoRefillRate = Math.min(run.ammoRefillRate + 1, STAT_CAPS.ammoRefillRate);
        } else { showShopToast('REFILL MAXED'); }
        updateAmmoBar(); updateShieldBar(); break;

      default:
        showShopToast('NO BUFF'); return;
    }
    updateShopStats();
  }

  // ── Hit-test: craft tab compound/alloy cards ─────────────────
  function craftCardAt(x, y) {
    // Only match craft target cards — distinguished by containing .craft-lights
    // This excludes compound ingredient source cards in the INGREDIENTS section
    const cards = document.querySelectorAll('#shop-body .shop-card[data-card-tier="compound"], #shop-body .shop-card[data-card-tier="alloy"]');
    for (const c of cards) {
      if (!c.querySelector('.craft-lights')) continue; // skip ingredient source cards
      const r = c.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return c;
    }
    return null;
  }

  // ── Refresh a single craft card's lights + draggable state ───
  function refreshCraftCard(puKey, tier, recipe) {
    // Must match the craft target card specifically — it contains .craft-lights
    // querySelector returns the first match which may be the ingredient source card
    const allCards = document.querySelectorAll(`#shop-body .shop-card[data-card-key="${puKey}"]`);
    const card = Array.from(allCards).find(c => c.querySelector('.craft-lights'));
    if (!card) return;
    const progress = craftProgress[puKey] || [];
    const total = recipe.length;
    const filled = progress.length;
    const complete = filled === total;

    // Update lights
    const lights = card.querySelectorAll('.craft-light');
    lights.forEach((light, i) => {
      light.className = 'craft-light ' + (i < filled ? (complete ? 'complete' : 'on') : 'off');
    });

    // Update inventory count
    const countEl = card.querySelector('.craft-inv-count');
    if (countEl) {
      const invQty = run?.inventory[puKey] || 0;
      countEl.textContent = invQty;
      countEl.className = 'craft-inv-count' + (invQty > 0 ? ' has' : '');
    }

    // Update draggable + craft-ready
    card.dataset.draggable = complete ? '1' : '0';
    card.classList.toggle('craft-ready', complete);
  }

  function refreshSourceCard(ingredientKey) {
    // Covers both element and compound ingredient source cards in the INGREDIENTS section
    const src = document.querySelector(
      `#shop-body .shop-card[data-card-key="${ingredientKey}"]:not([data-card-tier="alloy"]):not(.shop-card-progress)`
    );
    // Prefer the one that is NOT a craft target (no .craft-lights inside)
    const allMatches = document.querySelectorAll(
      `#shop-body .shop-card[data-card-key="${ingredientKey}"][data-card-tier="element"],` +
      `#shop-body .shop-card[data-card-key="${ingredientKey}"][data-card-tier="compound"].stash-has,` +
      `#shop-body .shop-card[data-card-key="${ingredientKey}"][data-card-tier="compound"].stash-empty`
    );
    allMatches.forEach(card => {
      if (card.querySelector('.craft-lights')) return; // skip craft target cards
      const qty = run?.inventory[ingredientKey] || 0;
      const has = qty > 0;
      card.classList.toggle('stash-has',   has);
      card.classList.toggle('stash-empty', !has);
      card.dataset.draggable = has ? '1' : '0';
      const countEl = card.querySelector('.stash-count');
      if (countEl) countEl.textContent = qty;
      // Update sym color for compound ingredient cards
      if (card.dataset.cardTier === 'compound') {
        const symEl = card.querySelector('.shop-card-sym');
        if (symEl) symEl.style.color = has ? 'var(--purple)' : 'rgba(168,85,247,0.25)';
      }
    });
  }

  // ── Commit drop ──────────────────────────────────────────────
  function commitDrop(x, y) {
    const targetSlot = reserveSlotAt(x, y);
    const onActionBox = actionBoxAt(x, y);

    // ── Element card → stats block (buff) ─────────────────────
    if (dragSource === 'card' && dragTier === 'element' && statsBlockAt(x, y)) {
      const qty = run?.inventory[dragKey] || 0;
      if (qty > 0) {
        run.inventory[dragKey]--;
        applyElementBuff(dragKey);
        refresh();
        renderShopBody();
		updateShopStats();
      }
      return;
    }

    // ── Compound card → stats block (buff) ────────────────────
    if (dragSource === 'card' && dragTier === 'compound' && statsBlockAt(x, y)) {
      const qty = run?.inventory[dragKey] || 0;
      if (qty > 0) {
        run.inventory[dragKey]--;
        applyCompoundBuff(dragKey);
        refresh();
        renderShopBody();
		updateShopStats();
      }
      return;
    }

    // ── Ingredient → craft card ────────────────────────────────
    if (dragSource === 'card' && shopMode === 'craft') {
      const targetCard = craftCardAt(x, y);
      if (targetCard) {
        const puKey = targetCard.dataset.cardKey;
        const tier  = targetCard.dataset.cardTier;

        if (!craftProgress[puKey]) craftProgress[puKey] = [];
        const progress = craftProgress[puKey];

        // Use multi-variant check: is this ingredient valid for any remaining variant?
        const isValid = isValidIngredientForAnyVariant(puKey, tier, dragKey, dragTier, progress);

        if (isValid && (run.inventory[dragKey] || 0) > 0) {
          run.inventory[dragKey]--;
          progress.push(dragKey);
          // Re-resolve which variant is now active and refresh lights accordingly
          const resolved = tier === 'alloy'
            ? resolveAlloyVariant(puKey, progress)
            : resolveCompoundVariant(puKey, progress);
          const recipeKeys = tier === 'alloy' ? resolved.recipe.map(r => r.key) : resolved.recipe;
          refreshCraftCard(puKey, tier, recipeKeys);
          refreshSourceCard(dragKey);
        }
        // Invalid ingredient: silent no-op — card stays in inventory
        return;
      }
    }

    // ── Card → action box ──────────────────────────────────────
    if (dragSource === 'card' && onActionBox) {
      if      (shopMode === 'buy')   stageItem(dragKey, dragTier);
      else if (shopMode === 'sell')  stageItem(dragKey, dragTier);
      else if (shopMode === 'craft') stageCraftJob(dragKey, dragTier);
      renderShopBody();
      return;
    }

    // ── Stash card → reserve slot ──────────────────────────────
    if ((dragSource === 'stash' || (dragSource === 'card' && shopMode === 'stash')) && targetSlot) {
      const slotIdx = parseInt(targetSlot.dataset.slot);
      while (run.powerups.length < run.reserveMax) run.powerups.push(null);
      const existingKey = run.powerups[slotIdx] || null;
      if (existingKey === dragKey) { reset(); return; }
      if (existingKey) {
        run.inventory[existingKey] = Math.min(99, (run.inventory[existingKey] || 0) + 1);
      }
      run.powerups[slotIdx] = dragKey;
      run.inventory[dragKey] = Math.max(0, (run.inventory[dragKey] || 0) - 1);
      showShopToast('Equipped: ' + (STRINGS.powerups[dragKey]?.name || dragKey) + '!');
      refresh();

    // ── Reserve → reserve (swap) ───────────────────────────────
    } else if (dragSource === 'reserve' && targetSlot) {
      const toIdx = parseInt(targetSlot.dataset.slot);
      if (toIdx === dragSlotIdx) { reset(); return; }
      const toKey = run.powerups[toIdx] || null;
      run.powerups[dragSlotIdx] = toKey || null;
      if (toKey) run.powerups[toIdx] = dragKey;
      else { run.powerups[toIdx] = dragKey; run.powerups[dragSlotIdx] = null; }
      run.powerups = run.powerups.filter(k => k != null);
      refresh();

    // ── Reserve → outside (return to stash) ───────────────────
    } else if (dragSource === 'reserve' && !targetSlot) {
      run.powerups[dragSlotIdx] = null;
      run.inventory[dragKey] = Math.min(99, (run.inventory[dragKey] || 0) + 1);
      refresh();
    }
    // card → non-box: cancel (no-op)
  }

  function reset() {
    dragging = false;
    dragKey = null; dragTier = null; dragSource = null; dragSlotIdx = -1; dragEl = null;
    hideGhost(); clearHighlights();
    document.querySelectorAll('.shop-card.drag-source').forEach(c => c.classList.remove('drag-source'));
  }

  // ── Clear a craft card's progress (long-press) ───────────────
  function clearCraftCard(puKey, tier) {
    if (!craftProgress[puKey] || craftProgress[puKey].length === 0) return;
    // Refund ingredients back to inventory
    for (const key of craftProgress[puKey]) {
      if (tier === 'alloy') {
        run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
      } else {
        run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
      }
    }
    delete craftProgress[puKey];
    showShopToast('Cleared — ingredients returned');
    renderShopBody();
  }

  function cancelLongPress() {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
    if (longPressCard)  { longPressCard.classList.remove('long-press-charging'); longPressCard = null; }
  }

  // ── Pointer start ────────────────────────────────────────────
  function onStart(x, y, target) {
    // Any shop card with data-card-key (buy/sell/craft tabs)
    const card = target.closest('[data-card-key]');
    if (card && card.dataset.draggable === '1') {
      dragKey    = card.dataset.cardKey;
      dragTier   = card.dataset.cardTier;
      dragSource = 'card';
      dragEl     = card;
      startX = x; startY = y; dragging = false;
      return true;
    }

    // Long-press on a craft card with in-progress ingredients → clear it
    if (shopMode === 'craft' && card) {
      const puKey = card.dataset.cardKey;
      const tier  = card.dataset.cardTier;
      if (puKey && (tier === 'compound' || tier === 'alloy') && craftProgress[puKey]?.length > 0) {
        longPressCard = card;
        card.classList.add('long-press-charging');
        longPressTimer = setTimeout(() => {
          cancelLongPress();
          clearCraftCard(puKey, tier);
        }, LONG_PRESS_MS);
        startX = x; startY = y;
        return true; // consume the event so it doesn't fall through
      }
    }
    // Stash tab powerup card
    const puCard = target.closest('[data-pu-key]');
    if (puCard && puCard.dataset.draggable === '1') {
      dragKey    = puCard.dataset.puKey;
      dragTier   = 'compound';
      dragSource = 'stash';
      dragEl     = puCard;
      startX = x; startY = y; dragging = false;
      return true;
    }
    // Reserve slot
    const slot = target.closest('.shop-reserve-slot');
    if (slot && slot.dataset.key) {
      dragKey      = slot.dataset.key;
      dragTier     = 'compound';
      dragSlotIdx  = parseInt(slot.dataset.slot);
      dragSource   = 'reserve';
      dragEl       = slot;
      startX = x; startY = y; dragging = false;
      return true;
    }
    return false;
  }

  function onMove(x, y) {
    // Any movement cancels a pending long-press
    if (longPressTimer) {
      const d = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);
      if (d > DRAG_THRESHOLD) cancelLongPress();
    }
    if (!dragKey) return;
    if (!dragging) {
      const d = Math.sqrt((x-startX)**2 + (y-startY)**2);
      if (d < DRAG_THRESHOLD) return;
      dragging = true;
      if (dragEl) dragEl.classList.add('drag-source');
      showGhost(x, y, dragKey, dragTier);
    }
    moveGhost(x, y);
    highlightTarget(x, y);
  }

  function onEnd(x, y) {
    cancelLongPress(); // always clean up any pending hold
    if (!dragKey) return;
    if (dragging) {
      commitDrop(x, y);
    } else {
      // Tap — show info only, no action
      const tier = dragSource === 'reserve' ? 'compound'
                 : dragTier || 'element';
      showItemInfo(dragKey, tier);
      // Keep selection highlight on the source card
      if (dragEl) {
        document.querySelectorAll('.shop-card.obj.selected').forEach(c => c.classList.remove('selected'));
        dragEl.classList.add('selected');
      }
    }
    reset();
  }

  // ── Touch events ─────────────────────────────────────────────
  const shopScreen = document.getElementById('screen-shop');

  shopScreen.addEventListener('touchstart', e => {
    const t = e.touches[0];
    if (onStart(t.clientX, t.clientY, e.target)) e.preventDefault();
  }, { passive: false });

  shopScreen.addEventListener('touchmove', e => {
    if (!dragKey) return;
    e.preventDefault();
    const t = e.touches[0];
    onMove(t.clientX, t.clientY);
  }, { passive: false });

  shopScreen.addEventListener('touchend', e => {
    if (!dragKey) return;
    e.preventDefault();
    const t = e.changedTouches[0];
    onEnd(t.clientX, t.clientY);
  }, { passive: false });

  // ── Mouse events (desktop) ───────────────────────────────────
  shopScreen.addEventListener('mousedown', e => {
    onStart(e.clientX, e.clientY, e.target);
  });
  window.addEventListener('mousemove', e => {
    if (dragKey) onMove(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', e => {
    if (dragKey) onEnd(e.clientX, e.clientY);
  });
}
