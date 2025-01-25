"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label, RadioGroup } from "@headlessui/react";
import { POSTER_OBJ } from "./page";

const PosterSide = () => {
  const [color, setColor] = React.useState<(typeof POSTER_OBJ)[number]>(
    POSTER_OBJ[0]
  );

  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Poster</h2>

      <div className=" w-full h-px bg-zinc-200 my-6" />

      <div className="relative mt-4 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <RadioGroup
            value={color}
            onChange={(value) => {
              setColor(value);
            }}
          >
            <Label className="text-lg font-semibold">
              Poster: {color.label}
            </Label>
            <div className="mt-3 flex items-center flex-wrap gap-2">
              {POSTER_OBJ.map((color) => (
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
              Aplicação a <b>LASER</b>;
            </p>
            <p>
              Acabamento <b>FOSCO</b>;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterSide;
