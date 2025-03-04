import { Button } from "@/components/ui/button";


const Payments = () => {
    return (
        <div className=" rounded-md h-fit p-5 ">
        <h1 className="text-2xl font-bold">Payment Details</h1>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <p className="text-gray-800 ">Subtotal</p>
            <p className="font-semibold">(subTotal)</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-800 ">Discount</p>
            <p className="font-semibold">(0)</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-800 ">Shipment Cost</p>
            <p className="font-semibold">(shippingCost)</p>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <p className="text-gray-800 ">Grand Total</p>
          <p className="font-semibold">(grandTotal)</p>
        </div>
        <Button
          
          className="w-full text-xl  py-5 bg-orange-500 text-white"
        >
          Order Now
        </Button>
      </div>
    );
};

export default Payments;