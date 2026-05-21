// VocabDashboard — Dictionary view.
// Renders a printable glossary/dictionary of the vocabulary with user-selectable
// options: units, language(s), sort order, column count, images, sources.

(function () {
  "use strict";

  const Dictionary = {
    state: { inited: false },

    init() {
      if (this.state.inited) return;
      this.state.inited = true;

      // Populate unit checkbox grid (all checked by default).
      const wrap = document.getElementById("dict-units");
      VOCAB.units.forEach(u => {
        const label = el("label", {});
        const cb = el("input", { type: "checkbox", value: u.id });
        cb.checked = true;
        label.appendChild(cb);
        label.appendChild(el("span", {}, ` ${u.title} (${u.terms.length})`));
        wrap.appendChild(label);
      });

      document.getElementById("dict-select-all").addEventListener("click", () => this.setAllUnits(true));
      document.getElementById("dict-select-none").addEventListener("click", () => this.setAllUnits(false));
      document.getElementById("dict-generate-btn").addEventListener("click", () => this.render());
      document.getElementById("dict-print-btn").addEventListener("click", () => {
        // Make sure something's rendered before printing.
        if (!document.querySelector("#dict-output .dict-entry")) {
          this.render();
        }
        window.print();
      });

      // Render once on first activation so the print button is meaningful.
      this.render();
    },

    setAllUnits(checked) {
      document.querySelectorAll("#dict-units input").forEach(cb => cb.checked = checked);
    },

    readForm() {
      return {
        unitIds: Array.from(document.querySelectorAll("#dict-units input:checked")).map(cb => cb.value),
        lang:    document.querySelector("input[name='dict-lang']:checked").value,
        sort:    document.querySelector("input[name='dict-sort']:checked").value,
        columns: parseInt(document.querySelector("input[name='dict-cols']:checked").value, 10),
        images:  document.getElementById("dict-include-images").checked,
        sources: document.getElementById("dict-include-sources").checked
      };
    },

    render() {
      const out = document.getElementById("dict-output");
      const status = document.getElementById("dict-status");
      const opts = this.readForm();

      if (!opts.unitIds.length) {
        status.textContent = "Pick at least one unit.";
        out.innerHTML = "";
        document.getElementById("dict-print-btn").disabled = true;
        return;
      }

      // Collect terms with unit context.
      const terms = [];
      for (const u of VOCAB.units) {
        if (!opts.unitIds.includes(u.id)) continue;
        for (const t of u.terms) terms.push({ ...t, _unit: u });
      }

      out.innerHTML = "";
      out.className = "dict-output cols-" + opts.columns;

      if (opts.sort === "unit") {
        // Group by unit, render unit headers.
        const byUnit = new Map();
        for (const t of terms) {
          if (!byUnit.has(t._unit.id)) byUnit.set(t._unit.id, { unit: t._unit, terms: [] });
          byUnit.get(t._unit.id).terms.push(t);
        }
        for (const { unit, terms: uTerms } of byUnit.values()) {
          out.appendChild(el("h3", { class: "dict-unit-header" }, unit.title));
          const list = el("dl", { class: "dict-list" });
          for (const t of uTerms) list.appendChild(this.buildEntry(t, opts));
          out.appendChild(list);
        }
      } else {
        // Alphabetical (across all selected units).
        const key = opts.sort === "es" ? (t => t.es.term.toLocaleLowerCase("es")) : (t => t.en.term.toLowerCase());
        terms.sort((a, b) => key(a).localeCompare(key(b), opts.sort === "es" ? "es" : "en"));

        // Letter section headers.
        let currentLetter = "";
        let list = null;
        for (const t of terms) {
          const letter = key(t).charAt(0).toUpperCase();
          if (letter !== currentLetter) {
            currentLetter = letter;
            out.appendChild(el("h3", { class: "dict-unit-header" }, letter));
            list = el("dl", { class: "dict-list" });
            out.appendChild(list);
          }
          list.appendChild(this.buildEntry(t, opts));
        }
      }

      const stats = `${terms.length} terms · ${VOCAB.units.filter(u => opts.unitIds.includes(u.id)).length} unit(s)`;
      status.textContent = stats;
      document.getElementById("dict-print-btn").disabled = false;

      // Update the print-header summary used by print CSS.
      document.getElementById("dict-print-title").textContent =
        opts.unitIds.length === VOCAB.units.length
          ? "Grade 6 Science · Bilingual Vocabulary"
          : VOCAB.units.filter(u => opts.unitIds.includes(u.id)).map(u => u.title).join(", ");
    },

    buildEntry(t, opts) {
      const entry = el("div", { class: "dict-entry" });

      // Headword line: term(s) shown in chosen language
      const headLine = el("dt", { class: "dict-headword" });
      if (opts.lang === "bilingual" || opts.lang === "en") {
        headLine.appendChild(el("span", { class: "dict-term-en" }, t.en.term));
      }
      if (opts.lang === "bilingual" || opts.lang === "es") {
        if (opts.lang === "bilingual") headLine.appendChild(document.createTextNode("  ·  "));
        headLine.appendChild(el("span", { class: "dict-term-es" }, t.es.term));
      }
      entry.appendChild(headLine);

      // Image (inline, small)
      if (opts.images && IMAGES[t.id]) {
        const img = el("img", {
          class: "dict-img",
          src: "images/" + IMAGES[t.id].file,
          alt: IMAGES[t.id].caption || ""
        });
        img.addEventListener("error", () => img.remove());
        entry.appendChild(img);
      }

      // Definitions
      const defWrap = el("dd", { class: "dict-defs" });
      if (opts.lang === "bilingual" || opts.lang === "en") {
        defWrap.appendChild(el("div", { class: "dict-def dict-def-en" }, t.en.def));
      }
      if (opts.lang === "bilingual" || opts.lang === "es") {
        defWrap.appendChild(el("div", { class: "dict-def dict-def-es" }, t.es.def));
      }
      entry.appendChild(defWrap);

      // Source attribution (small line below the definition)
      if (opts.sources && opts.images && IMAGES[t.id]) {
        const src = IMAGES[t.id];
        const credit = el("div", { class: "dict-source" },
          `Image: ${src.attribution} (${src.license})`);
        entry.appendChild(credit);
      }

      return entry;
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

  window.DictionaryView = Dictionary;
})();
