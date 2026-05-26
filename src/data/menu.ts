export type Variant = { name: string; priceDelta?: number; brand?: string };
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  variants?: Variant[];
};

export const categories = [
  "Galletería & Polvorones",
  "Pan Dulce Tradicional",
  "Cuernos & Hojaldres",
  "Bisquets & Cocoles",
  "Salados & Chapatas",
  "Panqués & Repostería",
] as const;

export const products: Product[] = [
  // Galletería & Polvorones
  {
    id: "gal-1",
    name: "Polvorón Artesanal",
    description: "Polvorón tradicional de textura arenosa y sabor reconfortante.",
    price: 22,
    category: "Galletería & Polvorones",
    variants: [
      { name: "Naranja" },
      { name: "Canela" },
      { name: "Chocolate" },
      { name: "Cacahuate" },
    ],
  },
  {
    id: "gal-2",
    name: "Galleta de Chispas",
    description: "Crujiente por fuera, suave por dentro con abundantes chispas de chocolate.",
    price: 25,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-3",
    name: "Galleta Deliciosa",
    description: "Galleta tradicional con un toque sutil de vainilla.",
    price: 22,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-4",
    name: "Palito de Nuez",
    description: "Crocante bastón con trozos selectos de nuez pecana.",
    price: 24,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-5",
    name: "Galleta Manteca 2",
    description: "Galleta clásica de manteca con azúcar espolvoreada.",
    price: 20,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-6",
    name: "Rebanada de Mantequilla",
    description: "Suave pan de mantequilla untado y espolvoreado con azúcar.",
    price: 18,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-7",
    name: "Broca Hojaldrada",
    description: "Crujientes capas de hojaldre trenzado con un toque dulce.",
    price: 26,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-8",
    name: "Galleta Mordida",
    description: "Galleta tradicional cubierta de azúcar glas y canela.",
    price: 20,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-9",
    name: "Galleta Multi",
    description: "Mezcla crujiente de semillas y cereales ligeros.",
    price: 24,
    category: "Galletería & Polvorones",
  },
  {
    id: "gal-10",
    name: "Galleta Cazuela",
    description: "Galleta cóncava rellena de jalea tradicional.",
    price: 22,
    category: "Galletería & Polvorones",
  },

  // Pan Dulce Tradicional
  {
    id: "dul-1",
    name: "Concha Boutique",
    description: "Clásica concha de masa briochada súper esponjosa con cobertura artesanal.",
    price: 24,
    category: "Pan Dulce Tradicional",
    variants: [
      { name: "Vainilla" },
      { name: "Chocolate" },
    ],
  },
  {
    id: "dul-2",
    name: "Dona Artesanal",
    description: "Dona suave y esponjosa con coberturas variadas.",
    price: 25,
    category: "Pan Dulce Tradicional",
    variants: [
      { name: "Sencilla" },
      { name: "Nuez", priceDelta: 3 },
      { name: "Granillo" },
      { name: "Doble Chocolate", priceDelta: 5 },
      { name: "Moca", priceDelta: 4 },
      { name: "Maple", priceDelta: 3 },
    ],
  },
  {
    id: "dul-3",
    name: "Berlinesa de Viento",
    description: "Masa frita ultra esponjosa rellena de crema fina.",
    price: 32,
    category: "Pan Dulce Tradicional",
  },
  {
    id: "dul-4",
    name: "Gendarme",
    description: "Pan tradicional denso con cobertura de azúcar y forma característica.",
    price: 24,
    category: "Pan Dulce Tradicional",
  },
  {
    id: "dul-5",
    name: "Pan de Elote",
    description: "Elaborado con granos de elote tierno, cremoso y aromático.",
    price: 35,
    category: "Pan Dulce Tradicional",
  },
  {
    id: "dul-6",
    name: "Mantecada Sencilla",
    description: "Mantecada clásica, esponjosa y con un aroma cítrico.",
    price: 18,
    category: "Pan Dulce Tradicional",
  },
  {
    id: "dul-7",
    name: "Mantecada de Chocolate Arándano",
    description: "Mantecada húmeda de chocolate belga con arándanos selectos.",
    price: 24,
    category: "Pan Dulce Tradicional",
  },
  {
    id: "dul-8",
    name: "Beso o Yoyó",
    description: "Pan tradicional relleno y espolvoreado con azúcar.",
    price: 28,
    category: "Pan Dulce Tradicional",
    variants: [
      { name: "Cajeta" },
      { name: "Fresa" },
    ],
  },
  {
    id: "dul-9",
    name: "Ojo de Buey",
    description: "Centro esponjoso de mantecada rodeado de una crujiente costra de hojaldre.",
    price: 26,
    category: "Pan Dulce Tradicional",
  },
  {
    id: "dul-10",
    name: "Chino de Nuez",
    description: "Pan esponjoso enrollado con canela y trozos de nuez caramelizada.",
    price: 26,
    category: "Pan Dulce Tradicional",
  },

  // Cuernos & Hojaldres
  {
    id: "hoj-1",
    name: "Cuerno Hojaldrado Relleno",
    description: "Nuestra masa hojaldrada premium rellena de ingredientes exquisitos.",
    price: 34,
    category: "Cuernos & Hojaldres",
    variants: [
      { name: "Sencillo" },
      { name: "Queso con Zarzamora", priceDelta: 6 },
      { name: "Higo", priceDelta: 8 },
      { name: "Chocolate", priceDelta: 6 },
      { name: "Nutella", priceDelta: 8 },
      { name: "Cajeta con Nuez", priceDelta: 6 },
      { name: "Piña con Coco", priceDelta: 5 },
    ],
  },
  {
    id: "hoj-2",
    name: "Cuerno de Cajeta con Nuez",
    description: "Masa brioche con abundante relleno de cajeta y lluvia de nuez.",
    price: 38,
    category: "Cuernos & Hojaldres",
  },
  {
    id: "hoj-3",
    name: "Barquillo de Crema",
    description: "Cono de hojaldre crujiente espolvoreado con azúcar, relleno de crema pastelera casera.",
    price: 30,
    category: "Cuernos & Hojaldres",
  },
  {
    id: "hoj-4",
    name: "Rol Glaseado",
    description: "Rol con canela de Ceilán y un sutil glaseado de vainilla.",
    price: 32,
    category: "Cuernos & Hojaldres",
  },
  {
    id: "hoj-5",
    name: "Oreja de Mantequilla",
    description: "Hojaldre crujiente caramelizado con mantequilla pura de alta calidad.",
    price: 24,
    category: "Cuernos & Hojaldres",
  },
  {
    id: "hoj-6",
    name: "Chocolatín",
    description: "Hojaldre francés relleno de barras de chocolate semi-amargo.",
    price: 35,
    category: "Cuernos & Hojaldres",
  },
  {
    id: "hoj-7",
    name: "Trébol",
    description: "Pan suave de tres hojas con un toque salado y mantequilla.",
    price: 24,
    category: "Cuernos & Hojaldres",
  },

  // Bisquets & Cocoles
  {
    id: "bis-1",
    name: "Bisquet Tradicional",
    description: "Bisquet artesanal dorado por fuera, suave y denso por dentro.",
    price: 22,
    category: "Bisquets & Cocoles",
    variants: [
      { name: "Sencillo" },
      { name: "Integral" },
    ],
  },
  {
    id: "bis-2",
    name: "Cocol de Anís",
    description: "Pan tradicional con notas aromáticas de anís y piloncillo.",
    price: 20,
    category: "Bisquets & Cocoles",
  },

  // Salados & Chapatas
  {
    id: "sal-1",
    name: "Chapata Rústica",
    description: "Masa con alta hidratación y corteza crujiente.",
    price: 38,
    category: "Salados & Chapatas",
    variants: [
      { name: "Sencilla" },
      { name: "Con Semillas", priceDelta: 4 },
      { name: "Rellena de Queso", priceDelta: 8 },
    ],
  },

  // Panqués & Repostería
  {
    id: "pan-1",
    name: "Panqué Individual",
    description: "Panqué suave y esponjoso horneado individualmente.",
    price: 28,
    category: "Panqués & Repostería",
    variants: [
      { name: "Nuez" },
      { name: "Arándano" },
      { name: "Chispas" },
      { name: "Marmoleado" },
      { name: "Pasas" },
    ],
  },
];

export const brands = [
  "La Lechera",
  "Philadelphia",
  "Cajeta Coronado",
  "Carlota",
  "Nestlé Professional",
  "Lyle's Golden",
];
