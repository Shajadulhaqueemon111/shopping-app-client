import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  amount?: number;
}

const PriceFormat = ({ amount, className }: Props) => {
  if (amount === undefined) return null;

  const formattedPrice = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <span className={twMerge("font-medium", className)}>
        {formattedPrice}
      </span>
    </>
  );
};

export default PriceFormat;
