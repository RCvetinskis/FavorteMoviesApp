import React from "react";
import { CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SortOptions } from "@/types";
import OpenDrawer from "./open-drawer";
import { sortMovieOptions, sortTvOptions } from "@/lib/constants";

type Props = {
  type: string;
};

const Sort = ({ type }: Props) => {
  let sortOptions: SortOptions[] = [];
  if (type.includes("movie")) {
    sortOptions = sortMovieOptions;
  } else if (type.includes("tv")) {
    sortOptions = sortTvOptions;
  } else {
    sortOptions = [];
  }
  return (
    <OpenDrawer title="Sort">
      <CardContent className="p-2 pb-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort Results By" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </OpenDrawer>
  );
};

export default Sort;
