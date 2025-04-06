/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import MedicineStock from "@/components/medicineStock/MedicineStock";
import Revenue from "@/components/revenue/Revenue";
import RevenuePie from "@/components/revenuePie/RevenuePie";
import { featuredMedicine } from "@/services/MedicineService";
import { getAllOrders, getRevenue } from "@/services/OrderService";
import { IMedicine, TOrder } from "@/types";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-8 w-[90%] mx-auto mb-8">
        {/* Medicine Card */}
        <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-4 w-full h-48 space-y-4 mx-auto transition-all hover:shadow-lg border-l-4 border-orange-500">
          <p className="text-4xl font-bold text-orange-500">
            {medicines?.length}
          </p>
          <h2 className="text-xl font-semibold text-gray-600 uppercase tracking-wider">
            Total Medicines
          </h2>
          <p className="text-sm text-gray-400">Currently in inventory</p>
        </div>

        {/* Orders Card */}
        <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-4 w-full h-48 space-y-4 mx-auto transition-all hover:shadow-lg border-l-4 border-blue-500">
          <p className="text-4xl font-bold text-blue-500">{orders?.length}</p>
          <h2 className="text-xl font-semibold text-gray-600 uppercase tracking-wider">
            Total Orders
          </h2>
          <p className="text-sm text-gray-400">Processed this period</p>
        </div>

        {/* Revenue Card */}
        <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-4 w-full h-48 space-y-4 mx-auto transition-all hover:shadow-lg border-l-4 border-green-500">
          <div className="flex items-baseline">
            <span className="text-3xl font-medium text-gray-600 mr-2">Tk</span>
            <p className="text-4xl font-bold text-green-500">{revenue}</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-600 uppercase tracking-wider">
            Total Revenue
          </h2>
          <p className="text-sm text-gray-400">All-time earnings</p>
        </div>
      </div>

      <hr className="my-12 border-1 border-b border-gray-300" />
      <div>
        <h2 className=" text-2xl text-gray-800">
          Revenue per order as percentage of total revenue
        </h2>

        <RevenuePie />
      </div>

      <div>
        <h2 className=" text-2xl text-gray-800">Revenue per order</h2>

        <Revenue />
      </div>

      <div>
        <h2 className=" text-2xl text-gray-800">Stock per order</h2>
        <MedicineStock />
      </div>
    </div>
  );
};

export default AdminHome;
