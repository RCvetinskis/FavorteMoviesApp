import React from "react";
import { Badge } from "@/components/ui/badge";
import { Genre } from "@/types";
import { Button } from "@/components/ui/button";

type Props = {
  genre: Genre;
};

const GenreItem = ({ genre }: Props) => {
  return (
    <Button className="px-1" size={"sm"} variant={"ghost"}>
      <Badge variant="secondary">{genre.name}</Badge>
    </Button>
  );
};

export default GenreItem;
