// VocabDashboard — Shared projector / classroom overlay.
// Used by Flashcards (Present), Worksheets (Present), and the Random Term button.
//
// Public API:
//   Projector.show({ title, items, renderItem, shuffleable })
//     title       — string shown in the top-left chrome
//     items       — array of opaque items (the caller's data)
//     renderItem  — (item, idx, total, revealed) => HTMLElement
//     shuffleable — boolean; shows or hides the Shuffle button (default false)
//     revealMaxFor — optional (item, idx) => integer.
//                    Called for each item to determine how many "reveal steps"
//                    that item needs. Defaults to 1 (single boolean reveal).
//                    Used by Word Search to step through highlighted words one at a time.
//   Projector.hide()

(function () {
  "use strict";

  let state = null;
  let keydownHandler = null;

  function show(opts) {
    if (state) hide(); // close any existing overlay

    state = {
      title: opts.title || "",
      items: opts.items.slice(),
      idx: 0,
      revealed: 0,                   // numeric: 0 = nothing revealed, 1+ = N steps revealed
      renderItem: opts.renderItem,
      shuffleable: !!opts.shuffleable,
      revealMaxFor: opts.revealMaxFor || (() => 1)
    };

    buildOverlay();
    attachKeyboard();
    renderCurrent();
    // Hide the body's vertical scroll while overlay is up.
    document.body.classList.add("projector-active");
  }

  function hide() {
    if (!state) return;
    const root = document.getElementById("projector-root");
    if (root) root.remove();
    detachKeyboard();
    document.body.classList.remove("projector-active");
    state = null;
  }

  function buildOverlay() {
    const root = el("div", { id: "projector-root", class: "projector-overlay" });

    // Top chrome
    const topBar = el("div", { class: "projector-top" });
    topBar.appendChild(el("div", { class: "projector-title" }, state.title));
    topBar.appendChild(el("div", { class: "projector-position" }, "")); // populated in renderCurrent
    root.appendChild(topBar);

    // Stage (the renderItem output goes here)
    const stage = el("div", { id: "projector-stage", class: "projector-stage" });
    root.appendChild(stage);

    // Bottom chrome — controls + hint
    const controls = el("div", { class: "projector-controls" });
    controls.appendChild(button("◀ Prev", "projector-prev", () => navigate(-1)));
    controls.appendChild(button("Reveal", "projector-reveal", () => toggleReveal()));
    if (state.shuffleable) {
      controls.appendChild(button("Shuffle", "projector-shuffle", () => shuffleItems()));
    }
    controls.appendChild(button("Next ▶", "projector-next", () => navigate(1)));
    controls.appendChild(button("Exit (Esc)", "projector-exit projector-exit-btn", () => hide()));
    root.appendChild(controls);

    const hint = el("div", { class: "projector-hint" },
      state.shuffleable
        ? "Space = reveal · ← → = navigate · R = shuffle · Esc = exit"
        : "Space = reveal · ← → = navigate · Esc = exit");
    root.appendChild(hint);

    document.body.appendChild(root);
  }

  function renderCurrent() {
    if (!state) return;
    const stage = document.getElementById("projector-stage");
    stage.replaceChildren();
    const item = state.items[state.idx];
    const node = state.renderItem(item, state.idx, state.items.length, state.revealed);
    if (node) stage.appendChild(node);
    // Position indicator
    document.querySelector(".projector-position").textContent =
      `${state.idx + 1} / ${state.items.length}`;
    // Reveal button label reflects state
    const revealBtn = document.getElementById("projector-reveal");
    if (revealBtn) {
      const max = state.revealMaxFor(item, state.idx);
      revealBtn.textContent = state.revealed >= max ? "Hide" : "Reveal";
    }
  }

  function navigate(delta) {
    if (!state) return;
    const nextIdx = state.idx + delta;
    if (nextIdx < 0 || nextIdx >= state.items.length) return;
    state.idx = nextIdx;
    state.revealed = 0; // always start a new card hidden
    renderCurrent();
  }

  function toggleReveal() {
    if (!state) return;
    const item = state.items[state.idx];
    const max = state.revealMaxFor(item, state.idx);
    if (state.revealed >= max) state.revealed = 0;
    else state.revealed += 1;
    renderCurrent();
  }

  function shuffleItems() {
    if (!state || !window.VocabRng) return;
    const rng = () => Math.random();
    // Fisher-Yates with Math.random.
    for (let i = state.items.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
    }
    state.idx = 0;
    state.revealed = 0;
    renderCurrent();
  }

  function attachKeyboard() {
    keydownHandler = (e) => {
      if (!state) return;
      switch (e.key) {
        case " ":
        case "Spacebar":
          e.preventDefault();
          toggleReveal();
          break;
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          navigate(1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          navigate(-1);
          break;
        case "Escape":
          e.preventDefault();
          hide();
          break;
        case "r":
        case "R":
          if (state.shuffleable) {
            e.preventDefault();
            shuffleItems();
          }
          break;
      }
    };
    document.addEventListener("keydown", keydownHandler, true);
  }

  function detachKeyboard() {
    if (keydownHandler) {
      document.removeEventListener("keydown", keydownHandler, true);
      keydownHandler = null;
    }
  }

  // --- DOM helpers ---
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
  function button(label, id, onClick) {
    const b = el("button", { id, class: "projector-btn", type: "button" }, label);
    b.addEventListener("click", onClick);
    return b;
  }

  window.Projector = { show, hide };
})();
