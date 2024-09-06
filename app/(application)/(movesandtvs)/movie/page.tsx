import { getPopularMovies } from "@/actions/tmdb api/getRequests";
import CardsContainer from "../_components/cards-container";
import PaginationContainer from "@/components/pagination/pagination-container";

type Props = {
  searchParams: { page: string };
};
const MoviesPage = async ({ searchParams }: Props) => {
  const page = searchParams.page || "1";
  const popularMovies = await getPopularMovies(page);

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold my-4">Popular Movies</h1>

      <main>
        <CardsContainer results={popularMovies.results} />
      </main>

      <footer className="py-6">
        <PaginationContainer totalPages={popularMovies.total_pages} />
      </footer>
    </div>
  );
};

export default MoviesPage;
