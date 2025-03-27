"use client";

import { featuredMedicine } from "@/services/MedicineService";
import { IMedicine } from "@/types";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MedicineStock = () => {
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

  const data = medicines.map((medicine) => ({
    name: medicine.name,
    stock: medicine.quantity,
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink", "green", "blue","#e056fd", "#badc58", "#22a6b3", "#6ab04c", "#f0932b", "#B33771","#58B19F","#1B9CFC" ];

  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        className="mx-auto mt-4"
        width={0}
        height={0}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="stock"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {medicines.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default MedicineStock;
