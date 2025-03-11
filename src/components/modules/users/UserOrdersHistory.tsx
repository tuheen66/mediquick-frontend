"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TOrder } from "@/types";
import Image from "next/image";
import React from "react";

const UserOrdersHistory = ({ orders }: { orders: TOrder[] }) => {
  return (
    <div>
      <Table>
        <TableHeader className="font-bold">
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
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
                      <p>
                        <Image
                          src={product?.image}
                          alt="Image"
                          width={100}
                          height={100}
                        />{" "}
                      </p>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {order.products.map((product) => (
                    <div key={product?.product}>
                      <p> {product?.name}</p>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {order.products.map((product) => (
                    <div key={product?.product}>
                      <p>Quantity: {product?.quantity}</p>
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

export default UserOrdersHistory;
