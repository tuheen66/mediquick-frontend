import banner from "@/assets/images/cart-hero/cart-hero1.jpg";
import Image from "next/image";


const CartBanner = () => {
  return (
    <div className="hero lg:mb-12 bg-red-400  ">
      <div className="lg:h-[400px] mx-auto w-full">
        <Image
          src={banner}
          alt="image"
          width={1400}
          height={400}
          className="mx-auto"
        />
      </div>
      <div className="hero-overlay  "></div>
      
    </div>
  );
};

export default CartBanner;
