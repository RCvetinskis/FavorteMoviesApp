"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainCard from "./cards/main-card";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  results: any[];
};

const CarouselContainer = ({ results }: Props) => {
  const isMdSize = useMediaQuery("(max-width: 1054px)");
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {results.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <MainCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {!isMdSize && (
        <>
          <CarouselPrevious className="-left-9" />
          <CarouselNext className="-right-9" />
        </>
      )}
    </Carousel>
  );
};

export default CarouselContainer;
