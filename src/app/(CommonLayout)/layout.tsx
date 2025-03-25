
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className=" mx-auto">{children}</main>
    <Footer/>
    </>
  );
};

export default CommonLayout;
