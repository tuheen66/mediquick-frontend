import banner from "@/assets/images/cart-hero/cart-hero1.jpg";
import Image from "next/image";

const CartBanner = () => {
  return (
    <div className="hero lg:mb-12 bg-red-400  ">
      <div className="relative w-full bg-black mb-12">
        <Image src={banner} alt="Contact Us" width={1400} height={400} />
        <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-30 w-full h-full "></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white sm:text-4xl mb-3">
              Your Cart
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBanner;
