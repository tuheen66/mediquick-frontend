import { Button } from "@/components/ui/button";
import Link from "next/link";

const Overview = () => {
  return (
  
      <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6 mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome to Our Online Medicine Store
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Your trusted destination for high-quality medicines, delivered right
            to your doorstep. We offer a wide range of prescription and
            non-prescription drugs with an easy ordering process and secure
            checkout.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/shop">
              <Button className=" bg-orange-600 text-white hover:bg-orange-800 ">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    
  );
};

export default Overview;
