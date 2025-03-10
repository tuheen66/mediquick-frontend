import { Button } from "@/components/ui/button";
import {
  CartProduct,
  decrementOrderQuantity,
  incrementOrderQuantity,
  removeOrder,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";


const CartProductCard = ({ medicine }: { medicine: CartProduct }) => {
  const dispatch = useAppDispatch();

  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(medicine._id));
  };
  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(medicine._id));
  };
  const handleRemoveProduct = (id: string) => {
    dispatch(removeOrder(medicine._id));
  };

  return (
    <div className="border-2 border-orange-500 rounded-xl p-4 ">
      <div className="bg-white rounded-lg flex p-5 gap-5">
        <div className="h-full w-32 rounded-md overflow-hidden">
          <Image
            src={medicine.image}
            height={200}
            width={200}
            alt="product"
            className="aspect-square object-cover"
          />
        </div>

        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-xl font-semibold">{medicine.name}</h1>
          <div className=" my-2">
            <h2>
              <span className="text-gray-700">Price:</span>{" "}
              <span className="font-semibold text-orange-500">
                BDT {medicine.price}
              </span>{" "}
            </h2>
            <p>
              <span className="text-gray-700">Stock Availability: </span>
              <span className="font-semibold">{medicine.quantity}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-gray-500 font-semibold">Quantity</p>
          <Button
            onClick={() => handleDecrementQuantity(medicine._id)}
            variant="outline"
            className="size-8 rounded-sm"
          >
            <Minus />
          </Button>
          <p className="font-semibold text-xl p-2">{medicine?.orderQuantity}</p>
          <Button
            onClick={() => handleIncrementQuantity(medicine._id)}
            variant="outline"
            className="size-8 rounded-sm"
          >
            <Plus />
          </Button>
          <Button
            onClick={() => handleRemoveProduct(medicine._id)}
            variant="outline"
            className="size-8 rounded-sm"
          >
            <Trash className="text-red-500/50" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
