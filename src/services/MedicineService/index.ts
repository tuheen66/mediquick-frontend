"use server";
import { IMedicine } from "@/types";
import { revalidateTag } from "next/cache";

export const addMedicine = async (medicineData: IMedicine) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/add-medicine`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(medicineData),
      }
    );
    revalidateTag("MEDICINE");

    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getAllMedicine = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/all-medicines`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getSingleMedicine = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${productId}`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateMedicine = async (medicineData: IMedicine, _id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(medicineData),
      }
    );
    revalidateTag("MEDICINE");
    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const deleteMedicine = async (_id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${_id}`,
      {
        method: "DELETE",
        headers: {
          //   Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("MEDICINE");

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
