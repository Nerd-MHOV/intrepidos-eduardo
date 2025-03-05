"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingBag } from "lucide-react";
import React from "react";

const LivroSide = () => {
  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Livro Intrépidos</h2>

      <div className=" w-full h-px bg-zinc-200 my-6" />

      <div className="relative mt-4 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="justify-center flex">
            <Button
              className="bg-yellow-500 font-bold text-black hover:bg-yellow-400 w-full"
              onClick={() =>
                window.open(
                  "https://produto.mercadolivre.com.br/MLB-5283951856-livro-autor-eduardo-cagnotto-titulo-do-livro-intrepidos-livro-de-aventura-e-ficco-_JM",
                  "_blank"
                )
              }
            >
              Comprar Pelo Mercado Livre <ShoppingBag />
            </Button>
          </div>

          <div className=" w-full h-px bg-zinc-200 my-6" />

          <div className="justify-center flex flex-col gap-2">
            <p className="text-center">
              Compre na versão digital e economize 50%
            </p>
            <Button
              className="bg-green-500 font-bold text-black hover:bg-green-400"
              onClick={() =>
                window.open(
                  "https://ebookbox.com.br/app/escritor.php?id=252",
                  "_blank"
                )
              }
            >
              Comprar E-BOOK <BookOpen />
            </Button>
            <Button
              className="bg-fuchsia-600 font-bold text-black hover:bg-fuchsia-500"
              onClick={() =>
                window.open(
                  "https://clubedeautores.com.br//livro/intrepidos",
                  "_blank"
                )
              }
            >
              Clube de Autores <BookOpen />
            </Button>
          </div>
          <div className=" w-full h-px bg-zinc-200 my-6" />

          <div className="relative flex flex-col gap-3 w-full">
            <h2 className="text-lg font-semibold mt-5">Descrição:</h2>
            <p>
              E se a terra estivesse a beira da destruição, ameaçada por um
              inimigo implacável? Apenas um grupo de heróis intrépidos, cada um
              com habilidades extraordinárias, segredos profundos e
              personalidades únicas, pode impedir o fim da humanidade. Utopia,
              Látex, Gnóstica, Furtivo, Alígera, General Dinâmico e Maninguari
              são mais do que pessoas comuns, eles são a última esperança de
              nosso mundo. Nesta batalha épica pelo destino do planeta, falhar
              não é uma opção. Embarque na jornada desses heróis e descubra se
              eles tem o que é preciso para salvar o que resta da raça
              humana.INTRÉPIDOS é uma historia de coragem, sacrifício e a luta
              pelo futuro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivroSide;
