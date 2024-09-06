import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  rating: string;
};

const RatingComponent = ({ rating }: Props) => {
  const numRating = Number(rating);
  const percentage = numRating * 10;

  const getColor = (rating: number) => {
    if (rating < 5) return "#d62828";
    if (rating >= 5 && rating < 7) return "#ffd60a";
    return "#52b788";
  };
  return (
    <div className="h-9 w-9">
      <CircularProgressbar
        className="bg-black rounded-full"
        backgroundPadding={2}
        strokeWidth={10}
        value={percentage}
        text={`${numRating.toFixed(1)}`}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: getColor(numRating),
          trailColor: "#ad9c9c",
          textColor: getColor(numRating),
          textSize: "28px",
        })}
      />
    </div>
  );
};

export default RatingComponent;
