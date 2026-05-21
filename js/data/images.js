// VocabDashboard — Image manifest
//
// MANIFEST-DRIVEN: if a term-id is not in IMAGES below, it renders text-only.
// Adding an image to a term:
//   1. Download the image to images/<filename> from one of the allowed sources.
//   2. Add an entry below keyed by the term id from vocab.js.
//   3. Refresh the dashboard — the image appears in Browse, Flashcards, and Dictionary.
//
// SOURCE ALLOWLIST (enforced at load time):
//   - commons.wikimedia.org / upload.wikimedia.org / en.wikipedia.org
//   - *.nasa.gov / *.noaa.gov / *.usgs.gov
//
// Each entry MUST have: file, source_url, license, attribution, caption.

const ALLOWED_IMAGE_SOURCES = [
  "commons.wikimedia.org",
  "upload.wikimedia.org",
  "en.wikipedia.org",
  "nasa.gov",
  "noaa.gov",
  "usgs.gov"
];

// Shared image attributions — one entry per file, reused across terms below.
const IMAGE_FILES = {
  atomBohr: {
    file: "atom-bohr.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg",
    license: "CC BY-SA 3.0",
    attribution: "Indolences, Rainer Klute, Halfdan — via Wikimedia Commons"
  },
  moonPhases: {
    file: "moon-phases.png",
    source_url: "https://commons.wikimedia.org/wiki/File:Phases_of_the_Moon.png",
    license: "CC BY 2.5",
    attribution: "Fresheneesz — via Wikimedia Commons"
  },
  periodicTable: {
    file: "periodic-table.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Simple_Periodic_Table_Chart-blocks.svg",
    license: "CC BY-SA 4.0",
    attribution: "Double sharp, after Offnfopt — via Wikimedia Commons"
  },
  animalCell: {
    file: "animal-cell.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Animal_cell_structure_en.svg",
    license: "Public Domain",
    attribution: "Mariana Ruiz (LadyofHats) — via Wikimedia Commons"
  },
  earthLayers: {
    file: "earth-layers.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Earth-crust-cutaway-english.svg",
    license: "CC BY-SA 3.0",
    attribution: "Surachit, after Jeremy Kemp — via Wikimedia Commons"
  },
  dna: {
    file: "dna.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:DNA_simple2.svg",
    license: "Public Domain",
    attribution: "Forluvoft — via Wikimedia Commons"
  },
  photosynthesis: {
    file: "photosynthesis.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Photosynthesis_en.svg",
    license: "CC BY-SA 4.0",
    attribution: "At09kg, Wattcle — via Wikimedia Commons"
  },
  tideOverview: {
    file: "tide-overview.png",
    source_url: "https://commons.wikimedia.org/wiki/File:Tide_overview.svg",
    license: "Public Domain",
    attribution: "Orion 8 — via Wikimedia Commons"
  },
  waterCycle: {
    file: "water-cycle.png",
    source_url: "https://commons.wikimedia.org/wiki/File:USGS_WaterCycle_English_ONLINE_20221013.png",
    license: "Public Domain (USGS)",
    attribution: "U.S. Geological Survey"
  },
  rockCycle: {
    file: "rock-cycle.png",
    source_url: "https://commons.wikimedia.org/wiki/File:Rock_cycle_diagram.png",
    license: "CC BY-SA 3.0",
    attribution: "Astroskiandhike — via Wikimedia Commons"
  },
  granite: {
    file: "granite.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Bianco_Sardo_Granit_mit_polierter_Oberfl%C3%A4che.jpg",
    license: "CC BY-SA 3.0",
    attribution: "Wikimedia Commons"
  },
  sandstone: {
    file: "sandstone.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:USDA_Mineral_Sandstone_93c3955.jpg",
    license: "Public Domain (USDA)",
    attribution: "U.S. Department of Agriculture — via Wikimedia Commons"
  },
  marble: {
    file: "marble.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Marmo_z17.JPG",
    license: "CC BY-SA 3.0",
    attribution: "Wikimedia Commons"
  },
  quartz: {
    file: "quartz.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Quartz_Br%C3%A9sil.jpg",
    license: "CC BY-SA 3.0",
    attribution: "Didier Descouens — via Wikimedia Commons"
  },
  bacteria: {
    file: "bacteria-ecoli.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:E._coli_Bacteria_(7316101966).jpg",
    license: "CC BY 2.0",
    attribution: "NIAID — via Wikimedia Commons"
  },
  solarPanels: {
    file: "solar-panels.jpg",
    source_url: "https://en.wikipedia.org/wiki/Solar_panel",
    license: "CC BY-SA 4.0",
    attribution: "Wikimedia Commons"
  },
  windTurbines: {
    file: "wind-turbines.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Windmills_D1-D4_(Thornton_Bank).jpg",
    license: "CC BY-SA 3.0",
    attribution: "Hans Hillewaert — via Wikimedia Commons"
  },
  atmosphere: {
    file: "atmosphere.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg",
    license: "Public Domain (NASA)",
    attribution: "NASA / Expedition 22 Crew"
  },
  recyclingSymbol: {
    file: "recycling-symbol.png",
    source_url: "https://commons.wikimedia.org/wiki/File:RecyclingSymbolGreen.png",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
  grandCanyon: {
    file: "grand-canyon.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Canyon_River_Tree_(165872763).jpeg",
    license: "CC BY-SA 4.0",
    attribution: "Wikimedia Commons"
  },
  batteries: {
    file: "batteries.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Batteries.jpg",
    license: "CC BY-SA 3.0",
    attribution: "Aney — via Wikimedia Commons"
  },
  freeBodyDiagram: {
    file: "free-body-diagram.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Free_body_diagram2.svg",
    license: "Public Domain",
    attribution: "Penubag — via Wikimedia Commons"
  },
  sineWave: {
    file: "sine-wave.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Sine_wave_amplitude.svg",
    license: "CC BY-SA 3.0",
    attribution: "Wikimedia Commons"
  },
  soil: {
    file: "soil.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Stagnogley.JPG",
    license: "CC BY-SA 3.0",
    attribution: "Pippa Kirby — via Wikimedia Commons"
  },
  coilSpring: {
    file: "coil-spring.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Ressort_de_traction_%C3%A0_spires_jointives.jpg",
    license: "CC BY-SA 3.0",
    attribution: "Wikimedia Commons"
  },

  // ---- V2 additions ----
  waterMolecule3D: {
    file: "water-molecule-3d.png",
    source_url: "https://commons.wikimedia.org/wiki/File:Water-3D-balls.png",
    license: "Public Domain",
    attribution: "Benjah-bmm27 — via Wikimedia Commons"
  },
  statesOfMatter: {
    file: "states-of-matter.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Solid_liquid_gas.svg",
    license: "CC BY-SA 3.0",
    attribution: "Yelod — via Wikimedia Commons"
  },
  pollution: {
    file: "pollution.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Air_pollution3.jpg",
    license: "CC BY-SA 2.0",
    attribution: "Maciej Bledowski — via Wikimedia Commons"
  },
  climateClouds: {
    file: "climate-clouds.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:ISS-48_Towering_cumulonimbus_and_other_clouds_over_the_Earth_(2).jpg",
    license: "Public Domain (NASA)",
    attribution: "NASA / Expedition 48 Crew"
  },
  ecosystemRainforest: {
    file: "ecosystem-rainforest.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_Amazon_Rainforest.jpg",
    license: "CC BY-SA 2.0",
    attribution: "Neil Palmer (CIAT) — via Wikimedia Commons"
  },
  kineticRollerCoaster: {
    file: "kinetic-rollercoaster.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Wooden_roller_coaster_txgi.jpg",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
  potentialArcher: {
    file: "potential-archer.jpg",
    source_url: "https://commons.wikimedia.org/wiki/File:Mediaeval_archery_reenactment.jpg",
    license: "CC BY-SA 2.0",
    attribution: "Antony Stanley — via Wikimedia Commons"
  },
  shapeCircle: {
    file: "shape-circle.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Circle-withsegments.svg",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
  shapeSquare: {
    file: "shape-square.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Square_with_offset_tick_marks.svg",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
  shapeRectangle: {
    file: "shape-rectangle.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Rectangle_Geometry_Vector.svg",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
  shapeTriangle: {
    file: "shape-triangle.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Triangle_illustration.svg",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
  shapeCube: {
    file: "shape-cube.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Cube-h.svg",
    license: "CC BY-SA 3.0",
    attribution: "Wikimedia Commons"
  },
  shapeSphere: {
    file: "shape-sphere.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Sphere_wireframe_10deg_6r.svg",
    license: "Public Domain",
    attribution: "Geek3 — via Wikimedia Commons"
  },
  shapeCone: {
    file: "shape-cone.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Cone_with_labeled_Radius%2C_Height%2C_Angle_and_Side_v2.svg",
    license: "CC BY-SA 4.0",
    attribution: "Wikimedia Commons"
  },
  circuitSeries: {
    file: "circuit-series.svg",
    source_url: "https://commons.wikimedia.org/wiki/File:Series_circuit.svg",
    license: "Public Domain",
    attribution: "Wikimedia Commons"
  },
};

// Helper to build a term entry from a file ref + per-term caption.
function mk(fileRef, caption) {
  return { ...fileRef, caption, vetted_by: null, vetted_date: null };
}

const IMAGES = {
  // ---- Unit 1: States of Matter ----
  "atom":          mk(IMAGE_FILES.atomBohr,        "Stylised Bohr model of an atom showing the nucleus and three electron orbits."),
  "molecule":      mk(IMAGE_FILES.waterMolecule3D, "3D ball-and-stick model of a water molecule (H₂O) — one oxygen atom bonded to two hydrogen atoms."),

  // ---- Unit 2: Properties of Matter ----
  "periodic-table": mk(IMAGE_FILES.periodicTable,  "Simplified periodic table showing elements grouped into blocks."),

  // ---- Unit 3: Forces ----
  "force-diagram": mk(IMAGE_FILES.freeBodyDiagram, "Free body diagram of a block on a ramp showing gravity (mg), normal force (N), and friction (Ff)."),

  // ---- Unit 4: Energy & Waves ----
  "battery":         mk(IMAGE_FILES.batteries,     "Common battery types — AA, AAA, 9V, C, D — that store chemical energy."),
  "photosynthesis":  mk(IMAGE_FILES.photosynthesis,"Diagram showing how a plant uses sunlight, water, and CO₂ to make glucose and O₂."),
  "wave":            mk(IMAGE_FILES.sineWave,      "Labeled wave diagram showing crest, trough, wavelength, and amplitude."),
  "transverse-wave": mk(IMAGE_FILES.sineWave,      "Sine wave illustrating the transverse wave shape with amplitude perpendicular to direction of travel."),
  "spring":          mk(IMAGE_FILES.coilSpring,    "Coil tension spring — stores elastic potential energy when stretched."),

  // ---- Unit 5: Tides & the Moon ----
  "tide":            mk(IMAGE_FILES.tideOverview, "Earth–Moon tide diagram showing high tides on the sublunar and antipodal sides."),
  "high-tide":       mk(IMAGE_FILES.tideOverview, "High tide on the side of Earth facing the Moon (and the opposite side)."),
  "low-tide":        mk(IMAGE_FILES.tideOverview, "Low tide on the sides of Earth perpendicular to the Moon's pull."),
  "lunar-cycle":     mk(IMAGE_FILES.moonPhases,   "The eight phases of the Moon over the ~29.5-day lunar cycle."),
  "full-moon":       mk(IMAGE_FILES.moonPhases,   "Full Moon — the entire lit side of the Moon faces Earth."),
  "new-moon":        mk(IMAGE_FILES.moonPhases,   "New Moon — the lit side of the Moon faces away from Earth."),
  "first-quarter":   mk(IMAGE_FILES.moonPhases,   "First quarter — half of the Moon's lit side is visible, about one week after new moon."),
  "third-quarter":   mk(IMAGE_FILES.moonPhases,   "Third quarter — half of the Moon's lit side is visible, about one week after full moon."),

  // ---- Unit 6: Earth's Layers & the Rock Cycle ----
  "atmosphere":   mk(IMAGE_FILES.atmosphere,   "View from the International Space Station showing Earth's atmosphere edge with the Moon above."),
  "hydrosphere":  mk(IMAGE_FILES.waterCycle,   "The water cycle — water moving through Earth's hydrosphere via evaporation, precipitation, and runoff."),
  "geosphere":    mk(IMAGE_FILES.earthLayers,  "Cutaway diagram of Earth showing the solid layers: crust, mantle, outer core, inner core."),
  "crust":        mk(IMAGE_FILES.earthLayers,  "Earth cutaway — the crust is the thin outermost solid layer."),
  "mantle":       mk(IMAGE_FILES.earthLayers,  "Earth cutaway — the mantle is the thick semi-solid layer between the crust and outer core."),
  "inner-core":   mk(IMAGE_FILES.earthLayers,  "Earth cutaway — the inner core is the innermost solid center of the planet."),
  "outer-core":   mk(IMAGE_FILES.earthLayers,  "Earth cutaway — the outer core is a thick layer of liquid rock around the inner core."),
  "igneous":      mk(IMAGE_FILES.granite,      "Polished granite — a common example of an igneous rock formed when magma cools and crystallizes."),
  "sedimentary":  mk(IMAGE_FILES.sandstone,    "Sandstone cross-section showing layers built up from sediment compacted over time."),
  "metamorphic":  mk(IMAGE_FILES.marble,       "Marble — a metamorphic rock formed when limestone is changed by heat and pressure."),
  "rock-cycle":   mk(IMAGE_FILES.rockCycle,    "The rock cycle showing how igneous, sedimentary, and metamorphic rocks transform into one another."),
  "crystals":     mk(IMAGE_FILES.quartz,       "Cluster of clear quartz crystals showing the characteristic repeating crystal structure."),
  "weathering":   mk(IMAGE_FILES.grandCanyon,  "Grand Canyon — weathering and erosion over millions of years have carved the rock layers."),
  "erosion":      mk(IMAGE_FILES.grandCanyon,  "Grand Canyon — the Colorado River has eroded the landscape into the canyon visible today."),
  "soil":         mk(IMAGE_FILES.soil,         "Soil profile showing horizons from grass-covered topsoil down through subsoil to gravelly parent material."),

  // ---- Unit 7: Conservation & Resources ----
  "solar-energy":      mk(IMAGE_FILES.solarPanels,     "Solar panels on rooftops converting sunlight into electricity."),
  "wind-energy":       mk(IMAGE_FILES.windTurbines,    "Offshore wind turbines generating electricity from moving air."),
  "renewable-energy":  mk(IMAGE_FILES.solarPanels,     "Solar panels — an example of renewable energy that can be replaced over a short time."),
  "recycle":           mk(IMAGE_FILES.recyclingSymbol, "The universal recycling symbol — three arrows forming a triangle."),

  // ---- Unit 9: Cells & Organisms ----
  "cell":          mk(IMAGE_FILES.animalCell, "Labeled animal cell showing the nucleus, mitochondria, and other major organelles."),
  "eukaryote":     mk(IMAGE_FILES.animalCell, "Eukaryotic cell — note the nucleus containing the cell's genetic material."),
  "nucleus":       mk(IMAGE_FILES.animalCell, "Animal cell with the nucleus shown in the center (large, dark structure)."),
  "multicellular": mk(IMAGE_FILES.animalCell, "A single animal cell — multicellular organisms are built from many such cells working together."),
  "bacteria":      mk(IMAGE_FILES.bacteria,   "Electron micrograph of E. coli bacteria — rod-shaped prokaryotic cells."),
  "prokaryote":    mk(IMAGE_FILES.bacteria,   "E. coli bacteria — prokaryotes have no nucleus and are typically unicellular."),
  "unicellular":   mk(IMAGE_FILES.bacteria,   "Bacteria — examples of unicellular organisms, each consisting of just one cell."),
  "dna":           mk(IMAGE_FILES.dna,        "The DNA double helix — the molecule that stores genetic instructions in all living things."),

  // ---- V2 additions: foundational shapes ----
  "circle":        mk(IMAGE_FILES.shapeCircle,    "A circle with center (O), radius (R), diameter (D), and a chord (C) marked."),
  "square":        mk(IMAGE_FILES.shapeSquare,    "A square — four equal sides, four right angles."),
  "rectangle":     mk(IMAGE_FILES.shapeRectangle, "A rectangle — four right angles; opposite sides equal in length."),
  "triangle":      mk(IMAGE_FILES.shapeTriangle,  "A triangle — three sides, three corners."),
  "cube":          mk(IMAGE_FILES.shapeCube,      "A cube — a 3D shape with six equal square faces."),
  "sphere":        mk(IMAGE_FILES.shapeSphere,    "A sphere — a perfectly round 3D shape, like a ball."),
  "cone":          mk(IMAGE_FILES.shapeCone,      "A cone — a 3D shape with a circular base that narrows to a single point."),

  // ---- V2 additions: states of matter (Unit 1 and Unit 2) ----
  "states-of-matter-u1": mk(IMAGE_FILES.statesOfMatter, "Particle diagram showing how molecules are arranged in solid, liquid, and gas states."),
  "states-of-matter-u2": mk(IMAGE_FILES.statesOfMatter, "Particle diagram showing how molecules are arranged in solid, liquid, and gas states."),
  "solid":               mk(IMAGE_FILES.statesOfMatter, "Solid state shown in a particle diagram — particles packed tightly in a fixed pattern."),
  "liquid":              mk(IMAGE_FILES.statesOfMatter, "Liquid state shown in a particle diagram — particles loosely packed and able to flow."),
  "gas":                 mk(IMAGE_FILES.statesOfMatter, "Gas state shown in a particle diagram — particles spread far apart and moving freely."),

  // ---- V2 additions: energy (Unit 4) ----
  "kinetic-energy":       mk(IMAGE_FILES.kineticRollerCoaster, "A roller coaster — moving objects have kinetic energy."),
  "potential-energy":     mk(IMAGE_FILES.potentialArcher,      "An archer drawing back a bow — the bent bow stores potential (elastic) energy."),
  "elastic-energy":       mk(IMAGE_FILES.potentialArcher,      "A drawn bow stores elastic energy that is released when the arrow is shot."),
  "gravitational-energy": mk(IMAGE_FILES.kineticRollerCoaster, "A roller-coaster car at the top of a hill has gravitational potential energy, which becomes kinetic energy as it falls."),
  "circuit":              mk(IMAGE_FILES.circuitSeries,        "A simple series circuit — a battery, wires, and components arranged so electricity flows in a single loop."),

  // ---- V2 additions: conservation & resources (Unit 7) ----
  "pollution":            mk(IMAGE_FILES.pollution,            "Air pollution from industrial smokestacks — harmful gases released into the atmosphere."),
  "climate":              mk(IMAGE_FILES.climateClouds,        "View of cumulonimbus storm clouds from the ISS — the atmosphere's weather patterns shape regional climates."),

  // ---- V2 additions: ecosystems (Unit 7 & 8) ----
  "ecosystem-u7":         mk(IMAGE_FILES.ecosystemRainforest,  "Aerial view of the Amazon Rainforest — an ecosystem with countless interacting plants, animals, and physical conditions."),
  "ecosystem-u8":         mk(IMAGE_FILES.ecosystemRainforest,  "The Amazon Rainforest — a vast ecosystem in which living and nonliving things interact."),
  "biotic-factors":       mk(IMAGE_FILES.ecosystemRainforest,  "Living components of a rainforest ecosystem: trees, animals, fungi, and microbes."),
  "abiotic-factors":      mk(IMAGE_FILES.ecosystemRainforest,  "Nonliving parts of an ecosystem — sunlight, soil, water, and air — all visible in this rainforest view."),
  "organism-u8":          mk(IMAGE_FILES.ecosystemRainforest,  "A rainforest contains millions of organisms living and interacting together.")
};

// Validate manifest entries against the source allowlist.
// Entries that fail are removed and a warning is logged — they will not render.
(function validateImages() {
  const violations = [];
  for (const [termId, entry] of Object.entries(IMAGES)) {
    const url = entry.source_url || "";
    const allowed = ALLOWED_IMAGE_SOURCES.some(host => url.includes(host));
    if (!allowed) {
      violations.push({ termId, url });
      delete IMAGES[termId];
    }
  }
  if (violations.length && typeof console !== "undefined") {
    console.warn("VocabDashboard: removed image entries with disallowed source URLs:", violations);
  }
})();
