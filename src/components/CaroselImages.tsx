import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const CaroselImages = ({
  images,
}: {
  images: { label: string; image: string }[];
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const params = useSearchParams();

  React.useEffect(() => {
    const imageParams = params.get("image");
    if (!imageParams || !api) return;
    plugin.current.stop();
    api.scrollTo(+imageParams, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

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
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-none rounded-none bg-transparent">
                <CardContent className="flex  relative overflow-hidden aspect-square items-center justify-center p-6">
                  {image.label}
                  <Image
                    src={image.image}
                    alt={`image-${image.label}`}
                    layout="fill"
                    className={cn(
                      "object-center",
                      image.image.includes("card") ||
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
