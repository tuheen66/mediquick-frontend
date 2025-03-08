"use client";

import { IMedicine } from "@/types";
import CartProductCard from "./CartProductCard";
import { useAppSelector } from "@/redux/hooks";
import { orderedMedicinesSelector } from "@/redux/features/cartSlice";

const CartProduct = () => {
  const medicines = useAppSelector(orderedMedicinesSelector);
  return (
    <div className="  rounded-md h-full  p-10 space-y-5 ">
      {medicines.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">No product in cart</p>
        </div>
      )}
      {medicines?.map((medicine: IMedicine & { orderQuantity: number }) => (
        <CartProductCard key={medicine._id} medicine={medicine} />
      ))}
    </div>
  );
};

export default CartProduct;
