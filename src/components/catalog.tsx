"use client";
import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";

const Catalog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const catalogElement = document.getElementById("catalog");
    if (catalogElement) {
      observer.observe(catalogElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="catalog" 
      className="flex justify-around items-center gap-10 flex-wrap my-10"
    >
      {isVisible ? (
        <>
          <CardItem
            id="livro"
            src="/material/fisico.jpeg"
            title="Livro"
            value={45}
          />

          <CardItem
            id="kit-intrepidos"
            src="/material/box-intrépidos.jpeg"
            title="Kit presente Intrépidos"
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
            src="/material/caneca-1.jpeg"
            title="Canecas"
            value={50}
          />
          <CardItem
            id="card"
            src="/material/card-capa.jpeg"
            title="Cards"
            value={15}
          />
          <CardItem
            id="benfeitores"
            src="/material/benfeitores/benfeitores2.jpg"
            title="Livro: Benfeitores Litero"
            value={30}
          />
        </>
      ) : (
        <div className="w-full text-center py-16">
          <div className="animate-pulse">
            <div className="text-lg text-gray-400">Carregando catálogo...</div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-80 h-96 bg-gray-700/50 rounded-lg mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
