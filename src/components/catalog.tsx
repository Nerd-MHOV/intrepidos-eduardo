import React from "react";
import CardItem from "./CardItem";

const Catalog = () => {
  return (
    <section className="flex justify-around items-center gap-10 flex-wrap my-10">
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
    </section>
  );
};

export default Catalog;
