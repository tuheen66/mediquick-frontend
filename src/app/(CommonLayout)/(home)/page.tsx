import Banner from "@/components/modules/home/Banner";
import Brands from "@/components/modules/home/Brands";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="h-48">
        <h2 className="text-center text-3xl text-gray-800 pt-4 font-bold">
          Top Brands
        </h2>
        <Brands />
      </div>
    </div>
  );
};

export default HomePage;
