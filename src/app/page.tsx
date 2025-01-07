import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <section className="bg-black/60 backdrop-blur-lg my-10 rounded-sm overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative hidden lg:block min-w-[350px] h-full">
            <Image
              src="/logo-fundo.png"
              alt="logo"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="relative">
            <div className="w-full h-[calc(100vh-3.5rem)] relative z-0">
              <Image
                src="/material/poster-14-gradiente.png"
                alt="Intrépidos"
                layout="fill"
                className="object-cover object-top z-0"
              />
            </div>
            <p className="text-white text-justify p-6 lg:p-8 font-bold text-lg -mt-28 z-10 relative">
              E se a terra estivesse a beira da destruição, ameaçada por um
              inimigo implacável? Apenas um grupo de heróis intrépidos, cada um
              com habilidades extraordinárias, segredos profundos e
              personalidades únicas, pode impedir o fim da humanidade. Utopia,
              Látex, Gnóstica, Furtivo, Alígera, General Dinâmico e Maninguari
              são mais do que pessoas comuns,{" "}
              <span className="bg-white text-black px-1">
                eles são a última esperança de nosso mundo
              </span>
              . Nesta batalha épica pelo destino do planeta, falhar não é uma
              opção. Embarque na jornada desses heróis e descubra se eles tem o
              que é preciso para salvar o que resta da raça humana.
              <span className="bg-green-700 font-bold p-1">INTRÉPIDOS</span> é
              uma historia de coragem, sacrifício e a luta pelo futuro.
            </p>
          </div>
        </div>
      </section>

      <section className="backdrop-blur-lg mb-20 rounded-sm overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center items-center py-2 px-12">
          <p className="text-white text-left lg:text-center py-8 lg:p-8 drop-shadow-md shadow-lg text-lg order-1">
            Sou <span className="bg-green-800 p-1">Eduardo Cagnotto</span>, 55
            anos, casado, pai de dois filhos de 23 e 20 anos. Júnior e Kayla.
            Casado com Regiane Karina Urbano Cagnotto há 25 anos. Sempre gostei
            de ler e escrever. Desde novo, já escrevia e imaginava aventuras. A
            partir dos{" "}
            <span className="bg-white text-black px-1 font-bold">
              quarenta anos
            </span>
            , comecei a dar a vida à minha obra até finalizar no ano de 2024.
          </p>
          <Image
            src="/material/autor.png"
            alt="autor"
            width={300}
            height={400}
            className="object-cover drop-shadow-xl order-0 lg:order-2"
          />
        </div>
      </section>

      <section className="flex justify-around items-center gap-10 flex-wrap my-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative w-[200px] h-auto flex flex-col items-center gap-2 bg-black/60 rounded-sm overflow-hidden backdrop-blur-lg text-white"
          >
            <Image
              src={`/material/poster-${index + 1}.jpeg`}
              alt={`capa-${index + 1}`}
              height={300}
              width={300}
              className="object-cover"
            />
            <div className="w-full justify-between items-center p-2">
              <div className="flex flex-col">
                <h1>Item {index}</h1>
                <p>teste de card</p>
              </div>
              <div className="w-full flex justify-end mt-1">
                <Button size="sm">
                  <ShoppingBag /> Comprar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </MaxWidthWrapper>
  );
}
