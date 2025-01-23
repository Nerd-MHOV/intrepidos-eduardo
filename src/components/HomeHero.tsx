"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideIn } from "@/lib/framer-motion";
import Image from "next/image";
const HomeHero = () => {
  return (
    <>
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
          E se a terra estivesse a beira da destruição, ameaçada por um inimigo
          implacável? Apenas um grupo de heróis intrépidos, cada um com
          habilidades extraordinárias, segredos profundos e personalidades
          únicas, pode impedir o fim da humanidade. Utopia, Látex, Gnóstica,
          Furtivo, Alígera, General Dinâmico e Maninguari são mais do que
          pessoas comuns,{" "}
          <span className="bg-white text-black px-1">
            eles são a última esperança de nosso mundo
          </span>
          . Nesta batalha épica pelo destino do planeta, falhar não é uma opção.
          Embarque na jornada desses heróis e descubra se eles tem o que é
          preciso para salvar o que resta da raça humana.
          <span className="bg-green-700 font-bold p-1">INTRÉPIDOS</span> é uma
          historia de coragem, sacrifício e a luta pelo futuro.
        </motion.p>
      </div>
    </>
  );
};

export default HomeHero;
