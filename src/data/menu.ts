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
  "Galletería",
  "Hojaldres",
  "Especialidades",
  "Masas Rústicas / Salados",
  "Boutique Dulce",
  "Repostería Fina",
] as const;

export const products: Product[] = [
  {
    id: "gal-1",
    name: "Galleta de Mantequilla Francesa",
    description: "Mantequilla europea, vainilla de Madagascar.",
    price: 38,
    category: "Galletería",
    variants: [
      { name: "Clásica" },
      { name: "Rellena de cajeta", brand: "Cajeta Coronado", priceDelta: 12 },
      { name: "Doble chocolate belga", priceDelta: 18 },
    ],
  },
  {
    id: "gal-2",
    name: "Polvorón de Almendra",
    description: "Harina orgánica tostada y almendra marcona.",
    price: 32,
    category: "Galletería",
  },
  {
    id: "hoj-1",
    name: "Hojaldre de Queso Crema",
    description: "Hojaldre artesanal de 81 capas.",
    price: 65,
    category: "Hojaldres",
    variants: [
      { name: "Queso Crema clásico", brand: "Philadelphia" },
      { name: "Queso Crema con cajeta", brand: "Philadelphia + Coronado", priceDelta: 15 },
    ],
  },
  {
    id: "hoj-2",
    name: "Palmera de Mantequilla",
    description: "Caramelizada lentamente, crujiente.",
    price: 48,
    category: "Hojaldres",
  },
  {
    id: "esp-1",
    name: "Concha Boutique",
    description: "Masa briochada, cubierta artesanal.",
    price: 42,
    category: "Especialidades",
    variants: [
      { name: "Vainilla" },
      { name: "Chocolate suizo", priceDelta: 8 },
      { name: "Rellena de cajeta", brand: "Cajeta Coronado", priceDelta: 14 },
    ],
  },
  {
    id: "esp-2",
    name: "Pan de Elote Premium",
    description: "Elote criollo, masa madre.",
    price: 55,
    category: "Especialidades",
  },
  {
    id: "mas-1",
    name: "Hogaza Masa Madre 48h",
    description: "Fermentación lenta, costra crujiente.",
    price: 145,
    category: "Masas Rústicas / Salados",
    variants: [
      { name: "Trigo entero" },
      { name: "Centeno y semillas", priceDelta: 25 },
    ],
  },
  {
    id: "mas-2",
    name: "Focaccia Romero & Oliva",
    description: "Aceite extra virgen, sal de mar.",
    price: 95,
    category: "Masas Rústicas / Salados",
  },
  {
    id: "bou-1",
    name: "Brioche Relleno",
    description: "Mantequilla francesa, miga sedosa.",
    price: 72,
    category: "Boutique Dulce",
    variants: [
      { name: "Crema pastelera", brand: "La Lechera" },
      { name: "Cajeta y nuez", brand: "Cajeta Coronado", priceDelta: 18 },
      { name: "Queso crema y zarzamora", brand: "Philadelphia", priceDelta: 22 },
    ],
  },
  {
    id: "bou-2",
    name: "Cinnamon Roll Premium",
    description: "Glaseado de queso crema.",
    price: 68,
    category: "Boutique Dulce",
    variants: [
      { name: "Glaseado clásico", brand: "Philadelphia" },
      { name: "Glaseado de cajeta", brand: "Coronado", priceDelta: 12 },
    ],
  },
  {
    id: "rep-1",
    name: "Macaron Francés (caja x6)",
    description: "Almendra marcona, ganache de temporada.",
    price: 240,
    category: "Repostería Fina",
  },
  {
    id: "rep-2",
    name: "Tarta de Limón Meyer",
    description: "Masa sablée, merengue italiano flameado.",
    price: 320,
    category: "Repostería Fina",
    variants: [
      { name: "Individual" },
      { name: "Para compartir (6 personas)", priceDelta: 280 },
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
