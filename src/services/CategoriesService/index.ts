export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`, {
      next: {
        tags: ["CATEGORIES"],
      },
    });
    const response = await res.json();
    if (!response.success) {
      throw new Error(response.message || "Failed to fetch categories");
    }
    return response; // Ensure this is an array
  } catch (error: any) {
    throw new Error(error.message);
  }
};
