import TvPageContent from "../_components/tv-page-content";

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
    sort_by?: string;
  };
};
const TvPage = async ({ searchParams }: Props) => {
  return <TvPageContent searchParams={searchParams} category="popular" />;
};

export default TvPage;
