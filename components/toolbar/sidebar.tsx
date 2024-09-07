"use client";
import Sort from "./sort";
import { usePathname } from "next/navigation";
import Filters from "./filter/filters";
import ActionFilterSearch from "../clientActions/action-filter-search";

const SideBar = () => {
  const pathname = usePathname();
  const type = pathname.split("/")[1] || "";

  return (
    <div className=" space-y-4">
      <Filters type={type} />
      <Sort type={type} />
      <ActionFilterSearch type={type} />
    </div>
  );
};

export default SideBar;
