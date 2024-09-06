import MainCard from "@/components/cards/main-card";
import React from "react";

type Props = {
  results: any[];
};

const CardsContainer = ({ results }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {results.map((item) => (
        <MainCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
