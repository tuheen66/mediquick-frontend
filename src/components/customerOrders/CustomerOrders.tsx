"use client";
import { useUser } from "@/context/UserContext";

import { useEffect, useState } from "react";
import { TOrder } from "@/types";
import { getCustomerOrders } from "@/services/OrderService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const CustomerOrders = () => {
  const user = useUser();

  const [orders, setOrders] = useState<TOrder[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true); // Start loading

    try {
      if (user?.user?.userId) {
        const orderData = await getCustomerOrders(user.user.userId);
        console.log("API Response Data:", orderData);

        if (orderData) {
          setOrders(orderData?.data || []);
          console.log("Updated Orders State:", orderData.data);
        } else {
          console.warn("No data found in response.");
          setOrders([]);
        }
      }
    } catch (error) {
      console.error("Error fetching medicines:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user?.user?.userId) {
      fetchData();
    }
  }, [user?.user?.userId]);

  // console.log(user?.user?.userId);
  return (
    <div>
      <Table>
        <TableHeader className="font-bold">
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Delivery Charge</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Shipping Address</TableHead>
            <TableHead>Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length > 0 ? (
            orders?.map((order: TOrder, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  {order.products.map((product) => (
                    <div key={product?.product}>
                      <p>Item Id: {product?.product}</p>
                      <p>Item Quantity: {product?.quantity}</p>
                    </div>
                  ))}
                </TableCell>

                <TableCell>{order.deliveryCharge}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.shippingAddress}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-gray-500">
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerOrders;
