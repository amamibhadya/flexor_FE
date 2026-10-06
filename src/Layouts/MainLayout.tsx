import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { LayoutProps } from "../types/MainLayoutTypes";

const MainLayout: React.FC<LayoutProps> = ({ sectionRefs, children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-y-auto overflow-x-hidden scroll-smooth bg-custom-purple3">
      <div className="mx-auto max-w-[1920px] px-2 md:px-4 lg:px-6 xl:px-8">
        <div className="pt-10">
          <Navbar sectionRefs={sectionRefs} />
        </div>

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
