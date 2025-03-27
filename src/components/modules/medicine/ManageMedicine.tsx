"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteMedicine, featuredMedicine} from "@/services/MedicineService";
import { IMedicine } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageMedicine = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        const medicineData = await featuredMedicine();
        setMedicines(medicineData?.data || []);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 

  const handleDeleteMedicine = async (_id: string) => {
    try {
      await deleteMedicine(_id);
      setMedicines((prev) => prev.filter((medicine) => medicine._id !== _id));
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-end mb-2">
        <Link href="/admin/addMedicine">
          <Button className="bg-orange-500 text-white hover:bg-orange-800">
            Add Medicine
          </Button>
        </Link>
      </div>
      <Table className="w-full">
        <TableHeader className="font-bold">
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Manufacturer</TableHead>
            <TableHead>Expiry</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines?.map((medicine: IMedicine) => (
            <TableRow key={medicine._id}>
              <TableCell className="font-medium">
                <Image
                  src={medicine.image}
                  width={50}
                  height={50}
                  alt="image"
                />
              </TableCell>
              <TableCell>{medicine.name}</TableCell>
              <TableCell>{medicine.category}</TableCell>
              <TableCell>{medicine.manufacturerName}</TableCell>
              <TableCell>{medicine.expiryDate}</TableCell>
              <TableCell>{medicine.quantity}</TableCell>
              <TableCell>{medicine.price}</TableCell>
              <TableCell className="text-right">
                <Link href={`/admin/medicines/${medicine._id}`}>
                  <Button>
                    <FaRegEdit />
                  </Button>
                </Link>
                <Button
                  className="cursor-pointer"
                  onClick={() => handleDeleteMedicine(medicine._id)}
                >
                  <FaRegTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageMedicine;
