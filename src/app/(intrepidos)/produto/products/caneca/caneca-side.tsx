"use client";
import React from "react";

const CanecaSide = () => {
  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Caneca Intrépidos</h2>
      <div className=" w-full h-px bg-zinc-200 my-6" />
      <div className="relative mt-4 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="relative flex flex-col gap-3 w-full">
            <h2 className="text-lg font-semibold mt-20">Descrição:</h2>
            <p>Caneca de porcelanato de 300ml.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanecaSide;
