"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label, RadioGroup } from "@headlessui/react";
import { POSTER_OBJ } from "./object";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const PosterSide = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [color, setColor] = React.useState<(typeof POSTER_OBJ)[number]>(
    POSTER_OBJ[0]
  );

  React.useEffect(() => {
    const colorParams = params.get("color");
    if (!colorParams) return;
    const selectedColor = POSTER_OBJ.find((c) => c.value === colorParams);
    if (selectedColor) setColor(selectedColor);
  }, [params]);

  return (
    <div className="px-8 pb-12 pt-8">
      <h2 className="tracking-tight font-bold text-3xl">Poster</h2>

      <div className=" w-full h-px bg-zinc-200 my-6" />

      <div className="relative mt-4 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <RadioGroup>
            <Label className="text-lg font-semibold">Selecione o poster</Label>
            <div className="mt-3 flex items-center">
              <Select
                value={color.label}
                onValueChange={(value) => {
                  const selectedColor = POSTER_OBJ.find(
                    (c) => c.label === value
                  );
                  if (selectedColor) {
                    setColor(selectedColor);
                    router.push(
                      `?color=${selectedColor.value}&image=${POSTER_OBJ.indexOf(
                        selectedColor
                      )}`
                    );
                  }
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o poster" />
                </SelectTrigger>
                <SelectContent>
                  {POSTER_OBJ.map((color) => (
                    <SelectItem
                      key={color.label}
                      value={color.label}
                      className="flex items-center"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            `bg-${color.tw}`,
                            "h-3 w-3 rounded-full border border-black border-opacity-10"
                          )}
                        />{" "}
                        {color.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </RadioGroup>

          <div className="relative flex flex-col gap-3 w-full">
            <h2 className="text-lg font-semibold mt-20">Descrição:</h2>
            <p>
              Tamanho: <b>100cm x 50cm</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterSide;
