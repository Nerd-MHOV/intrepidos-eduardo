"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingBag } from "lucide-react";
import Image from "next/image";
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

            <div className="grid grid-cols-2 gap-2">
              <Button
                className="bg-gray-200 font-bold text-black hover:bg-gray-300 relative"
                onClick={() => window.open("https://a.co/d/3NdFrQ7", "_blank")}
              >
                <Image
                  alt="amazon-logo"
                  src="/amazon.png"
                  width={90}
                  height={20}
                />
              </Button>
              <Button
                className="bg-gray-200 font-bold text-black hover:bg-gray-300 relative"
                onClick={() =>
                  window.open("https://amzn.in/d/3V0H9MA", "_blank")
                }
              >
                <Image
                  alt="amazon-logo"
                  src="/amazon.png"
                  width={90}
                  height={20}
                />
                <Image
                  alt="portugal-logo"
                  src="/logos/portugal.avif"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
            <Button
              className="bg-gray-200 font-bold text-black hover:bg-gray-300 relative"
              onClick={() =>
                window.open(
                  "https://www.enjoei.com.br/p/livro-intrepidos-118723953",
                  "_blank"
                )
              }
            >
              <Image
                alt="enjoei-logo"
                src="/enjoei.png"
                width={90}
                height={20}
              />
            </Button>
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

            <div className="grid grid-cols-2 gap-2">
              <Button
                className="bg-gray-100 font-bold text-black hover:bg-gray-100 relative"
                onClick={() =>
                  window.open(
                    "https://www.hugendubel.de/de/ebook_epub/eduardo_cagnotto-intrepidos-50293807-produkt-details.html?srsltid=AfmBOorMEWWdj6eNrWN9FVbiw9Gerddg8FkiV2gtXpMFCpY533jtWogb",
                    "_blank"
                  )
                }
              >
                <Image
                  alt="hugendublel-logo"
                  src="/logos/hugendublel.png"
                  width={90}
                  height={20}
                />
              </Button>

              <Button
                className="bg-gray-100 font-bold text-black hover:bg-gray-100 relative"
                onClick={() =>
                  window.open(
                    "https://books.rakuten.co.jp/rk/410d1288d4ca3f85a11d5c3e530d349d/",
                    "_blank"
                  )
                }
              >
                <Image
                  alt="hakuten-logo"
                  src="/logos/hakuten.png"
                  width={90}
                  height={20}
                />
              </Button>
            </div>
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
