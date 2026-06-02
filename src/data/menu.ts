import imgBerlinesa from "@/assets/Panes/products/Berlinesa.png";
import imgBeso from "@/assets/Panes/products/Beso.png";
import imgBisquet from "@/assets/Panes/products/Bisquet.png";
import imgBolillo from "@/assets/Panes/products/Bolillo.png";
import imgBroca from "@/assets/Panes/products/Broca.png";
import imgChoux from "@/assets/Panes/products/Chux.png";
import imgCocol from "@/assets/Panes/products/Cocol.png";
import imgConchaChocolate from "@/assets/Panes/products/Concha de chocolate.png";
import imgCuernoHigo from "@/assets/Panes/products/Cuerno Higo.png";
import imgCuernoCajeta from "@/assets/Panes/products/Cuerno Nuez y Cajeta.png";
import imgCuernoZarzamora from "@/assets/Panes/products/Cuerno Queso_zarsamora.png";
import imgCuernoSencillo from "@/assets/Panes/products/Cuerno Sencillo.png";
import imgCuernoChocolate from "@/assets/Panes/products/Cuerno de chocolate.png";
import imgCuerno from "@/assets/Panes/products/Cuerno.png";
import imgDeliciosaB from "@/assets/Panes/products/Deliciosa B.png";
import imgDeliciosa from "@/assets/Panes/products/Deliciosa.png";
import imgDonaChocolate from "@/assets/Panes/products/Dona Chocolate.png";
import imgDonaDobleChocolate from "@/assets/Panes/products/Dona Doble chocolate.png";
import imgDonaNuez from "@/assets/Panes/products/Dona con nuez de chocolate.png";
import imgDona from "@/assets/Panes/products/Dona.png";
import imgGalletaChispas from "@/assets/Panes/products/Galleta con chispas.png";
import imgGendarme from "@/assets/Panes/products/Gendarme.png";
import imgLentes from "@/assets/Panes/products/Lentes.png";
import imgManteca from "@/assets/Panes/products/Manteca .png";
import imgMuffin from "@/assets/Panes/products/Muffin arandanos.png";
import imgOreja from "@/assets/Panes/products/Oreja.png";
import imgPaloNuez from "@/assets/Panes/products/Palo de Nuez.png";
import imgPan from "@/assets/Panes/products/Pan .png";
import imgPanConQueso from "@/assets/Panes/products/Pan con queso.png";
import imgPanPina from "@/assets/Panes/products/Pan de piña.png";
import imgPolvoronCanela from "@/assets/Panes/products/Polvoron canela.png";
import imgPolvoronChocolate from "@/assets/Panes/products/Polvoron de Chocolate.png";
import imgPolvoronNuez from "@/assets/Panes/products/Polvoron de nuez.png";
import imgRebanada from "@/assets/Panes/products/Rebanada.png";
import imgReja from "@/assets/Panes/products/Reja.png";
import imgChapata from "@/assets/Panes/products/chapata.png";

// Gemini images
import imgPanque from "@/assets/Panes/products/Gemini_Generated_Image_88ty8688ty8688ty.png";

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
    id: "gal-polvoron-canela",
    name: "Polvorón de Canela",
    description: "Polvorón tradicional de textura arenosa con canela.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgPolvoronCanela,
  },
  {
    id: "gal-polvoron-chocolate",
    name: "Polvorón de Chocolate",
    description: "Polvorón de textura suave sabor chocolate.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgPolvoronChocolate,
  },
  {
    id: "gal-polvoron-nuez",
    name: "Polvorón de Nuez",
    description: "Polvorón casero elaborado con trozos de nuez selecta.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgPolvoronNuez,
  },
  {
    id: "gal-deliciosa",
    name: "Deliciosa",
    description: "Galleta tradicional rellena de jalea.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgDeliciosa,
  },
  {
    id: "gal-deliciosa-b",
    name: "Deliciosa B",
    description: "Galleta tradicional con cobertura especial.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgDeliciosaB,
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
    id: "dul-concha",
    name: "Concha",
    description: "Concha de masa esponjosa con cobertura artesanal.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgConchaChocolate,
    variants: [
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
    id: "dul-dona-chocolate",
    name: "Dona Chocolate",
    description: "Dona suave con cobertura de chocolate.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgDonaChocolate,
  },
  {
    id: "dul-dona-doble-chocolate",
    name: "Dona Doble Chocolate",
    description: "Dona de chocolate con doble cobertura.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgDonaDobleChocolate,
  },
  {
    id: "dul-dona-nuez",
    name: "Dona de Nuez",
    description: "Dona suave con cobertura de chocolate y nuez.",
    price: 21,
    category: "Pan Dulce Tradicional",
    image: imgDonaNuez,
  },
  {
    id: "dul-dona",
    name: "Dona de Azúcar",
    description: "Dona clásica suave y esponjosa.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgDona,
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
  },
  {
    id: "hoj-cuerno-sencillo",
    name: "Cuerno Sencillo",
    description: "Cuerno clásico de textura ligera.",
    price: 13,
    category: "Cuernos & Hojaldres",
    image: imgCuernoSencillo,
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
    id: "rep-pan-muerto",
    name: "Pan de Muerto",
    description: "Pan de muerto tradicional con azúcar.",
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
    name: "Reja de Crema",
    description: "Hojaldre trenzado relleno de crema pastelera.",
    price: 20,
    category: "Panqués & Repostería",
    image: imgReja,
  },
];

export const brands = [
  "La Lechera",
  "Philadelphia",
  "Nestlé Professional",
];
