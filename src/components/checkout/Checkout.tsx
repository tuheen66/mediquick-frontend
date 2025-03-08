"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_Payment_Gateway_PK as string
);

const Checkout = () => {
  return (
    <div className="my-12 w-[90%] lg:w-[45%] mx-auto bg-gray-200 p-4 rounded-xl">
      <Elements stripe={stripePromise}>
        <StripeForm />
      </Elements>
    </div>
  );
};

export default Checkout;
