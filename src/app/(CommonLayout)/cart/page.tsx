import CartBanner from "@/components/cartBanner/CartBanner";
import Address from "@/components/modules/cart/Address";
import CartProduct from "@/components/modules/cart/CartProduct";
import Payments from "@/components/modules/cart/Payments";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="">
      <CartBanner />
      <div className="  text-neutral-content lg:mt-20 mb-12">
        <div className="flex flex-col justify-center items-center gap-8 my-4 mx-auto">
          <h1 className=" text-3xl text-gray-800 font-bold">Your cart</h1>

          <Link href={"/shop"}>
            <Button className="bg-orange-500 rounded-none hover:bg-orange-800 text-white cursor-pointer">
              Buy more
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around min-h-40">
        <CartProduct />
        <Payments />
      </div>
    </div>
  );
};

export default CartPage;
