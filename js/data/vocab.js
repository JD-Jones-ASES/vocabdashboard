// VocabDashboard — Grade 6 Science Bilingual Vocabulary
// Source: "Copy of Grade 6 Vocabulary" Google Sheet
// All terms have English + Spanish term and definition.
// Loaded via <script> tag (avoids file:// fetch CORS issues).

const VOCAB = {
  meta: {
    grade: 6,
    subject: "Science",
    version: "1.0.0",
    lastUpdated: "2026-05-21"
  },
  units: [
    // ---------------------------------------------------------------
    // FOUNDATIONS — Observation & Description Vocabulary
    // (Originally the wife's "Unit 1 Spanish" — repositioned here
    // because it covers foundational descriptive vocab, not matter.)
    // ---------------------------------------------------------------
    {
      id: "foundations",
      number: 0,
      title: "Foundations: Observation Vocabulary",
      titleEs: "Fundamentos: Vocabulario de Observación",
      topic: "Basic descriptive terms for observing and comparing objects",
      terms: [
        {
          id: "attribute",
          en: { term: "Attribute", def: "a characteristic or quality of an object" },
          es: { term: "Atributo", def: "una característica o cualidad de un objeto" }
        },
        {
          id: "color",
          en: { term: "Color", def: "a property of an object that describes its appearance, such as red, blue, or green" },
          es: { term: "Color", def: "propiedad de un objeto que describe la apariencia como rojo, azul, etc." }
        },
        {
          id: "observable-physical-property",
          en: { term: "Observable physical property", def: "a characteristic of an object that can be used to describe it and tell it apart from other objects" },
          es: { term: "Propiedad física observable", def: "característica de un objeto que se puede utilizar para hablar de un objeto y que sirve para diferenciar distintos objetos" }
        },
        {
          id: "part",
          en: { term: "Part", def: "a piece of a complete system" },
          es: { term: "Parte", def: "una porción de un sistema completo" }
        },
        {
          id: "property",
          en: { term: "Property", def: "a characteristic that can be observed, measured, or changed without changing the substance itself, such as size, shape, color, or texture" },
          es: { term: "Propiedad", def: "una característica que se puede observar, medir o cambiar sin cambiar la sustancia en sí, tal como el tamaño, forma, color o textura" }
        },
        {
          id: "shape-foundations",
          en: { term: "Shape", def: "the outline of an area or figure" },
          es: { term: "Forma", def: "el contorno del área o de una figura" }
        },
        {
          id: "system",
          en: { term: "System", def: "a group of parts that work together" },
          es: { term: "Sistema", def: "un grupo de partes que trabajan en conjunto" }
        },
        {
          id: "texture",
          en: { term: "Texture", def: "the feel of an object's surface, such as rough, bumpy, or smooth" },
          es: { term: "Textura", def: "la sensación de la superficie de un objeto, rugosa, grumosa o lisa" }
        },
        {
          id: "whole",
          en: { term: "Whole", def: "the complete system; everything together" },
          es: { term: "Entero", def: "el sistema completo, todo" }
        },
        {
          id: "larger",
          en: { term: "Larger / Bigger", def: "of greater size, amount, or extent than something else" },
          es: { term: "Más grande", def: "de mayor tamaño o cantidad que otra cosa" }
        },
        {
          id: "smaller",
          en: { term: "Smaller", def: "of lesser size, amount, or extent than something else" },
          es: { term: "Más pequeño", def: "de menor tamaño o cantidad que otra cosa" }
        },
        {
          id: "heavier",
          en: { term: "Heavier", def: "having more weight or mass than something else" },
          es: { term: "Más pesado", def: "que tiene más peso o masa que otra cosa" }
        },
        {
          id: "lighter",
          en: { term: "Lighter", def: "having less weight or mass than something else" },
          es: { term: "Más liviano", def: "que tiene menos peso o masa que otra cosa" }
        },
        {
          id: "hard",
          en: { term: "Hard", def: "a property of a material that does not change shape easily when pressed" },
          es: { term: "Duro", def: "propiedad de un material que no cambia de forma fácilmente al presionarlo" }
        },
        {
          id: "soft",
          en: { term: "Soft", def: "a property of a material that changes shape easily when pressed" },
          es: { term: "Blando", def: "propiedad de un material que cambia de forma fácilmente al presionarlo" }
        },
        {
          id: "rough",
          en: { term: "Rough", def: "having a bumpy or uneven surface" },
          es: { term: "Áspero", def: "que tiene una superficie irregular o con bultos" }
        },
        {
          id: "smooth",
          en: { term: "Smooth", def: "having an even surface with no bumps" },
          es: { term: "Liso", def: "que tiene una superficie pareja sin bultos" }
        },
        {
          id: "slippery",
          en: { term: "Slippery", def: "having a surface that is hard to grip; easy to slide on" },
          es: { term: "Resbaladizo", def: "que tiene una superficie difícil de sujetar y donde es fácil deslizarse" }
        },
        {
          id: "sticky",
          en: { term: "Sticky", def: "having a surface that tends to attach itself to other objects" },
          es: { term: "Pegajoso", def: "que tiene una superficie que tiende a adherirse a otros objetos" }
        },
        {
          id: "circle",
          en: { term: "Circle", def: "a round, flat shape with no corners; every point on its edge is the same distance from the center" },
          es: { term: "Círculo", def: "una figura plana redonda sin esquinas; cada punto en su borde está a la misma distancia del centro" }
        },
        {
          id: "square",
          en: { term: "Square", def: "a flat shape with four equal straight sides and four right angles" },
          es: { term: "Cuadrado", def: "una figura plana con cuatro lados rectos iguales y cuatro ángulos rectos" }
        },
        {
          id: "rectangle",
          en: { term: "Rectangle", def: "a flat shape with four straight sides and four right angles; opposite sides are the same length" },
          es: { term: "Rectángulo", def: "una figura plana con cuatro lados rectos y cuatro ángulos rectos; los lados opuestos miden lo mismo" }
        },
        {
          id: "triangle",
          en: { term: "Triangle", def: "a flat shape with three straight sides and three corners" },
          es: { term: "Triángulo", def: "una figura plana con tres lados rectos y tres esquinas" }
        },
        {
          id: "cube",
          en: { term: "Cube", def: "a three-dimensional shape with six square faces of equal size" },
          es: { term: "Cubo", def: "una figura tridimensional con seis caras cuadradas del mismo tamaño" }
        },
        {
          id: "sphere",
          en: { term: "Sphere", def: "a three-dimensional shape that is perfectly round, like a ball" },
          es: { term: "Esfera", def: "una figura tridimensional perfectamente redonda, como una pelota" }
        },
        {
          id: "cone",
          en: { term: "Cone", def: "a three-dimensional shape with a circular base that narrows to a point" },
          es: { term: "Cono", def: "una figura tridimensional con base circular que se estrecha hasta una punta" }
        },
        {
          id: "cylinder",
          en: { term: "Cylinder", def: "a three-dimensional shape with two circular ends and a curved side connecting them" },
          es: { term: "Cilindro", def: "una figura tridimensional con dos extremos circulares y un lado curvo que los conecta" }
        },
        {
          id: "classify",
          en: { term: "Classify", def: "to sort objects into groups based on shared properties" },
          es: { term: "Clasificar", def: "agrupar objetos según las propiedades que comparten" }
        },
        {
          id: "compare",
          en: { term: "Compare", def: "to look at how two or more things are alike and different" },
          es: { term: "Comparar", def: "examinar en qué se parecen y en qué se diferencian dos o más cosas" }
        },
        {
          id: "describe",
          en: { term: "Describe", def: "to tell about an object using its properties, such as size, color, shape, or texture" },
          es: { term: "Describir", def: "hablar de un objeto usando sus propiedades como tamaño, color, forma o textura" }
        },
        {
          id: "material-foundations",
          en: { term: "Material", def: "the substance that something is made of, such as wood, metal, plastic, or glass" },
          es: { term: "Material", def: "la sustancia de la que está hecho algo, como madera, metal, plástico o vidrio" }
        },
        {
          id: "object",
          en: { term: "Object", def: "a single thing that can be seen and touched" },
          es: { term: "Objeto", def: "una cosa que se puede ver y tocar" }
        },
        {
          id: "organized",
          en: { term: "Organized", def: "arranged in a particular order or pattern" },
          es: { term: "Organizado", def: "ordenado en una forma o patrón específico" }
        },
        {
          id: "take-apart",
          en: { term: "Take apart", def: "to separate the parts of a system" },
          es: { term: "Desarmar", def: "separar las partes de un sistema" }
        },
        {
          id: "put-back-together",
          en: { term: "Put back together", def: "to join the parts of a system again after they have been separated" },
          es: { term: "Volver a armar", def: "unir las partes de un sistema otra vez después de haberlas separado" }
        },
        {
          id: "size",
          en: { term: "Size", def: "how big or small an object is" },
          es: { term: "Tamaño", def: "qué tan grande o pequeño es un objeto" }
        },
        {
          id: "weight-foundations",
          en: { term: "Weight", def: "the measure of how strongly gravity pulls on an object" },
          es: { term: "Peso", def: "la medida de la fuerza con que la gravedad atrae a un objeto" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 1 — States of Matter
    // ---------------------------------------------------------------
    {
      id: "unit-1",
      number: 1,
      title: "Unit 1: States of Matter",
      titleEs: "Unidad 1: Estados de la Materia",
      topic: "Solids, liquids, gases, density, and mixtures",
      terms: [
        {
          id: "density-fluids",
          en: { term: "Density (relative to various fluids)", def: "the ability of a material (not an object) to sink or float in a fluid" },
          es: { term: "Densidad (relativa a varios fluidos)", def: "la capacidad de un material (no de un objeto) de hundirse o flotar en un fluido" }
        },
        {
          id: "fluids",
          en: { term: "Fluids", def: "substances that have an indefinite shape, like liquids and gases" },
          es: { term: "Fluidos", def: "sustancias que no tienen una forma definida, como los líquidos y los gases" }
        },
        {
          id: "gas",
          en: { term: "Gas", def: "a state of matter in which the substance expands to take both the shape and volume of its container" },
          es: { term: "Gas", def: "estado de la materia en el que la sustancia se expande para tomar la forma y el volumen de su contenedor" }
        },
        {
          id: "heterogeneous-mixture",
          en: { term: "Heterogeneous mixture", def: "a mixture that is not uniform throughout" },
          es: { term: "Mezcla heterogénea", def: "una mezcla que no es uniforme en toda su extensión" }
        },
        {
          id: "homogeneous-mixture",
          en: { term: "Homogeneous mixture", def: "a mixture that is uniform throughout" },
          es: { term: "Mezcla homogénea", def: "una mezcla que es uniforme en toda su extensión" }
        },
        {
          id: "liquid",
          en: { term: "Liquid", def: "a state of matter in which the substance takes the shape of the container and has an unchanged volume when poured from one container to another" },
          es: { term: "Líquido", def: "estado de la materia en el que la sustancia toma la forma del contenedor y mantiene el mismo volumen al pasar de un contenedor a otro" }
        },
        {
          id: "pure-substance",
          en: { term: "Pure substance", def: "samples of matter that are made up of the same particles" },
          es: { term: "Sustancia pura", def: "muestras de materia formadas por las mismas partículas" }
        },
        {
          id: "solid",
          en: { term: "Solid", def: "a state of matter in which the substance has a set shape and size" },
          es: { term: "Sólido", def: "estado de la materia en el que la sustancia tiene una forma y un tamaño fijos" }
        },
        {
          id: "volume",
          en: { term: "Volume", def: "the amount of space that a substance or object takes up" },
          es: { term: "Volumen", def: "la cantidad de espacio que ocupa una sustancia u objeto" }
        },
        {
          id: "atom",
          en: { term: "Atom", def: "a small particle that is the building block of matter" },
          es: { term: "Átomo", def: "una pequeña partícula que es el bloque de construcción de la materia" }
        },
        {
          id: "boiling-point",
          en: { term: "Boiling point", def: "the temperature at which a liquid changes into a gas" },
          es: { term: "Punto de ebullición", def: "la temperatura a la que un líquido se convierte en gas" }
        },
        {
          id: "condensation-point",
          en: { term: "Condensation point", def: "the temperature at which a gas changes into a liquid" },
          es: { term: "Punto de condensación", def: "la temperatura a la que un gas se convierte en líquido" }
        },
        {
          id: "dissolve",
          en: { term: "Dissolve", def: "when one substance breaks apart and mixes evenly into another, forming a solution" },
          es: { term: "Disolver", def: "cuando una sustancia se separa y se mezcla uniformemente en otra, formando una solución" }
        },
        {
          id: "float",
          en: { term: "Float", def: "to rise to or near the surface of water" },
          es: { term: "Flotar", def: "subir hasta o cerca de la superficie del agua" }
        },
        {
          id: "flow",
          en: { term: "Flow", def: "to move smoothly and continuously, the way liquids and gases do" },
          es: { term: "Fluir", def: "moverse de manera suave y continua, como lo hacen los líquidos y los gases" }
        },
        {
          id: "freezing-point",
          en: { term: "Freezing point", def: "the temperature at which a liquid changes into a solid" },
          es: { term: "Punto de congelación", def: "la temperatura a la que un líquido se convierte en sólido" }
        },
        {
          id: "less-dense",
          en: { term: "Less dense", def: "having a lower mass per unit of volume; floats in a more dense fluid" },
          es: { term: "Menos denso", def: "que tiene menor masa por unidad de volumen; flota en un fluido más denso" }
        },
        {
          id: "mass-u1",
          en: { term: "Mass", def: "the amount of matter in an object" },
          es: { term: "Masa", def: "la cantidad de materia en un objeto" }
        },
        {
          id: "melting-point",
          en: { term: "Melting point", def: "the temperature at which a solid changes into a liquid" },
          es: { term: "Punto de fusión", def: "la temperatura a la que un sólido se convierte en líquido" }
        },
        {
          id: "mixture",
          en: { term: "Mixture", def: "two or more substances that are physically blended but do not combine chemically" },
          es: { term: "Mezcla", def: "dos o más sustancias que están combinadas físicamente pero que no se combinan químicamente" }
        },
        {
          id: "molecule",
          en: { term: "Molecule", def: "two or more atoms that are held together by bonds and act as a unit" },
          es: { term: "Molécula", def: "dos o más átomos unidos por enlaces que actúan como una sola unidad" }
        },
        {
          id: "more-dense",
          en: { term: "More dense", def: "having a higher mass per unit of volume; sinks in a less dense fluid" },
          es: { term: "Más denso", def: "que tiene mayor masa por unidad de volumen; se hunde en un fluido menos denso" }
        },
        {
          id: "particle",
          en: { term: "Particle", def: "small pieces of a material" },
          es: { term: "Partícula", def: "pequeños trozos de un material" }
        },
        {
          id: "shape-u1",
          en: { term: "Shape", def: "the outline of an object; solids have a set shape, while liquids and gases take the shape of their container" },
          es: { term: "Forma", def: "el contorno de un objeto; los sólidos tienen una forma fija, mientras que los líquidos y los gases adoptan la forma de su contenedor" }
        },
        {
          id: "sink",
          en: { term: "Sink", def: "to fall below the surface of water or another substance" },
          es: { term: "Hundirse", def: "caer por debajo de la superficie del agua u otra sustancia" }
        },
        {
          id: "solution",
          en: { term: "Solution", def: "a type of mixture in which particles of one or more substances are dissolved and evenly distributed in another substance" },
          es: { term: "Solución", def: "un tipo de mezcla en la que las partículas de una o más sustancias se disuelven y se distribuyen uniformemente en otra sustancia" }
        },
        {
          id: "states-of-matter-u1",
          en: { term: "States of matter", def: "the forms matter can take, such as solid, liquid, and gas; sometimes called phases of matter" },
          es: { term: "Estados de la materia", def: "las formas que puede adoptar la materia, como sólido, líquido y gas; también llamadas fases de la materia" }
        },
        {
          id: "structure",
          en: { term: "Structure", def: "the way the parts of something are arranged together" },
          es: { term: "Estructura", def: "la forma en la que las partes de algo están dispuestas" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 2 — Properties of Matter
    // ---------------------------------------------------------------
    {
      id: "unit-2",
      number: 2,
      title: "Unit 2: Properties of Matter",
      titleEs: "Unidad 2: Propiedades de la Materia",
      topic: "Physical & chemical properties, the periodic table, elements",
      terms: [
        {
          id: "conductivity",
          en: { term: "Conductivity", def: "ability of a substance to transfer heat or electrical energy" },
          es: { term: "Conductividad", def: "capacidad de una sustancia para transferir calor o energía eléctrica" }
        },
        {
          id: "ductility",
          en: { term: "Ductility", def: "a property of a material that allows it to be stretched into wires" },
          es: { term: "Ductilidad", def: "propiedad de un material que permite estirarlo para formar alambres" }
        },
        {
          id: "element",
          en: { term: "Element", def: "a pure substance composed of the same type of atom throughout" },
          es: { term: "Elemento", def: "sustancia pura compuesta por el mismo tipo de átomo en su totalidad" }
        },
        {
          id: "luster",
          en: { term: "Luster", def: "gentle shining light that is reflected from a surface" },
          es: { term: "Brillo", def: "luz suave que se refleja desde una superficie" }
        },
        {
          id: "malleability",
          en: { term: "Malleability", def: "a physical property of a material that allows it to be hammered or pressed into a new shape without breaking" },
          es: { term: "Maleabilidad", def: "propiedad física de un material que permite moldearlo con golpes o presión sin que se rompa" }
        },
        {
          id: "metalloids",
          en: { term: "Metalloids", def: "elements whose physical properties are intermediate between metals and nonmetals" },
          es: { term: "Metaloides", def: "elementos cuyas propiedades físicas son intermedias entre los metales y los no metales" }
        },
        {
          id: "metals",
          en: { term: "Metals", def: "elements that are mostly solids at room temperature, have luster, and are good conductors of heat and electricity" },
          es: { term: "Metales", def: "elementos que en su mayoría son sólidos a temperatura ambiente, tienen brillo y son buenos conductores del calor y la electricidad" }
        },
        {
          id: "nonmetals",
          en: { term: "Nonmetals", def: "elements that are mostly liquids and gases at room temperature and bad conductors of heat and electricity" },
          es: { term: "No metales", def: "elementos que en su mayoría son líquidos y gases a temperatura ambiente y malos conductores del calor y la electricidad" }
        },
        {
          id: "periodic-table",
          en: { term: "Periodic Table of Elements", def: "an organized table of all the chemical elements in order of increasing atomic number" },
          es: { term: "Tabla periódica de los elementos", def: "tabla organizada de todos los elementos químicos en orden creciente de número atómico" }
        },
        {
          id: "physical-property",
          en: { term: "Physical property", def: "properties of matter that can be observed, measured, or changed without changing the matter itself" },
          es: { term: "Propiedad física", def: "propiedades de la materia que pueden observarse, medirse o cambiarse sin cambiar la materia en sí" }
        },
        {
          id: "precipitate",
          en: { term: "Precipitate", def: "a solid formed due to a chemical reaction of liquids" },
          es: { term: "Precipitado", def: "sólido que se forma debido a una reacción química entre líquidos" }
        },
        {
          id: "rare-earth-metals",
          en: { term: "Rare earth metals", def: "17 metallic elements located in the middle of the periodic table (atomic numbers 21, 39, and 57–71)" },
          es: { term: "Metales de tierras raras", def: "17 elementos metálicos ubicados en el medio de la tabla periódica (números atómicos 21, 39 y 57–71)" }
        },
        {
          id: "brittle",
          en: { term: "Brittle", def: "a property of a material that causes it to break easily when bent or hit" },
          es: { term: "Quebradizo", def: "propiedad de un material que hace que se rompa con facilidad al doblarlo o golpearlo" }
        },
        {
          id: "chemical-change",
          en: { term: "Chemical change", def: "a change in matter in which the substances that make up matter change into another substance with different chemical and physical properties" },
          es: { term: "Cambio químico", def: "cambio en la materia en el que las sustancias que la forman se transforman en otra sustancia con diferentes propiedades químicas y físicas" }
        },
        {
          id: "physical-change",
          en: { term: "Physical change", def: "a change in matter in which the appearance changes but the substance stays the same, such as melting, breaking, or dissolving" },
          es: { term: "Cambio físico", def: "cambio en la materia en el que cambia el aspecto pero la sustancia sigue siendo la misma, como derretirse, romperse o disolverse" }
        },
        {
          id: "chemical-property",
          en: { term: "Chemical property", def: "a property that describes how a substance reacts or changes into another substance, such as flammability or rustability" },
          es: { term: "Propiedad química", def: "propiedad que describe cómo una sustancia reacciona o se transforma en otra, como la inflamabilidad o la capacidad de oxidarse" }
        },
        {
          id: "conductor",
          en: { term: "Conductor", def: "a substance or object that allows energy to flow through it easily" },
          es: { term: "Conductor", def: "una sustancia u objeto que permite que la energía fluya a través de él fácilmente" }
        },
        {
          id: "density-u2",
          en: { term: "Density", def: "the mass per unit volume of a substance" },
          es: { term: "Densidad", def: "la masa por unidad de volumen de una sustancia" }
        },
        {
          id: "dull",
          en: { term: "Dull", def: "a property of a surface that does not reflect light brightly" },
          es: { term: "Opaco", def: "propiedad de una superficie que no refleja la luz con intensidad" }
        },
        {
          id: "magnetism-u2",
          en: { term: "Magnetism", def: "an attracting or repelling force caused by magnets and certain materials such as iron" },
          es: { term: "Magnetismo", def: "una fuerza atrayente o repelente que hace que un material magnético se mueva" }
        },
        {
          id: "mass-u2",
          en: { term: "Mass", def: "the amount of matter in an object" },
          es: { term: "Masa", def: "la cantidad de materia que tiene un objeto" }
        },
        {
          id: "matter",
          en: { term: "Matter", def: "anything that has mass and takes up space" },
          es: { term: "Materia", def: "aquello que tiene masa y ocupa un lugar en el espacio" }
        },
        {
          id: "shiny",
          en: { term: "Shiny", def: "a property of a surface that reflects light brightly" },
          es: { term: "Brillante", def: "propiedad de una superficie que refleja la luz con intensidad" }
        },
        {
          id: "states-of-matter-u2",
          en: { term: "States of matter", def: "the forms matter can take, such as solid, liquid, and gas; sometimes called phases of matter" },
          es: { term: "Estados de la materia", def: "las formas que puede adoptar la materia, como sólido, líquido y gas; también llamadas fases de la materia" }
        },
        {
          id: "thermal-energy-u2",
          en: { term: "Thermal energy", def: "the energy due to the motion of particles that make up an object" },
          es: { term: "Energía térmica", def: "la energía que proviene del movimiento de las partículas que forman un objeto" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 3 — Forces
    // ---------------------------------------------------------------
    {
      id: "unit-3",
      number: 3,
      title: "Unit 3: Forces",
      titleEs: "Unidad 3: Fuerzas",
      topic: "Pushes, pulls, gravity, friction, and Newton's Third Law",
      terms: [
        {
          id: "applied-force",
          en: { term: "Applied force", def: "force that is exerted on an object by a person or another object" },
          es: { term: "Fuerza aplicada", def: "fuerza que una persona u otro objeto ejerce sobre un objeto" }
        },
        {
          id: "balanced-forces",
          en: { term: "Balanced forces", def: "equal and opposite forces on an object that result in no change in position, direction, or motion; combined net force equals zero" },
          es: { term: "Fuerzas equilibradas", def: "fuerzas iguales y opuestas que actúan sobre un objeto y no producen cambio en su posición, dirección o movimiento; la fuerza neta combinada es igual a cero" }
        },
        {
          id: "friction",
          en: { term: "Friction", def: "a force that acts on a moving object in the opposite direction to the movement because of contact with other objects" },
          es: { term: "Fricción", def: "una fuerza que actúa sobre un objeto en movimiento en dirección opuesta al movimiento debido al contacto con otros objetos" }
        },
        {
          id: "gravity",
          en: { term: "Gravity", def: "a force that pulls objects toward each other" },
          es: { term: "Gravedad", def: "una fuerza que atrae los objetos unos hacia otros" }
        },
        {
          id: "magnetism-u3",
          en: { term: "Magnetism", def: "an attracting or repelling force that causes a magnetic material to move" },
          es: { term: "Magnetismo", def: "una fuerza atrayente o repelente que hace que un material magnético se mueva" }
        },
        {
          id: "magnitude",
          en: { term: "Magnitude", def: "an absolute value describing quantity, not direction" },
          es: { term: "Magnitud", def: "un valor absoluto que describe la cantidad, no la dirección" }
        },
        {
          id: "net-force",
          en: { term: "Net force", def: "a calculation of all forces acting on an object" },
          es: { term: "Fuerza neta", def: "el cálculo del total de todas las fuerzas que actúan sobre un objeto" }
        },
        {
          id: "newtons-third-law",
          en: { term: "Newton's Third Law of Motion", def: "For every force applied to an object, there is a simultaneous force applied that is equal in magnitude and opposite in direction" },
          es: { term: "Tercera ley del movimiento de Newton", def: "Por cada fuerza aplicada a un objeto, existe una fuerza simultánea de la misma magnitud y en dirección opuesta" }
        },
        {
          id: "normal-force",
          en: { term: "Normal force", def: "a force exerted by a surface, such as a table or the floor, that 'pushes up' on an object to prevent it from falling through" },
          es: { term: "Fuerza normal", def: "fuerza ejercida por una superficie, como una mesa o el piso, que 'empuja hacia arriba' sobre un objeto para evitar que la atraviese" }
        },
        {
          id: "simultaneous-force-pairs",
          en: { term: "Simultaneous force pairs", def: "forces that occur in opposite directions and equal strengths at the point of contact between objects" },
          es: { term: "Pares de fuerzas simultáneas", def: "fuerzas que ocurren en direcciones opuestas y con la misma intensidad en el punto de contacto entre los objetos" }
        },
        {
          id: "unbalanced-forces",
          en: { term: "Unbalanced forces", def: "unequal forces on an object that may result in a change in motion; calculated net force is not equal to zero" },
          es: { term: "Fuerzas no equilibradas", def: "fuerzas desiguales sobre un objeto que pueden producir un cambio en el movimiento; la fuerza neta calculada no es igual a cero" }
        },
        {
          id: "force",
          en: { term: "Force", def: "a push or pull that can change the position or motion of an object" },
          es: { term: "Fuerza", def: "un empujón o tirón que puede cambiar la posición o el movimiento de un objeto" }
        },
        {
          id: "action",
          en: { term: "Action", def: "in Newton's Third Law, the original force applied by one object onto another (paired with a reaction)" },
          es: { term: "Acción", def: "en la Tercera Ley de Newton, la fuerza original que un objeto aplica sobre otro (emparejada con una reacción)" }
        },
        {
          id: "reaction",
          en: { term: "Reaction", def: "in Newton's Third Law, the force applied back by the second object onto the first, equal in size and opposite in direction to the action" },
          es: { term: "Reacción", def: "en la Tercera Ley de Newton, la fuerza que el segundo objeto aplica de vuelta sobre el primero, igual en magnitud y opuesta en dirección a la acción" }
        },
        {
          id: "attract",
          en: { term: "Attract", def: "to pull one object toward another, as with magnets or gravity" },
          es: { term: "Atraer", def: "tirar de un objeto hacia otro, como ocurre con los imanes o la gravedad" }
        },
        {
          id: "repel",
          en: { term: "Repel", def: "to push one object away from another, as with two like magnetic poles" },
          es: { term: "Repeler", def: "empujar un objeto lejos de otro, como ocurre con dos polos magnéticos iguales" }
        },
        {
          id: "contact-force",
          en: { term: "Contact force", def: "the push or pull of one object by another object that is touching it" },
          es: { term: "Fuerza de contacto", def: "el empujón o tirón de un objeto sobre otro que lo está tocando" }
        },
        {
          id: "direction",
          en: { term: "Direction", def: "the path along which something moves or points, such as up, down, left, or right" },
          es: { term: "Dirección", def: "el camino por el cual algo se mueve o apunta, como arriba, abajo, izquierda o derecha" }
        },
        {
          id: "distance",
          en: { term: "Distance", def: "how far apart two objects or points are" },
          es: { term: "Distancia", def: "qué tan alejados están dos objetos o puntos" }
        },
        {
          id: "equal",
          en: { term: "Equal", def: "having the same value, size, or amount as something else" },
          es: { term: "Igual", def: "que tiene el mismo valor, tamaño o cantidad que otra cosa" }
        },
        {
          id: "force-diagram",
          en: { term: "Force diagram", def: "a drawing that uses arrows to show the forces acting on an object, including their direction and size" },
          es: { term: "Diagrama de fuerzas", def: "un dibujo que usa flechas para mostrar las fuerzas que actúan sobre un objeto, incluyendo su dirección y magnitud" }
        },
        {
          id: "mass-u3",
          en: { term: "Mass", def: "the amount of matter in an object" },
          es: { term: "Masa", def: "la cantidad de materia que tiene un objeto" }
        },
        {
          id: "newton",
          en: { term: "Newton", def: "the unit used to measure force; named for the scientist Isaac Newton" },
          es: { term: "Newton", def: "la unidad utilizada para medir la fuerza; recibe su nombre del científico Isaac Newton" }
        },
        {
          id: "oppose",
          en: { term: "Oppose", def: "to act in the opposite direction" },
          es: { term: "Oponerse", def: "actuar en la dirección opuesta" }
        },
        {
          id: "pull",
          en: { term: "Pull", def: "a force that moves or tries to move an object toward you" },
          es: { term: "Tirar", def: "una fuerza que mueve o intenta mover un objeto hacia uno mismo" }
        },
        {
          id: "push",
          en: { term: "Push", def: "a force that moves or tries to move an object away from you" },
          es: { term: "Empujar", def: "una fuerza que mueve o intenta mover un objeto lejos de uno mismo" }
        },
        {
          id: "resistance",
          en: { term: "Resistance", def: "a force that acts against motion, such as friction or air resistance" },
          es: { term: "Resistencia", def: "una fuerza que actúa en contra del movimiento, como la fricción o la resistencia del aire" }
        },
        {
          id: "spring-scale",
          en: { term: "Spring scale", def: "a tool that measures force or weight by stretching or compressing a spring" },
          es: { term: "Dinamómetro", def: "un instrumento que mide la fuerza o el peso estirando o comprimiendo un resorte" }
        },
        {
          id: "surface",
          en: { term: "Surface", def: "the outer layer or face of an object, where forces such as friction act" },
          es: { term: "Superficie", def: "la capa o cara exterior de un objeto, donde actúan fuerzas como la fricción" }
        },
        {
          id: "vertical",
          en: { term: "Vertical", def: "going straight up and down" },
          es: { term: "Vertical", def: "que va en línea recta de arriba a abajo" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 4 — Energy & Waves
    // ---------------------------------------------------------------
    {
      id: "unit-4",
      number: 4,
      title: "Unit 4: Energy & Waves",
      titleEs: "Unidad 4: Energía y Ondas",
      topic: "Forms of energy, energy transfer, and wave properties",
      terms: [
        {
          id: "chemical-energy",
          en: { term: "Chemical energy", def: "energy stored in the bonds of molecules of substances" },
          es: { term: "Energía química", def: "energía almacenada en los enlaces de las moléculas de las sustancias" }
        },
        {
          id: "elastic-energy",
          en: { term: "Elastic energy", def: "energy stored in objects by force (e.g., stretched rubber band or balloon)" },
          es: { term: "Energía potencial elástica", def: "energía almacenada en los objetos por una fuerza (por ejemplo, una banda elástica estirada o un globo)" }
        },
        {
          id: "energy-transfer",
          en: { term: "Energy transfer", def: "energy is taken from one place to another (e.g., in a food web, energy is transferred from producer to consumer)" },
          es: { term: "Transferencia de energía", def: "la energía pasa de un lugar a otro (por ejemplo, en una red alimentaria, la energía se transfiere del productor al consumidor)" }
        },
        {
          id: "energy-transformation",
          en: { term: "Energy transformation", def: "process of energy changing from one form to another" },
          es: { term: "Transformación de energía", def: "proceso por el que la energía cambia de una forma a otra" }
        },
        {
          id: "gravitational-energy",
          en: { term: "Gravitational energy", def: "energy stored in an object due to its position" },
          es: { term: "Energía potencial gravitatoria", def: "energía almacenada en un objeto debido a su posición" }
        },
        {
          id: "kinetic-energy",
          en: { term: "Kinetic energy", def: "energy due to movement" },
          es: { term: "Energía cinética", def: "energía debida al movimiento" }
        },
        {
          id: "law-conservation-energy",
          en: { term: "Law of Conservation of Energy", def: "energy cannot be created or destroyed" },
          es: { term: "Ley de conservación de la energía", def: "la energía no se puede crear ni destruir" }
        },
        {
          id: "longitudinal-wave",
          en: { term: "Longitudinal wave", def: "a wave where the medium vibrates in the same direction that the energy is traveling" },
          es: { term: "Onda longitudinal", def: "una onda en la que el medio vibra en la misma dirección en la que viaja la energía" }
        },
        {
          id: "medium",
          en: { term: "Medium", def: "matter with consistent composition that can propagate a wave; can be a solid, liquid, or gas" },
          es: { term: "Medio", def: "materia con composición uniforme a través de la cual puede propagarse una onda; puede ser sólido, líquido o gas" }
        },
        {
          id: "potential-energy",
          en: { term: "Potential energy", def: "stored energy; energy due to position" },
          es: { term: "Energía potencial", def: "energía almacenada; energía debida a la posición" }
        },
        {
          id: "transverse-wave",
          en: { term: "Transverse wave", def: "a wave where the medium vibrates perpendicular to the direction energy travels" },
          es: { term: "Onda transversal", def: "una onda en la que el medio vibra de forma perpendicular a la dirección en la que viaja la energía" }
        },
        {
          id: "battery",
          en: { term: "Battery", def: "a device that stores chemical energy and converts it into electrical energy" },
          es: { term: "Batería", def: "un dispositivo que almacena energía química y la transforma en energía eléctrica" }
        },
        {
          id: "circuit",
          en: { term: "Circuit", def: "the path through which electricity can flow" },
          es: { term: "Circuito", def: "el camino a través del cual puede fluir la electricidad" }
        },
        {
          id: "energy",
          en: { term: "Energy", def: "the ability to cause change in matter" },
          es: { term: "Energía", def: "la capacidad de causar un cambio en la materia" }
        },
        {
          id: "light",
          en: { term: "Light", def: "a form of energy that we can see, given off by sources such as the Sun, lamps, or fire" },
          es: { term: "Luz", def: "una forma de energía que podemos ver, emitida por fuentes como el Sol, las lámparas o el fuego" }
        },
        {
          id: "parallel",
          en: { term: "Parallel", def: "lines or paths that go in the same direction and stay the same distance apart, never meeting" },
          es: { term: "Paralelo", def: "líneas o caminos que van en la misma dirección y se mantienen a la misma distancia, sin encontrarse nunca" }
        },
        {
          id: "perpendicular",
          en: { term: "Perpendicular", def: "lines or paths that meet at a right angle (90 degrees)" },
          es: { term: "Perpendicular", def: "líneas o caminos que se cruzan formando un ángulo recto (90 grados)" }
        },
        {
          id: "photosynthesis",
          en: { term: "Photosynthesis", def: "the process by which plants use light energy to make food (sugar) from water and carbon dioxide" },
          es: { term: "Fotosíntesis", def: "el proceso por el que las plantas usan la energía de la luz para producir alimento (azúcar) a partir de agua y dióxido de carbono" }
        },
        {
          id: "propagate",
          en: { term: "Propagate", def: "to spread or travel through space or a medium, as a wave does" },
          es: { term: "Propagar", def: "extenderse o viajar a través del espacio o de un medio, como lo hace una onda" }
        },
        {
          id: "spring",
          en: { term: "Spring", def: "a coiled object that stores elastic energy when stretched or compressed" },
          es: { term: "Resorte", def: "un objeto en espiral que almacena energía elástica cuando se estira o comprime" }
        },
        {
          id: "vibration",
          en: { term: "Vibration", def: "a back-and-forth motion that can transfer energy through a medium" },
          es: { term: "Vibración", def: "un movimiento de vaivén que puede transferir energía a través de un medio" }
        },
        {
          id: "wave",
          en: { term: "Wave", def: "a movement of energy through a medium or space from one place to another" },
          es: { term: "Onda", def: "un movimiento de energía a través de un medio o del espacio, de un lugar a otro" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 5 — Tides & the Moon
    // ---------------------------------------------------------------
    {
      id: "unit-5",
      number: 5,
      title: "Unit 5: Tides & the Moon",
      titleEs: "Unidad 5: Mareas y la Luna",
      topic: "Tides, lunar phases, gravitational attraction, and revolution",
      terms: [
        {
          id: "daily-tide",
          en: { term: "Daily tide", def: "water on the side of the Earth closest to the Moon is most strongly affected by the Moon's gravitational pull" },
          es: { term: "Marea diaria", def: "el agua del lado de la Tierra más cercano a la Luna se ve afectada con más fuerza por la atracción gravitatoria de la Luna" }
        },
        {
          id: "gravitational-attraction",
          en: { term: "Gravitational attraction", def: "force of attraction between all masses in the universe, especially the attraction of the Earth's mass for bodies near its surface" },
          es: { term: "Atracción gravitacional", def: "fuerza de atracción entre todas las masas del universo, especialmente la atracción de la masa de la Tierra sobre los cuerpos cercanos a su superficie" }
        },
        {
          id: "neap-tide",
          en: { term: "Neap tide", def: "occurs at the first and third (last) quarter Moon phases; the Sun is at a right angle to the Moon" },
          es: { term: "Marea muerta", def: "ocurre en las fases de cuarto creciente y cuarto menguante de la Luna; el Sol está en ángulo recto con la Luna" }
        },
        {
          id: "spring-tide",
          en: { term: "Spring tide", def: "occurs at the full and new Moon phases; the Earth, Moon, and Sun are in alignment, pulling the water in the same direction" },
          es: { term: "Marea viva", def: "ocurre en las fases de luna llena y luna nueva; la Tierra, la Luna y el Sol están alineados y atraen el agua en la misma dirección" }
        },
        {
          id: "tide",
          en: { term: "Tide", def: "the rising and falling of the oceans due to the gravitational attraction of the Moon and Sun; usually occurs twice each day" },
          es: { term: "Marea", def: "el ascenso y descenso de los océanos debido a la atracción gravitacional de la Luna y el Sol; suele ocurrir dos veces al día" }
        },
        {
          id: "first-quarter",
          en: { term: "First quarter", def: "a moon phase in which half of the Moon's lit side is visible from Earth, occurring about one week after the new moon" },
          es: { term: "Cuarto creciente", def: "fase de la Luna en la que se ve desde la Tierra la mitad de su lado iluminado, aproximadamente una semana después de la luna nueva" }
        },
        {
          id: "full-moon",
          en: { term: "Full Moon", def: "a moon phase in which the entire lit side of the Moon is visible from Earth" },
          es: { term: "Luna llena", def: "fase de la Luna en la que todo su lado iluminado es visible desde la Tierra" }
        },
        {
          id: "high-tide",
          en: { term: "High tide", def: "the highest level the ocean reaches as water flows toward shore due to the gravitational pull of the Moon and Sun" },
          es: { term: "Marea alta", def: "el nivel más alto que alcanza el océano cuando el agua fluye hacia la costa debido a la atracción gravitatoria de la Luna y el Sol" }
        },
        {
          id: "low-tide",
          en: { term: "Low tide", def: "the lowest level the ocean reaches as water flows away from shore" },
          es: { term: "Marea baja", def: "el nivel más bajo que alcanza el océano cuando el agua se retira de la costa" }
        },
        {
          id: "lunar-cycle",
          en: { term: "Lunar cycle", def: "the regular pattern of the Moon's appearance as it changes from new moon to full moon and back again, taking about 29.5 days" },
          es: { term: "Ciclo lunar", def: "el patrón regular de la apariencia de la Luna al cambiar de luna nueva a luna llena y de regreso, en aproximadamente 29.5 días" }
        },
        {
          id: "new-moon",
          en: { term: "New Moon", def: "a moon phase in which the side of the Moon facing Earth is not lit, so the Moon appears dark" },
          es: { term: "Luna nueva", def: "fase de la Luna en la que el lado que mira hacia la Tierra no está iluminado, por lo que la Luna se ve oscura" }
        },
        {
          id: "revolve",
          en: { term: "Revolve", def: "one complete circle made by a planet or satellite around another object" },
          es: { term: "Traslación", def: "una vuelta completa que un planeta o satélite hace alrededor de otro objeto" }
        },
        {
          id: "season",
          en: { term: "Season", def: "one of the four periods of the year — spring, summer, autumn (fall), and winter; each season has different average temperatures, weather conditions, and lengths of daylight" },
          es: { term: "Estación", def: "uno de los cuatro períodos del año — primavera, verano, otoño e invierno; cada estación tiene diferentes temperaturas medias, condiciones meteorológicas y duración del día" }
        },
        {
          id: "third-quarter",
          en: { term: "Third quarter", def: "a moon phase in which half of the Moon's lit side is visible from Earth, occurring about one week after the full moon" },
          es: { term: "Cuarto menguante", def: "fase de la Luna en la que se ve desde la Tierra la mitad de su lado iluminado, aproximadamente una semana después de la luna llena" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 6 — Earth's Layers & the Rock Cycle
    // ---------------------------------------------------------------
    {
      id: "unit-6",
      number: 6,
      title: "Unit 6: Earth's Layers & the Rock Cycle",
      titleEs: "Unidad 6: Capas de la Tierra y el Ciclo de las Rocas",
      topic: "Earth's spheres and layers, rock types, and weathering",
      terms: [
        {
          id: "atmosphere",
          en: { term: "Atmosphere", def: "layers of gases surrounding a planet" },
          es: { term: "Atmósfera", def: "capas de gases que rodean un planeta" }
        },
        {
          id: "biosphere",
          en: { term: "Biosphere", def: "part of the Earth where anything alive or interacting with living organisms can be found" },
          es: { term: "Biosfera", def: "parte de la Tierra donde se encuentran los seres vivos y todo lo que interactúa con organismos vivos" }
        },
        {
          id: "crust",
          en: { term: "Crust", def: "the topmost and thinnest layer of Earth" },
          es: { term: "Corteza", def: "la capa más externa y delgada de la Tierra" }
        },
        {
          id: "geosphere",
          en: { term: "Geosphere", def: "solid portions of the Earth" },
          es: { term: "Geósfera", def: "las porciones sólidas de la Tierra" }
        },
        {
          id: "hydrosphere",
          en: { term: "Hydrosphere", def: "all the water on, above, and below Earth's surface" },
          es: { term: "Hidrosfera", def: "toda el agua que se encuentra sobre, por encima y por debajo de la superficie de la Tierra" }
        },
        {
          id: "igneous",
          en: { term: "Igneous", def: "a type of rock formed when crystallized through melting and cooling rock" },
          es: { term: "Roca ígnea", def: "tipo de roca formada cuando la roca se derrite y se enfría, cristalizándose" }
        },
        {
          id: "inner-core",
          en: { term: "Inner core", def: "the innermost, solid center part of the Earth" },
          es: { term: "Núcleo interno", def: "la parte central, sólida y más interna de la Tierra" }
        },
        {
          id: "mantle",
          en: { term: "Mantle", def: "the thickest layer of Earth between the outer core and crust" },
          es: { term: "Manto", def: "la capa más gruesa de la Tierra, ubicada entre el núcleo externo y la corteza" }
        },
        {
          id: "metamorphic",
          en: { term: "Metamorphic", def: "a type of rock formed when igneous or sedimentary rocks are put under intense heat and/or pressure in the Earth's crust" },
          es: { term: "Roca metamórfica", def: "tipo de roca formada cuando rocas ígneas o sedimentarias son sometidas a calor o presión intensos en la corteza terrestre" }
        },
        {
          id: "outer-core",
          en: { term: "Outer core", def: "a thick layer of liquid rock that surrounds Earth's solid inner core" },
          es: { term: "Núcleo externo", def: "una capa gruesa de roca líquida que rodea el núcleo interno sólido de la Tierra" }
        },
        {
          id: "rock-cycle",
          en: { term: "Rock cycle", def: "the continual process by which rocks can be changed into different types of rock" },
          es: { term: "Ciclo geológico", def: "el proceso continuo por el cual las rocas pueden transformarse en otros tipos de roca" }
        },
        {
          id: "sedimentary",
          en: { term: "Sedimentary", def: "a type of rock formed through the accumulation, compaction, and cementation of sediment" },
          es: { term: "Roca sedimentaria", def: "tipo de roca formada por la acumulación, compactación y cementación de sedimentos" }
        },
        {
          id: "cementation",
          en: { term: "Cementation", def: "the process of binding and hardening of sediments into hard rock" },
          es: { term: "Cementación", def: "el proceso por el cual los sedimentos se unen y endurecen formando roca dura" }
        },
        {
          id: "compaction",
          en: { term: "Compaction", def: "the process by which pressure from rocks and soil reduces the size or volume of sediments" },
          es: { term: "Compactación", def: "proceso mediante el cual la presión de las rocas y la tierra reduce el tamaño o el volumen de los sedimentos" }
        },
        {
          id: "crystals",
          en: { term: "Crystals", def: "solids whose particles are arranged in a repeating pattern; many rocks are made of crystals" },
          es: { term: "Cristales", def: "sólidos cuyas partículas están organizadas en un patrón que se repite; muchas rocas están formadas por cristales" }
        },
        {
          id: "density-u6",
          en: { term: "Density", def: "the mass per unit volume of a substance" },
          es: { term: "Densidad", def: "la masa por unidad de volumen de una sustancia" }
        },
        {
          id: "deposition",
          en: { term: "Deposition", def: "process by which sediment is deposited in a new location" },
          es: { term: "Deposición", def: "proceso por el cual los sedimentos se depositan en un nuevo lugar" }
        },
        {
          id: "erosion",
          en: { term: "Erosion", def: "the process by which weathered materials are carried away by wind, water, or ice" },
          es: { term: "Erosión", def: "el proceso por el cual los materiales meteorizados son transportados por el viento, el agua o el hielo" }
        },
        {
          id: "limitation",
          en: { term: "Limitation", def: "a boundary or restriction; in science, what a model can or cannot accurately show" },
          es: { term: "Limitación", def: "un límite o restricción; en ciencia, lo que un modelo puede o no puede mostrar con precisión" }
        },
        {
          id: "malleable",
          en: { term: "Malleable", def: "a property of a material that allows it to be hammered or pressed into a new shape without breaking" },
          es: { term: "Maleable", def: "propiedad de un material que permite moldearlo con golpes o presión sin que se rompa" }
        },
        {
          id: "model",
          en: { term: "Model", def: "a representation of an object or system used to help explain something that may be too large, small, or complex to observe directly" },
          es: { term: "Modelo", def: "una representación de un objeto o sistema que se utiliza para explicar algo que puede ser demasiado grande, pequeño o complejo para observarse directamente" }
        },
        {
          id: "pressure",
          en: { term: "Pressure", def: "a physical force exerted on, in, or against an object" },
          es: { term: "Presión", def: "una fuerza física que se ejerce sobre, dentro o contra un objeto" }
        },
        {
          id: "rocks",
          en: { term: "Rocks", def: "solid, naturally formed pieces of one or more minerals that make up the Earth's crust" },
          es: { term: "Rocas", def: "piezas sólidas formadas naturalmente por uno o más minerales que constituyen la corteza terrestre" }
        },
        {
          id: "sediment",
          en: { term: "Sediment", def: "small pieces of rock, soil, or other material worn from the Earth's surface that can be moved and deposited in new places" },
          es: { term: "Sedimento", def: "pequeños fragmentos de roca, suelo u otros materiales desprendidos de la superficie de la Tierra que pueden ser transportados y depositados en nuevos lugares" }
        },
        {
          id: "sedimentation",
          en: { term: "Sedimentation", def: "the process by which sediment settles and builds up in layers, often at the bottom of a body of water" },
          es: { term: "Sedimentación", def: "el proceso por el cual los sedimentos se asientan y se acumulan en capas, a menudo en el fondo de un cuerpo de agua" }
        },
        {
          id: "semi-solid",
          en: { term: "Semi-solid", def: "matter that behaves partly like a solid and partly like a liquid, such as the Earth's mantle" },
          es: { term: "Semisólido", def: "materia que se comporta en parte como un sólido y en parte como un líquido, como el manto de la Tierra" }
        },
        {
          id: "weathering",
          en: { term: "Weathering", def: "the process of breaking down rocks into smaller pieces" },
          es: { term: "Meteorización", def: "el proceso por el cual las rocas se descomponen en fragmentos más pequeños" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 7 — Conservation & Resources
    // ---------------------------------------------------------------
    {
      id: "unit-7",
      number: 7,
      title: "Unit 7: Conservation & Resources",
      titleEs: "Unidad 7: Conservación y Recursos",
      topic: "Renewable vs. nonrenewable energy, conservation, and pollution",
      terms: [
        {
          id: "conservation",
          en: { term: "Conservation", def: "the protection of something so that it is not wasted" },
          es: { term: "Conservación", def: "la protección de algo para que no se desperdicie" }
        },
        {
          id: "efficiency",
          en: { term: "Efficiency", def: "optimizing the use of resources to minimize the impact on both the environment and economy" },
          es: { term: "Eficiencia", def: "uso óptimo de los recursos para minimizar el impacto sobre el medio ambiente y la economía" }
        },
        {
          id: "energy-poverty",
          en: { term: "Energy poverty", def: "lack of access to reliable, modern energy services" },
          es: { term: "Escasez energética", def: "falta de acceso a servicios de energía modernos y confiables" }
        },
        {
          id: "resource-management",
          en: { term: "Resource management", def: "the careful use of natural resources to make sure they are available now and in the future" },
          es: { term: "Gestión de recursos", def: "el uso cuidadoso de los recursos naturales para asegurar que estén disponibles ahora y en el futuro" }
        },
        {
          id: "climate",
          en: { term: "Climate", def: "the typical weather conditions of an area over many years" },
          es: { term: "Clima", def: "las condiciones meteorológicas típicas de un área durante muchos años" }
        },
        {
          id: "deforestation",
          en: { term: "Deforestation", def: "the cutting down or burning of large areas of forest" },
          es: { term: "Deforestación", def: "la tala o quema de grandes áreas de bosque" }
        },
        {
          id: "ecosystem-u7",
          en: { term: "Ecosystem", def: "a community of living organisms and the nonliving environment in which they interact" },
          es: { term: "Ecosistema", def: "una comunidad de organismos vivos que interactúan y el medio ambiente físico en el que viven" }
        },
        {
          id: "environment-u7",
          en: { term: "Environment", def: "everything that surrounds an organism, both living and nonliving" },
          es: { term: "Medio ambiente", def: "todo lo que rodea a un organismo, tanto los seres vivos como los no vivos" }
        },
        {
          id: "exhaust",
          en: { term: "Exhaust", def: "waste gases released by burning fuel, often from vehicles or factories" },
          es: { term: "Gases de escape", def: "gases de desecho liberados al quemar combustible, a menudo de vehículos o fábricas" }
        },
        {
          id: "finite",
          en: { term: "Finite", def: "limited; able to be used up" },
          es: { term: "Finito", def: "limitado; que puede agotarse" }
        },
        {
          id: "malnutrition",
          en: { term: "Malnutrition", def: "a condition caused by not getting enough of the right nutrients or food" },
          es: { term: "Desnutrición", def: "una condición causada por no recibir suficientes nutrientes o alimentos adecuados" }
        },
        {
          id: "natural-gas",
          en: { term: "Natural gas", def: "a fossil fuel made mostly of methane, formed underground from the remains of ancient organisms" },
          es: { term: "Gas natural", def: "un combustible fósil compuesto principalmente de metano, formado bajo tierra a partir de los restos de organismos antiguos" }
        },
        {
          id: "nonrenewable-energy",
          en: { term: "Nonrenewable energy", def: "energy from sources that cannot be replaced as quickly as they are used, such as oil, coal, and natural gas" },
          es: { term: "Energía no renovable", def: "energía proveniente de fuentes que no se pueden reponer tan rápido como se usan, como el petróleo, el carbón y el gas natural" }
        },
        {
          id: "oil",
          en: { term: "Oil", def: "a thick liquid fossil fuel pumped from underground; also called petroleum" },
          es: { term: "Petróleo", def: "un combustible fósil líquido y espeso extraído del subsuelo; también llamado crudo" }
        },
        {
          id: "petroleum",
          en: { term: "Petroleum", def: "a liquid fossil fuel formed underground from the remains of ancient organisms; can be refined into gasoline and other fuels" },
          es: { term: "Crudo", def: "combustible fósil líquido formado bajo tierra a partir de los restos de organismos antiguos; puede refinarse para producir gasolina y otros combustibles" }
        },
        {
          id: "pollution",
          en: { term: "Pollution", def: "harmful substances released into the air, water, or land" },
          es: { term: "Contaminación", def: "sustancias dañinas liberadas al aire, al agua o al suelo" }
        },
        {
          id: "population-u7",
          en: { term: "Population", def: "all the organisms of the same species living in the same place at the same time" },
          es: { term: "Población", def: "todos los organismos de la misma especie que viven en el mismo lugar al mismo tiempo" }
        },
        {
          id: "recycle",
          en: { term: "Recycle", def: "to process used materials so they can be made into new products" },
          es: { term: "Reciclar", def: "procesar materiales usados para convertirlos en nuevos productos" }
        },
        {
          id: "reduce",
          en: { term: "Reduce", def: "to use less of a resource so that less waste is created" },
          es: { term: "Reducir", def: "usar menos de un recurso para crear menos desperdicio" }
        },
        {
          id: "renewable-energy",
          en: { term: "Renewable energy", def: "energy from sources that can be replaced naturally over a short time, such as the Sun, wind, and water" },
          es: { term: "Energía renovable", def: "energía proveniente de fuentes que pueden reponerse naturalmente en un corto periodo, como el Sol, el viento y el agua" }
        },
        {
          id: "reuse",
          en: { term: "Reuse", def: "to use an item again instead of throwing it away" },
          es: { term: "Reutilizar", def: "volver a usar un objeto en lugar de desecharlo" }
        },
        {
          id: "soil",
          en: { term: "Soil", def: "the top layer of the Earth's surface, made of small bits of rock, water, air, and decaying matter, in which plants grow" },
          es: { term: "Suelo", def: "la capa superior de la superficie de la Tierra, formada por pequeños fragmentos de roca, agua, aire y materia en descomposición, donde crecen las plantas" }
        },
        {
          id: "solar-energy",
          en: { term: "Solar energy", def: "energy from the Sun, which can be used to make electricity or heat" },
          es: { term: "Energía solar", def: "energía proveniente del Sol, que puede utilizarse para generar electricidad o calor" }
        },
        {
          id: "weather",
          en: { term: "Weather", def: "the day-to-day conditions of the atmosphere, including temperature, wind, and precipitation" },
          es: { term: "Tiempo atmosférico", def: "las condiciones diarias de la atmósfera, incluyendo la temperatura, el viento y la precipitación" }
        },
        {
          id: "wind-energy",
          en: { term: "Wind energy", def: "energy obtained from the movement of air, often by using wind turbines" },
          es: { term: "Energía eólica", def: "energía obtenida del movimiento del aire, a menudo mediante turbinas eólicas" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 8 — Ecosystems
    // ---------------------------------------------------------------
    {
      id: "unit-8",
      number: 8,
      title: "Unit 8: Ecosystems",
      titleEs: "Unidad 8: Ecosistemas",
      topic: "Living and nonliving components, symbiosis, predators and prey",
      terms: [
        {
          id: "abiotic-factors",
          en: { term: "Abiotic factors", def: "nonliving elements of the environment that influence the way that organisms and ecosystems function" },
          es: { term: "Factores abióticos", def: "elementos no vivos del medio ambiente que influyen en el funcionamiento de los organismos y los ecosistemas" }
        },
        {
          id: "biotic-factors",
          en: { term: "Biotic factors", def: "living components of the environment that affect the ecosystem or other living things in the environment" },
          es: { term: "Factores bióticos", def: "componentes vivos del medio ambiente que afectan al ecosistema o a otros seres vivos del entorno" }
        },
        {
          id: "commensalism",
          en: { term: "Commensalism", def: "a symbiotic relationship where one organism benefits while the other organism is unaffected" },
          es: { term: "Comensalismo", def: "relación simbiótica en la que un organismo se beneficia mientras que el otro no se ve afectado" }
        },
        {
          id: "community",
          en: { term: "Community", def: "populations that live in the same place at the same time" },
          es: { term: "Comunidad", def: "poblaciones que viven en el mismo lugar al mismo tiempo" }
        },
        {
          id: "ecosystem-u8",
          en: { term: "Ecosystem", def: "all of the living and nonliving components that interact in the same geographic area" },
          es: { term: "Ecosistema", def: "todos los componentes vivos y no vivos que interactúan en una misma zona geográfica" }
        },
        {
          id: "mutualism",
          en: { term: "Mutualism", def: "a symbiotic relationship where both organisms benefit" },
          es: { term: "Mutualismo", def: "relación simbiótica en la que ambos organismos se benefician" }
        },
        {
          id: "parasitism",
          en: { term: "Parasitism", def: "a symbiotic relationship where one organism (parasite) benefits by harming the other (host)" },
          es: { term: "Parasitismo", def: "relación simbiótica en la que un organismo (parásito) se beneficia perjudicando al otro (huésped)" }
        },
        {
          id: "population-u8",
          en: { term: "Population", def: "organisms of the same species living together in a group at a particular place" },
          es: { term: "Población", def: "organismos de la misma especie que viven juntos en un grupo en un lugar determinado" }
        },
        {
          id: "predation",
          en: { term: "Predation", def: "a relationship where one organism (hunter) hunts and kills another (prey) for food" },
          es: { term: "Depredación", def: "relación en la que un organismo (cazador) caza y mata a otro (presa) para alimentarse" }
        },
        {
          id: "prey",
          en: { term: "Prey", def: "an organism that is hunted, stalked, and killed (by a predator) for food" },
          es: { term: "Presa", def: "organismo que es cazado, acechado y matado (por un depredador) para servir de alimento" }
        },
        {
          id: "symbiosis",
          en: { term: "Symbiosis", def: "an interactive relationship between two different organisms living in the same ecosystem" },
          es: { term: "Simbiosis", def: "una relación interactiva entre dos organismos diferentes que viven en el mismo ecosistema" }
        },
        {
          id: "competition",
          en: { term: "Competition", def: "a relationship in which two or more organisms struggle for the same limited resource, such as food, water, or space" },
          es: { term: "Competencia", def: "relación en la que dos o más organismos luchan por un mismo recurso limitado, como comida, agua o espacio" }
        },
        {
          id: "environment-u8",
          en: { term: "Environment", def: "everything that surrounds an organism, both living and nonliving" },
          es: { term: "Medio ambiente", def: "todo lo que rodea a un organismo, tanto los seres vivos como los no vivos" }
        },
        {
          id: "hierarchical-organization",
          en: { term: "Hierarchical organization", def: "an arrangement in which smaller groups are nested within larger ones; in ecology: organism → population → community → ecosystem → biosphere" },
          es: { term: "Organización jerárquica", def: "una organización en la que grupos más pequeños están incluidos dentro de grupos más grandes; en ecología: organismo → población → comunidad → ecosistema → biosfera" }
        },
        {
          id: "interdependence",
          en: { term: "Interdependence", def: "the way living things depend on one another to survive" },
          es: { term: "Interdependencia", def: "la forma en que los seres vivos dependen unos de otros para sobrevivir" }
        },
        {
          id: "organism-u8",
          en: { term: "Organism", def: "any living thing, such as a plant, animal, or microbe" },
          es: { term: "Organismo", def: "cualquier ser vivo, como una planta, un animal o un microbio" }
        },
        {
          id: "scavenger",
          en: { term: "Scavenger", def: "an animal that eats dead organisms it did not kill" },
          es: { term: "Carroñero", def: "animal que se alimenta de organismos muertos a los que no dio caza" }
        }
      ]
    },

    // ---------------------------------------------------------------
    // UNIT 9 — Cells & Organisms
    // ---------------------------------------------------------------
    {
      id: "unit-9",
      number: 9,
      title: "Unit 9: Cells & Organisms",
      titleEs: "Unidad 9: Células y Organismos",
      topic: "Cell theory, prokaryotes & eukaryotes, traits, and DNA",
      terms: [
        {
          id: "autotroph",
          en: { term: "Autotroph", def: "an organism capable of producing its own food" },
          es: { term: "Autótrofo", def: "organismo capaz de producir su propio alimento" }
        },
        {
          id: "cell",
          en: { term: "Cell", def: "the basic unit of structure and function in living organisms" },
          es: { term: "Célula", def: "la unidad básica de estructura y función de los organismos vivos" }
        },
        {
          id: "cell-theory",
          en: { term: "Cell theory", def: "fundamental principle that describes the basic structural and functional unit of all living organisms: all organisms are composed of one or more cells, all cells come from pre-existing cells, and cells are the basic unit of structure and function in organisms" },
          es: { term: "Teoría celular", def: "principio fundamental que describe la unidad básica estructural y funcional de todos los organismos vivos: todos los organismos están compuestos por una o más células, todas las células provienen de células preexistentes, y las células son la unidad básica de estructura y función de los organismos" }
        },
        {
          id: "eukaryote",
          en: { term: "Eukaryote", def: "an organism whose cells contain genetic material (DNA) inside a nucleus; can be unicellular or multicellular" },
          es: { term: "Eucariota", def: "organismo cuyas células contienen material genético (ADN) dentro de un núcleo; puede ser unicelular o pluricelular" }
        },
        {
          id: "heterotroph",
          en: { term: "Heterotroph", def: "an organism that cannot make its own food and depends on other organisms as its food source" },
          es: { term: "Heterótrofo", def: "organismo que no puede producir su propio alimento y depende de otros organismos como fuente de alimento" }
        },
        {
          id: "multicellular",
          en: { term: "Multicellular", def: "organisms made up of multiple cells" },
          es: { term: "Pluricelular", def: "organismos formados por múltiples células" }
        },
        {
          id: "nucleus",
          en: { term: "Nucleus (of a cell)", def: "contains genetic material and controls the use of genes; found in eukaryotic cells" },
          es: { term: "Núcleo (de una célula)", def: "contiene el material genético y controla el uso de los genes; se encuentra en las células eucariotas" }
        },
        {
          id: "prokaryote",
          en: { term: "Prokaryote", def: "a unicellular organism that contains genetic material (DNA) but does not contain a nucleus" },
          es: { term: "Procariota", def: "organismo unicelular que contiene material genético (ADN) pero no posee núcleo" }
        },
        {
          id: "unicellular",
          en: { term: "Unicellular", def: "organisms that are made of one cell" },
          es: { term: "Unicelular", def: "organismos formados por una sola célula" }
        },
        {
          id: "variation",
          en: { term: "Variation", def: "differences in behavioral or physical traits observed among individuals within a population of organisms" },
          es: { term: "Variación", def: "diferencias en los rasgos físicos o de comportamiento que se observan entre los individuos de una población de organismos" }
        },
        {
          id: "bacteria",
          en: { term: "Bacteria", def: "tiny, single-celled prokaryotic organisms that live in nearly every environment on Earth" },
          es: { term: "Bacteria", def: "organismos diminutos, unicelulares y procariotas que viven en casi todos los ambientes de la Tierra" }
        },
        {
          id: "behavior",
          en: { term: "Behavior", def: "something an organism does as it interacts with its world" },
          es: { term: "Comportamiento", def: "algo que un organismo hace al interactuar con su entorno" }
        },
        {
          id: "dna",
          en: { term: "DNA (deoxyribonucleic acid)", def: "the molecule found in cells that carries the genetic instructions for how an organism grows, develops, and functions" },
          es: { term: "ADN (ácido desoxirribonucleico)", def: "la molécula que se encuentra en las células y lleva las instrucciones genéticas que indican cómo un organismo crece, se desarrolla y funciona" }
        },
        {
          id: "organism-u9",
          en: { term: "Organism", def: "a living thing" },
          es: { term: "Organismo", def: "un ser vivo" }
        },
        {
          id: "traits",
          en: { term: "Traits", def: "distinguishing qualities or characteristics of an organism" },
          es: { term: "Rasgos", def: "cualidades o características distintivas de un organismo" }
        }
      ]
    }
  ]
};

// Convenience: flat list of all terms with unit context (for search/worksheets)
VOCAB.allTerms = VOCAB.units.flatMap(u =>
  u.terms.map(t => ({ ...t, unitId: u.id, unitNumber: u.number, unitTitle: u.title }))
);
