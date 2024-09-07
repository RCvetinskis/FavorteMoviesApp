import { getGenres } from "@/actions/tmdb api/getRequests";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import GenreItem from "./genre-item";
import { Genre } from "@/types";

type Props = {
  type: string;
};

const GenresContainer = ({ type }: Props) => {
  const [data, setData] = useState<Genre[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type !== "tv" && type !== "movie") return;

    setLoading(true);
    getGenres(type)
      .then((res) => {
        setData(res.genres);
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
          {data.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.map((item) => (
                <GenreItem key={item.id} genre={item} />
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
