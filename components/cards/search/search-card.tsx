import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { tmdbImageUrl } from "@/lib/constants";
import Image from "next/image";

type Props = {
  title: string;
  releaseDate?: string;
  overview?: string;
  posterPath: string;
};

const SearchCard = ({ title, releaseDate, overview, posterPath }: Props) => {
  const image = posterPath
    ? `${tmdbImageUrl}${posterPath}`
    : "/assets/no_image.jpg";
  return (
    <Card className="hover:bg-primary-foreground/50 cursor-pointer">
      <div className="flex items-center  gap-2">
        <Image
          src={image}
          alt={"TMDB_IMAGE"}
          width={140}
          height={140}
          loading="lazy"
          className="aspect-square object-contain rounded-lg"
        />

        <CardContent className="p-2">
          <CardTitle>{title}</CardTitle>

          <CardDescription className="line-clamp-5">{overview}</CardDescription>
        </CardContent>
      </div>
      {releaseDate && (
        <CardFooter className="text-card-foreground text-sm p-0 px-8">
          {releaseDate}
        </CardFooter>
      )}
    </Card>
  );
};

export default SearchCard;
