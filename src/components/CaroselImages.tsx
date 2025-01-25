import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const CaroselImages = ({
  images,
}: {
  images: { label: string; image: string }[];
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="relative h-[30rem] sm:h-[37rem]  overflow-hidden col-span-2 w-full max-w-4xl items-center justify-center ">
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
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-none rounded-none bg-transparent">
                <CardContent className="flex  relative overflow-hidden aspect-square items-center justify-center p-6">
                  {image.label}
                  <Image
                    src={image.image}
                    alt={`luminaria-${image.label}`}
                    layout="fill"
                    className={cn(
                      "object-center",
                      image.image.includes("poster")
                        ? "object-contain"
                        : "object-cover"
                    )}
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
  );
};

export default CaroselImages;
