import UpdateStatus from "@/components/modules/orders/UpdateStatus";
import { getSingleOrder } from "@/services/OrderService";

import React from "react";

const UpdateStatusPage = async ({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) => {
  const { orderId } = await params;

  const { data: order } = await getSingleOrder(orderId);

  return (
    <div>
      <UpdateStatus order={order} />
    </div>
  );
};

export default UpdateStatusPage;
