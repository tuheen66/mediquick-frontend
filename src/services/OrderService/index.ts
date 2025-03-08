"use server";

import { IOrder } from "@/components/modules/cart/Payments";

import { cookies } from "next/headers";

export const createOrder = async (order: IOrder) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/create-order`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const makePaymentIntent = async (data:any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/payment/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
