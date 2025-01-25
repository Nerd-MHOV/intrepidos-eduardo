"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label, RadioGroup } from "@headlessui/react";
import { CAMISTA_FAN_OBJ } from "./page";

const CamisetaFanSide = () => {
  const [color, setColor] = React.useState<(typeof CAMISTA_FAN_OBJ)[number]>(
    CAMISTA_FAN_OBJ[0]
  );

  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Camiseta FAN</h2>

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
              Tamanho: {color.size}
            </Label>
            <div className="mt-3 flex items-center space-x-3">
              {CAMISTA_FAN_OBJ.map((color) => (
                <RadioGroup.Option
                  key={color.label}
                  value={color}
                  className={({ active, checked }) =>
                    cn(
                      "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                      {
                        [`border-zinc-600`]: active || checked,
                      }
                    )
                  }
                >
                  <span
                    className={cn(
                      `bg-${color.tw}`,
                      "h-10 w-10 rounded-full border border-black border-opacity-10",
                      "text-center font-bold pt-2"
                    )}
                  >
                    {color.size}
                  </span>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <h2 className="text-center font-semibold">{color.label}</h2>

          <div className="relative flex flex-col gap-3 w-full">
            <h2 className="text-lg font-semibold mt-20">Descrição:</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamisetaFanSide;
