import React from "react";
import MoviePageContent from "../../_components/movie-page-content";

type Props = {
  searchParams: {
    page: string;
    with_original_language: string;
    vote_average_gte: string;
    vote_average_lte: string;
    with_genres: string;
    with_keywords?: string;
    release_date_gte?: string;
    release_date_lte?: string;
    sort_by: string;
  };
  params: { category: string };
};

const Page = ({ searchParams, params }: Props) => {
  return (
    <div>
      <MoviePageContent
        searchParams={searchParams}
        category={params.category}
      />
    </div>
  );
};

export default Page;
