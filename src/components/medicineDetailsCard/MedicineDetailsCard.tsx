"use client";
import { Button } from "@/components/ui/button";
import { addMedicine } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getAllMedicines } from "@/services/MedicineService";
import { IMedicine } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MedicineCard from "../medicineCard/MedicineCard";

const MedicineDetailsCard = ({ medicine }: { medicine: IMedicine }) => {
  const dispatch = useAppDispatch();
  const [similarMedicines, setSimilarMedicines] = useState<IMedicine[]>([]);
  const [loading, setLoading] = useState(true);

  const handleAddMedicine = (medicine: IMedicine) => {
    dispatch(addMedicine(medicine));
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const fetchSimilarMedicines = async () => {
      const allMedicines = await getAllMedicines();
      const filtered = allMedicines.filter(
        (med: IMedicine) =>
          med.category === medicine.category && med._id !== medicine._id
      );
      setSimilarMedicines(filtered);
      
      // Ensure loader shows for at least 500ms
      timer = setTimeout(() => setLoading(false), 500);
    };

    fetchSimilarMedicines();

    return () => clearTimeout(timer);
  }, [medicine]);

  if (loading) {
    return (
      <div className="my-12 animate-pulse">
        {/* Skeleton for Medicine Title */}
        <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>

        {/* Skeleton for Medicine Details Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:w-[70%] mx-auto p-6 mb-12 bg-white shadow-lg">
          {/* Skeleton for Medicine Image */}
          <div className="w-[400px] h-[400px] bg-gray-200"></div>

          {/* Skeleton for Medicine Information */}
          <div className="space-y-4 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 rounded"></div>
            ))}
            {/* Skeleton for Add to Cart Button */}
            <div className="h-10 bg-gray-200 rounded mt-4"></div>
          </div>
        </div>

        {/* Skeleton for Description Section */}
        <div className="w-[80%] mx-auto space-y-4 bg-gray-50 p-6 shadow-md">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>

        {/* Skeleton for Suggested Products Section */}
        <div className="w-[80%] mx-auto mt-12">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      {/* Rest of your existing component code remains exactly the same */}
      {/* Medicine Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        {medicine.name}
      </h1>

      {/* Medicine Details Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:w-[70%] mx-auto p-6 mb-12 bg-white shadow-lg ">
        {/* Medicine Image */}
        <div className="shadow-md  overflow-hidden">
          <Image
            src={medicine.image}
            width={400}
            height={400}
            alt="Medicine Image"
            className="object-cover"
          />
        </div>

        {/* Medicine Information */}
        <div className="text-gray-800 space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Price:</span>{" "}
            <span className="font-bold text-orange-500">
              BDT {medicine.price}
            </span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Category:</span>{" "}
            <span>{medicine.category}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Manufacturer:</span>{" "}
            <span>{medicine.manufacturerName}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Prescription Required:</span>{" "}
            <span className="uppercase">{medicine.prescriptionRequired}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Stock:</span>{" "}
            <span>{medicine.quantity} units</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Expiry Date:</span>{" "}
            <span>{medicine.expiryDate}</span>
          </p>

          {/* Add to Cart Button */}
          <div>
            <Link href="/cart">
              <Button
                onClick={() => handleAddMedicine(medicine)}
                className="bg-orange-500 hover:bg-orange-700 rounded-none  text-white px-6 py-2 w-full"
              >
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-[80%] mx-auto space-y-4 bg-gray-50 p-6  shadow-md">
        <p className="text-lg">
          <span className="font-semibold">Description:</span>{" "}
          {medicine.description}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Manufacturer Details:</span>{" "}
          {medicine.manufacturerDetails}
        </p>
      </div>

      {/* Suggested Products Section */}
      <div className="w-[80%] mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Suggested Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarMedicines.length > 0 ? (
            similarMedicines.map((similarMedicine) => (
              <MedicineCard
                key={similarMedicine._id}
                medicine={similarMedicine}
              />
            ))
          ) : (
            <p className="text-gray-500">No similar products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsCard;