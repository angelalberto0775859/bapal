import imgPolvoron from "@/assets/Panes/edited/pan-110846-am.jpg";
import imgGalletaChispas from "@/assets/Panes/edited/pan-110846-am-3.jpg";
import imgGalletaDeliciosa from "@/assets/Panes/edited/pan-110846-am-2.jpg";
import imgPalitoNuez from "@/assets/Panes/edited/pan-110846-am-5.jpg";
import imgRebanadaMantequilla from "@/assets/Panes/edited/pan-110847-am.jpg";
import imgBrocaHojaldrada from "@/assets/Panes/edited/pan-110847-am-2.jpg";
import imgGalletaMordida from "@/assets/Panes/edited/pan-110846-am-7.jpg";
import imgGalletaMulti from "@/assets/Panes/edited/pan-110846-am-6.jpg";
import imgGalletaCazuela from "@/assets/Panes/edited/pan-110846-am-4.jpg";

import imgConchaVainilla from "@/assets/Panes/edited/pan-110849-am-7.jpg";
import imgConchaChocolate from "@/assets/Panes/edited/pan-110849-am-6.jpg";
import imgDonaSencilla from "@/assets/Panes/edited/pan-110849-am-2.jpg";
import imgDonaGranillo from "@/assets/Panes/edited/pan-110849-am-3.jpg";
import imgDonaNuez from "@/assets/Panes/edited/pan-110849-am-4.jpg";
import imgDonaChips from "@/assets/Panes/edited/pan-110849-am-5.jpg";

import imgBerlinesa from "@/assets/Panes/edited/pan-110847-am-6.jpg";
import imgGendarme from "@/assets/Panes/edited/pan-110848-am-5.jpg";
import imgPanElote from "@/assets/Panes/edited/pan-110848-am.jpg";
import imgMantecadaSencilla from "@/assets/Panes/edited/pan-110848-am-2.jpg";
import imgMantecadaChocolate from "@/assets/Panes/edited/pan-110849-am-9.jpg";
import imgBeso from "@/assets/Panes/edited/pan-110848-am-4.jpg";
import imgOjoBuey from "@/assets/Panes/edited/pan-110849-am.jpg";
import imgChinoNuez from "@/assets/Panes/edited/pan-110849-am-8.jpg";

import imgCuernoSencillo from "@/assets/Panes/edited/pan-110850-am-2.jpg";
import imgCuernoZarzamora from "@/assets/Panes/edited/pan-110849-am-11.jpg";
import imgCuernoHigo from "@/assets/Panes/edited/pan-110850-am-7.jpg";
import imgCuernoChocolate from "@/assets/Panes/edited/pan-110850-am-5.jpg";
import imgCuernoCajeta from "@/assets/Panes/edited/pan-110848-am-3.jpg";

import imgBarquillo from "@/assets/Panes/edited/pan-110850-am.jpg";
import imgRol from "@/assets/Panes/edited/pan-110850-am-3.jpg";
import imgOreja from "@/assets/Panes/edited/pan-110850-am-4.jpg";
import imgTrebol from "@/assets/Panes/edited/pan-110848-am-8.jpg";

import imgBisquet from "@/assets/Panes/edited/pan-110847-am-5.jpg";
import imgBisquetIntegral from "@/assets/Panes/edited/pan-110848-am-6.jpg";
import imgCocol from "@/assets/Panes/edited/pan-110848-am-7.jpg";

import imgChapata from "@/assets/Panes/edited/pan-110850-am-9.jpg";
import imgChapataSemillas from "@/assets/Panes/edited/pan-110848-am-9.jpg";

