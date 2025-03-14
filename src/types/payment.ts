

type POrder = {
  products: {
    product: string;
    name: string;
    image: string;
    quantity: number;
    unitPrice: number;
  }[];
};

export interface IPayment {
  user?: string;
  products: POrder[];
  finalAmount: number;
  transactionId: string;
}
