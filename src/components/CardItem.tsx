"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardItemProps {
  id: string;
  src: string;
  title: string;
  value: number;
}

const CardItem = ({ id, src, title, value }: CardItemProps) => {
  const router = useRouter();
  return (
    <div
      className="relative w-80 h-96 flex flex-col items-center gap-2 bg-black/70 rounded-lg overflow-hidden text-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={() => {
        router.push(`/produto/${id}`);
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={`capa-${title}`}
          fill
          className="object-cover rounded-lg"
          loading="lazy"
          sizes="(max-width: 768px) 300px, 320px"
        />
      </div>
      <div className="w-full justify-between items-center p-2 absolute bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent">
        <div className="">
          <span className="text-sm bg-white text-center font-semibold text-black p-2 rounded-full">
            {title}
          </span>
          <h1 className="text-2xl font-black pt-1 mt-2 pl-1 uppercase drop-shadow-2xl bg-black/60 p-1 rounded">
            {value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
        </div>
        <div className="w-full flex justify-end mt-1">
          <Button
            size="sm"
            className="bg-green-700 text-white hover:bg-green-800 rounded"
          >
            <ShoppingBag /> Ver mais!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
