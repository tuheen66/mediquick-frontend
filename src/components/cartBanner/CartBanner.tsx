import banner from "@/assets/images/cart-hero/cart-hero1.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CartBanner = () => {
  return (
    <div className="hero  rounded-xl ">
      <div className="h-[600px] mx-auto">
        <Image
          src={banner}
          alt="image"
          width={1250}
          height={400}
          className="mx-auto"
        />
      </div>
      <div className="hero-overlay  rounded-xl "></div>
      <div className="  text-neutral-content">
        <div className=" my-4 flex justify-between items-center w-1/2 ">
          <h1 className=" text-3xl text-gray-800 font-bold">Your cart</h1>

          <Link href={"/shop"}>
            <Button className="bg-orange-500 hover:bg-orange-800 text-white cursor-pointer">
              Buy more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartBanner;
