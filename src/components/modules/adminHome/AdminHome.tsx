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
      <div className="grid lg:grid-cols-3 gap-4 w-[90%] mx-auto mb-4">
        <div className="flex flex-col justify-center items-center border-1 border-orange-600  p-4 w-72 h-40 space-y-8 mx-auto">
          <p className="text-5xl font-bold text-orange-500">
            {medicines?.length}
          </p>
          <h2 className="text-2xl font-semibold text-gray-700">
            Number of Medicines{" "}
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center border-1 border-orange-600  p-4 w-72 h-40 space-y-8 mx-auto">
          <p className="text-5xl font-bold text-orange-500">{orders?.length}</p>
          <h2 className="text-2xl font-semibold text-gray-700">
            Number of Orders{" "}
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center border-1 border-orange-600  p-4 w-72 h-40 space-y-8 mx-auto">
          <div className="flex">
            <p className="text-5xl font-bold text-gray-700 ">
              Tk{" "}
              <span className="text-5xl font-bold text-orange-500">
                {revenue}
              </span>
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Total Revenue
          </h2>
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
