import { IPayment } from "@/types";

export const createOrder = async (order: IPayment) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/create-payment`,
      {
        method: "POST",
        headers: {
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
