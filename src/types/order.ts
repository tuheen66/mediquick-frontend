export type Product = {
  _id: string;
  product: string;
  name:string;
  image:string;
  quantity: number;
  prescriptionLink: string;
  unitPrice: number;
};

export type TOrder = {
  _id?:string;
  products: Product[];
  deliveryCharge: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  shippingAddress: string;
  totalAmount: number;
  finalAmount: number;
};
