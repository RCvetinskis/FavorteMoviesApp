import NavBar from "@/components/navigation/nav-bar";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // TODO: on filter functionality add multiple keyword choices , up to 5
  // TODO:Skeleton, work around suspene why its not working, look previous code example from github

  return (
    <div>
      <NavBar />
      <div className="md:container mx-auto pt-20">{children}</div>
      <Toaster />
    </div>
  );
};

export default Layout;
