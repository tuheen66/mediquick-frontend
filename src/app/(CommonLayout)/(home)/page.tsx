import Banner from "@/components/modules/home/Banner";
import Brands from "@/components/modules/home/Brands";
import FeaturedMedicine from "@/components/modules/home/FeaturedMedicine/FeaturedMedicine";
import Overview from "@/components/modules/home/Overview/Overview";
import Reviews from "@/components/modules/home/Reviews/Reviews";


const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <Overview />
        <FeaturedMedicine />
        <Reviews />
      </div>
      <div className="h-48">
        <h2 className="text-center text-3xl text-gray-800 mt-8 font-bold">
          Top Brands
        </h2>
        <Brands />
      </div>
    </div>
  );
};

export default HomePage;
