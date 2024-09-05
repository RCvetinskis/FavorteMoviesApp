"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Route } from "@/types";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();
  const routes: Route[] = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      Component: Home,
    },
    {
      href: undefined,
      label: "Theme",
      active: undefined,
      Component: ThemeToggle,
    },
  ];
  return routes;
};

export default useRoutes;
