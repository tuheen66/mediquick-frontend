"use client";

import { getAllCategories } from "@/services/CategoriesService";
import { TCategories } from "@/types";

import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState<TCategories[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl text-gray-800 my-8 font-bold">
        Find your Categories
      </h2>

      <div className="grid grid-cols-4 gap-8 w-[90%] mx-auto">
        {categories?.map((category) => (
          <CategoriesCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
