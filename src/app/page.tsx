import CardItem from "@/components/CardItem";
import HomeAuthor from "@/components/HomeAuthor";
import HomeHero from "@/components/HomeHero";
import HomeHighlights from "@/components/HomeHighlights";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <section className="bg-black/60 backdrop-blur-lg my-10 overflow-hidden">
          <div className="flex justify-center items-center">
            <HomeHero />
          </div>
        </section>

        <section className="sm:backdrop-blur-lg mb-20 rounded-sm overflow-hidden">
          {/* <Icons.underline className="z-0 block pointer-events-none absolute inset-x-0 -bottom-6 text-[#998279] " /> */}
          <div className="flex flex-col lg:flex-row justify-center items-center py-2 px-12 overflow-hidden">
            <HomeAuthor />
            <Image
              src="/material/autor.png"
              alt="autor"
              width={300}
              height={400}
              className="object-cover drop-shadow-xl order-0 lg:order-2"
            />
          </div>
        </section>

        <section className="my-10 flex overflow-hidden flex-wrap justify-around gap-8 items-center w-full">
          <div className="overflow-hidden relative rounded-full w-80 h-80 flex justify-center items-center shadow-lg">
            <Image
              src="/material/intrepidos.gif"
              className="object-cover"
              alt="gif"
              priority={false}
              quality={1}
              layout="fill"
            />
          </div>

          <HomeHighlights />
        </section>
      </MaxWidthWrapper>
      <div className="w-full relative overflow-hidden">
        <div className="absolute h-full w-full bg-[url(/bg2.svg)] top-40 z-0"></div>
        <MaxWidthWrapper className="left-0 top-0 h-full ">
          <section className="flex justify-around items-center gap-10 flex-wrap my-10">
            <CardItem
              id="livro"
              src="/material/fisico.jpeg"
              title="Livro"
              value={90}
            />

            <CardItem
              id="luminaria"
              src="/material/placa-1.jpeg"
              title="Luminarias"
              value={150}
            />

            <CardItem
              id="copo"
              src="/material/copo-1.jpeg"
              title="Copos"
              value={40}
            />
            <CardItem
              id="camiseta-fan"
              src="/material/camiseta-1.jpeg"
              title="Camiseta FAN"
              value={67}
            />
            <CardItem
              id="camiseta-herois"
              src="/material/camiseta-2.jpeg"
              title="Camiseta Heróis"
              value={67}
            />
            <CardItem
              id="caneca"
              src="/material/caneca.jpeg"
              title="Canecas"
              value={50}
            />
            <CardItem
              id="poster"
              src="/material/poster-1.jpeg"
              title="Posters"
              value={50}
            />
          </section>
        </MaxWidthWrapper>

        <section className="z-50 bg-[url(/bg.svg)] bg-cover bg-center  bg-black/60 backdrop-blur-lg  p-8 text-white mt-10">
          <MaxWidthWrapper className="mb-10">
            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    &quot;Eu li Intrépidos há um tempo atrás e{" "}
                    <span className="p-0.5 bg-slate-800 text-white">
                      gostei muito
                    </span>
                    . Se você gosta de utopia, irá se encantar com Intrépidos!
                    Neste livro temos personagens interessantes e bem humanos,
                    apesar de serem seres recriados em laboratório.&quot;
                  </p>
                </div>

                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    src="/users/user-1.png"
                    alt="user"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Fernando</p>
                    <div className="flex gap-1.5 items-center text-zinc-400">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600 " />
                      <p className="text-sm">Compra Verificada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* second user review */}
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    &quot;Eu gostei muito de como foi tratado à construção de
                    cada um dos personagens no livro, contando desde o inicio de
                    sua jornada, até o presente momento da historia.{" "}
                    <span className="p-0.5 bg-slate-800 text-white">
                      A capacidade de imaginar os heróis em batalha foi o que
                      mais me surpreendeu
                    </span>
                    , pois tudo é muito detalhado na apresentação (da forma
                    fisica até a cor dos olhos) &quot;
                  </p>
                </div>

                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    src="/users/user-4.jpg"
                    alt="user"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Thiago</p>
                    <div className="flex gap-1.5 items-center text-zinc-400">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600 " />
                      <p className="text-sm">Compra Verificada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </>
  );
}
