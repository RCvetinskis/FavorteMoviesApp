"use client";

import CarouselContainer from "@/components/carousel-container";
import ToggleDate from "./toggle-date";
import { useSetDate } from "@/store/store";
import { useEffect, useState } from "react";
import { getTrending } from "@/actions/tmdb api/getRequests";
import { toast } from "sonner";

type Props = {
  initialResults: any[];
};

const TrendingContainer = ({ initialResults }: Props) => {
  const { date } = useSetDate();
  const [results, setResults] = useState(initialResults || []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrending(date)
      .then((res) => {
        setResults(res.results);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [date]);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 ">
        <h2 className="text-lg md:text-2xl font-semibold">Trending</h2>

        <ToggleDate />
      </div>

      {loading ? <p>Loading...</p> : <CarouselContainer results={results} />}
    </section>
  );
};

export default TrendingContainer;