import imgPanque from "@/assets/Panes/edited/pan-110850-am-8.jpg";

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
    image: imgPolvoron,
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
    image: imgGalletaChispas,
  },
  {
    id: "gal-3",
    name: "Galleta Deliciosa",
    description: "Galleta tradicional con un toque sutil de vainilla.",
    price: 22,
    category: "Galletería & Polvorones",
    image: imgGalletaDeliciosa,
  },
  {
    id: "gal-4",
    name: "Palito de Nuez",
    description: "Crocante bastón con trozos selectos de nuez pecana.",
    price: 24,
    category: "Galletería & Polvorones",
    image: imgPalitoNuez,
  },
  {
    id: "gal-5",
    name: "Galleta Manteca 2",
    description: "Galleta clásica de manteca con azúcar espolvoreada.",
    price: 20,
    category: "Galletería & Polvorones",
    image: imgGalletaDeliciosa,
  },
  {
    id: "gal-6",
    name: "Rebanada de Mantequilla",
    description: "Suave pan de mantequilla untado y espolvoreado con azúcar.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgRebanadaMantequilla,
  },
  {
    id: "gal-7",
    name: "Broca Hojaldrada",
    description: "Crujientes capas de hojaldre trenzado con un toque dulce.",
    price: 26,
    category: "Galletería & Polvorones",
    image: imgBrocaHojaldrada,
  },
  {
    id: "gal-8",
    name: "Galleta Mordida",
    description: "Galleta tradicional cubierta de azúcar glas y canela.",
    price: 20,
    category: "Galletería & Polvorones",
    image: imgGalletaMordida,
  },
  {
    id: "gal-9",
    name: "Galleta Multi",
    description: "Mezcla crujiente de semillas y cereales ligeros.",
    price: 24,
    category: "Galletería & Polvorones",
    image: imgGalletaMulti,
  },
  {
    id: "gal-10",
    name: "Galleta Cazuela",
    description: "Galleta cóncava rellena de jalea tradicional.",
    price: 22,
    category: "Galletería & Polvorones",
    image: imgGalletaCazuela,
  },

  // Pan Dulce Tradicional
  {
    id: "dul-1",
    name: "Concha Boutique",
    description: "Clásica concha de masa briochada súper esponjosa con cobertura artesanal.",
    price: 24,
    category: "Pan Dulce Tradicional",
    image: imgConchaVainilla,
    variants: [
      { name: "Vainilla", image: imgConchaVainilla },
      { name: "Chocolate", image: imgConchaChocolate },
    ],
  },
  {
    id: "dul-2",
    name: "Dona Artesanal",
    description: "Dona suave y esponjosa con coberturas variadas.",
    price: 25,
    category: "Pan Dulce Tradicional",
    image: imgDonaSencilla,
    variants: [
      { name: "Sencilla", image: imgDonaSencilla },
      { name: "Nuez", priceDelta: 3, image: imgDonaNuez },
      { name: "Granillo", image: imgDonaGranillo },
      { name: "Doble Chocolate", priceDelta: 5, image: imgDonaChips },
      { name: "Moca", priceDelta: 4, image: imgDonaChips },
      { name: "Maple", priceDelta: 3 },
    ],
  },
  {
    id: "dul-3",
    name: "Berlinesa de Viento",
    description: "Masa frita ultra esponjosa rellena de crema fina.",
    price: 32,
    category: "Pan Dulce Tradicional",
    image: imgBerlinesa,
  },
  {
    id: "dul-4",
    name: "Gendarme",
    description: "Pan tradicional denso con cobertura de azúcar y forma característica.",
    price: 24,
    category: "Pan Dulce Tradicional",
    image: imgGendarme,
  },
  {
    id: "dul-5",
    name: "Pan de Elote",
    description: "Elaborado con granos de elote tierno, cremoso y aromático.",
    price: 35,
    category: "Pan Dulce Tradicional",
    image: imgPanElote,
  },
  {
    id: "dul-6",
    name: "Mantecada Sencilla",
    description: "Mantecada clásica, esponjosa y con un aroma cítrico.",
    price: 18,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaSencilla,
  },
  {
    id: "dul-7",
    name: "Mantecada de Chocolate Arándano",
    description: "Mantecada húmeda de chocolate belga con arándanos selectos.",
    price: 24,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaChocolate,
  },
  {
    id: "dul-8",
    name: "Beso o Yoyó",
    description: "Pan tradicional relleno y espolvoreado con azúcar.",
    price: 28,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
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
    image: imgOjoBuey,
  },
  {
    id: "dul-10",
    name: "Chino de Nuez",
    description: "Pan esponjoso enrollado con canela y trozos de nuez caramelizada.",
    price: 26,
    category: "Pan Dulce Tradicional",
    image: imgChinoNuez,
  },

  // Cuernos & Hojaldres
  {
    id: "hoj-1",
    name: "Cuerno Hojaldrado Relleno",
    description: "Nuestra masa hojaldrada premium rellena de ingredientes exquisitos.",
    price: 34,
    category: "Cuernos & Hojaldres",
    image: imgCuernoSencillo,
    variants: [
      { name: "Sencillo", image: imgCuernoSencillo },
      { name: "Queso con Zarzamora", priceDelta: 6, image: imgCuernoZarzamora },
      { name: "Higo", priceDelta: 8, image: imgCuernoHigo },
      { name: "Chocolate", priceDelta: 6, image: imgCuernoChocolate },
      { name: "Nutella", priceDelta: 8, image: imgCuernoChocolate },
      { name: "Cajeta con Nuez", priceDelta: 6, image: imgCuernoCajeta },
      { name: "Piña con Coco", priceDelta: 5 },
    ],
  },
  {
    id: "hoj-2",
    name: "Cuerno de Cajeta con Nuez",
    description: "Masa brioche con abundante relleno de cajeta y lluvia de nuez.",
    price: 38,
    category: "Cuernos & Hojaldres",
    image: imgCuernoCajeta,
  },
  {
    id: "hoj-3",
    name: "Barquillo de Crema",
    description: "Cono de hojaldre crujiente espolvoreado con azúcar, relleno de crema pastelera casera.",
    price: 30,
    category: "Cuernos & Hojaldres",
    image: imgBarquillo,
  },
  {
    id: "hoj-4",
    name: "Rol Glaseado",
    description: "Rol con canela de Ceilán y un sutil glaseado de vainilla.",
    price: 32,
    category: "Cuernos & Hojaldres",
    image: imgRol,
  },
  {
    id: "hoj-5",
    name: "Oreja de Mantequilla",
    description: "Hojaldre crujiente caramelizado con mantequilla pura de alta calidad.",
    price: 24,
    category: "Cuernos & Hojaldres",
    image: imgOreja,
  },
  {
    id: "hoj-6",
    name: "Chocolatín",
    description: "Hojaldre francés relleno de barras de chocolate semi-amargo.",
    price: 35,
    category: "Cuernos & Hojaldres",
    image: imgCuernoChocolate,
  },
  {
    id: "hoj-7",
    name: "Trébol",
    description: "Pan suave de tres hojas con un toque salado y mantequilla.",
    price: 24,
    category: "Cuernos & Hojaldres",
    image: imgTrebol,
  },

  // Bisquets & Cocoles
  {
    id: "bis-1",
    name: "Bisquet Tradicional",
    description: "Bisquet artesanal dorado por fuera, suave y denso por dentro.",
    price: 22,
    category: "Bisquets & Cocoles",
    image: imgBisquet,
    variants: [
      { name: "Sencillo", image: imgBisquet },
      { name: "Integral", image: imgBisquetIntegral },
    ],
  },
  {
    id: "bis-2",
    name: "Cocol de Anís",
    description: "Pan tradicional con notas aromáticas de anís y piloncillo.",
    price: 20,
    category: "Bisquets & Cocoles",
    image: imgCocol,
  },

  // Salados & Chapatas
  {
    id: "sal-1",
    name: "Chapata Rústica",
    description: "Masa con alta hidratación y corteza crujiente.",
    price: 38,
    category: "Salados & Chapatas",
    image: imgChapata,
    variants: [
      { name: "Sencilla", image: imgChapata },
      { name: "Con Semillas", priceDelta: 4, image: imgChapataSemillas },
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
    image: imgPanque,
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
