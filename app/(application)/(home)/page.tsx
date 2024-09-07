import { getMovieLists, getTrending } from "@/actions/tmdb api/getRequests";
import CarouselContainer, {
  CarouselContainerSkeleton,
} from "@/components/carousel-container";
import { MovieApiResponse } from "@/types";
import TrendingContainer, {
  TrendingContainerSkeleton,
} from "./_components/trending-container";
import { Suspense } from "react";

const HomePage = async () => {
  const popularMovies: MovieApiResponse = await getMovieLists("popular");
  const topRatedMovies: MovieApiResponse = await getMovieLists("top_rated");

  const trending: MovieApiResponse = await getTrending("day");

  return (
    <div>
      <main className="space-y-4">
        {/* trending this week */}
        {trending && (
          <Suspense fallback={<TrendingContainerSkeleton />}>
            <TrendingContainer initialResults={trending.results} />
          </Suspense>
        )}
        {/* popoular movies */}
        <section>
          <h2 className="text-lg md:text-2xl font-semibold my-4">
            Popular movies
          </h2>
          <Suspense fallback={<CarouselContainerSkeleton />}>
            <CarouselContainer results={popularMovies.results} />
          </Suspense>
        </section>
        {/* topRated movies */}
        <section>
          <h2 className="text-lg md:text-2xl font-semibold my-4">
            Top rated movies
          </h2>
          <Suspense fallback={<CarouselContainerSkeleton />}>
            {" "}
            <CarouselContainer results={topRatedMovies.results} />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
