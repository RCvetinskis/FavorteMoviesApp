"use client";
import SearchCard from "@/components/cards/search/search-card";
import React, { useMemo } from "react";

type Props = {
  results: any[];
  category: string;
};

const CardsContainer = ({ results, category }: Props) => {
  let personResults = [];
  let movieResults = [];
  let tvResults = [];
  if (!category || category.toLowerCase() === "multi") {
    personResults = useMemo(
      () => results?.filter((item) => item.media_type === "person") || [],
      [results]
    );

    movieResults = useMemo(
      () => results?.filter((item) => item.media_type === "movie") || [],
      [results]
    );

    tvResults = useMemo(
      () => results?.filter((item) => item.media_type === "tv") || [],
      [results]
    );
  }
  if (category.toLowerCase() === "person") {
    personResults = results;
  }
  if (category.toLowerCase() === "movie") {
    movieResults = results;
  }
  if (category.toLowerCase() === "tv") {
    tvResults = results;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
      {results?.length ? (
        <>
          {movieResults.map((item) => (
            <SearchCard
              key={item.id}
              title={item.title}
              releaseDate={item.release_date}
              overview={item.overview}
              posterPath={item.poster_path}
            />
          ))}

          {tvResults.map((item) => (
            <SearchCard
              key={item.id}
              title={item.title ? item.title : item.name}
              releaseDate={
                item.release_date ? item.release_date : item.first_air_date
              }
              overview={item.overview}
              posterPath={item.poster_path}
            />
          ))}

          {personResults.map((item) => (
            <SearchCard
              key={item.id}
              title={item.name}
              overview={`Known for ${item.known_for_department}`}
              posterPath={item.profile_path}
            />
          ))}
        </>
      ) : (
        <div className="w-full h-40 flex justify-center items-center text-lg font-semibold">
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
