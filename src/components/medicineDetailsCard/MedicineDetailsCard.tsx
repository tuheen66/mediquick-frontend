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

  const handleAddMedicine = (medicine: IMedicine) => {
    dispatch(addMedicine(medicine));
  };

  useEffect(() => {
    const fetchSimilarMedicines = async () => {
      const allMedicines = await getAllMedicines();
      const filtered = allMedicines.filter(
        (med: IMedicine) =>
          med.category === medicine.category && med._id !== medicine._id
      );
      setSimilarMedicines(filtered);
    };

    fetchSimilarMedicines();
  }, [medicine]);

  

  return (
    <div className="my-12">
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