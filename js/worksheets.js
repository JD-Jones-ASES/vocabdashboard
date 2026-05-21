// VocabDashboard — Worksheet generators.
// Five worksheet types, each with seeded RNG (A/B variants and answer keys
// reproducible from the seed alone). Each generator also exposes a
// `renderProjector` callback used by the Projector overlay.

(function () {
  "use strict";

  const Worksheets = {
    state: { inited: false, current: null },

    init() {
      if (this.state.inited) return;
      this.state.inited = true;

      const wrap = document.getElementById("ws-units");
      VOCAB.units.forEach((u, i) => {
        const label = el("label", {});
        const cb = el("input", { type: "checkbox", value: u.id });
        cb.checked = (i === 1); // pre-check Unit 1 only
        label.appendChild(cb);
        label.appendChild(el("span", {}, ` ${u.title} (${u.terms.length})`));
        wrap.appendChild(label);
      });

      document.getElementById("ws-generate-btn").addEventListener("click", () => this.generate());
      document.getElementById("ws-print-ws-btn").addEventListener("click", () => {
        document.body.classList.add("print-worksheet");
        window.print();
        setTimeout(() => document.body.classList.remove("print-worksheet"), 250);
      });
      document.getElementById("ws-print-key-btn").addEventListener("click", () => {
        document.getElementById("answerkey-output").hidden = false;
        document.body.classList.add("print-answerkey");
        window.print();
        setTimeout(() => document.body.classList.remove("print-answerkey"), 250);
      });
      document.getElementById("ws-present-btn").addEventListener("click", () => this.present());
    },

    generate() {
      const opts = this.readForm();
      const status = document.getElementById("ws-status");

      if (!opts.unitIds.length) {
        status.textContent = "Pick at least one unit.";
        return this.clearOutput();
      }

      const pool = this.collectTerms(opts);
      if (pool.length < 4) {
        status.textContent = "Need at least 4 terms in the selected units.";
        return this.clearOutput();
      }

      const seedInput = document.getElementById("ws-seed").value.trim().toUpperCase();
      const seed = seedInput || VocabRng.randomSeedCode();
      document.getElementById("ws-seed").value = seed;

      const rng = VocabRng.makeRng(seed);
      const num = Math.min(opts.num, pool.length);
      const picked = VocabRng.sample(pool, num, rng);

      let result;
      switch (opts.type) {
        case "mc":         result = this.makeMC(picked, pool, rng, opts, seed); break;
        case "tf":         result = this.makeTF(picked, pool, rng, opts, seed); break;
        case "matching":   result = this.makeMatching(picked, rng, opts, seed); break;
        case "fillblank":  result = this.makeFillBlank(picked, rng, opts, seed); break;
        case "wordsearch": result = this.makeWordSearch(picked, rng, opts, seed); break;
        default: status.textContent = "Unknown worksheet type."; return;
      }

      this.state.current = { ...result, opts, seed, type: opts.type };

      document.getElementById("worksheet-output").replaceChildren(result.worksheetEl);
      document.getElementById("answerkey-output").replaceChildren(result.answerKeyEl);
      document.getElementById("answerkey-output").hidden = true;
      document.getElementById("ws-print-ws-btn").disabled = false;
      document.getElementById("ws-print-key-btn").disabled = false;
      document.getElementById("ws-present-btn").disabled = false;
      status.textContent = `${result.label} · ${result.itemCount || num} items · seed ${seed}`;
    },

    present() {
      const cur = this.state.current;
      if (!cur || !cur.items || !cur.items.length) return;
      const unitTitles = VOCAB.units
        .filter(u => cur.opts.unitIds.includes(u.id))
        .map(u => u.title).join(", ");
      Projector.show({
        title: `${cur.label} · ${unitTitles}`,
        items: cur.items,
        renderItem: cur.renderProjector,
        shuffleable: cur.shuffleable !== false,
        revealMaxFor: cur.revealMaxFor || (() => 1)
      });
    },

    clearOutput() {
      document.getElementById("worksheet-output").innerHTML = "";
      document.getElementById("answerkey-output").innerHTML = "";
      document.getElementById("ws-print-ws-btn").disabled = true;
      document.getElementById("ws-print-key-btn").disabled = true;
      document.getElementById("ws-present-btn").disabled = true;
      this.state.current = null;
    },

    readForm() {
      return {
        unitIds: Array.from(document.querySelectorAll("#ws-units input:checked")).map(cb => cb.value),
        type: document.querySelector("input[name='ws-type']:checked").value,
        lang: document.querySelector("input[name='ws-lang']:checked").value,
        num: parseInt(document.getElementById("ws-num").value, 10) || 10,
        includeBank: document.getElementById("ws-include-bank").checked
      };
    },

    collectTerms(opts) {
      const pool = [];
      for (const u of VOCAB.units) {
        if (!opts.unitIds.includes(u.id)) continue;
        for (const t of u.terms) pool.push(t);
      }
      return pool;
    },

    // ---------- Multiple Choice ----------
    makeMC(picked, pool, rng, opts, seed) {
      const questions = picked.map(t => {
        const distractors = VocabRng.sample(pool.filter(p => p.id !== t.id), 3, rng);
        const choices = VocabRng.shuffle([t, ...distractors], rng);
        const answerIdx = choices.findIndex(c => c.id === t.id);
        return { term: t, choices, answerIdx };
      });

      // ----- Worksheet DOM -----
      const ws = el("div", { class: "ws-mc" });
      ws.appendChild(this.makeHeader("Multiple Choice", opts, seed));
      const ol = el("ol");
      questions.forEach(q => {
        const li = el("li", { class: "ws-question" });
        li.appendChild(el("div", { class: "ws-prompt" }, this.def(q.term, opts.lang)));
        const cOl = el("ol", { class: "ws-choices" });
        q.choices.forEach(c => cOl.appendChild(el("li", {}, this.term(c, opts.lang))));
        li.appendChild(cOl);
        ol.appendChild(li);
      });
      ws.appendChild(ol);
      ws.appendChild(this.seedFooter(seed));

      // ----- Answer key DOM -----
      const ak = this.makeAKHeader("Multiple Choice — Answer Key", opts, seed);
      const akOl = el("ol");
      const letters = ["A", "B", "C", "D"];
      questions.forEach(q => {
        akOl.appendChild(el("li", {}, `${letters[q.answerIdx]} — ${this.term(q.term, opts.lang)}`));
      });
      ak.appendChild(akOl);
      ak.appendChild(this.seedFooter(seed));

      // ----- Projector renderer -----
      const lang = opts.lang;
      const renderProjector = (q, idx, total, revealed) => {
        const wrap = el("div", { class: "ws-projector" });
        wrap.appendChild(el("div", { class: "ws-projector-meta" }, `Question ${idx + 1} of ${total}`));
        wrap.appendChild(el("div", { class: "ws-projector-prompt" }, this.def(q.term, lang)));
        const choicesOl = el("ol", { class: "ws-projector-choices" });
        q.choices.forEach((c, i) => {
          const li = el("li", { "data-letter": letters[i] }, this.term(c, lang));
          if (revealed && i === q.answerIdx) li.classList.add("is-correct");
          choicesOl.appendChild(li);
        });
        wrap.appendChild(choicesOl);
        return wrap;
      };

      return { worksheetEl: ws, answerKeyEl: ak, label: "Multiple Choice",
               items: questions, renderProjector };
    },

    // ---------- True / False ----------
    makeTF(picked, pool, rng, opts, seed) {
      const questions = picked.map(t => {
        const isTrue = rng() < 0.5;
        if (isTrue) {
          return { term: t, shownDef: this.def(t, opts.lang), isTrue: true, correctTerm: t };
        }
        const fake = VocabRng.pickOne(pool.filter(p => p.id !== t.id), rng);
        return { term: t, shownDef: this.def(fake, opts.lang), isTrue: false, correctTerm: fake };
      });

      const ws = el("div", { class: "ws-tf" });
      ws.appendChild(this.makeHeader("True / False", opts, seed));
      ws.appendChild(el("p", { class: "ws-instructions" },
        "Read each statement. Circle T if the statement is true, F if it is false."));
      const ol = el("ol");
      questions.forEach(q => {
        const li = el("li", { class: "ws-question" });
        const line = el("div", { class: "ws-tf-line" });
        line.appendChild(el("span", { class: "ws-prompt" }, `${this.term(q.term, opts.lang)}: ${q.shownDef}`));
        line.appendChild(el("span", { class: "ws-tf-options" }, "T   F"));
        li.appendChild(line);
        ol.appendChild(li);
      });
      ws.appendChild(ol);
      ws.appendChild(this.seedFooter(seed));

      const ak = this.makeAKHeader("True / False — Answer Key", opts, seed);
      const akOl = el("ol");
      questions.forEach(q => {
        const note = q.isTrue
          ? "T"
          : `F (correct term: "${this.term(q.correctTerm, opts.lang)}")`;
        akOl.appendChild(el("li", {}, note));
      });
      ak.appendChild(akOl);
      ak.appendChild(this.seedFooter(seed));

      const lang = opts.lang;
      const renderProjector = (q, idx, total, revealed) => {
        const wrap = el("div", { class: "ws-projector" });
        wrap.appendChild(el("div", { class: "ws-projector-meta" }, `Question ${idx + 1} of ${total}`));
        wrap.appendChild(el("div", { class: "ws-projector-prompt" },
          `"${this.term(q.term, lang)}": ${q.shownDef}`));
        if (revealed) {
          const answerEl = el("div", { class: "ws-tf-answer " + (q.isTrue ? "is-true" : "is-false") },
            q.isTrue ? "TRUE" : "FALSE");
          wrap.appendChild(answerEl);
          if (!q.isTrue) {
            wrap.appendChild(el("div", { class: "ws-tf-correct-note" },
              `That definition belongs to "${this.term(q.correctTerm, lang)}".`));
          }
        } else {
          wrap.appendChild(el("div", { class: "ws-tf-answer", style: "color: #4a5470" }, "T   /   F"));
        }
        return wrap;
      };

      return { worksheetEl: ws, answerKeyEl: ak, label: "True / False",
               items: questions, renderProjector };
    },

    // ---------- Matching ----------
    makeMatching(picked, rng, opts, seed) {
      const terms = picked;
      const defOrder = VocabRng.shuffle(picked.slice(), rng);

      // ----- Worksheet DOM -----
      const ws = el("div", { class: "ws-matching-wrap" });
      ws.appendChild(this.makeHeader("Matching", opts, seed));
      ws.appendChild(el("p", { class: "ws-instructions" },
        "Write the letter of the matching definition next to each numbered term."));

      const grid = el("div", { class: "ws-matching" });
      terms.forEach((t, i) => {
        grid.appendChild(el("div", { class: "ws-num" }, `${i + 1}.`));
        const termCell = el("div", { class: "ws-term-cell" });
        termCell.appendChild(el("span", { class: "ws-blank-inline" }));
        termCell.appendChild(document.createTextNode(this.term(t, opts.lang)));
        grid.appendChild(termCell);

        grid.appendChild(el("div", { class: "ws-letter" }, `${String.fromCharCode(65 + i)}.`));
        grid.appendChild(el("div", { class: "ws-def-cell" }, this.def(defOrder[i], opts.lang)));
      });
      ws.appendChild(grid);
      ws.appendChild(this.seedFooter(seed));

      // ----- Answer key DOM -----
      const ak = this.makeAKHeader("Matching — Answer Key", opts, seed);
      const akOl = el("ol");
      terms.forEach(t => {
        const letterIdx = defOrder.findIndex(d => d.id === t.id);
        akOl.appendChild(el("li", {}, `${String.fromCharCode(65 + letterIdx)} (${this.term(t, opts.lang)})`));
      });
      ak.appendChild(akOl);
      ak.appendChild(this.seedFooter(seed));

      // ----- Projector: one term at a time. Show the term + lettered def column,
      // highlight the correct letter on reveal. -----
      const lang = opts.lang;
      const items = terms.map(t => {
        const letterIdx = defOrder.findIndex(d => d.id === t.id);
        return { term: t, correctLetter: String.fromCharCode(65 + letterIdx), correctDef: t };
      });

      const renderProjector = (item, idx, total, revealed) => {
        const wrap = el("div", { class: "ws-projector" });
        wrap.appendChild(el("div", { class: "ws-projector-meta" },
          `Term ${idx + 1} of ${total} — match to the correct letter`));
        wrap.appendChild(el("div", { class: "ws-projector-prompt" }, this.term(item.term, lang)));

        const matchGrid = el("ul", { class: "ws-matching-projector", style: "list-style:none" });
        defOrder.forEach((d, i) => {
          const letter = String.fromCharCode(65 + i);
          const row = el("li", { style: "display:contents" });
          row.appendChild(el("div", { class: "term" }, letter + "."));
          row.appendChild(el("div", { class: "arrow" + (revealed && letter === item.correctLetter ? " is-revealed" : "") },
            revealed && letter === item.correctLetter ? "✓" : ""));
          row.appendChild(el("div", { class: "def" }, this.def(d, lang)));
          matchGrid.appendChild(row);
        });
        wrap.appendChild(matchGrid);
        return wrap;
      };

      return { worksheetEl: ws, answerKeyEl: ak, label: "Matching",
               items, renderProjector };
    },

    // ---------- Fill in the Blank ----------
    makeFillBlank(picked, rng, opts, seed) {
      const ws = el("div", { class: "ws-fillblank" });
      ws.appendChild(this.makeHeader("Fill in the Blank", opts, seed));
      ws.appendChild(el("p", { class: "ws-instructions" },
        "Write the correct term in the blank for each definition."));

      if (opts.includeBank) {
        const banked = VocabRng.shuffle(picked.slice(), rng).map(t => this.term(t, opts.lang));
        const bank = el("div", { class: "ws-wordbank" });
        bank.appendChild(el("span", { class: "ws-wordbank-title" }, "Word Bank:"));
        const items = el("span", { class: "ws-wordbank-items" });
        banked.forEach(w => items.appendChild(el("span", {}, w)));
        bank.appendChild(items);
        ws.appendChild(bank);
      }

      const ol = el("ol");
      picked.forEach(t => {
        const li = el("li", { class: "ws-question" });
        const line = el("div", { class: "ws-prompt" });
        line.appendChild(el("span", { class: "ws-blank" }));
        line.appendChild(document.createTextNode("  =  " + this.def(t, opts.lang)));
        li.appendChild(line);
        ol.appendChild(li);
      });
      ws.appendChild(ol);
      ws.appendChild(this.seedFooter(seed));

      const ak = this.makeAKHeader("Fill in the Blank — Answer Key", opts, seed);
      const akOl = el("ol");
      picked.forEach(t => akOl.appendChild(el("li", {}, this.term(t, opts.lang))));
      ak.appendChild(akOl);
      ak.appendChild(this.seedFooter(seed));

      const lang = opts.lang;
      const renderProjector = (t, idx, total, revealed) => {
        const wrap = el("div", { class: "ws-projector" });
        wrap.appendChild(el("div", { class: "ws-projector-meta" }, `Question ${idx + 1} of ${total}`));
        const prompt = el("div", { class: "ws-projector-prompt" });
        const blank = el("span", { class: "ws-blank-fill" + (revealed ? " is-revealed" : "") },
          revealed ? this.term(t, lang) : "____________");
        prompt.appendChild(blank);
        prompt.appendChild(document.createTextNode(" = " + this.def(t, lang)));
        wrap.appendChild(prompt);
        return wrap;
      };

      return { worksheetEl: ws, answerKeyEl: ak, label: "Fill in the Blank",
               items: picked, renderProjector };
    },

    // ---------- Word Search ----------
    makeWordSearch(picked, rng, opts, seed) {
      const useTerms = picked.slice(0, Math.min(14, picked.length));
      const wordsRaw = useTerms.map(t => this.term(t, opts.lang));
      const words = wordsRaw.map(w => this.normalizeForGrid(w));

      const longest = words.reduce((m, w) => Math.max(m, w.length), 0);
      const size = Math.max(12, Math.min(18, longest + 3));
      const grid = Array.from({ length: size }, () => Array(size).fill(null));

      const dirs = [[0, 1], [1, 0], [1, 1], [-1, 1]];
      const placed = [];
      const wordsRawPlaced = [];
      for (let i = 0; i < words.length; i++) {
        const placement = this.placeWord(grid, words[i], dirs, rng, 200);
        if (placement) {
          placed.push({ word: words[i], placement });
          wordsRawPlaced.push(wordsRaw[i]);
        }
      }

      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (grid[r][c] == null) grid[r][c] = alphabet[Math.floor(rng() * alphabet.length)];
        }
      }

      // ----- Worksheet DOM -----
      const ws = el("div", { class: "ws-wordsearch" });
      ws.appendChild(this.makeHeader("Word Search", opts, seed));
      ws.appendChild(el("p", { class: "ws-instructions" },
        "Find each term in the grid. Words run left-to-right, top-to-bottom, or diagonally."));

      const table = el("table", { class: "ws-wordsearch-grid" });
      for (let r = 0; r < size; r++) {
        const tr = el("tr");
        for (let c = 0; c < size; c++) tr.appendChild(el("td", {}, grid[r][c]));
        table.appendChild(tr);
      }
      ws.appendChild(table);

      const wordList = el("ul", { class: "ws-wordsearch-words" });
      wordsRaw.slice().sort((a, b) => a.localeCompare(b))
        .forEach(w => wordList.appendChild(el("li", {}, w)));
      ws.appendChild(wordList);
      ws.appendChild(this.seedFooter(seed));

      // ----- Answer key DOM -----
      const ak = this.makeAKHeader("Word Search — Answer Key", opts, seed);
      const akTable = el("table", { class: "ws-wordsearch-grid" });
      const foundCells = new Set();
      placed.forEach(p => {
        const { row, col, dr, dc, len } = p.placement;
        for (let i = 0; i < len; i++) foundCells.add(`${row + dr * i},${col + dc * i}`);
      });
      for (let r = 0; r < size; r++) {
        const tr = el("tr");
        for (let c = 0; c < size; c++) {
          const td = el("td", {}, grid[r][c]);
          if (foundCells.has(`${r},${c}`)) td.classList.add("ws-ws-found");
          tr.appendChild(td);
        }
        akTable.appendChild(tr);
      }
      ak.appendChild(akTable);

      const skipped = wordsRaw.filter((w, i) => !placed.find(p => p.word === words[i]));
      if (skipped.length) {
        ak.appendChild(el("p", { class: "ws-instructions" },
          `Note: these words couldn't fit on this grid (try a different seed): ${skipped.join(", ")}`));
      }
      ak.appendChild(this.seedFooter(seed));

      // ----- Projector: single item that progressively reveals words -----
      const item = { grid, placed, wordsRaw: wordsRawPlaced, size };
      const renderProjector = (item, idx, total, revealed) => {
        const wrap = el("div", { class: "ws-projector" });
        wrap.appendChild(el("div", { class: "ws-projector-meta" },
          `Word Search · ${revealed} of ${item.placed.length} words revealed (Space to reveal next)`));

        const layout = el("div", { class: "ws-wordsearch-projector" });

        // Build grid with highlight for first `revealed` words
        const highlightCells = new Set();
        for (let i = 0; i < revealed; i++) {
          const p = item.placed[i];
          for (let j = 0; j < p.placement.len; j++) {
            highlightCells.add(`${p.placement.row + p.placement.dr * j},${p.placement.col + p.placement.dc * j}`);
          }
        }
        const gridTable = el("table", { class: "ws-wordsearch-grid" });
        for (let r = 0; r < item.size; r++) {
          const tr = el("tr");
          for (let c = 0; c < item.size; c++) {
            const td = el("td", {}, item.grid[r][c]);
            if (highlightCells.has(`${r},${c}`)) td.classList.add("ws-ws-found");
            tr.appendChild(td);
          }
          gridTable.appendChild(tr);
        }
        layout.appendChild(gridTable);

        const list = el("ul", { class: "ws-wordsearch-words" });
        item.wordsRaw.forEach((w, i) => {
          const li = el("li", {}, w);
          if (i < revealed) li.classList.add("is-revealed");
          list.appendChild(li);
        });
        layout.appendChild(list);

        wrap.appendChild(layout);
        return wrap;
      };

      return {
        worksheetEl: ws, answerKeyEl: ak, label: "Word Search",
        items: [item], renderProjector,
        revealMaxFor: (it) => it.placed.length,
        shuffleable: false,
        itemCount: wordsRaw.length
      };
    },

    placeWord(grid, word, dirs, rng, maxTries) {
      const size = grid.length;
      for (let attempt = 0; attempt < maxTries; attempt++) {
        const [dr, dc] = dirs[Math.floor(rng() * dirs.length)];
        const row = Math.floor(rng() * size);
        const col = Math.floor(rng() * size);
        const endR = row + dr * (word.length - 1);
        const endC = col + dc * (word.length - 1);
        if (endR < 0 || endR >= size || endC < 0 || endC >= size) continue;
        let fits = true;
        for (let i = 0; i < word.length; i++) {
          const r = row + dr * i;
          const c = col + dc * i;
          if (grid[r][c] !== null && grid[r][c] !== word[i]) { fits = false; break; }
        }
        if (!fits) continue;
        for (let i = 0; i < word.length; i++) grid[row + dr * i][col + dc * i] = word[i];
        return { row, col, dr, dc, len: word.length };
      }
      return null;
    },

    normalizeForGrid(s) {
      return s.normalize("NFD")
              .replace(/[̀-ͯ]/g, "")
              .toUpperCase()
              .replace(/[^A-Z]/g, "");
    },

    term(t, lang) { return lang === "es" ? t.es.term : t.en.term; },
    def(t, lang)  { return lang === "es" ? t.es.def  : t.en.def;  },

    makeHeader(type, opts, seed) {
      const wrap = el("div", { class: "ws-header" });
      wrap.appendChild(el("h2", {}, `${type} · Grade 6 Science Vocabulary`));
      const meta = el("div", { class: "ws-meta" });
      const unitTitles = VOCAB.units.filter(u => opts.unitIds.includes(u.id)).map(u => u.title).join(", ");
      meta.appendChild(el("span", {}, unitTitles));
      meta.appendChild(el("span", {}, opts.lang === "es" ? "Español" : "English"));
      wrap.appendChild(meta);
      const nameLine = el("div", { class: "ws-name-line" });
      nameLine.appendChild(el("div", {}, "Name: "));
      nameLine.appendChild(el("span"));
      nameLine.appendChild(el("div", {}, "Date: "));
      nameLine.appendChild(el("span"));
      wrap.appendChild(nameLine);
      return wrap;
    },

    makeAKHeader(title, opts, seed) {
      const wrap = el("div", { class: "ws-header" });
      wrap.appendChild(el("h2", {}, title));
      const meta = el("div", { class: "ws-meta" });
      const unitTitles = VOCAB.units.filter(u => opts.unitIds.includes(u.id)).map(u => u.title).join(", ");
      meta.appendChild(el("span", {}, unitTitles));
      meta.appendChild(el("span", {}, `Seed: ${seed}`));
      wrap.appendChild(meta);
      return wrap;
    },

    seedFooter(seed) {
      return el("div", { class: "ws-footer-seed" }, `v.${seed}`);
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

  window.WorksheetsView = Worksheets;
})();
