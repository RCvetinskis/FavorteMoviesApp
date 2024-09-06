import { DatePickerWithRange } from "@/components/date-picker-with-range";
import React from "react";

type Props = {};

const SelectDate = (props: Props) => {
  return (
    <div>
      <h2 className="my-2 font-semibold">Release Dates</h2>
      <DatePickerWithRange />
    </div>
  );
};

export default SelectDate;
