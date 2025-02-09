"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label, RadioGroup } from "@headlessui/react";
import { CANECA_OBJ } from "./object";

const CanecaSide = () => {
  const [color, setColor] = React.useState<(typeof CANECA_OBJ)[number]>(
    CANECA_OBJ[0]
  );

  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Caneca</h2>

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
              Color: {color.label}
            </Label>
            <div className="mt-3 flex items-center space-x-3">
              {CANECA_OBJ.map((color) => (
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
            <p>Caneca de porcelanato de 300ml.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanecaSide;
