import HomeHeroEDA from "@/components/HomeHeroEDA";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import ButtonAlem from "./button-alem";

const Page = () => {
  return (
    <MaxWidthWrapper className="">
      <section className="bg-black/60 backdrop-blur-lg my-10 overflow-hidden">
        <div className="flex justify-center items-center">
          <HomeHeroEDA />
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-6">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-white text-2xl font-bold">
              Descubra os mistérios de &quot;Ecos do Além&quot;
            </h2>
            <p className="text-gray-300 mt-4">
              Um livro que vai te transportar para um mundo de suspense e
              emoção.
            </p>
            <ButtonAlem />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/ecos-do-alem/autor.jpeg"
              alt="Ecos do Além"
              // layout="responsive"
              width={400}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Page;
