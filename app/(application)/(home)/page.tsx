import {
  getPopularMovies,
  getTopRatedMovies,
  getTrending,
} from "@/actions/tmdb api/getRequests";
import CarouselContainer from "@/components/carousel-container";
import { MovieApiResponse } from "@/types";
import TrendingContainer from "./_components/trending-container";

const HomePage = async () => {
  const popularMovies: MovieApiResponse = await getPopularMovies("1");
  const topRatedMovies: MovieApiResponse = await getTopRatedMovies();

  const trending: MovieApiResponse = await getTrending("day");

  return (
    <div>
      <main className="space-y-4">
        {/* trending this week */}
        {trending && <TrendingContainer initialResults={trending.results} />}
        {/* popoular movies */}
        <section>
          <h2 className="text-lg md:text-2xl font-semibold my-4">
            Popular movies
          </h2>
          <CarouselContainer results={popularMovies.results} />
        </section>
        {/* topRated movies */}
        <section>
          <h2 className="text-lg md:text-2xl font-semibold my-4">
            Top rated movies
          </h2>
          <CarouselContainer results={topRatedMovies.results} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
