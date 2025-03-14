"use client";
import { Button } from "@/components/ui/button";

import { subTotalSelector } from "@/redux/features/cartSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Link from "next/link";

export type IOrder = {
  products: {
    product: string;
    name: string;
    image: string;
    quantity: number;
  }[];
  shippingAddress: string;
  paymentMethod: string;
};

const Payments = () => {
  const subTotal = useAppSelector(subTotalSelector).toFixed(2);

  const dispatch = useAppDispatch();


  return (
    <div className=" rounded-md h-fit p-5 w-80">
      <h1 className="text-2xl font-bold">Cost of Medicine</h1>
      <div className="space-y-2 my-4">
        <div className="flex justify-between">
          <p className="text-gray-800 ">Total</p>
          <p className="font-semibold">BDT {subTotal}</p>
        </div>

        
      </div>
      
      <Link href={"/checkout"}>
        <Button className="w-full text-xl  py-5 bg-orange-500 cursor-pointer hover:bg-orange-800 text-white">
          Proceed to checkout
        </Button>
      </Link>
    </div>
  );
};

export default Payments;
