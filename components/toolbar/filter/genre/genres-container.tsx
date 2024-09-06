import { getGenres } from "@/actions/tmdb api/getRequests";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import GenreItem from "./genre-item";
import { Genre } from "@/types";

type Props = {
  type: string;
};

const GenresContainer = ({ type }: Props) => {
  const [genres, setGenres] = useState<Genre[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type !== "tv" && type !== "movie") return;

    setLoading(true);
    getGenres(type)
      .then((res) => {
        setGenres(res.genres);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="my-2 font-semibold">Genres</h2>
          {genres.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <GenreItem key={genre.id} genre={genre} />
              ))}
            </div>
          ) : (
            <p>Genres not found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GenresContainer;
