import React from "react";
import DesignPage from "../../../components/design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CopoSide from "./copo-side";
export const COPO_OBJ = [
  {
    label: "Preto",
    value: "preto",
    tw: "zinc-900",
    image: "/material/copo-1.jpeg",
  }, // bg-zinc-900 border-zinc-900
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
          images={COPO_OBJ.map((image) => ({
            label: image.label,
            image: image.image,
          }))}
          price="R$ 40,00"
        >
          <CopoSide />
        </DesignPage>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
