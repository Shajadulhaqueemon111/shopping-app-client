/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Title from "../footer/Title";
import PriceFormat from "../PriceFormate";
import { ProductType } from "@/constants/helpers/type";

import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
  cart: ProductType[];
}

const CartSummery = ({ cart }: Props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    let amt = 0;
    let discountAmt = 0;

    cart?.forEach((item) => {
      amt += item?.price * (item.quantity || 1);
      discountAmt +=
        item?.price * (item?.discountPercentage / 100) * (item.quantity || 1);
    });

    setTotalAmount(parseFloat(amt.toFixed(2)));
    setDiscount(parseFloat(discountAmt.toFixed(2)));
  }, [cart]);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const handleCheckOut = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          email: session?.user?.email,
        }),
      });

      const checkOutSession = await response?.json();

      const result: any = await stripe?.redirectToCheckout({
        sessionId: checkOutSession?.id,
      });
      if (result?.error) {
        toast.error(result?.error?.message);
      }
      console.log(result);
      toast.success("Checkout is coming soon!");
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="flex mt-5 flex-col gap-1">
        <div className="flex items-center justify-between">
          <Title>Sub Total:</Title>
          <PriceFormat amount={totalAmount} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="font-medium">Discount:</Title>
          <PriceFormat amount={discount} />
        </div>
        <div className="flex items-center justify-between">
          <Title>Payable Amount:</Title>
          <PriceFormat amount={totalAmount - discount} />
        </div>
      </div>
      <button
        onClick={() => {
          console.log("Checkout Button Clicked!");
          handleCheckOut();
        }}
        className="flex items-center justify-center mt-4 rounded-full w-full bg-blue-700 cursor-pointer hover:bg-blue-900 p-4 hover:text-white"
      >
        CheckOut
      </button>
    </div>
  );
};

export default CartSummery;
