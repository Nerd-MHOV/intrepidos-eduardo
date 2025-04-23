"use client";
import React from "react";

const BoxSide = () => {
  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">
        Kit presente Intrépidos
      </h2>

      <div className=" w-full h-px bg-zinc-200 my-6" />

      <div className="relative mt-4 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="relative flex flex-col gap-3 w-full">
            <h2 className="text-lg font-semibold mt-5">Contém:</h2>
            <ul>
              <li>Caixa personalizada</li>
              <li>Livro Intrépidos</li>
              <li>02 marcadores de página</li>
            </ul>

            <p>Tudo embalando. Com estremo carinho e cuidado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSide;
