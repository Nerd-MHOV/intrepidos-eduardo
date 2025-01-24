"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Label, RadioGroup } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export const COLORS = [
  {
    label: "Branco",
    value: "branco",
    tw: "zinc-100",
    image: "/material/placa-1.jpeg",
  }, // bg-zinc-100 border-zinc-100
  {
    label: "Azul",
    value: "blue",
    tw: "blue-800",
    image: "/material/placa-3.jpeg",
  }, // bg-blue-800 border-blue-800
  {
    label: "Rosa",
    value: "rose",
    tw: "pink-700",
    image: "/material/placa-2.jpeg",
  }, // bg-pink-700 border-pink-700
] as const;

const DesignLuminaria = () => {
  const [color, setColor] = React.useState<(typeof COLORS)[number]>(COLORS[0]);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="relative mt-20 grid text-pin grid-cols-1 lg:grid-cols-3 mb-20  border-2 border-gray-800 overflow-hidden rounded-lg  bg-black/75 backdrop-blur-lg transition-all ">
      <div className="relative h-[37rem] overflow-hidden col-span-2 w-full max-w-4xl items-center justify-center ">
        <Carousel
          className="w-full h-full p-0 m-0"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {COLORS.map((colorIndex, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-none rounded-none">
                  <CardContent className="flex relative overflow-hidden aspect-square items-center justify-center p-6">
                    {colorIndex.label}
                    <Image
                      src={colorIndex.image}
                      alt={`luminaria-${colorIndex.label}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="h-[37rem] w-full col-span-full lg:col-span-1 flex flex-col">
        <ScrollArea className="relative flex-1 overflow-auto text-white">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black pointer-events-none"
          />

          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">
              Luminaria de LED
            </h2>

            <div className=" w-full h-px bg-zinc-200 my-6" />

            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={color}
                  onChange={(value) => {
                    setColor(value);
                  }}
                >
                  <Label>Color: {color.label}</Label>
                  <div className="mt-3 flex items-center space-x-3">
                    {COLORS.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                            {
                              [`border-${color.tw}`]: active || checked,
                            }
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>

                <div className="relative flex flex-col gap-3 w-full">
                  <h2 className="text-lg font-semibold mt-20">Descrição:</h2>
                  <p>
                    Luminaria de LED com design moderno e minimalista, ideal
                    para decorar qualquer ambiente.
                  </p>
                  <p>110v/220v</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full px-8 h-16 bg-black">
          <div className="h-px w-full bg-zinc-200" />
          <div className="w-full h-full flex justify-end items-center">
            <div className="w-full flex gap-6 items-center">
              <p className="font-medium whitespace-nowrap text-white">
                R$ 150,00
              </p>

              <Button className="bg-green-700 text-white hover:bg-green-800 rounded w-full">
                <ShoppingBag /> Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignLuminaria;
