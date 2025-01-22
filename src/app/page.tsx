"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 1 } },
// };

const slideIn = (direction: "left" | "right" | "up" | "down") => {
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: -100, opacity: 0 },
    down: { y: 100, opacity: 0 },
  };

  return {
    hidden: variants[direction],
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
  };
};

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <section className="bg-black/60 backdrop-blur-lg my-10 overflow-hidden">
          <div className="flex justify-center items-center">
            <motion.div
              className="relative hidden lg:block min-w-[350px] h-full"
              initial="hidden"
              animate="visible"
              variants={slideIn("left")}
            >
              <Image
                src="/logo-fundo.png"
                alt="logo"
                width={500}
                height={500}
                className="object-cover"
              />
            </motion.div>
            <div className="relative">
              <div className="min-w-full min-h-[58vh] sm:min-h-[80vh] lg:min-h-[90vh] h-auto relative z-0">
                <Image
                  src="/material/poster-14-gradiente.png"
                  alt="Intrépidos"
                  layout="fill"
                  className="object-cover object-center z-0"
                />
              </div>
              <motion.p
                className="text-white text-justify p-6 lg:p-8 font-semibold text:lg sm:text-xl -mt-28 z-10 relative"
                initial="hidden"
                animate="visible"
                variants={slideIn("down")}
              >
                E se a terra estivesse a beira da destruição, ameaçada por um
                inimigo implacável? Apenas um grupo de heróis intrépidos, cada
                um com habilidades extraordinárias, segredos profundos e
                personalidades únicas, pode impedir o fim da humanidade. Utopia,
                Látex, Gnóstica, Furtivo, Alígera, General Dinâmico e Maninguari
                são mais do que pessoas comuns,{" "}
                <span className="bg-white text-black px-1">
                  eles são a última esperança de nosso mundo
                </span>
                . Nesta batalha épica pelo destino do planeta, falhar não é uma
                opção. Embarque na jornada desses heróis e descubra se eles tem
                o que é preciso para salvar o que resta da raça humana.
                <span className="bg-green-700 font-bold p-1">INTRÉPIDOS</span> é
                uma historia de coragem, sacrifício e a luta pelo futuro.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="sm:backdrop-blur-lg mb-20 rounded-sm overflow-hidden">
          {/* <Icons.underline className="z-0 block pointer-events-none absolute inset-x-0 -bottom-6 text-[#998279] " /> */}
          <div className="flex flex-col lg:flex-row justify-center items-center py-2 px-12">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={slideIn("left")}
              className="text-white text-left lg:text-center py-8 lg:p-8 text-lg order-1"
            >
              Sou <span className="bg-green-800 p-1">Eduardo Cagnotto</span>, 55
              anos, casado, pai de dois filhos de 23 e 20 anos. Júnior e Kayla.
              Casado com Regiane Karina Urbano Cagnotto há 25 anos. Sempre
              gostei de ler e escrever. Desde novo, já escrevia e imaginava
              aventuras. A partir dos{" "}
              <span className="bg-white text-black px-1 font-bold">
                quarenta anos
              </span>
              , comecei a dar a vida à minha obra até finalizar no ano de 2024.
            </motion.p>
            <Image
              src="/material/autor.png"
              alt="autor"
              width={300}
              height={400}
              className="object-cover drop-shadow-xl order-0 lg:order-2"
            />
          </div>
        </section>

        <section className="my-10 flex flex-wrap justify-around gap-8 items-center">
          <div className="overflow-hidden rounded-full opacity-90 w-80 h-80 flex justify-center items-center shadow-lg">
            <Image
              src="/material/intrepidos.gif"
              className="object-cover"
              alt="gif"
              width={320}
              height={300}
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideIn("right")}
            className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <ul className="space-y-4 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-4 text-white">
                <li className="flex gap-2 items-center text-left">
                  <Check className="h-6 w-6 shrink-0 text-green-600" />
                  Emoção em cada capítulo
                </li>
                <li className="flex gap-2 items-center text-left">
                  <Check className="h-6 w-6 shrink-0 text-green-600" />
                  Batalhas Eletrizantes
                </li>
                <li className="flex gap-2 items-center text-left">
                  <Check className="h-6 w-6 shrink-0 text-green-600" />
                  Desenvolvimento dos personagens
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex -space-x-4">
                <Image
                  src="/users/user-1.png"
                  alt="user image"
                  width={50}
                  height={50}
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
                />
                <Image
                  src="/users/user-2.png"
                  alt="user image"
                  width={50}
                  height={50}
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
                />
                <Image
                  src="/users/user-3.png"
                  alt="user image"
                  width={50}
                  height={50}
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
                />
                <Image
                  src="/users/user-4.jpg"
                  alt="user image"
                  width={50}
                  height={50}
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-100"
                />
                <Image
                  src="/users/user-5.jpg"
                  alt="user image"
                  width={50}
                  height={50}
                  className="inline-block h-12 w-12 object-cover rounded-full ring-2 ring-slate-100"
                />
              </div>

              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-1">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>

                <p className="text-white mt-2">
                  <span className="font-semibold">+1.250</span> Leitores
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </MaxWidthWrapper>
      <div className="w-full relative overflow-hidden">
        <div className="absolute h-full w-full bg-[url(/bg2.svg)] top-40 z-0"></div>
        <MaxWidthWrapper className="left-0 top-0 h-full ">
          <section className="flex justify-around items-center gap-10 flex-wrap my-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative w-64 h-96 flex flex-col items-center gap-2 bg-black/60 rounded-lg overflow-hidden backdrop-blur-lg text-white drop-shadow-lg"
              >
                <Image
                  src={`/material/poster-${index + 1}.jpeg`}
                  alt={`capa-${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-lg shadow-md drop-shadow-lg"
                />
                <div className="w-full justify-between items-center p-2 absolute bottom-0 left-0">
                  <div className="">
                    <span className="text-sm bg-white text-center font-semibold text-black p-2 rounded-full backdrop-blur-sm ">
                      Poster
                    </span>
                    <h1 className="text-2xl font-black pt-1 mt-2 pl-1 uppercase drop-shadow-2xl bg-black/60 p-1 rounded">
                      Item {index + 1}
                    </h1>
                  </div>
                  <div className="w-full flex justify-end mt-1">
                    <Button
                      size="sm"
                      className="bg-green-700 text-white hover:bg-green-800 rounded"
                    >
                      <ShoppingBag /> Comprar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
