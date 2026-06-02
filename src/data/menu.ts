import imgBerlinesa from "@/assets/Panes/products/Berlinesa.webp";
import imgBeso from "@/assets/Panes/products/Beso.webp";
import imgBisquet from "@/assets/Panes/products/Bisquet.webp";
import imgCazuela from "@/assets/Panes/products/Cazuela.webp";
import imgBolillo from "@/assets/Panes/products/Bolillo.webp";
import imgBroca from "@/assets/Panes/products/Broca.webp";
import imgChoux from "@/assets/Panes/products/Chux.webp";
import imgCocol from "@/assets/Panes/products/Cocol.webp";
import imgConchaChocolate from "@/assets/Panes/products/Concha de chocolate.webp";
import imgConchaVainilla from "@/assets/Panes/products/Concha Vainilla.webp";
import imgCuernoHigo from "@/assets/Panes/products/Cuerno Higo.webp";
import imgCuernoCajeta from "@/assets/Panes/products/Cuerno Nuez y Cajeta.webp";
import imgCuernoZarzamora from "@/assets/Panes/products/Cuerno Queso_zarsamora.webp";
import imgCuernoSencillo from "@/assets/Panes/products/Cuerno Sencillo.webp";
import imgCuernoChocolate from "@/assets/Panes/products/Cuerno de chocolate.webp";
import imgCuerno from "@/assets/Panes/products/Cuerno.webp";
import imgDeliciosaB from "@/assets/Panes/products/Deliciosa B.webp";
import imgDeliciosa from "@/assets/Panes/products/Deliciosa.webp";
import imgDonaChocolate from "@/assets/Panes/products/Dona Chocolate.webp";
import imgDonaDobleChocolate from "@/assets/Panes/products/Dona Doble chocolate.webp";
import imgDonaNuez from "@/assets/Panes/products/Dona con nuez de chocolate.webp";
import imgDona from "@/assets/Panes/products/Dona.webp";
import imgGalletaChispas from "@/assets/Panes/products/Galleta con chispas.webp";
import imgGendarme from "@/assets/Panes/products/Gendarme.webp";
import imgLentes from "@/assets/Panes/products/Lentes.webp";
import imgManteca from "@/assets/Panes/products/Manteca .webp";
import imgMuffin from "@/assets/Panes/products/Muffin arandanos.webp";
import imgOreja from "@/assets/Panes/products/Oreja.webp";
import imgPaloNuez from "@/assets/Panes/products/Palo de Nuez.webp";
import imgPan from "@/assets/Panes/products/Pan .webp";
import imgPanConQueso from "@/assets/Panes/products/Pan con queso.webp";
import imgPanPina from "@/assets/Panes/products/Pan de pina.webp";
import imgPolvoronCanela from "@/assets/Panes/products/Polvoron canela.webp";
import imgPolvoronChocolate from "@/assets/Panes/products/Polvoron de Chocolate.webp";
import imgPolvoronNuez from "@/assets/Panes/products/Polvoron de nuez.webp";
import imgRebanada from "@/assets/Panes/products/Rebanada.webp";
import imgReja from "@/assets/Panes/products/Reja.webp";
import imgChapata from "@/assets/Panes/products/chapata.webp";

// Gemini images
import imgPanque from "@/assets/Panes/products/Gemini_Generated_Image_88ty8688ty8688ty.webp";
import imgGemini6appbu from "@/assets/Panes/products/Gemini_Generated_Image_6appbu6appbu6app.webp";
import imgGeminiT2cfa7 from "@/assets/Panes/products/Gemini_Generated_Image_t2cfa7t2cfa7t2cf.webp";
import imgQuiche from "@/assets/Panes/products/Gemini_Generated_Image_un6z4oun6z4oun6z.webp";

export type Variant = { name: string; priceDelta?: number; brand?: string; image?: string };
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  variants?: Variant[];
};

export const categories = [
  "Galletería & Polvorones",
  "Pan Dulce Tradicional",
  "Cuernos & Hojaldres",
  "Cazuelas & Cocoles",
  "Salados & Chapatas",
  "Panqués & Repostería",
] as const;

