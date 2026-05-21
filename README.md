# VocabDashboard

A printable, classroom-ready dashboard for the Grade 6 Science bilingual vocabulary curriculum.
Runs entirely in your browser — no internet, no accounts, no installation.

---

## How to open

1. Find this folder on your computer: `C:\GitHub_Files\VocabDashboard\`
2. Double-click **`index.html`**. It will open in your default browser (Chrome or Edge work best).
3. That's it. Everything else happens inside the browser tab.

You can drag `index.html` onto your desktop as a shortcut for easy access.

---

## What's inside

The dashboard has four tabs at the top:

| Tab | Use for |
| --- | --- |
| **🔍 Browse** | Look up any term. Search across English & Spanish. Filter by unit and by language (Bilingual / EN only / ES only). The **Quick Start** panel at the top is a 2-click way to project or print common workflows. |
| **📑 Flashcards** | Print bilingual flashcards (cut-and-fold layout) **or project them** as a class game. |
| **📝 Worksheets** | Generate Multiple Choice, True/False, Matching, Fill-in-the-Blank, or Word Search worksheets — with answer keys. Project them for whole-class walk-through review. |
| **📚 Dictionary** | Generate a clean, printable glossary. Pick units, language, sort order, columns, and whether to include images. |
| **🎲 Random** | Header button on every view. Picks a random term and projects it — perfect for bell-ringers or cold-calling. |

---

## Classroom Mode (projector)

Both **Flashcards** and **Worksheets** have a 🎬 **Present** button next to the Print button. Click it and the screen turns into a full-page projector overlay — large fonts, dark background, hide-the-chrome.

**Keyboard shortcuts in projector mode:**

| Key | Action |
| --- | --- |
| **Space** | Reveal / hide the answer (or flip a flashcard) |
| **→** or **PageDown** | Next item |
| **←** or **PageUp** | Previous item |
| **R** | Shuffle (flashcards only) |
| **Esc** | Exit projector mode |

Tips:
- Press **F11** in your browser for true fullscreen before clicking Present — looks cleanest on a projector.
- The 🎲 **Random** button in the header is the fastest way to project a single term during class — one click, no setup.
- The **Quick Start** panel on the Browse view lets you go from "I want to project Unit 3 flashcards" to "they're on the screen" in two clicks (pick unit → click button).

For worksheet review:
- **Multiple Choice**: each question shows one at a time. Press **Space** to reveal the correct answer (it highlights green).
- **True/False**: the statement shows, then **Space** reveals **TRUE** or **FALSE** in giant letters (with the correct term if the statement was false).
- **Matching**: walks through each term — the lettered definitions stay visible while you reveal which letter matches.
- **Fill-in-the-Blank**: the definition shows with a blank line; **Space** fills in the correct term.
- **Word Search**: the grid stays on screen — each **Space** press highlights one more word from the list. Great for collaborative class solving.

## Printing flashcards

1. Open the **Flashcards** tab.
2. Check the units you want.
3. Pick a layout (6 cards per page is the sweet spot for standard index-card cuts).
4. Click **Preview cards** → then **Print / Save PDF**.
5. In the print dialog, set:
   - **Color**: On (so the colored borders print)
   - **Two-sided printing**: "Print on both sides" → **Flip on long edge** (vertical flip)
   - Margins: Default
6. Cut along the dashed lines.

> The "backs" page is intentionally **mirrored** so that when the paper flips, each card's back lines up with its front. Always pick 4, 6, or 9 cards per page for cleanest alignment.

---

## Generating worksheets

1. Open the **Worksheets** tab.
2. Pick units, worksheet type, language, and how many questions.
3. (Optional) Type a 4-character **seed** — or leave it blank and one will be generated. The seed lets you reproduce the exact same worksheet later.
4. Click **Generate worksheet**.
5. Click **Print worksheet** to print the worksheet.
6. Click **Print answer key** to print the matching answer key.

**Making Variant A and Variant B**: generate a worksheet, note the seed (printed in the footer like `v.A7K2`), then change the seed and click Generate again. Same questions, shuffled order → great for stopping cheating between rows of desks.

**Word search note**: works in either language. Spanish accents are stripped from the grid (so "FRICCIÓN" appears as "FRICCION") but kept in the printed word list.

---

## Dictionary (printable glossary)

The Dictionary tab generates a printable reference handout from the vocabulary.

1. Open the **Dictionary** tab.
2. Pick which **units** to include (use *Select all* / *Select none* for shortcuts).
3. Choose **language** (Bilingual / English only / Spanish only).
4. Choose **sort order**:
   - **By unit** — terms grouped in curriculum order with unit headers (best for study guides).
   - **Alphabetical (English)** — flat A–Z list with letter section headers (best for reference).
   - **Alphabetical (Spanish)** — flat A–Z by Spanish term.
5. Choose **layout**: 1 column (spacious) or 2 columns (denser, fits more per page).
6. Choose whether to **include images** and optionally **image source credits**.
7. Click **Update preview** to see the layout, then **Print / Save PDF** to print.

The printed output respects every option — if you pick "Spanish only, 2 columns, no images" then that's exactly what you get on paper.

If you spot a typo or want to adjust a definition, edit `js/data/vocab.js`; for images edit `js/data/images.js`. Save the file, refresh the browser tab, and the change appears immediately.

---

## Adding more images

Only images from these sources are allowed (enforced automatically):

- Wikimedia Commons (`commons.wikimedia.org`)
- NASA (`*.nasa.gov`)
- NOAA (`*.noaa.gov`)
- USGS (`*.usgs.gov`)

To add an image to a term:

1. Find the image on one of the allowed sites. Right-click → **Save image as…** into the `images/` folder. Use a clear filename like `igneous-rock.jpg`.
2. Open `js/data/images.js` in any text editor.
3. Add an entry following the pattern shown:

```js
const IMAGES = {
  "igneous": {                                              // <- term id from vocab.js
    file: "igneous-rock.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:...",
    license: "CC BY-SA 4.0",
    attribution: "Photographer Name — via Wikimedia Commons",
    caption: "A sample of granite, a common igneous rock.",
    vetted_by: null,
    vetted_date: null
  }
};
```

4. Save the file. Refresh the browser tab. The image appears in Browse, Flashcards, and Vetting.

---

## What's where (for developers / Claude sessions)

```
VocabDashboard/
├── index.html                  Main app shell
├── README.md                   This file
├── css/
│   ├── main.css                Screen styles
│   └── print.css               Print + cut-and-fold layout
├── js/
│   ├── app.js                  Bootstrap & view router
│   ├── browse.js               Browse/search
│   ├── flashcards.js           Flashcard generator
│   ├── worksheets.js           5 worksheet generators + answer keys
│   ├── vetting.js              Vetting view + localStorage signoff
│   ├── rng.js                  Seeded PRNG (mulberry32) + shuffle
│   └── data/
│       ├── vocab.js            240 terms, 10 units, bilingual
│       └── images.js           Image manifest with allowlist
└── images/                     Static image files
```

---

## Troubleshooting

**"Nothing shows up in the Browse view"**: open the browser console (F12 → Console tab). If you see a `VOCAB is not defined` error, check that `js/data/vocab.js` exists and is being loaded.

**"Images don't appear"**: confirm the file exists in `images/` and that the `file:` value in `js/data/images.js` matches exactly. The dashboard removes any image entry whose `source_url` isn't on the allowlist.

**"My printed flashcards don't line up after flipping"**: in the print dialog, make sure two-sided printing is set to **Flip on long edge** (not short edge). Use 4, 6, or 9 cards per page.

**"The worksheet looks different each time"**: that's by design unless you type a seed in the form. Pick a seed and the same input always produces the same output.

---

Built for a middle school science teacher, 2026.
