"use client";
import Checkout from "@/components/checkout/Checkout";
import OrderConfirm from "@/components/checkout/OrderConfirm";
import Address from "@/components/modules/cart/Address";
const CheckoutPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-bold text-center my-8">
        Checkout Page
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 mb-12">
        <div className=" lg:w-80 ">
          <Address />

          <OrderConfirm />
          <div></div>
        </div>
        <div className="w-full lg:w-[50%]">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
