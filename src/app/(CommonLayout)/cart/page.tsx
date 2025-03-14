import CartBanner from "@/components/cartBanner/CartBanner";
import Address from "@/components/modules/cart/Address";
import CartProduct from "@/components/modules/cart/CartProduct";
import Payments from "@/components/modules/cart/Payments";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="">
        <CartBanner/>
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
      <div className="flex flex-col md:flex-row justify-around min-h-screen">
        <CartProduct />
        <Payments/>
       
      </div>
    </div>
  );
};

export default CartPage;
