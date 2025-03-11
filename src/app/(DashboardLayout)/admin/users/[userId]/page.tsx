import UserOrdersHistory from "@/components/modules/users/UserOrdersHistory";
import { getSingleCustomerOrders } from "@/services/OrderService";
import React from "react";

const CustomerOrderHistoryPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;

  const {data:orders} = await getSingleCustomerOrders(userId as string)

  return (
    <div>
      <h1>Order history</h1>
      <UserOrdersHistory orders={orders}/>
    </div>
  );
};

export default CustomerOrderHistoryPage;
