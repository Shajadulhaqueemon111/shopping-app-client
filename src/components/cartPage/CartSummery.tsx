import React, { useEffect, useState } from "react";
import Title from "../footer/Title";
import PriceFormat from "../PriceFormate";
import { ProductType } from "@/constants/helpers/type";
import Button from "../banner/Button";
import toast from "react-hot-toast";

interface Props {
  cart: ProductType[];
}

const CartSummery = ({ cart }: Props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let amt = 0;
    let discountAmt = 0;

    cart?.forEach((item) => {
      amt += item?.price * item.quantity!;
      discountAmt +=
        item?.price * (item?.discountPercentage / 100) * item.quantity!;
    });

    setTotalAmount(amt);
    setDiscount(discountAmt);
  }, [cart]);

  const handelCheckOut = () => {
    toast.success("checkOut is Comming Soon!!");
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
      <Button
        onClick={handelCheckOut}
        className="flex items-center justify-center mt-4 rounded-full w-full"
      >
        CheckOut
      </Button>
    </div>
  );
};

export default CartSummery;
