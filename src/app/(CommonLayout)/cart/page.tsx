import CartBanner from "@/components/cartBanner/CartBanner";
import Address from "@/components/modules/cart/Address";
import CartProduct from "@/components/modules/cart/CartProduct";
import Payments from "@/components/modules/cart/Payments";

const CartPage = () => {
  return (
    <div className="">
        <CartBanner/>
      <div className="flex justify-around">
        <CartProduct />
        <div className=" w-80">
          <Address />
          <Payments />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