export const products: Product[] = [
  // Galletería & Polvorones
  {
    id: "gal-polvoron",
    name: "Polvorón",
    description: "Polvorón tradicional de textura arenosa y sabor casero, disponible en varios sabores.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgPolvoronCanela,
    variants: [
      { name: "Canela", image: imgPolvoronCanela },
      { name: "Chocolate", image: imgPolvoronChocolate },
      { name: "Nuez", image: imgPolvoronNuez },
    ],
  },
  {
    id: "gal-deliciosa",
    name: "Deliciosa",
    description: "Galleta tradicional cóncava rellena de deliciosa jalea dulce.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgDeliciosa,
    variants: [
      { name: "Tradicional", image: imgDeliciosa },
      { name: "Especial", image: imgDeliciosaB },
    ],
  },
  {
    id: "gal-chispas",
    name: "Galleta con Chispas",
    description: "Galleta artesanal con abundantes chispas de chocolate.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgGalletaChispas,
  },
  {
    id: "gal-palo-nuez",
    name: "Palo de Nuez",
    description: "Pan dulce crujiente con trozos de nuez.",
    price: 16,
    category: "Galletería & Polvorones",
    image: imgPaloNuez,
  },
  {
    id: "gal-rebanada",
    name: "Rebanada de Mantequilla",
    description: "Rebanada dulce con mantequilla y azúcar.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgRebanada,
  },

  // Pan Dulce Tradicional
  {
    id: "dul-bisquet",
    name: "Bisquet",
    description: "Bisquet clásico dorado por fuera y suave por dentro.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgBisquet,
  },
  {
    id: "dul-cazuela",
    name: "Cazuela",
    description: "Cazuela artesanal dorada por fuera, suave y densa por dentro.",
    price: 14,
    category: "Pan Dulce Tradicional",
    image: imgCazuela,
  },
  {
    id: "dul-concha",
    name: "Concha",
    description: "Concha de masa esponjosa con cobertura artesanal de vainilla o chocolate.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgConchaVainilla,
    variants: [
      { name: "Vainilla", image: imgConchaVainilla },
      { name: "Chocolate", image: imgConchaChocolate },
    ],
  },
  {
    id: "dul-gendarme",
    name: "Gendarme",
    description: "Pan tradicional con cobertura de azúcar.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgGendarme,
  },
  {
    id: "dul-pan-manteca",
    name: "Pan de Manteca",
    description: "Pan dulce tradicional elaborado con manteca y azúcar.",
    price: 14,
    category: "Pan Dulce Tradicional",
    image: imgManteca,
  },
  {
    id: "dul-beso",
    name: "Beso",
    description: "Pan tradicional relleno y espolvoreado con azúcar.",
    price: 15,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
  },
  {
    id: "dul-brocas",
    name: "Brocas",
    description: "Pan dulce tradicional de la casa en forma de trenza.",
    price: 15,
    category: "Pan Dulce Tradicional",
    image: imgBroca,
  },
  {
    id: "dul-berlinesa",
    name: "Berlinesa",
    description: "Berlinesa suave espolvoreada con azúcar o chocolate.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgBerlinesa,
  },
  {
    id: "dul-dona",
    name: "Dona",
    description: "Dona artesanal suave y esponjosa con coberturas variadas.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgDona,
    variants: [
      { name: "Azúcar", image: imgDona },
      { name: "Chocolate", image: imgDonaChocolate },
      { name: "Doble Chocolate", image: imgDonaDobleChocolate },
      { name: "Nuez", image: imgDonaNuez },
    ],
  },
  {
    id: "dul-lentes",
    name: "Lentes",
    description: "Pan tradicional hojaldrado con azúcar.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgLentes,
  },
  {
    id: "dul-muffin",
    name: "Muffin de Arándanos",
    description: "Muffin suave horneado con arándanos frescos.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgMuffin,
  },

  // Cuernos & Hojaldres
  {
    id: "hoj-cuerno",
    name: "Cuerno",
    description: "Cuerno tradicional hojaldrado.",
    price: 13,
    category: "Cuernos & Hojaldres",
    image: imgCuerno,
    variants: [
      { name: "Estilo París", image: imgCuerno },
      { name: "Sencillo", image: imgCuernoSencillo },
    ],
  },
  {
    id: "hoj-oreja",
    name: "Oreja",
    description: "Hojaldre crujiente caramelizado.",
    price: 13,
    category: "Cuernos & Hojaldres",
    image: imgOreja,
  },
  {
    id: "hoj-cuerno-relleno",
    name: "Cuerno Relleno",
    description: "Cuerno hojaldrado premium con rellenos selectos.",
    price: 21,
    category: "Cuernos & Hojaldres",
    image: imgCuernoZarzamora,
    variants: [
      { name: "Queso con Zarzamora", image: imgCuernoZarzamora },
      { name: "Higo", image: imgCuernoHigo },
      { name: "Chocolate", image: imgCuernoChocolate },
      { name: "Cajeta con Nuez", image: imgCuernoCajeta },
    ],
  },

  // Cazuelas & Cocoles
  {
    id: "caz-cocol",
    name: "Cocol",
    description: "Pan tradicional con notas de anís y piloncillo.",
    price: 13,
    category: "Cazuelas & Cocoles",
    image: imgCocol,
  },

  // Salados & Chapatas
  {
    id: "sal-bolillo",
    name: "Bolillo",
    description: "Bolillo blanco recién horneado.",
    price: 4,
    category: "Salados & Chapatas",
    image: imgBolillo,
  },
  {
    id: "sal-pan-queso",
    name: "Pan con Queso",
    description: "Bollo salado con costra de queso horneado.",
    price: 16,
    category: "Salados & Chapatas",
    image: imgPanConQueso,
  },
  {
    id: "sal-chapata",
    name: "Chapata",
    description: "Chapata rústica de corteza crujiente.",
    price: 16,
    category: "Salados & Chapatas",
    image: imgChapata,
  },

  // Panqués & Repostería
  {
    id: "rep-panque",
    name: "Panqué Tradicional",
    description: "Panqué suave y esponjoso horneado del día.",
    price: 22,
    category: "Panqués & Repostería",
    image: imgPanque,
  },
  {
    id: "rep-choux",
    name: "Choux Choco/Glass",
    description: "Choux tradicional con relleno cremoso.",
    price: 24,
    category: "Panqués & Repostería",
    image: imgChoux,
  },
  {
    id: "rep-chamaco",
    name: "Chamaco",
    description: "Pan dulce tradicional tipo chamaco, suave, esponjoso y espolvoreado con azúcar.",
    price: 40,
    category: "Panqués & Repostería",
    image: imgPan,
  },
  {
    id: "rep-empanada-pina",
    name: "Empanada de Piña",
    description: "Empanada dulce rellena de jalea de piña natural.",
    price: 20,
    category: "Panqués & Repostería",
    image: imgPanPina,
  },
  {
    id: "rep-reja",
    name: "Reja",
    description: "Hojaldre crujiente y trenzado con un acabado tradicional de azúcar.",
    price: 20,
    category: "Panqués & Repostería",
    image: imgReja,
  },
  {
    id: "rep-pan-001",
    name: "Deliciosa pieza de pan",
    description: "Pieza de panadería fina con masa madre, corteza dorada y miga alveolada ideal para acompañar tus comidas.",
    price: 18,
    category: "Panqués & Repostería",
    image: imgGemini6appbu,
  },
  {
    id: "rep-pan-002",
    name: "Deliciosa pieza de pan",
    description: "Exquisito pan de repostería hojaldrado con un toque de azúcar y mantequilla, perfecto para el café.",
    price: 22,
    category: "Panqués & Repostería",
    image: imgGeminiT2cfa7,
  },
  {
    id: "rep-pan-003",
    name: "Deliciosa pieza de pan",
    description: "Tarta salada o quiché artesanal con costra crujiente de mantequilla y un relleno selecto del día.",
    price: 24,
    category: "Panqués & Repostería",
    image: imgQuiche,
  },
];

export const brands = [
  "La Lechera",
  "Philadelphia",
  "Nestlé Professional",
];
