"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { tmdbImageUrl } from "@/lib/constants";
import Image from "next/image";
type Props = {
  item: any;
};

const MainCard = ({ item }: Props) => {
  const image = item.backdrop_path
    ? `${tmdbImageUrl}${item.backdrop_path}`
    : "/assets/no_image.jpg";
  const title = item.media_type === "tv" ? item.name : item.title;
  //   TODO: rating component
  return (
    <Card>
      <CardContent className="px-0">
        <Image
          src={image}
          alt="TMDB poster"
          width={400}
          height={400}
          className="rounded-lg aspect-auto object-contain "
          loading="lazy"
        />
      </CardContent>

      <CardFooter className="h-10 w-full">
        <CardTitle className="line-cramp-2">{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default MainCard;
