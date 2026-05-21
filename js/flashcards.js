// VocabDashboard — Flashcards view.
// Generates printable flashcard pages with mirrored backs for cut-and-fold alignment.

(function () {
  "use strict";

  const Flashcards = {
    state: { inited: false, hasPreview: false },

    init() {
      if (this.state.inited) return;
      this.state.inited = true;

      // Populate unit checkbox grid.
      const wrap = document.getElementById("flashcard-units");
      VOCAB.units.forEach((u, i) => {
        const id = "fc-unit-" + u.id;
        const label = el("label", {});
        const cb = el("input", { type: "checkbox", value: u.id, id });
        cb.checked = i <= 1; // Pre-check Foundations + Unit 1 to make the form usable on first load.
        const span = el("span", {}, ` ${u.title} (${u.terms.length})`);
        label.appendChild(cb);
        label.appendChild(span);
        wrap.appendChild(label);
      });

      document.getElementById("fc-preview-btn").addEventListener("click", () => this.preview());
      document.getElementById("fc-print-btn").addEventListener("click", () => {
        document.body.classList.add("print-flashcards");
        window.print();
        // Remove the class after the print dialog has had a chance to capture.
        setTimeout(() => document.body.classList.remove("print-flashcards"), 250);
      });
      document.getElementById("fc-present-btn").addEventListener("click", () => this.present());
    },

    present() {
      const opts = this.readForm();
      if (!opts.unitIds.length) {
        document.getElementById("fc-status").textContent = "Pick at least one unit before presenting.";
        return;
      }
      const cards = this.collectCards(opts);
      if (!cards.length) {
        document.getElementById("fc-status").textContent = "No cards in selected units.";
        return;
      }
      const unitTitles = VOCAB.units
        .filter(u => opts.unitIds.includes(u.id))
        .map(u => u.title).join(", ");

      Projector.show({
        title: "Flashcards · " + unitTitles,
        items: cards,
        shuffleable: true,
        renderItem: (card, idx, total, revealed) => this.renderProjectorCard(card, opts, !!revealed)
      });
    },

    renderProjectorCard(t, opts, revealed) {
      const wrap = el("div", { class: "fc-projector" });

      // Cross-language mode: EN term front, ES term + def back.
      if (opts.lang === "cross") {
        if (!revealed) {
          wrap.appendChild(el("div", { class: "fc-term-en" }, t.en.term));
          if (opts.includeImages && IMAGES[t.id]) {
            const img = el("img", { class: "fc-img", src: "images/" + IMAGES[t.id].file, alt: "" });
            img.addEventListener("error", () => img.remove());
            wrap.appendChild(img);
          }
        } else {
          wrap.appendChild(el("div", { class: "fc-term-es" }, t.es.term));
          wrap.appendChild(el("div", { class: "fc-def fc-def-es" }, t.es.def));
        }
        return wrap;
      }

      const showTerm = (opts.front === "term" && !revealed) || (opts.front === "def" && revealed);
      if (showTerm) {
        if (opts.lang === "bilingual" || opts.lang === "en") {
          wrap.appendChild(el("div", { class: "fc-term-en" }, t.en.term));
        }
        if (opts.lang === "bilingual" || opts.lang === "es") {
          wrap.appendChild(el("div", { class: "fc-term-es" }, t.es.term));
        }
        if (opts.includeImages && IMAGES[t.id]) {
          const img = el("img", { class: "fc-img", src: "images/" + IMAGES[t.id].file, alt: "" });
          img.addEventListener("error", () => img.remove());
          wrap.appendChild(img);
        }
      } else {
        if (opts.lang === "bilingual" || opts.lang === "en") {
          wrap.appendChild(el("div", { class: "fc-def" }, t.en.def));
        }
        if (opts.lang === "bilingual" || opts.lang === "es") {
          wrap.appendChild(el("div", { class: "fc-def fc-def-es" }, t.es.def));
        }
      }
      return wrap;
    },

    preview() {
      const opts = this.readForm();
      const status = document.getElementById("fc-status");
      const out = document.getElementById("flashcard-output");

      if (!opts.unitIds.length) {
        status.textContent = "Pick at least one unit.";
        out.innerHTML = "";
        document.getElementById("fc-print-btn").disabled = true;
        return;
      }

      const cards = this.collectCards(opts);
      if (!cards.length) {
        status.textContent = "No cards in selected units.";
        out.innerHTML = "";
        document.getElementById("fc-print-btn").disabled = true;
        return;
      }

      out.innerHTML = "";
      const perPage = opts.perPage;
      const pages = Math.ceil(cards.length / perPage);
      for (let p = 0; p < pages; p++) {
        const chunk = cards.slice(p * perPage, (p + 1) * perPage);
        out.appendChild(this.buildPage(chunk, opts, p + 1, pages, "fronts"));
        out.appendChild(this.buildPage(chunk, opts, p + 1, pages, "backs"));
      }
      status.textContent = `${cards.length} cards · ${pages * 2} printed pages.`;
      document.getElementById("fc-print-btn").disabled = false;
      document.getElementById("fc-present-btn").disabled = false;
      this.state.hasPreview = true;
    },

    readForm() {
      const unitIds = Array.from(document.querySelectorAll("#flashcard-units input:checked"))
        .map(cb => cb.value);
      const lang = document.querySelector("input[name='fc-lang']:checked").value;
      const perPage = parseInt(document.querySelector("input[name='fc-per-page']:checked").value, 10);
      const front = document.querySelector("input[name='fc-front']:checked").value;
      const includeImages = document.getElementById("fc-include-images").checked;
      return { unitIds, lang, perPage, front, includeImages };
    },

    collectCards(opts) {
      const cards = [];
      for (const unit of VOCAB.units) {
        if (!opts.unitIds.includes(unit.id)) continue;
        for (const t of unit.terms) cards.push(t);
      }
      return cards;
    },

    buildPage(cards, opts, pageNum, totalPages, side) {
      const page = el("div", { class: `flashcard-page fc-grid-${opts.perPage} ${side === "backs" ? "fc-backs" : ""}` });
      page.appendChild(el("div", { class: "flashcard-page-label" },
        `Page ${pageNum} of ${totalPages} · ${side.toUpperCase()}`));

      for (const t of cards) {
        page.appendChild(this.buildCard(t, opts, side));
      }
      return page;
    },

    buildCard(t, opts, side) {
      const card = el("div", { class: "flashcard" });
      const showTerm = (side === "fronts" && opts.front === "term") ||
                       (side === "backs"  && opts.front === "def");

      // For cross-language mode: EN term on fronts, ES term on backs (or vice versa)
      if (opts.lang === "cross") {
        if (side === "fronts") {
          card.appendChild(el("div", { class: "fc-term-en" }, t.en.term));
          if (opts.includeImages && IMAGES[t.id]) {
            const img = el("img", { class: "fc-img", src: "images/" + IMAGES[t.id].file, alt: "" });
            img.addEventListener("error", () => img.remove());
            card.appendChild(img);
          }
        } else {
          card.appendChild(el("div", { class: "fc-term-es" }, t.es.term));
          card.appendChild(el("div", { class: "fc-def fc-def-es" }, t.es.def));
        }
        return card;
      }

      // Term sides (front or back depending on opts.front)
      if (showTerm) {
        if (opts.lang === "bilingual" || opts.lang === "en") {
          card.appendChild(el("div", { class: "fc-term-en" }, t.en.term));
        }
        if (opts.lang === "bilingual" || opts.lang === "es") {
          card.appendChild(el("div", { class: "fc-term-es" }, t.es.term));
        }
        if (opts.includeImages && IMAGES[t.id]) {
          const img = el("img", { class: "fc-img", src: "images/" + IMAGES[t.id].file, alt: "" });
          img.addEventListener("error", () => img.remove());
          card.appendChild(img);
        }
      } else {
        // Definition side
        if (opts.lang === "bilingual" || opts.lang === "en") {
          card.appendChild(el("div", { class: "fc-def" }, t.en.def));
        }
        if (opts.lang === "bilingual" || opts.lang === "es") {
          card.appendChild(el("div", { class: "fc-def fc-def-es" }, t.es.def));
        }
      }
      return card;
    }
  };

  function el(tag, attrs, text) {
    const node = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === "class") node.className = v;
      else node.setAttribute(k, v);
    }
    if (text != null) node.textContent = text;
    return node;
  }

  window.FlashcardsView = Flashcards;
})();
