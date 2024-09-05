"use client";

import { getAuthorization } from "@/actions/tmdb api/getRequests";
import { useTransition } from "react";

export default function Home() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      getAuthorization()
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    });
  };

  return <div className=""></div>;
}
