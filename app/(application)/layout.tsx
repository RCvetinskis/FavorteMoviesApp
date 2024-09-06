import NavBar from "@/components/navigation/nav-bar";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // TODO: finishing toolbar and search functionality for it
  // TODO: setup navigation links for movies
  return (
    <div>
      <NavBar />
      <div className="md:container mx-auto pt-20">{children}</div>
      <Toaster />
    </div>
  );
};

export default Layout;
