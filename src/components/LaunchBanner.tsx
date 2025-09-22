import Image from "next/image";
import React from "react";
import RsvpDialog from "./RsvpDialog";

const LaunchBanner = () => {
  // Data do lançamento: 25/10
  const launchDate = new Date("2025-10-25");
  const currentDate = new Date();
  const isBeforeLaunch = currentDate < launchDate;

  // Se já passou da data do lançamento, não mostra o banner
  if (!isBeforeLaunch) {
    return null;
  }

  // Calcula dias restantes
  const diffTime = launchDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <section className="bg-black/50 backdrop-blur-lg text-white py-8 px-4 border-b border-green-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Imagem do lançamento */}
          <div className="flex-shrink-0">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px]">
              <Image
                src="/lancamento-oficial.jpg"
                alt="Lançamento Oficial - Intrépidos"
                fill
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Conteúdo do lançamento */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-green-400">
              LANÇAMENTO OFICIAL!
            </h2>

            <div className="mb-6">
              <p className="text-xl lg:text-2xl mb-2">
                📅 Dia{" "}
                <span className="font-bold text-green-300">25/10 às 20h</span>
              </p>
              <p className="text-lg lg:text-xl">
                📍 No mezanino do{" "}
                <span className="font-bold">Bar e Restaurante Camilo!</span>
              </p>
            </div>

            <div className="bg-zinc-800/70 backdrop-blur p-4 rounded-lg mb-6 border border-zinc-600">
              <p className="text-lg font-semibold mb-2 text-green-400">
                📍 Endereço:
              </p>
              <p className="text-base text-zinc-200">
                Praça Amador Simões, 61, Centro
                <br />
                Brotas - SP, 17380-000
              </p>
            </div>

            {/* Contador regressivo */}
            <div className="bg-green-600 text-white p-4 rounded-lg inline-block shadow-lg">
              <p className="text-lg font-bold">
                ⏰ Faltam apenas <span className="text-2xl">{diffDays}</span>{" "}
                dia{diffDays !== 1 ? "s" : ""}!
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-zinc-300">
                Venha conhecer Eduardo Cagnotto pessoalmente e garantir seu
                exemplar autografado!
              </p>
            </div>

            <div className="mt-6">
              <RsvpDialog source="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchBanner;
