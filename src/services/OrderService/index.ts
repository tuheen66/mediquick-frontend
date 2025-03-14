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

export const makePaymentIntent = async (data: any) => {
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

export const getAllOrders = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value || "",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();

    return data;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const getSingleOrder = async (orderId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/${orderId}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/${orderId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
        credentials: "include",
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

//* customer own orders
export const getCustomerOrders = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/user/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    return data;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const getSingleCustomerOrders = async (user: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/admin/${user}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    return data;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const getRevenue = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/revenue/total-revenue`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
