import SideBar from "@/components/toolbar/sidebar";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const MoviesAndTvLayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <aside className="hidden md:block w-[300px]">
        <SideBar />
      </aside>

      <main className="flex-1  p-4">{children}</main>
    </div>
  );
};

export default MoviesAndTvLayout;
