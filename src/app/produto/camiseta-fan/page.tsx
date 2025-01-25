import React from "react";
import DesignPage from "../../../components/design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CamisetaFanSide from "./camiseta-fan-side";
export const CAMISTA_FAN_OBJ = [
  {
    label: "Preta-P",
    value: "preta-p",
    size: "P",
    tw: "zinc-900",
  }, // bg-zinc-900 border-zinc-900
  {
    label: "Preta-M",
    value: "preta-m",
    size: "M",
    tw: "zinc-900",
  }, // bg-zinc-900 border-zinc-900
  {
    label: "Preta-G",
    value: "preta-g",
    size: "G",
    tw: "zinc-900",
  }, // bg-zinc-900 border-zinc-900
  {
    label: "Preta-GG",
    value: "preta-gg",
    size: "GG",
    tw: "zinc-900",
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
          images={[
            {
              label: "Preta",
              image: "/material/camiseta-1.jpeg",
            },
          ]}
          price="R$ 67,00"
        >
          <CamisetaFanSide />
        </DesignPage>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
