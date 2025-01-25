import React from "react";
import DesignPage from "../../../components/design";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PosterSide from "./poster-side";
export const POSTER_OBJ = [
  {
    label: "Andréa Arcanjo",
    value: "poster-andrea-arcanjo",
    tw: "zinc-100",
    image: "/material/poster-1.jpeg",
  }, // bg-zinc-100 border-zinc-100
  {
    label: "Raíza",
    value: "poster-raiza",
    tw: "green-500",
    image: "/material/poster-2.jpeg",
  }, // bg-green-500 border-green-500
  {
    label: "Cerval",
    value: "poster-cerval",
    tw: "zinc-900",
    image: "/material/poster-3.jpeg",
  }, // bg-zinc-900 border-zinc-900
  {
    label: "Mapinguari",
    value: "poster-mapinguari",
    tw: "orange-900",
    image: "/material/poster-4.jpeg",
  }, // bg-orange-900 border-orange-900
  {
    label: "Gnóstica",
    value: "poster-gnostica",
    tw: "cyan-400",
    image: "/material/poster-5.jpeg",
  }, // bg-cyan-400 border-cyan-400
  {
    label: "General Dinâmico",
    value: "poster-general-dinamico",
    tw: "green-900",
    image: "/material/poster-6.jpeg",
  }, // bg-green-900 border-green-900
  {
    label: "Tupã",
    value: "poster-tupa",
    tw: "amber-700",
    image: "/material/poster-7.jpeg",
  }, // bg-amber-700 border-amber-700
  {
    label: "Furtivo",
    value: "poster-furtivo",
    tw: "zinc-600",
    image: "/material/poster-8.jpeg",
  }, // bg-zinc-600 border-zinc-600
  {
    label: "Latex",
    value: "poster-latex",
    tw: "emerald-600",
    image: "/material/poster-9.jpeg",
  }, // bg-emerald-600 border-emerald-600
  {
    label: "Utopia",
    value: "poster-utopia",
    tw: "red-800",
    image: "/material/poster-10.jpeg",
  }, // bg-red-800 border-red-800
  {
    label: "Todos Com Titulo",
    value: "poster-todos-titulo",
    tw: "zinc-200",
    image: "/material/poster-11.jpeg",
  }, // bg-zinc-200 border-zinc-200
  {
    label: "Todos",
    value: "poster-todos",
    tw: "zinc-300",
    image: "/material/poster-14.jpeg",
  }, // bg-zinc-300 border-zinc-300
] as const;
const Page = () => {
  return (
    <div className="min-h-[calc(100vh-172px)] text-">
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
          images={POSTER_OBJ.map((image) => ({
            label: image.label,
            image: image.image,
          }))}
          price="R$ 50,00"
        >
          <PosterSide />
        </DesignPage>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
