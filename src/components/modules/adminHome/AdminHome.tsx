"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { featuredMedicine } from "@/services/MedicineService";
import { getAllOrders, getRevenue } from "@/services/OrderService";
import { IMedicine, TOrder } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const AdminHome = () => {
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [revenue, setRevenue] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const ordersResponse = await getAllOrders();
        setOrders(ordersResponse?.data || []);

        const revenueResponse = await getRevenue();
        setRevenue(revenueResponse?.data);

        const medicineData = await featuredMedicine();
        setMedicines(medicineData?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(medicines?.length);

  return (
    <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto">
      <div className="flex flex-col justify-center items-center border-1 border-orange-600 rounded-xl p-4 w-64 h-40 space-y-8">
        <p className="text-5xl font-bold text-orange-500">{orders?.length}</p>
        <h2 className="text-2xl font-semibold text-gray-700">
          Number of Orders{" "}
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center border-1 border-orange-600 rounded-xl p-4 w-64 h-40 space-y-8">
        <div className="flex">
          <p className="text-5xl font-bold text-gray-700 ">
            Tk <span className="text-5xl font-bold text-orange-500">{revenue}</span>
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">Total Revenue</h2>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Stock of Medicines:</h2>
        <Table>
          <TableHeader className="font-bold">
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>

              <TableHead>Quantity</TableHead>
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

                <TableCell>{medicine.quantity} units</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminHome;
