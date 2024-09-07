import { getSearchResults } from "@/actions/tmdb api/getRequests";
import { MovieApiResponse } from "@/types";
import CardsContainer from "./_components/cards-container";
import SwtichCategory from "./_components/switch-category";
import PaginationContainer from "@/components/pagination/pagination-container";

type Props = {
  searchParams: {
    q: string;
    category: string;
    page?: string;
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { q, category = "multi", page = "1" } = searchParams;

  const data: MovieApiResponse = await getSearchResults(q, category, page);
  const totalPages = Math.min(data.total_pages, 500);

  return (
    <div className="w-full space-y-6">
      <h1 className="text-xl md:text-3xl text-semibold">Search "{q}" </h1>
      <header>
        <SwtichCategory />
      </header>
      <main>
        {data?.results?.length > 0 ? (
          <CardsContainer results={data.results} category={category} />
        ) : (
          <p>No results found.</p>
        )}
      </main>

      <footer className="py-6">
        <PaginationContainer totalPages={totalPages} />
      </footer>
    </div>
  );
};

export default SearchPage;
