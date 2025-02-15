import { JSX } from "react";
import CamisetaFanSide from "./camiseta-fan/camiseta-fan-side";
import { CAMISETA_FAN_OBJ } from "./camiseta-fan/object";
import CamisetaHeroisSide from "./camiseta-herois/camiseta-herois-side";
import { CAMISETA_HEROIS_OBJ } from "./camiseta-herois/object";
import CanecaSide from "./caneca/caneca-side";
import { CANECA_OBJ } from "./caneca/object";
import CopoSide from "./copo/copo-side";
import { COPO_OBJ } from "./copo/object";
import LuminariaSide from "./luminaria/luminaria-side";
import { LUMINARIA_OBJ } from "./luminaria/object";
import { POSTER_OBJ } from "./poster/object";
import PosterSide from "./poster/poster-side";
import { LIVRO_OBJ } from "./livro/object";
import LivroSide from "./livro/livro-side";

export interface ProductProps {
  id: string;
  name: string;
  object: {
    label: string;
    value: string;
    tw: string;
    size?: string;
    image?: string;
  }[];
  images: { label: string; image: string }[];
  price: number;
  side: () => JSX.Element;
  correios: {
    weight: number;
    length: number;
    height: number;
    width: number;
    insurance_value: number;
  };
}
export const Products: ProductProps[] = [
  {
    name: "Livro Intrépidos",
    id: "livro",
    object: LIVRO_OBJ,
    images: LIVRO_OBJ.map((image) => ({
      label: image.label,
      image: image.image,
    })),
    price: 90,
    side: LivroSide,
    correios: {
      weight: 0.6,
      length: 20,
      height: 4,
      width: 15,
      insurance_value: 90,
    },
  },
  {
    name: "Camiseta Fan",
    id: "camiseta-fan",
    object: CAMISETA_FAN_OBJ,
    images: [
      {
        label: "Preta",
        image: "/material/camiseta-1.jpeg",
      },
    ],
    price: 67,
    side: CamisetaFanSide,
    correios: {
      weight: 0.2,
      length: 25,
      height: 0,
      width: 20,
      insurance_value: 67,
    },
  },
  {
    name: "Camiseta Heróis",
    id: "camiseta-herois",
    object: CAMISETA_HEROIS_OBJ,
    images: [
      {
        label: "Preta",
        image: "/material/camiseta-2.jpeg",
      },
    ],
    price: 67,
    side: CamisetaHeroisSide,
    correios: {
      weight: 0.2,
      length: 25,
      height: 0,
      width: 20,
      insurance_value: 67,
    },
  },
  {
    name: "Caneca Intrépidos",
    id: "caneca",
    object: CANECA_OBJ,
    images: CANECA_OBJ.map((image) => ({
      label: image.label,
      image: image.image,
    })),
    price: 50,
    side: CanecaSide,
    correios: {
      weight: 0.5,
      length: 10,
      height: 12,
      width: 7,
      insurance_value: 50,
    },
  },
  {
    name: "Copo Intrépidos",
    id: "copo",
    object: COPO_OBJ,
    images: COPO_OBJ.map((image) => ({
      label: image.label,
      image: image.image,
    })),
    price: 40,
    side: CopoSide,
    correios: {
      weight: 0.5,
      length: 10,
      height: 24,
      width: 10,
      insurance_value: 40,
    },
  },
  {
    name: "Luminária de LED",
    id: "luminaria",
    object: LUMINARIA_OBJ,
    images: LUMINARIA_OBJ.map((image) => ({
      label: image.label,
      image: image.image,
    })),
    price: 150,
    side: LuminariaSide,
    correios: {
      weight: 0.5,
      length: 15,
      height: 25,
      width: 15,
      insurance_value: 150,
    },
  },
  {
    name: "Poster Intrépidos",
    id: "poster",
    object: POSTER_OBJ,
    images: POSTER_OBJ.map((image) => ({
      label: image.label,
      image: image.image,
    })),
    price: 50,
    side: PosterSide,
    correios: {
      weight: 0.1,
      length: 7,
      height: 100,
      width: 7,
      insurance_value: 50,
    },
  },
] as const;

export const ProductsSobDemand: (typeof Products)[number]["id"][] = [
  "luminaria",
  "poster",
  "camiseta-herois",
] as const;
