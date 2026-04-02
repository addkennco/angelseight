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
    afterLevel: (n) => `AFTER LEVEL ${n}`,
    buy: 'BUY', sell: 'SELL', craft: 'CRAFT', launch: 'LAUNCH ›',
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
  ],
  items: {
    Be: { name:'Beryllium', sym:'β', effect:'Shield Max +6',  desc: 'A rare, thermal-resistant material used for shielding components that must withstand extreme reentry heat.' },
    Li: { name:'Lithium',   sym:'λ', effect:'Shield Max +4',  desc: 'A high-capacity energy storage medium used to power the grid for rapid shield cycling.' },
    Ti: { name:'Titanium',  sym:'τ', effect:'Shield Max +8',  desc: 'A high-tensile, non-corrosive plating used for primary hull reinforcement.' },
    N:  { name:'Nitrogen',  sym:'𝜈', effect:'Shoot Speed +3', desc: 'A cryogenic propellant used for rapid-burst thruster cooling to achieve momentary speed spikes.' },
    Si: { name:'Silicon',   sym:'Σ', effect:'Ammo Max +10',   desc: "A refined semiconductor essential for the ship's tactical computer and targeting sub-routines." },
    Mg: { name:'Magnesium', sym:'μ', effect:'Reserve +1',     desc: 'A lightweight reactive metal that serves as the primary igniter for thermal-based weaponry.' },
    K:  { name:'Potassium', sym:'κ', effect:'Shoot Speed +5', desc: 'A highly volatile ionic catalyst used to spark high-energy reactions in reactors.' },
    C:  { name:'Carbon',    sym:'ζ', effect:'Ammo Max +8',    desc: 'Used in its crystalline form to create ultra-hardened kinetic penetrators for standard ammo.' },
  },
  powerups: {
      LITHEBRYL:   { sym:'Β',  name:'Lithebryl',     recipe:['Be','Ti'], effect:'Shield Max +20, Ammo +8',             power:'Shield Restore',           puKey:'LITHEBRYL',    desc:  'An alloy of Lithium and Beryllium that absorbs and dissipates energy blasts.' },
      NITROKALIUM: { sym:'Π',  name:'Nitrokalium',   recipe:['Li','N'],  effect:'Shoot Speed +12, Shield +6',          power:'Double Fire Rate',         puKey:'NITROKALIUM',  desc:  'A Potassium-Nitrogen gas mixture used to puah the engines to run at dangerous but hyper-efficient levels.'},
      CARBOSILICUM:{ sym:'Ξ',  name:'Carbosilicium', recipe:['Si','C'],  effect:'Ammo Max +18, Shoot Speed +3',        power:'Double Points',            puKey:'CARBOSILICUM', desc:  'A highly efficient superconductor, allowing fire-control systems to process at lightning speeds.'},
      MAGNIUM:     { sym:'Μ',  name:'Magnium',       recipe:['Mg','K'],  effect:'Reserve +2, Shoot Speed +6',          power:'Bomb',                     puKey:'MAGNIUM',      desc:  'A Magnesium-based unstable isotope that is highly volatile when impacted.'},
      TITANE:      { sym:'Θ',  name:'Titane',        recipe:['Ti','N'],  effect:'Shield Max +30, Shoot Speed +5',      power:'Invincibility',            puKey:'TITANE',       desc:  'A low-density, Titanium-based metal that provides near-indestructible hull integrity without adding significant mass.'},
      ALKALIUM:    { sym:'α',  name:'Alkalium',      recipe:['K','Si'],  effect:'Ammo Max +22, Shoot Speed +8',        power:'Piercing Bullets',         puKey:'ALKALIUM',     desc:  'A Silicon-Potassium compound that uses ionized energy to give shots piercing capabilities.'},
	  AZOLITHION:  { sym:'Λ',  name:'Azolithion',    recipe:['Li','K'],  effect: 'Ammo +20, Shield +8',                power:'Multishot',                puKey: 'AZOLITHION',  desc:  'A Lithium-Nitrogen composite used for cooling during high-velocity maneuvers.'},
	  GAMMITE:     { sym:'Γ',  name:'Gammite',       recipe:['Ti','Si'], effect: 'Ammo +8, Shield +8, Shoot Speed +4', power:'No Ammo Cost',             puKey: 'GAMMITE',     desc:  'A complex superconductor used to synchronize ammo and shield frequencies for balanced performance.'},
	  OMEGITE: {
        sym: 'Ω', name: 'Omegite', puKey: 'OMEGITE',
        recipe: [
          { key: 'MAGNIUM',  label: 'Μ Magnium'   },
          { key: 'ALKALIUM', label: 'α Alkalium'  },
          { key: 'TITANE',   label: 'Θ Titane'  },
        ],
        effect: 'Reserve +3, Shield Max +10, Shoot Speed +10, Ammo Max +10', power:'Super Bomb',
		desc: 'A terrifyingly unstable material that exists in a state of constant decay.',
      },
      AXORITE: {
        sym: 'Χ', name: 'Axorite', puKey: 'AXORITE',
        recipe: [
          { key: 'MAGNIUM', label: 'Μ Magnium'  },
          { key: 'TITANE',  label: 'Θ Titane' },
        ],
        effect: 'Shield Max +25, Reserve +2', power:'Full Restore',
		desc: 'A highly versatile multi-application metal alloy that is used in both defense and munitions.',
      },
      PHIOMEGA: {
        sym: 'Φ', name: 'PhiOmega', puKey: 'PHIOMEGA',
        recipe: [
          { key: 'CARBOSILICUM', label: 'Ξ Carbosilicium' },
          { key: 'ALKALIUM',     label: 'α Alkalium'  },
        ],
        effect: 'Ammo Max +30, Shoot Speed +6', power:'Burstshot',
		desc: 'A perfectly lossless superconductor that expels magnetic fields, ideal for maximizing ammo velocity and efficiency.',
      },
      DELTALITE: {
        sym: '∇', name: 'Deltalite', puKey: 'DELTALITE',
        recipe: [
          { key: 'LITHEBRYL',     label: 'Β Lithebryl' },
          { key: 'NITROKALIUM',   label: 'Π Nitrokalium'  },
        ],
        effect: 'Shield Max +20, Shoot Speed +10', power:'Time Dilation',
		desc: 'A sophisticated Beryllium-based metal that can survive the friction of warp-speed travel.',
      },	  
  }
};

