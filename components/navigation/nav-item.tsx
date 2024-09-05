import { Route } from "@/types";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

type Props = {
  route: Route;
};

const NavItem = ({ route }: Props) => {
  const Component = route.Component;

  return (
    <div>
      {route.href ? (
        <Link href={route.href}>
          <Component />
        </Link>
      ) : (
        <>
          <Component className="w-6 h-6" />
        </>
      )}
    </div>
  );
};

export default NavItem;

export const NavItemSkeleton = () => {
  return <Skeleton className="h-6 w-6  bg-gray-400 rounded-full" />;
};
