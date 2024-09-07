import React from "react";
import { Badge } from "@/components/ui/badge";
import { Genre } from "@/types";
import { Button } from "@/components/ui/button";
import { useSearchFilterStore } from "@/store/store-filter-search";
import { X } from "lucide-react";

type Props = {
  genre: Genre;
};

const GenreItem = ({ genre }: Props) => {
  const { genres, setGenre } = useSearchFilterStore();
  const handleClick = () => {
    setGenre(genre);
  };

  const isSelected = genres.some((item) => item.id === genre.id);

  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        variant={isSelected ? "shimmer" : "secondary"}
        size={"sm"}
      >
        {genre.name}
      </Button>
    </div>
  );
};

export default GenreItem;
