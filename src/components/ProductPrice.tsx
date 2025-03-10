import { ProductType } from "@/constants/helpers/type";
import React from "react";
import PriceFormate from "./PriceFormate";

const ProductPrice = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discountPrice = regularPrice + product?.discountPercentage / 100;
  console.log(discountPrice);
  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        amount={discountPrice}
        className="text-gray-400 line-through font-normal"
      />
      <PriceFormate
        amount={regularPrice}
        className="text-sky-500 font-semibold"
      />
    </div>
  );
};

export default ProductPrice;
