// VocabDashboard — Seeded RNG and shuffle utilities.
// Used by worksheets.js to produce reproducible A/B variants.

(function () {
  "use strict";

  // mulberry32: tiny, fast, 32-bit seeded PRNG.
  // Returns a function that yields floats in [0, 1).
  function mulberry32(seed) {
    let a = seed | 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Hash a string seed (e.g., "A7K2") to a 32-bit integer.
  function hashSeed(seedStr) {
    let h = 2166136261 >>> 0;     // FNV-1a 32-bit
    const s = String(seedStr || "");
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // Make an RNG bound to a string or numeric seed.
  function makeRng(seed) {
    const n = typeof seed === "number" ? (seed | 0) : hashSeed(seed);
    return mulberry32(n || 1);
  }

  // Fisher-Yates shuffle in place, using rng.
  function shuffle(arr, rng) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Pick n distinct items from arr without modifying arr.
  function sample(arr, n, rng) {
    const pool = arr.slice();
    shuffle(pool, rng);
    return pool.slice(0, Math.min(n, pool.length));
  }

  // Pick one item.
  function pickOne(arr, rng) {
    if (!arr.length) return undefined;
    return arr[Math.floor(rng() * arr.length)];
  }

  // Generate a 4-character seed code like "A7K2" (uppercase + digits).
  function randomSeedCode() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // skip easily-confused chars (I,O,0,1)
    let s = "";
    for (let i = 0; i < 4; i++) {
      s += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return s;
  }

  // Expose globally for other scripts.
  window.VocabRng = {
    mulberry32,
    hashSeed,
    makeRng,
    shuffle,
    sample,
    pickOne,
    randomSeedCode
  };
})();
