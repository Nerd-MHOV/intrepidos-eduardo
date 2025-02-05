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
}
export const Products: ProductProps[] = [
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
  },
] as const;
