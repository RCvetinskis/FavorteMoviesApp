import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
type SliderProps = React.ComponentProps<typeof Slider>;

const SlideScore = ({ className, ...props }: SliderProps) => {
  const [value, setValue] = useState([0, 10]);
  return (
    <div>
      <h2 className="my-2 font-semibold">User Score</h2>
      <p className="text-sm mb-2 text-center">
        Selected Score: {value[0]} - {value[1]}
      </p>

      <Slider
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        max={10}
        min={0}
        step={1}
        className={cn("w-full", className)}
        {...props}
      />
    </div>
  );
};

export default SlideScore;
