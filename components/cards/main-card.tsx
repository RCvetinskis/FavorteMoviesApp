"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { tmdbImageUrl } from "@/lib/constants";
import Image from "next/image";
import RatingComponent from "../rating-component";
import { Skeleton } from "../ui/skeleton";
type Props = {
  item: any;
};

const MainCard = ({ item }: Props) => {
  const image = item.backdrop_path
    ? `${tmdbImageUrl}${item.backdrop_path}`
    : "/assets/no_image.jpg";
  const title = item.name ? item.name : item.title;

  return (
    <Card>
      <CardContent className="px-0 relative">
        <Image
          src={image}
          alt="TMDB poster"
          width={500}
          height={500}
          className="rounded-lg aspect-auto w-full object-contain "
          loading="lazy"
        />
        <div className="absolute right-0 bottom-0">
          <RatingComponent rating={item.vote_average} />
        </div>
      </CardContent>

      <CardFooter className="h-10 w-full">
        <CardTitle className="line-cramp-2">{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default MainCard;

export const MainCardSkeleton = () => {
  return (
    <Skeleton className="rounded-xl w-[200px] md:w-[240px] h-[180px] bg-gray-500" />
  );
};
