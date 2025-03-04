import banner from "@/assets/images/cart-hero/cart-hero1.jpg";
import Image from "next/image";

const CartBanner = () => {
  return (
    <div className="hero  rounded-xl ">
      <div className="h-[600px] mx-auto">
        <Image src={banner} alt="image" width={1250} height={400} className="mx-auto" />
      </div>
      <div className="hero-overlay  rounded-xl "></div>
      <div className=" text-center text-neutral-content">
        <div className="max-w-md my-4">
          <h1 className=" text-3xl text-gray-800 font-bold">Your cart</h1>
        </div>
      </div>
    </div>
  );
};

export default CartBanner;
