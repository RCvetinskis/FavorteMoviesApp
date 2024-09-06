"use client";
import React from "react";
import Sort from "./sort";
import { usePathname } from "next/navigation";
import Filters from "./filter/filters";
import { Button } from "../ui/button";

const SideBar = () => {
  const pathname = usePathname();
  const type = pathname.replace(/\//g, "");

  return (
    <div className=" space-y-4">
      <Filters type={type} />
      <Sort type={type} />

      <Button size={"lg"} variant={"shimmer"} className="w-full">
        Search
      </Button>
    </div>
  );
};

export default SideBar;
