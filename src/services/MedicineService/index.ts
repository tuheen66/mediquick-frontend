"use server";
import { IMedicine } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addMedicine = async (medicineData: IMedicine) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/add-medicine`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
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

export const featuredMedicine = async () => {
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

export const getAllMedicines = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/all-medicines`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );
    const response = await res.json();
    if (!response.success) {
      throw new Error(response.message || "Failed to fetch medicines");
    }
    return response.data; // Ensure this is an array
  } catch (error: any) {
    throw new Error(error.message);
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
          Authorization: (await cookies()).get("accessToken")!.value,
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
          Authorization: (await cookies()).get("accessToken")!.value,
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
