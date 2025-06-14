"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideIn } from "@/lib/framer-motion";
import Image from "next/image";
const HomeHeroEDA = () => {
  return (
    <>
      <div className="relative">
        <div className="max-w-[600px] mx-auto mt-5 min-h-[700px] h-auto relative z-0">
          <Image
            src="/ecos-do-alem/ecos-do-alem2.jpeg"
            alt="Intrépidos"
            layout="fill"
            className="object-cover object-center z-0"
          />
        </div>
        <motion.p
          className="text-white text-justify p-6 lg:p-8 font-semibold text:lg sm:text-xl  z-10 relative"
          initial="hidden"
          animate="visible"
          variants={slideIn("down")}
        >
          Nas entranhas vibrantes de São Paulo, onde o pulsar das ruas encontra
          o sussurro de segredos antigos,{" "}
          <span className="bg-white text-black px-1">
            Ecos do Além tece uma saga de amor
          </span>
          , coragem e equilíbrio entre mundos. Esta é a história de Gabriel
          Voss, um médium cuja alma é um canal para os espíritos, e Mariana
          Lima, uma promotora de justiça cuja determinação é a âncora que o
          mantém firme. Juntos, eles são a ponte — não de concreto ou aço, mas
          de emoção e espírito, unindo o visível ao invisível, o humano ao além.
          <span className="bg-blue-700 font-bold p-1">
            Em um cenário onde a modernidade da Liberdade se cruza com túneis
            esquecidos sob a Sé
          </span>
          , o Bixiga e a Mooca, eles enfrentam forças que desafiam a realidade:
          o culto do Lótus, os Caçadores de Pontes, os Observadores do Reflexo,
          os Tecelões do Véu, os Acorrentadores e os Seladores do Deserto. Cada
          batalha é um teste à sua conexão, uma prova de que o amor é a luz
          capaz de dissolver as sombras mais profundas. Escrita com a energia
          febril de uma cidade que nunca dorme, Ecos do Além mergulha no
          misticismo de São Paulo, revelando-a como um mosaico de culturas e
          memórias onde o véu entre os mundos é tênue. Gabriel e Mariana,
          guiados por aliados como Ernesto, Santos e Padre Lúcio, e pelos
          espíritos liderados por Clara, mãe de Gabriel, navegam por visões,
          artefatos e rituais que ecoam séculos de história.{" "}
          <span className="bg-white text-black px-1">
            {" "}
            Sua jornada não é apenas uma luta contra o sobrenatural{" "}
          </span>
          , mas uma busca por equilíbrio — entre o medo e a esperança, o
          sacrifício e o legado, a separação e a união. Ao decidir o destino do
          véu no Coração do Véu, eles mostram que a verdadeira ponte é
          construída com amor, capaz de harmonizar mundos. Que estas páginas os
          convidem a ouvir os ecos de sua própria alma, a cruzar pontes
          invisíveis e a encontrar, como Gabriel e Mariana,{" "}
          <span className="bg-blue-700 font-bold p-1">
            a força que brilha mesmo na escuridão.
          </span>
        </motion.p>
      </div>
    </>
  );
};

export default HomeHeroEDA;
