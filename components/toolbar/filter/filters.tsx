import React from "react";
import { CardContent } from "@/components/ui/card";
import OpenDrawer from "../open-drawer";
import GenresContainer from "./genre/genres-container";
import Languages from "./languages";
import { Separator } from "@/components/ui/separator";
import SelectDate from "./select-date";
import SlideScore from "./slide-score";
import KeyWords from "./keywords";
type Props = {
  type: string;
};

const Filters = ({ type }: Props) => {
  return (
    <OpenDrawer title="Filters">
      <CardContent className="p-2 pb-4 space-y-4">
        <KeyWords />
        <GenresContainer type={type} />
        <Separator />
        <Languages />
        <Separator />
        <SelectDate />
        <Separator />
        <SlideScore />
      </CardContent>
    </OpenDrawer>
  );
};

export default Filters;
