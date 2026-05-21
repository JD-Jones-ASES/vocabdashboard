// VocabDashboard — App bootstrap.
// Routes between views by toggling the [hidden] attribute on <section data-view>.
// No history.pushState (unreliable on file://).

(function () {
  "use strict";

  const Views = {
    browse:     () => window.BrowseView && BrowseView.init(),
    flashcards: () => window.FlashcardsView && FlashcardsView.init(),
    worksheets: () => window.WorksheetsView && WorksheetsView.init(),
    dictionary: () => window.DictionaryView && DictionaryView.init()
  };

  const initialized = { browse: false, flashcards: false, worksheets: false, dictionary: false };

  function showView(name) {
    document.querySelectorAll("section.view").forEach(sec => {
      const isThis = sec.dataset.view === name;
      sec.hidden = !isThis;
    });
    document.querySelectorAll(".nav-btn").forEach(btn => {
      const isThis = btn.dataset.nav === name;
      if (isThis) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });
    if (Views[name] && !initialized[name]) {
      Views[name]();
      initialized[name] = true;
    }
  }

  function wireNav() {
    document.querySelectorAll(".nav-btn").forEach(btn => {
      if (btn.id === "random-term-btn") return; // wired separately
      btn.addEventListener("click", () => showView(btn.dataset.nav));
    });
    document.getElementById("random-term-btn").addEventListener("click", projectRandomTerm);
  }

  function projectRandomTerm() {
    const term = VOCAB.allTerms[Math.floor(Math.random() * VOCAB.allTerms.length)];
    Projector.show({
      title: "Random term · " + term.unitTitle,
      items: [term],
      shuffleable: false,
      renderItem: (t, idx, total, revealed) => {
        const wrap = document.createElement("div");
        wrap.className = "fc-projector";
        const en = document.createElement("div");
        en.className = "fc-term-en";
        en.textContent = t.en.term;
        wrap.appendChild(en);
        const es = document.createElement("div");
        es.className = "fc-term-es";
        es.textContent = t.es.term;
        wrap.appendChild(es);
        if (IMAGES[t.id]) {
          const img = document.createElement("img");
          img.className = "fc-img";
          img.src = "images/" + IMAGES[t.id].file;
          img.alt = "";
          img.addEventListener("error", () => img.remove());
          wrap.appendChild(img);
        }
        if (revealed) {
          const defEn = document.createElement("div");
          defEn.className = "fc-def";
          defEn.textContent = t.en.def;
          wrap.appendChild(defEn);
          const defEs = document.createElement("div");
          defEs.className = "fc-def fc-def-es";
          defEs.textContent = t.es.def;
          wrap.appendChild(defEs);
        }
        return wrap;
      }
    });
  }

  function setFooterStats() {
    const total = VOCAB.allTerms.length;
    const units = VOCAB.units.length;
    const imageCount = Object.keys(IMAGES).length;
    document.getElementById("footer-stats").textContent =
      `${units} units · ${total} terms · ${imageCount} images`;
  }

  function start() {
    setFooterStats();
    wireNav();
    showView("browse"); // Default view.
  }

  // Expose showView so Quick Start can switch views programmatically.
  window.VocabApp = { showView };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
