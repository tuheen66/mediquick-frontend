"use server";
import { TReviews } from "@/types/review";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createReview = async (review: TReviews) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(review),
    });
    revalidateTag("REVIEWS");

    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getAllReviews = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/reviews`, {
      next: {
        tags: ["REVIEWS"],
      },
    });
    const response = await res.json();
    if (!response.success) {
      throw new Error(response.message || "Failed to fetch reviews");
    }
    return response; // Ensure this is an array
  } catch (error: any) {
    throw new Error(error.message);
  }
};
