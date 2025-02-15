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
      className="relative w-80 h-96 flex flex-col items-center gap-2 bg-black/60 rounded-lg overflow-hidden backdrop-blur-lg text-white drop-shadow-lg"
      onClick={() => {
        router.push(`/produto/${id}`);
      }}
    >
      <Image
        src={src}
        alt={`capa-${src}`}
        layout="fill"
        className="object-cover rounded-lg shadow-md drop-shadow-lg"
      />
      <div className="w-full justify-between items-center p-2 absolute bottom-0 left-0">
        <div className="">
          <span className="text-sm bg-white text-center font-semibold text-black p-2 rounded-full backdrop-blur-sm ">
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
