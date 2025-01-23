"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideIn } from "@/lib/framer-motion";

const HomeAuthor = () => {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      variants={slideIn("left")}
      className="text-white text-left lg:text-center py-8 lg:p-8 text-lg order-1"
    >
      Sou <span className="bg-green-800 p-1">Eduardo Cagnotto</span>, 55 anos,
      casado, pai de dois filhos de 23 e 20 anos. Júnior e Kayla. Casado com
      Regiane Karina Urbano Cagnotto há 25 anos. Sempre gostei de ler e
      escrever. Desde novo, já escrevia e imaginava aventuras. A partir dos{" "}
      <span className="bg-white text-black px-1 font-bold">quarenta anos</span>,
      comecei a dar a vida à minha obra até finalizar no ano de 2024.
    </motion.p>
  );
};

export default HomeAuthor;
