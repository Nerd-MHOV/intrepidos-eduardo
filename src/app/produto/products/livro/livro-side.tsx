"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import React from "react";

const LivroSide = () => {
  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Livro Intrépidos</h2>

      <div className=" w-full h-px bg-zinc-200 my-6" />

      <div className="relative mt-4 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div>
            <Button
              className="bg-yellow-500 font-bold text-black hover:bg-yellow-400"
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
          <div className="relative flex flex-col gap-3 w-full">
            <h2 className="text-lg font-semibold mt-10">Descrição:</h2>
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
