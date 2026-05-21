// VocabDashboard — Browse view.
// Renders all terms in a searchable, filterable grid with a Quick Start panel.

(function () {
  "use strict";

  const Browse = {
    state: {
      query: "",
      unitId: "",
      lang: "bilingual",
      inited: false
    },

    init() {
      if (this.state.inited) return;
      this.state.inited = true;

      this.maybeShowWelcome();

      // Populate unit filter dropdown.
      const select = document.getElementById("browse-unit-filter");
      VOCAB.units.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.id;
        opt.textContent = u.title;
        select.appendChild(opt);
      });

      // Populate Quick Start unit picker.
      const qsSelect = document.getElementById("quickstart-unit");
      VOCAB.units.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.id;
        opt.textContent = u.title;
        qsSelect.appendChild(opt);
      });
      qsSelect.addEventListener("change", () => this.updateQuickStartButtons());

      // Wire Quick Start buttons.
      document.querySelectorAll(".quickstart-btn").forEach(btn => {
        btn.addEventListener("click", () => this.runQuickStart(btn.dataset.quickstart));
      });

      // Wire up search, unit filter, language filter.
      document.getElementById("browse-search").addEventListener("input", e => {
        this.state.query = e.target.value.trim().toLowerCase();
        this.render();
      });
      select.addEventListener("change", e => {
        this.state.unitId = e.target.value;
        this.render();
      });
      document.getElementById("browse-lang-filter").addEventListener("change", e => {
        this.state.lang = e.target.value;
        this.render();
      });

      this.render();
    },

    maybeShowWelcome() {
      const KEY = "vocabdashboard.welcome.dismissed";
      const banner = document.getElementById("welcome-banner");
      if (!banner) return;
      let dismissed = false;
      try { dismissed = localStorage.getItem(KEY) === "1"; } catch { /* private mode etc. */ }
      if (!dismissed) banner.hidden = false;
      document.getElementById("welcome-dismiss").addEventListener("click", () => {
        banner.hidden = true;
        try { localStorage.setItem(KEY, "1"); } catch { /* fail silent */ }
      });
    },

    updateQuickStartButtons() {
      const hasUnit = !!document.getElementById("quickstart-unit").value;
      document.querySelectorAll(".quickstart-btn").forEach(btn => {
        btn.disabled = !hasUnit;
      });
    },

    runQuickStart(action) {
      const unitId = document.getElementById("quickstart-unit").value;
      if (!unitId) return;

      if (action === "present-flashcards" || action === "print-flashcards") {
        window.VocabApp.showView("flashcards");
        // After init, set form values.
        document.querySelectorAll("#flashcard-units input").forEach(cb => {
          cb.checked = cb.value === unitId;
        });
        const six = document.querySelector("input[name='fc-per-page'][value='6']");
        if (six) six.checked = true;
        const bilingual = document.querySelector("input[name='fc-lang'][value='bilingual']");
        if (bilingual) bilingual.checked = true;
        document.getElementById("fc-preview-btn").click();
        if (action === "present-flashcards") {
          const presentBtn = document.getElementById("fc-present-btn");
          if (presentBtn) presentBtn.click();
        } else {
          document.getElementById("flashcard-output").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (action === "present-quiz" || action === "print-quiz") {
        window.VocabApp.showView("worksheets");
        document.querySelectorAll("#ws-units input").forEach(cb => {
          cb.checked = cb.value === unitId;
        });
        const mc = document.querySelector("input[name='ws-type'][value='mc']");
        if (mc) mc.checked = true;
        document.getElementById("ws-num").value = "10";
        document.getElementById("ws-seed").value = ""; // generate random
        document.getElementById("ws-generate-btn").click();
        if (action === "present-quiz") {
          const presentBtn = document.getElementById("ws-present-btn");
          if (presentBtn) presentBtn.click();
        } else {
          document.getElementById("worksheet-output").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },

    render() {
      const out = document.getElementById("browse-results");
      const count = document.getElementById("browse-result-count");
      const q = this.state.query;
      const unitId = this.state.unitId;
      const lang = this.state.lang;

      const matches = VOCAB.allTerms.filter(t => {
        if (unitId && t.unitId !== unitId) return false;
        if (!q) return true;
        const hay = (
          t.en.term + " " + t.en.def + " " + t.es.term + " " + t.es.def
        ).toLowerCase();
        return hay.includes(q);
      });

      count.textContent = matches.length === VOCAB.allTerms.length
        ? `${matches.length} terms`
        : `${matches.length} of ${VOCAB.allTerms.length} terms`;

      if (!matches.length) {
        out.innerHTML = `<div class="empty-state">No terms match your search.</div>`;
        return;
      }

      out.replaceChildren(...matches.map(t => this.buildCard(t, lang)));
    },

    buildCard(t, lang) {
      const card = el("article", { class: "term-card" });

      if (lang === "bilingual" || lang === "en") {
        card.appendChild(el("div", { class: "term-en" }, t.en.term));
      }
      if (lang === "bilingual" || lang === "es") {
        card.appendChild(el("div", { class: "term-es" }, t.es.term));
      }

      const img = IMAGES[t.id];
      if (img) {
        const i = el("img", {
          class: "term-img",
          src: "images/" + img.file,
          alt: img.caption,
          loading: "lazy"
        });
        i.addEventListener("error", () => i.remove());
        card.appendChild(i);
      }

      if (lang === "bilingual" || lang === "en") {
        card.appendChild(el("div", { class: "def def-en" }, t.en.def));
      }
      if (lang === "bilingual" || lang === "es") {
        card.appendChild(el("div", { class: "def def-es" }, t.es.def));
      }

      const meta = el("div", { class: "term-meta" });
      meta.appendChild(el("span", {}, t.unitTitle));
      if (img) {
        const link = el("a", {
          href: img.source_url,
          target: "_blank",
          rel: "noopener noreferrer",
          title: img.attribution + " · " + img.license
        }, "image source");
        meta.appendChild(link);
      }
      card.appendChild(meta);

      return card;
    }
  };

  function el(tag, attrs, text) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null) continue;
        if (k === "class") node.className = v;
        else node.setAttribute(k, v);
      }
    }
    if (text != null) node.textContent = text;
    return node;
  }

  window.BrowseView = Browse;
})();
