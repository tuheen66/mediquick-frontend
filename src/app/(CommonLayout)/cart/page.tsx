import CartBanner from "@/components/cartBanner/CartBanner";
import Address from "@/components/modules/cart/Address";
import CartProduct from "@/components/modules/cart/CartProduct";
import Payments from "@/components/modules/cart/Payments";

const CartPage = () => {
  return (
    <div className="">
        <CartBanner/>
      <div className="flex justify-around min-h-screen">
        <CartProduct />
        <Payments/>
       
      </div>
    </div>
  );
};

export default CartPage;
