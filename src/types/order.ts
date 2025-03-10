export type Product = {
  _id: string;
  product: string; // Product ID
  quantity: number;
  prescriptionLink: string;
  unitPrice: number;
};

export type TOrder = {
  products: Product[];
  deliveryCharge: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  shippingAddress: string;
  totalAmount: number;
  finalAmount: number;
};
