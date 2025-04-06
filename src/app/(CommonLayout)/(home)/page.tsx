import Categories from "@/components/modules/home/categories/Categories";
import Banner from "@/components/modules/home/Banner";
import Brands from "@/components/modules/home/Brands";
import FeaturedMedicine from "@/components/modules/home/FeaturedMedicine/FeaturedMedicine";
import Overview from "@/components/modules/home/Overview/Overview";
import Reviews from "@/components/modules/home/Reviews/Reviews";
import Newsletter from "@/components/modules/home/Newsletter/Newsletter";
import BMICalculator from "@/components/BMICalculator/BMICalculator";
import TrustBadges from "@/components/TrustBadge/TrustBadges";


const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <Banner />
      </div>
      <div>
        <Overview />
        <FeaturedMedicine />
        <Categories />
        <BMICalculator/>
        <Reviews />
        <TrustBadges />
      </div>
      <div className="lg:h-48">
        <Brands />
      </div>
      <Newsletter />
    </div>
  );
};

export default HomePage;
