import React from "react";
import DesignPage from "../../../components/design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LuminariaSide from "./luminaria-side";
export const LUMINARIA_OBJ = [
  {
    label: "Branco",
    value: "branco",
    tw: "zinc-100",
    image: "/material/placa-1.jpeg",
  }, // bg-zinc-100 border-zinc-100
  {
    label: "Azul",
    value: "blue",
    tw: "blue-800",
    image: "/material/placa-3.jpeg",
  }, // bg-blue-800 border-blue-800
  {
    label: "Rosa",
    value: "rose",
    tw: "pink-700",
    image: "/material/placa-2.jpeg",
  }, // bg-pink-700 border-pink-700
] as const;
const Page = () => {
  return (
    <div className="min-h-[calc(100vh-172px)] ">
      <div
        className="absolute h-full w-full left-0 top-0 z-0"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
          backgroundImage: "url(/bg2.svg)",
          width: "100%",
          height: "100vh",
        }}
      />
      <MaxWidthWrapper>
        <DesignPage
          images={LUMINARIA_OBJ.map((image) => ({
            label: image.label,
            image: image.image,
          }))}
          price="R$ 150,00"
        >
          <LuminariaSide />
        </DesignPage>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
