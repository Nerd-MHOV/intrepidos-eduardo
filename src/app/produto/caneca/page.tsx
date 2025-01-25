import React from "react";
import DesignPage from "../../../components/design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CanecaSide from "./caneca-side";
export const CANECA_OBJ = [
  {
    label: "Branca",
    value: "branca",
    tw: "zinc-100",
    image: "/material/caneca.jpeg",
  }, // bg-zinc-100 border-zinc-100
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
          images={CANECA_OBJ.map((image) => ({
            label: image.label,
            image: image.image,
          }))}
          price="R$ 50,00"
        >
          <CanecaSide />
        </DesignPage>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