// ═══════════════════════════════════════════════════════════════
// SAVE / STATE
// ═══════════════════════════════════════════════════════════════
const SAVE_KEY = 'a8_save_v1';
let save = { highScore: 0, storyFlags: 0, permStats: { shootSpeed:0, ammoMax:0, shieldMax:0 } };
function loadSave() {
  try { const d = localStorage.getItem(SAVE_KEY); if(d) save = JSON.parse(atob(d)); } catch(e){}
}
function writeSave() {
  try { localStorage.setItem(SAVE_KEY, btoa(JSON.stringify(save))); } catch(e){}
}
loadSave();

// ═══════════════════════════════════════════════════════════════
// ROUTER
// ═══════════════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
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

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
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
// MENU FLICKER-IN
// ═══════════════════════════════════════════════════════════════
(function menuFlickerIn() {
  const el = document.getElementById('screen-menu')?.querySelector('.menu-content');
  if (!el) return;

  const WAVE_DELAY_MS = 380;  // head start for waveforms
  const EXPAND_MS     = 550;  // vertical expand duration
  const FLICKER_MS    = 380;  // flicker phase after expand
  const TOTAL_MS      = WAVE_DELAY_MS + EXPAND_MS + FLICKER_MS;

  let startTs = null;
  let flickerTimer = 0;

  function tick(ts) {
    if (!startTs) startTs = ts;
    const elapsed = ts - startTs;

    if (elapsed < WAVE_DELAY_MS) {
      // keep invisible
      el.style.opacity = '0';
      el.style.transform = 'scaleY(0.06)';
      requestAnimationFrame(tick);
      return;
    }

    const afterDelay = elapsed - WAVE_DELAY_MS;

    if (afterDelay < EXPAND_MS) {
      // vertical expand, ease-out cubic
      let t = afterDelay / EXPAND_MS;
      t = 1 - Math.pow(1 - t, 3);
      const scale = 0.06 + 0.94 * t;
      el.style.transform = `scaleY(${scale.toFixed(4)})`;
      el.style.opacity = (t * 0.9).toFixed(4);
      requestAnimationFrame(tick);
      return;
    }

    const afterExpand = afterDelay - EXPAND_MS;

    if (afterExpand < FLICKER_MS) {
      // sin-gate flicker
      flickerTimer += 0.38;
      const gate = Math.sin(flickerTimer) > 0.25;
      const progress = afterExpand / FLICKER_MS; // 0→1
      const baseAlpha = 0.9 + 0.1 * progress;   // ramps to 1
      el.style.opacity = (gate ? baseAlpha : baseAlpha * 0.65).toFixed(4);
      el.style.transform = 'scaleY(1)';
      requestAnimationFrame(tick);
      return;
    }

    // remove inline styles so CSS takes over
    el.style.opacity = '1';
    el.style.transform = 'scaleY(1)';
  }

  requestAnimationFrame(tick);
})();

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
    shootSpeed: 3 + save.permStats.shootSpeed,
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
  let ammoMilestones = [];              // ammo refills
  let endSweepFired = false;            // end level sweep

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
    const maxW = Math.min(window.innerWidth, 430);
    const maxH = window.innerHeight;
    canvas.width  = maxW;
    canvas.height = maxH;
    W = maxW; H = maxH;
    // center canvas
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
    ammoMilestones = [200, 350, 500, 750, 900, 1200, 1600, 2000, 2500].slice(); // reset each level
    ship.x = ship.targetX = W / 2;
    ship.y = H - 130;
    ship.invincible = 0;
    shootTimer = 0;
    waveOffset = 0;
    waveT = 0;
    levelTimer = 0;
    spawnTimer = 0;
    enemiesSpawned = 0;
    endSweepFired = false;
    invincibleTimer = 0;
    piercingBullets = false;
    timeDilationTimer = 0;
    noAmmoCostTimer = 0;
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

  function loop(ts) {
    const dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;
    if (state === 'playing') {
      update(dt);
    }
    render();
    animId = requestAnimationFrame(loop);
  }

  function togglePause() {
    if (state === 'dead' || state === 'clear') return;
    if (state === 'playing') {
      state = 'paused';
      document.getElementById('overlay-pause').classList.add('active');
      document.getElementById('btn-pause').textContent = '▶ RESUME';
    } else if (state === 'paused') {
      state = 'playing';
      lastTime = performance.now(); // reset to avoid dt spike after unpause
      document.getElementById('overlay-pause').classList.remove('active');
      document.getElementById('btn-pause').textContent = '⏻';
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

    // Scroll waveform
    waveOffset += dt * 60 * (1 + run.level * 0.08);
    waveT += dt;

    // Shooting
    shootTimer -= dt;
    if (shootTimer <= 0 && run.ammo > 0) {
      fireBullet();
      shootTimer = 1 / run.shootSpeed;
      if (noAmmoCostTimer <= 0) { run.ammo = Math.max(0, run.ammo - 1); updateAmmoBar(); }
    }

    // Spawn powerup pods
    podSpawnTimer -= dt;
    if (podSpawnTimer <= 0) {
      spawnPod();
      podSpawnTimer = 18 + Math.random() * 12; // pod every 18-30s
    }

    // Ammo milestones
    if (ammoMilestones.length > 0 && run.score >= ammoMilestones[0]) {
      ammoMilestones.shift();
      const refill = Math.round(run.ammoMax * 0.18);
      run.ammo = Math.min(run.ammoMax, run.ammo + refill);
      updateAmmoBar();
      spawnFloatingText(W * 0.5, H * 0.5, '+ AMMO', '#00f5ff');
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
        spawnParticles(ship.x, ship.y, '#ff2d78', 8);
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
        spawnParticles(ship.x, ship.y, '#ff2d78', 5);
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
      type:'scout', r:12, hp:2, dmg:0, color:'#ff6b35', speed:110,
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
      type:'swarmer', r:8, hp:1, color:'#ff2d78', speed:90,
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
      type:'armored', r:16, hp:6, color:'#ff9f43', speed:55,
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
    add('MAGNIUM',       6);
    add('LITHEBRYL', 6);
    add('NITROKALIUM',   6);
    add('CARBOSILICUM', 6);

    // More Compounds
    if (lvl >= 2) { add('TITANE', 4); add('ALKALIUM', 4); add('AZOLITHION', 4); add('GAMMITE', 4); }

    // Alloys
    if (lvl >= 4) add('OMEGITE', 1); // All other alloys (AXORITE, PHIOMEGA, DELTALITE) go here

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
      [-0.35, 0, 0.35].forEach(offset => {
        const a = Math.atan2(ady, adx) + offset;
        const spd = 520;
        bullets.push({ x:bx, y:by, speed:spd, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, dmg:1, enemy:false, color:'#a855f7' });
      });
    } else if (run.bulletType === '12spread') {
      for (let i = 0; i < 12; i++) {
        const a = (i/12)*Math.PI*2;
        const spd = 400;
        bullets.push({ x:bx, y:by, speed:spd, vx:Math.cos(a)*spd, vy:Math.sin(a)*spd, dmg:1, enemy:false, color:'#ff2d78' });
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

  // ── SWEEP —───────────────────────────────────────────────────────
  // opts.silent = true suppresses the log message
  function triggerSweep(opts = {}) {
    const silent = opts.silent || false;
    // Spawn burst particles at every enemy and mine position
    enemies.forEach(e => spawnParticles(e.x, e.y, e.color, 8));
    mines.forEach(m   => spawnParticles(m.x, m.y, '#ff2020', 6));
    // Wipe the field
    enemies = [];
    mines   = [];
    bullets = bullets.filter(b => !b.enemy);   // keep player bullets
    drops   = [];                               // drops too — clean slate
    if (!silent) {
      spawnParticles(W / 2, H / 2, '#ffd700', 60);
      spawnFloatingText(W / 2, H / 2 - 40, 'SECTOR SWEPT', '#ffd700');
      logPickup('SECTOR SWEPT');
    }
  }

  function triggerPowerup(idx) {
    const pu = run.powerups[idx];
    if (!pu) return;
    if (pu === 'OMEGITE') {
      triggerSweep({ silent: true });
      spawnParticles(W / 2, H / 2, '#ff2d78', 40);
      spawnParticles(W / 2, H / 2, '#ffd700', 40);
      spawnParticles(W / 2, H / 2, '#a855f7', 40);
      spawnFloatingText(W / 2, H / 2 - 50, 'OMEGITE', '#ff2d78');
      logPickup('OMEGITE DEPLOYED');
    } else if (pu === 'MAGNIUM') {
      triggerSweep({ silent: false });
      logPickup('MAGNIUM DEPLOYED');
    } else if (pu === 'LITHEBRYL') {
      run.shield = run.shieldMax; updateShieldBar(); logPickup('SHIELD RESTORED');
    } else if (pu === 'NITROKALIUM') {
      run.shootSpeed *= 2; setTimeout(() => { run.shootSpeed /= 2; }, 8000);
      logPickup('SPEED UP 8s');
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
  function render() {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#050510';
    ctx.fillRect(0,0,W,H);

    drawWaveform();
    drawPods();
    drawDrops();
    drawMines();
    drawBullets();
    drawEnemies();
    drawShip();
    drawParticles();
    drawFloaters();
  }

  // Per-level scene config: [skyTop, skyBottom, sunColor, sunGlow, gridColor, mountainColor]
  const LEVEL_PALETTES = [
    { skyT:'#0d0020', skyB:'#1a0040', sun:'#ff6ec7', sunG:'#ff2d78', grid:'#2255ff', mtn:'#1133cc' }, // 1
    { skyT:'#0a0025', skyB:'#1e0050', sun:'#ff8c42', sunG:'#ff4500', grid:'#00ccff', mtn:'#0066cc' }, // 2
    { skyT:'#100015', skyB:'#300030', sun:'#ff2d78', sunG:'#cc0055', grid:'#cc44ff', mtn:'#8800cc' }, // 3
    { skyT:'#1a0800', skyB:'#3d1200', sun:'#ffd700', sunG:'#ff8c00', grid:'#ff6b35', mtn:'#cc3300' }, // 4
    { skyT:'#200010', skyB:'#450020', sun:'#ff4500', sunG:'#ff0000', grid:'#ff2d78', mtn:'#cc0044' }, // 5
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
      const baseY = r * rowSpan + rowSpan * 0.5;
      const pct   = r / rows;
      const amp   = (4 + r * 1.4 + lvl * 0.8) * (0.4 + pct * 0.6);
      const freq  = 0.022 + r * 0.001;
      const ph    = waveT * 0.5 + r * 0.3;
      const ph2   = waveT * 0.3 + r * 0.18;

      const rr = Math.round(c1.r + (c2.r - c1.r) * pct);
      const gg = Math.round(c1.g + (c2.g - c1.g) * pct);
      const bb = Math.round(c1.b + (c2.b - c1.b) * pct);
      const alpha = 0.14 + pct * 0.38;

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
    ctx.fillStyle = '#ff2d78'; ctx.fill();

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
        ctx.beginPath();
        if (run.bulletType === 'laser') {
          ctx.fillStyle = bColor;
          ctx.fillRect(b.x-2, b.y-12, 4, 24);
        } else {
          ctx.arc(b.x, b.y, isPiercing ? 4 : 3, 0, Math.PI*2);
          ctx.fillStyle = bColor; ctx.fill();
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
        ctx.font = 'bold 11px VT323, monospace';
        ctx.fillStyle = `rgba(168,85,247,${pulse})`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(pu ? pu.sym : '?', 0, 0);
      } else {
        // Cyan circle for element items
        ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(0, 0, d.r, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 1; ctx.stroke();
        ctx.font = 'bold 9px VT323, monospace';
        ctx.fillStyle = '#00f5ff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(d.key, 0, 0);
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
      ctx.font = 'bold 13px VT323, monospace';
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
      ctx.font = 'bold 11px VT323, monospace';
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
    for (let i = 0; i < 3; i++) {
      const slot = document.getElementById('pu-' + i);
      const pu = run.powerups[i];
      if (pu) {
        const d = STRINGS.powerups[pu];
        slot.classList.add('filled');
        slot.innerHTML = `<span class="pu-slot-sym">${d.sym}</span><span class="pu-slot-name">${d.name}</span>`;
      } else {
        slot.classList.remove('filled');
        slot.innerHTML = `<span class="pu-slot-name">EMPTY</span>`;
      }
    }
    // Update stash box — count powerup keys stored in inventory
    const stashEl = document.getElementById('pu-stash');
    if (stashEl && run) {
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

  return { init, startLevel, resize, triggerPowerup,
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

// ── Action box labels per tab ────────────────────────────────────
const ACTION_BOX_LABELS = {
  buy:   { text: 'DRAG TO BUY',   cls: 'buy-box'   },
  sell:  { text: 'DRAG TO SELL',  cls: 'sell-box'  },
  craft: { text: 'DRAG TO CRAFT', cls: 'craft-box' },
  stash: { text: 'DRAG TO STASH', cls: ''          },
};

function shopTab(tab) {
  shopMode = tab;
  selectedCardKey = null;
  ['buy','sell','craft','stash'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.classList.toggle('active', t === tab);
  });
  // Update action box
  const box = document.getElementById('shop-action-box');
  if (box) {
    const cfg = ACTION_BOX_LABELS[tab] || ACTION_BOX_LABELS.buy;
    box.textContent = cfg.text;
    box.className = 'shop-action-box ' + cfg.cls;
  }
  // Reset info panel
  clearItemInfo();
  renderShopBody();
  updateShopStats();
  updateShopReserves();
}

// ── Info panel ───────────────────────────────────────────────────
function clearItemInfo() {
  const panel = document.getElementById('shop-info-panel');
  if (panel) panel.innerHTML = '<div class="shop-info-empty">TAP ANY CARD FOR INFO</div>';
}

function showItemInfo(key, tier) {
  // tier: 'element' | 'compound' | 'alloy' | 'powerup'
  const panel = document.getElementById('shop-info-panel');
  if (!panel) return;

  let sym, name, effect, recipe, desc, price;
  const symClass = tier === 'compound' ? 'compound' : tier === 'alloy' ? 'alloy' : '';

  if (tier === 'element') {
    const item = STRINGS.items[key];
    if (!item) return;
    sym = item.sym; name = item.name; effect = item.effect; desc = item.desc;
    price = 'BUY 80¢ · SELL 40¢';
  } else {
    const pu = STRINGS.powerups[key];
    if (!pu) return;
    sym = pu.sym; name = pu.name; effect = pu.effect; desc = pu.desc;
    // Build recipe string
    if (Array.isArray(pu.recipe)) {
      // simple array of element keys
      recipe = pu.recipe.map(k => {
        const el = STRINGS.items[k]; return el ? `${el.sym} ${el.name}` : k;
      }).join(' + ');
    } else if (pu.recipe && typeof pu.recipe === 'object') {
      // already an object with key/label pairs — but compounds use plain arrays
      recipe = null;
    }
    // Alloys have array-of-objects recipes stored on the craft data, not STRINGS
    // We'll look them up from the craft arrays
    if (tier === 'alloy') {
      const ALLOY_RECIPES = {
        OMEGITE:   'Μ Magnium + α Alkalium + Θ Titane',
        AXORITE:   'Μ Magnium + Θ Titane',
        PHIOMEGA:  'Ξ Carbosilicium + α Alkalium',
        DELTALITE: 'Β Lithebryl + Π Nitrokalium',
      };
      recipe = ALLOY_RECIPES[key] || '';
      price = key === 'OMEGITE' ? 'SELL 120¢' : 'SELL 100¢';
    } else if (tier === 'compound') {
      price = 'BUY 150¢ · SELL 75¢';
    } else {
      price = 'BUY 150¢';
    }
  }

  panel.innerHTML =
    `<div class="shop-info-sym ${symClass}">${sym}</div>` +
    `<div class="shop-info-name">${name}</div>` +
    (effect ? `<div class="shop-info-effect">${effect}</div>` : '') +
    (recipe ? `<div class="shop-info-recipe">RECIPE: ${recipe}</div>` : '') +
    (desc   ? `<div class="shop-info-desc">${desc}</div>` : '') +
    (price  ? `<div class="shop-info-price">${price}</div>` : '');
}

function updateShopStats() {
  if (!run) return;
  // Shoot speed: default 3, max 12
  const spd = run.shootSpeed;
  document.getElementById('stat-val-speed').textContent  = spd.toFixed(1);
  document.getElementById('stat-bar-speed').style.width  = Math.min(100, (spd / 12) * 100) + '%';
  // Ammo max: default 50 (base 65 in newRun... using ammoMax), display cap 200
  const ammo = run.ammoMax;
  document.getElementById('stat-val-ammo').textContent   = ammo;
  document.getElementById('stat-bar-ammo').style.width   = Math.min(100, (ammo / 200) * 100) + '%';
  // Shield max: default 10, max 50
  const shld = run.shieldMax;
  document.getElementById('stat-val-shield').textContent = shld;
  document.getElementById('stat-bar-shield').style.width = Math.min(100, (shld / 50) * 100) + '%';
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
      const card = document.createElement('div'); card.className = 'shop-card slim';
      card.dataset.cardKey = key; card.dataset.cardTier = 'element'; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${item.sym}</div><div class="shop-card-name">${item.name}</div><div class="shop-card-corner"><div class="shop-card-count">${(run?.inventory[key]||0)}/99</div><div class="shop-card-price">${price}¢</div></div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.slim.selected').forEach(c => c.classList.remove('selected'));
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
      const card = document.createElement('div'); card.className = 'shop-card slim';
      card.dataset.cardKey = key; card.dataset.cardTier = 'compound'; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${pu.sym}</div><div class="shop-card-name">${pu.name}</div><div class="shop-card-corner"><div class="shop-card-count">${(run?.inventory[key]||0)}/99</div><div class="shop-card-price">${price}¢</div></div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.slim.selected').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(key, 'compound');
      };
      grid2.appendChild(card);
    });
    body.appendChild(grid2);

  } else if (shopMode === 'sell') {

    const COMPOUND_KEYS = { LITHEBRYL:75, NITROKALIUM:75, CARBOSILICUM:75, MAGNIUM:75, TITANE:75, ALKALIUM:75 };
    const ALLOY_KEYS    = { OMEGITE:120, FULL_RESTORE:100, PHIOMEGA:100, DELTALITE:100 };

    function makeSellCard(sym, name, effect, qty, price, key, tier) {
      const card = document.createElement('div'); card.className = 'shop-card slim';
      card.dataset.cardKey = key; card.dataset.cardTier = tier || 'element'; card.dataset.cardPrice = price; card.dataset.draggable = '1';
      card.innerHTML = `<div class="shop-card-sym">${sym}</div><div class="shop-card-name">${name}</div><div class="shop-card-corner"><div class="shop-card-count">${qty}</div><div class="shop-card-price">SELL ${price}¢</div></div>`;
      card.onclick = () => {
        const alreadySelected = card.classList.contains('selected');
        document.querySelectorAll('.shop-card.slim.selected').forEach(c => c.classList.remove('selected'));
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
    const label = document.createElement('div');
    label.className = 'shop-section-label'; label.textContent = 'COMPOUNDS';
    body.appendChild(label);
    const compounds = [
      { sym:'Β',  name:'Lithebryl',     recipe:['Be','Ti'], effect:'Shield Max +20, Ammo +8 — Shield Restore',             puKey:'LITHEBRYL',    desc:  'An alloy of Lithium and Beryllium that absorbs and dissipates energy blasts.' },
      { sym:'Π',  name:'Nitrokalium',   recipe:['Li','N'],  effect:'Shoot Spd +12, Shield +6 — Double Fire Rate 8s',       puKey:'NITROKALIUM',  desc:  'A Potassium-Nitrogen gas mixture used to puah the engines to run at dangerous but hyper-efficient levels.'},
      { sym:'Ξ',  name:'Carbosilicium', recipe:['Si','C'],  effect:'Ammo Max +18, Shoot Spd +3 — Double Points 15s',       puKey:'CARBOSILICUM', desc:  'A highly efficient superconductor, allowing fire-control systems to process at lightning speeds.'},
      { sym:'Μ',  name:'Magnium',       recipe:['Mg','K'],  effect:'Reserve +2, Shoot Spd +6 — Bomb',                      puKey:'MAGNIUM',      desc:  'A Magnesium-based unstable isotope that is highly volatile when impacted.'},
      { sym:'Θ',  name:'Titane',        recipe:['Ti','N'],  effect:'Shield Max +30, Shoot Spd +5 — Invincibility 10s',     puKey:'TITANE',       desc:  'A low-density, Titanium-based metal that provides near-indestructible hull integrity without adding significant mass.'},
      { sym:'α',  name:'Alkalium',      recipe:['K','Si'],  effect:'Ammo Max +22, Shoot Spd +8 — Piercing Bullets',        puKey:'ALKALIUM',     desc:  'A Silicon-Potassium compound that uses ionized energy to give shots piercing capabilities.'},
	  { sym:'Λ',  name:'Azolithion',    recipe:['Li','K'],  effect: 'Ammo +20, Shield +8 — Bullet Shift 15s',              puKey: 'AZOLITHION',  desc:  'A Lithium-Nitrogen composite used for cooling during high-velocity maneuvers.'},
	  { sym:'Γ',  name:'Gammite',       recipe:['Ti','Si'], effect: 'Ammo +8, Shield +8, Shoot Spd +4 — No Ammo Cost 10s', puKey: 'GAMMITE',     desc:  'A complex superconductor used to synchronize ammo and shield frequencies for balanced performance.'},
    ];
    const grid = document.createElement('div'); grid.className = 'shop-grid';
    compounds.forEach(c => {
      const pu = STRINGS.powerups[c.puKey];
      const canCraft = run && c.recipe.every(r => (run.inventory[r]||0) > 0);
      const card = document.createElement('div'); card.className = 'shop-card slim';
      card.dataset.cardKey = c.puKey; card.dataset.cardTier = 'compound'; card.dataset.draggable = canCraft ? '1' : '0';
      card.style.opacity = canCraft ? '1' : '0.4';
      card.innerHTML =
        `<div class="shop-card-sym" style="color:var(--purple)">${c.sym}</div>` +
        `<div class="shop-card-name">${c.name}</div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.slim.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(c.puKey, 'compound');
      };
      grid.appendChild(card);
    });
    body.appendChild(grid);

    // ── ALLOYS — crafted from compounds + elements ────────────────
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
      const canCraft = run && a.recipe.every(r => (run.inventory[r.key] || 0) > 0);
      const card = document.createElement('div'); card.className = 'shop-card slim';
      card.dataset.cardKey = a.puKey; card.dataset.cardTier = 'alloy'; card.dataset.draggable = canCraft ? '1' : '0';
      card.style.cssText += canCraft ? '' : 'opacity:0.4';
      card.innerHTML =
        `<div class="shop-card-sym" style="color:var(--pink);font-size:14px">${a.sym}</div>` +
        `<div class="shop-card-name">${a.name}</div>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.slim.selected').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        showItemInfo(a.puKey, 'alloy');
      };
      gridAlloy.appendChild(card);
    });
    body.appendChild(gridAlloy);

  } else if (shopMode === 'stash') {

    // ── ELEMENTS (display-only — not draggable) ──────────────────
    const labelEl = document.createElement('div');
    labelEl.className = 'shop-section-label'; labelEl.textContent = 'ELEMENTS';
    body.appendChild(labelEl);

    const gridEl = document.createElement('div'); gridEl.className = 'shop-grid';
    Object.entries(STRINGS.items).forEach(([key, item]) => {
      const qty = run?.inventory[key] || 0;
      const has = qty > 0;
      const card = document.createElement('div');
      card.className = 'shop-card slim ' + (has ? 'stash-has' : 'stash-empty');
      card.dataset.cardKey  = key;
      card.dataset.cardTier = 'element';
      card.dataset.draggable = has ? '1' : '0';
      card.innerHTML =
        `<div class="shop-card-sym">${item.sym}</div>` +
        `<div class="shop-card-name">${item.name}</div>` +
        `<span class="stash-count">${qty > 0 ? Math.min(qty, 99) : '0'}</span>`;
      card.onclick = () => {
        document.querySelectorAll('.shop-card.slim.selected').forEach(c => c.classList.remove('selected'));
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
      const invQty   = run?.inventory[key] || 0;           // stashed (draggable)
      const resCount = (run?.powerups || []).filter(k => k === key).length; // in active reserves
      const totalQty = invQty + resCount;
      const has = invQty > 0;                              // only inv qty enables drag
      const card = document.createElement('div');
      card.className = 'shop-card slim pu-card ' + (totalQty > 0 ? 'stash-has' : 'stash-empty');
      card.dataset.puKey = key;
      card.dataset.draggable = has ? '1' : '0';

      // Count badge: stash qty + reserve indicator
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
        document.querySelectorAll('.shop-card.slim.selected').forEach(c => c.classList.remove('selected'));
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
  if (run.level > 8) { gameWin(); return; }
  run.ammo = run.ammoMax; // refill ammo
  showScreen('game');
  Game.startLevel();
}

function gameWin() {
  if (run.score > save.highScore) { save.highScore = run.score; writeSave(); }
  alert('YOU REACHED ANGEL\'S EIGHT\nFINAL SCORE: ' + run.score.toLocaleString());
  showScreen('menu');
  updateMenuUI();
}

// ═══════════════════════════════════════════════════════════════
// STORY SCREEN
// ═══════════════════════════════════════════════════════════════
function showStory(level) {
  const s = STRINGS.story[level] || STRINGS.story[1];
  document.getElementById('story-level-label').textContent = STRINGS.ui.levelComplete(level);
  document.getElementById('story-text').textContent = s.text;
  document.getElementById('story-coords').textContent = s.coords || '';
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

  document.getElementById('btn-shop-menu').onclick = () => {
    if (!run) run = newRun();
    document.getElementById('shop-level-badge').textContent = 'BROWSING';
    showScreen('shop');
    shopTab('buy');
  };

  document.getElementById('btn-retry').onclick = () => {
    AudioManager.init();
    run = newRun();
    document.getElementById('overlay-death').classList.remove('active');
    showScreen('game');
    Game.startLevel();
  };

  document.getElementById('btn-menu-from-death').onclick = () => {
    document.getElementById('overlay-death').classList.remove('active');
    showScreen('menu');
    updateMenuUI();
  };

  document.getElementById('btn-to-story').onclick = () => {
    document.getElementById('overlay-clear').classList.remove('active');
    showStory(run.level);
  };

  document.getElementById('btn-pause').onclick = () => Game.togglePause();
  document.getElementById('btn-resume').onclick = () => Game.togglePause();
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') Game.togglePause();
  });

  document.getElementById('btn-to-shop').onclick = () => {
    shopMode = 'buy';
    document.getElementById('shop-level-badge').textContent = STRINGS.ui.afterLevel(run.level);
    document.getElementById('shop-credits').textContent = run.credits + '¢';
    showScreen('shop');
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
      for (let i = 0; i < 3; i++) {
        if (document.getElementById('pu-' + i).contains(el)) return i;
      }
      return -1;
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

// ═══════════════════════════════════════════════════════════════
// SHOP DRAG & DROP — powerup stash ↔ reserve slots
// ═══════════════════════════════════════════════════════════════
function setupShopDrag() {
  const DRAG_THRESHOLD = 8;

  // ── shared state ────────────────────────────────────────────
  let dragKey      = null;   // item/powerup key being dragged
  let dragTier     = null;   // 'element' | 'compound' | 'alloy'
  let dragSource   = null;   // 'card' | 'stash' | 'reserve'
  let dragSlotIdx  = -1;
  let dragEl       = null;
  let startX = 0, startY = 0;
  let dragging     = false;

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
    if (actionBoxAt(x, y)) {
      const box = document.getElementById('shop-action-box');
      if (box) box.classList.add('drag-over');
      return;
    }
    if (dragTier === 'element' && statsBlockAt(x, y)) {
      const stats = document.getElementById('shop-stats-block');
      if (stats) stats.classList.add('drag-over');
    }
  }

  // ── Transaction logic ────────────────────────────────────────
  // Shared lookup: given a key, find its craft compound definition
  function findCompound(key) {
    const compounds = [
      { puKey:'LITHEBRYL',    recipe:['Be','Ti'] },
      { puKey:'NITROKALIUM',  recipe:['Li','N']  },
      { puKey:'CARBOSILICUM', recipe:['Si','C']  },
      { puKey:'MAGNIUM',      recipe:['Mg','K']  },
      { puKey:'TITANE',       recipe:['Ti','N']  },
      { puKey:'ALKALIUM',     recipe:['K','Si']  },
      { puKey:'AZOLITHION',   recipe:['Li','K']  },
      { puKey:'GAMMITE',      recipe:['Ti','Si'] },
    ];
    return compounds.find(c => c.puKey === key) || null;
  }
  function findAlloy(key) {
    const alloys = [
      { puKey:'OMEGITE',   recipe:[{key:'MAGNIUM'},{key:'ALKALIUM'},{key:'TITANE'}]   },
      { puKey:'AXORITE',   recipe:[{key:'MAGNIUM'},{key:'TITANE'}]                    },
      { puKey:'PHIOMEGA',  recipe:[{key:'CARBOSILICUM'},{key:'ALKALIUM'}]              },
      { puKey:'DELTALITE', recipe:[{key:'LITHEBRYL'},{key:'NITROKALIUM'}]              },
    ];
    return alloys.find(a => a.puKey === key) || null;
  }

  // ── Element stat buffs ───────────────────────────────────────
  function applyElementBuff(key) {
    if (!run) return;
    switch (key) {
      case 'Be': run.shieldMax  += 6;  run.shield = Math.min(run.shield + 6, run.shieldMax);  break;
      case 'Li': run.shieldMax  += 4;  run.shield = Math.min(run.shield + 4, run.shieldMax);  break;
      case 'Ti': run.shieldMax  += 8;  run.shield = Math.min(run.shield + 8, run.shieldMax);  break;
      case 'N':  run.shootSpeed += 3;                                                           break;
      case 'Si': run.ammoMax    += 10; run.ammo   = Math.min(run.ammo + 10,  run.ammoMax);    break;
      case 'Mg': run.reserveMax  = Math.min(8, run.reserveMax + 1);                            break;
      case 'K':  run.shootSpeed += 5;                                                           break;
      case 'C':  run.ammoMax    += 8;  run.ammo   = Math.min(run.ammo + 8,   run.ammoMax);    break;
    }
  }

  function doBuy(key, tier) {
    if (!run) return;
    if (tier === 'element') {
      const price = 80;
      if (run.credits < price) return;
      run.credits -= price;
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
    } else if (tier === 'compound') {
      const price = 150;
      if (run.credits < price) return;
      run.credits -= price;
      run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
    }
    refresh();
  }

  function doSell(key, tier) {
    if (!run) return;
    const SELL_PRICES = { element:40, compound:75, alloy:100 };
    const price = tier === 'alloy' && key === 'OMEGITE' ? 120 : SELL_PRICES[tier] || 40;
    const qty = run.inventory[key] || 0;
    if (qty <= 0) return;
    run.inventory[key]--;
    run.credits += price;
    refresh();
  }

  function doCraft(key, tier) {
    if (!run) return;
    if (tier === 'compound') {
      const c = findCompound(key);
      if (!c) return;
      const canCraft = c.recipe.every(r => (run.inventory[r] || 0) > 0);
      if (!canCraft) return;
      c.recipe.forEach(r => run.inventory[r]--);
      const activePuCount = run.powerups.filter(k => k != null).length;
      if (activePuCount < run.reserveMax) {
        const emptyIdx = run.powerups.indexOf(null);
        if (emptyIdx >= 0) run.powerups[emptyIdx] = key;
        else run.powerups.push(key);
      } else {
        run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
      }
    } else if (tier === 'alloy') {
      const a = findAlloy(key);
      if (!a) return;
      const canCraft = a.recipe.every(r => (run.inventory[r.key] || 0) > 0);
      if (!canCraft) return;
      a.recipe.forEach(r => { run.inventory[r.key] = Math.max(0, (run.inventory[r.key] || 0) - 1); });
      const activePuCount = run.powerups.filter(k => k != null).length;
      if (activePuCount < run.reserveMax) {
        const emptyIdx = run.powerups.indexOf(null);
        if (emptyIdx >= 0) run.powerups[emptyIdx] = key;
        else run.powerups.push(key);
      } else {
        run.inventory[key] = Math.min(99, (run.inventory[key] || 0) + 1);
      }
    }
    refresh();
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
      }
      return;
    }

    // ── Card → action box ──────────────────────────────────────
    if (dragSource === 'card' && onActionBox) {
      if      (shopMode === 'buy')   doBuy(dragKey, dragTier);
      else if (shopMode === 'sell')  doSell(dragKey, dragTier);
      else if (shopMode === 'craft') doCraft(dragKey, dragTier);
      renderShopBody();
      return;
    }

    // ── Stash card → reserve slot ──────────────────────────────
    if (dragSource === 'stash' && targetSlot) {
      const slotIdx = parseInt(targetSlot.dataset.slot);
      while (run.powerups.length < run.reserveMax) run.powerups.push(null);
      const existingKey = run.powerups[slotIdx] || null;
      if (existingKey === dragKey) { reset(); return; }
      if (existingKey) {
        run.inventory[existingKey] = Math.min(99, (run.inventory[existingKey] || 0) + 1);
      }
      run.powerups[slotIdx] = dragKey;
      run.inventory[dragKey] = Math.max(0, (run.inventory[dragKey] || 0) - 1);
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

  function refresh() {
    updateShopReserves();
    updateShopStats();
    if (shopMode === 'stash') renderShopBody();
    document.getElementById('shop-credits').textContent = run ? run.credits + '¢' : '0¢';
  }

  function reset() {
    dragging = false;
    dragKey = null; dragTier = null; dragSource = null; dragSlotIdx = -1; dragEl = null;
    hideGhost(); clearHighlights();
    document.querySelectorAll('.shop-card.drag-source').forEach(c => c.classList.remove('drag-source'));
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
        document.querySelectorAll('.shop-card.slim.selected').forEach(c => c.classList.remove('selected'));
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