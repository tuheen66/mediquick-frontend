import { getAllMedicine } from "@/services/MedicineService";
import { IMedicine } from "@/types";
import CartProductCard from "./CartProductCard";

const CartProduct = async() => {
    const {data:medicines} = await getAllMedicine();
  return (
    <div className="  rounded-md h-full  p-10 space-y-5 ">
      {medicines.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          
        </div>
      )}
      {medicines.map((medicine: IMedicine) => (
        <CartProductCard key={medicine._id} medicine={medicine} />
      ))}
    </div>
  );
};

export default CartProduct;
