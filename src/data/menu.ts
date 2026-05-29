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

import imgChapata from "@/assets/Panes/edited/chapata-real.jpg";
import imgBolillo from "@/assets/Panes/edited/pan-110850-am-9.jpg";
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
  "Cazuelas & Cocoles",
  "Salados & Chapatas",
  "Panqués & Repostería",
] as const;

export const products: Product[] = [
  // Galletería & Polvorones
  {
    id: "gal-polvoron",
    name: "Polvorón",
    description: "Polvorón tradicional de textura arenosa y sabor casero.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgPolvoron,
  },
  {
    id: "gal-polvoron-cacahuate",
    name: "Polvorón de Cacahuate",
    description: "Polvorón de textura suave con cacahuate tostado.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgGalletaDeliciosa,
  },
  {
    id: "gal-deliciosa",
    name: "Deliciosa",
    description: "Galleta tradicional rellena de jalea.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgGalletaCazuela,
  },
  {
    id: "gal-miel-arandano",
    name: "Galleta Miel/Arándano",
    description: "Galleta artesanal con miel y arándano.",
    price: 18,
    category: "Galletería & Polvorones",
    image: imgGalletaChispas,
  },
  {
    id: "gal-palo-nuez",
    name: "Palo de Nuez",
    description: "Pan dulce crujiente con nuez.",
    price: 16,
    category: "Galletería & Polvorones",
    image: imgPalitoNuez,
  },
  {
    id: "gal-paloma",
    name: "Paloma",
    description: "Pieza tradicional de pan dulce.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgPolvoron,
  },
  {
    id: "gal-piedra",
    name: "Piedra",
    description: "Pan dulce tradicional de textura firme.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgGalletaMordida,
  },
  {
    id: "gal-rebanada-mantequilla",
    name: "Rebanada de Mantequilla",
    description: "Rebanada dulce con mantequilla y azúcar.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgRebanadaMantequilla,
  },
  {
    id: "gal-mordida",
    name: "Mordida",
    description: "Galleta tradicional de panadería.",
    price: 13,
    category: "Galletería & Polvorones",
    image: imgGalletaMordida,
  },
  {
    id: "gal-multi",
    name: "Multi",
    description: "Galleta surtida de la casa.",
    price: 22,
    category: "Galletería & Polvorones",
    image: imgGalletaMulti,
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
    image: imgConchaVainilla,
    variants: [
      { name: "Vainilla", image: imgConchaVainilla },
      { name: "Chocolate", image: imgConchaChocolate },
    ],
  },
  {
    id: "dul-concha-rellena",
    name: "Concha Rellena",
    description: "Concha rellena para un antojo más completo.",
    price: 24,
    category: "Pan Dulce Tradicional",
    image: imgConchaChocolate,
  },
  {
    id: "dul-elote",
    name: "Elote",
    description: "Pan dulce tipo elote, suave y aromático.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgPanElote,
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
    id: "dul-gusano-canela",
    name: "Gusano c/canela",
    description: "Pan dulce con canela.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgRol,
  },
  {
    id: "dul-laurel",
    name: "Laurel",
    description: "Pieza tradicional de pan dulce.",
    price: 13,
    category: "Pan Dulce Tradicional",
    image: imgTrebol,
  },
  {
    id: "dul-cazuela",
    name: "Cazuela",
    description: "Cazuela artesanal dorada por fuera, suave y densa por dentro.",
    price: 14,
    category: "Pan Dulce Tradicional",
    image: imgBisquet,
  },
  {
    id: "dul-pan-manteca",
    name: "Pan de Manteca",
    description: "Pan tradicional elaborado con manteca.",
    price: 14,
    category: "Pan Dulce Tradicional",
    image: imgGalletaMordida,
  },
  {
    id: "dul-mantecada",
    name: "Mantecada",
    description: "Mantecada clásica, esponjosa y aromática.",
    price: 14,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaSencilla,
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
    description: "Pan dulce tradicional de la casa.",
    price: 15,
    category: "Pan Dulce Tradicional",
    image: imgBrocaHojaldrada,
  },
  {
    id: "dul-berlinesa",
    name: "Berlinesa/Azúcar/Choco",
    description: "Berlinesa suave con presentación de azúcar o chocolate.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgBerlinesa,
  },
  {
    id: "dul-borrego",
    name: "Borrego",
    description: "Pieza tradicional de pan dulce.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
  },
  {
    id: "dul-chino",
    name: "Chino",
    description: "Pan enrollado con canela y nuez.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgChinoNuez,
  },
  {
    id: "dul-danes",
    name: "Danés",
    description: "Pan danés de masa suave y acabado dulce.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgCuernoZarzamora,
  },
  {
    id: "dul-dona-chocolate",
    name: "Dona Chocolate",
    description: "Dona suave con cobertura de chocolate.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgDonaChips,
  },
  {
    id: "dul-dona-granillo",
    name: "Dona de Granillo",
    description: "Dona suave con granillo.",
    price: 21,
    category: "Pan Dulce Tradicional",
    image: imgDonaGranillo,
  },
  {
    id: "dul-dona-nuez",
    name: "Dona de Nuez",
    description: "Dona suave con nuez.",
    price: 21,
    category: "Pan Dulce Tradicional",
    image: imgDonaNuez,
  },
  {
    id: "dul-empanada-crema",
    name: "Empanada Crema",
    description: "Empanada dulce rellena de crema.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
  },
  {
    id: "dul-empanada-pina",
    name: "Empanada de Piña",
    description: "Empanada dulce rellena de piña.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
  },
  {
    id: "dul-garibaldi",
    name: "Garibaldi",
    description: "Pan dulce tradicional con acabado de gragea.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaChocolate,
  },
  {
    id: "dul-garibaldi-especial",
    name: "Garibaldi Especial",
    description: "Garibaldi de presentación especial.",
    price: 21,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaChocolate,
  },
  {
    id: "dul-muela",
    name: "Muela",
    description: "Pieza tradicional de pan dulce.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgOjoBuey,
  },
  {
    id: "dul-muffin",
    name: "Muffin",
    description: "Muffin suave horneado del día.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaSencilla,
  },
  {
    id: "dul-ojo",
    name: "Ojo",
    description: "Pan tradicional con centro suave.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgOjoBuey,
  },
  {
    id: "dul-ombligonas",
    name: "Ombligonas",
    description: "Pieza tradicional de pan dulce.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
  },
  {
    id: "dul-pan-platano-choco",
    name: "Panqué de Plátano/Choco",
    description: "Panqué de plátano con chocolate.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgPanque,
  },
  {
    id: "dul-trenza-crema",
    name: "Trenza c/crema",
    description: "Trenza dulce rellena de crema.",
    price: 20,
    category: "Pan Dulce Tradicional",
    image: imgCuernoZarzamora,
  },
  {
    id: "dul-astorga",
    name: "Astorga",
    description: "Pieza tradicional de pan dulce.",
    price: 22,
    category: "Pan Dulce Tradicional",
    image: imgBeso,
  },
  {
    id: "dul-budin",
    name: "Budín",
    description: "Budín de pan horneado de la casa.",
    price: 22,
    category: "Pan Dulce Tradicional",
    image: imgMantecadaChocolate,
  },
  {
    id: "dul-domino",
    name: "Dominó",
    description: "Pan dulce de chocolate y vainilla.",
    price: 24,
    category: "Pan Dulce Tradicional",
    image: imgConchaChocolate,
  },
  {
    id: "dul-dedos-novia",
    name: "Dedos de Novia",
    description: "Pieza dulce fina de panadería.",
    price: 21,
    category: "Pan Dulce Tradicional",
    image: imgPalitoNuez,
  },

  // Cuernos & Hojaldres
  {
    id: "hoj-cuerno",
    name: "Cuerno",
    description: "Cuerno tradicional hojaldrado.",
    price: 13,
    category: "Cuernos & Hojaldres",
    image: imgCuernoSencillo,
  },
  {
    id: "hoj-hojaldra",
    name: "Hojaldra",
    description: "Pieza de hojaldre crujiente.",
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
    id: "hoj-broca-hojaldrada",
    name: "Broca Hojaldrada",
    description: "Crujientes capas de hojaldre trenzado.",
    price: 15,
    category: "Cuernos & Hojaldres",
    image: imgBrocaHojaldrada,
  },
  {
    id: "hoj-barquillo",
    name: "Barquillo",
    description: "Cono de hojaldre crujiente.",
    price: 21,
    category: "Cuernos & Hojaldres",
    image: imgBarquillo,
  },
  {
    id: "hoj-cuerno-relleno",
    name: "Cuerno Relleno",
    description: "Cuerno hojaldrado con relleno.",
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
  {
    id: "hoj-rol-tres-leches",
    name: "Rol de 3 Leches",
    description: "Rol dulce con acabado de tres leches.",
    price: 25,
    category: "Cuernos & Hojaldres",
    image: imgRol,
  },

  // Cazuelas & Cocoles
  {
    id: "caz-cocol",
    name: "Cocol",
    description: "Pan tradicional con notas aromáticas de anís y piloncillo.",
    price: 13,
    category: "Cazuelas & Cocoles",
    image: imgCocol,
  },
  {
    id: "caz-conde-coco",
    name: "Conde de Coco",
    description: "Pan dulce con coco.",
    price: 16,
    category: "Cazuelas & Cocoles",
    image: imgCocol,
  },
  {
    id: "caz-lechuza",
    name: "Lechuza",
    description: "Pieza tradicional de pan dulce.",
    price: 16,
    category: "Cazuelas & Cocoles",
    image: imgBisquetIntegral,
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
    id: "sal-telera",
    name: "Telera",
    description: "Telera tradicional recién horneada.",
    price: 5,
    category: "Salados & Chapatas",
    image: imgBolillo,
  },
  {
    id: "sal-pambazos",
    name: "Pambazos",
    description: "Pan para pambazo horneado del día.",
    price: 7,
    category: "Salados & Chapatas",
    image: imgBolillo,
  },
  {
    id: "sal-pan-mantequilla",
    name: "Pan c/mantequilla",
    description: "Pan salado con mantequilla.",
    price: 7,
    category: "Salados & Chapatas",
    image: imgBolillo,
  },
  {
    id: "sal-baguette",
    name: "Baguette",
    description: "Baguette de corteza crujiente.",
    price: 16,
    category: "Salados & Chapatas",
    image: imgChapata,
  },
  {
    id: "sal-bollo-queso",
    name: "Bollo con Queso",
    description: "Bollo salado con queso.",
    price: 16,
    category: "Salados & Chapatas",
    image: imgChapataSemillas,
  },
  {
    id: "sal-chapata",
    name: "Chapata",
    description: "Chapata rústica de corteza crujiente.",
    price: 16,
    category: "Salados & Chapatas",
    image: imgChapata,
  },
  {
    id: "sal-plancha-francesa",
    name: "Plancha Francesa",
    description: "Pan salado estilo francés.",
    price: 24,
    category: "Salados & Chapatas",
    image: imgChapata,
  },
  {
    id: "sal-baguette-grande",
    name: "Baguette Grande",
    description: "Baguette grande de corteza crujiente.",
    price: 38,
    category: "Salados & Chapatas",
    image: imgChapata,
  },

  // Panqués & Repostería
  {
    id: "rep-panque-naranja",
    name: "Panqué Naranja",
    description: "Panqué aromático de naranja.",
    price: 22,
    category: "Panqués & Repostería",
    image: imgPanque,
  },
  {
    id: "rep-panque-zanahoria",
    name: "Panqué Zanahoria",
    description: "Panqué de zanahoria suave y especiado.",
    price: 24,
    category: "Panqués & Repostería",
    image: imgPanque,
  },
  {
    id: "rep-panque-individual",
    name: "Panqué Individual",
    description: "Panqué individual horneado para compartir o regalar.",
    price: 135,
    category: "Panqués & Repostería",
    image: imgPanque,
  },
  {
    id: "rep-choux-choco-glass",
    name: "Choux Choco/Glass",
    description: "Choux dulce con acabado de chocolate o glass.",
    price: 24,
    category: "Panqués & Repostería",
    image: imgBeso,
  },
  {
    id: "rep-pan-muerto-sencillo",
    name: "Pan de Muerto Sencillo",
    description: "Pan de muerto tradicional sencillo.",
    price: 40,
    category: "Panqués & Repostería",
    image: imgConchaVainilla,
  },
  {
    id: "rep-pan-muerto-relleno",
    name: "Pan de Muerto Relleno",
    description: "Pan de muerto con relleno.",
    price: 45,
    category: "Panqués & Repostería",
    image: imgConchaChocolate,
  },
  {
    id: "rep-pastel-kg",
    name: "Pastel Kg.",
    description: "Pastel por kilogramo bajo pedido.",
    price: 200,
    category: "Panqués & Repostería",
    image: imgMantecadaChocolate,
  },
  {
    id: "rep-chocoflan",
    name: "Chocoflan",
    description: "Chocoflan de la casa.",
    price: 38,
    category: "Panqués & Repostería",
    image: imgMantecadaChocolate,
  },
  {
    id: "rep-picon",
    name: "Picón",
    description: "Picón tradicional de panadería.",
    price: 38,
    category: "Panqués & Repostería",
    image: imgPanque,
  },
  {
    id: "rep-strudel-manzana",
    name: "Strudel Manzana",
    description: "Strudel relleno de manzana.",
    price: 45,
    category: "Panqués & Repostería",
    image: imgCuernoZarzamora,
  },
];

export const brands = [
  "La Lechera",
  "Philadelphia",
  "Nestlé Professional",
];
