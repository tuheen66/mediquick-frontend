"use client";
import { TCategories } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CategoriesCard = ({ category }: { category: TCategories }) => {
  return (
    <>
      <Link href={`/shop?category=${category.name}`}>
        <div
          className="border-1 border-gray-300 p-4 text-center space-y-2"
          key={category._id}
        >
          <div className="flex justify-center items-center">
            <Image src={category.icon} alt="category" width={40} height={40} />
          </div>
          <h3 className="font-semibold text-gray-800">{category.name}</h3>
          <p className="text-gray-700">{category.description}</p>
        </div>
      </Link>
    </>
  );
};

export default CategoriesCard;
