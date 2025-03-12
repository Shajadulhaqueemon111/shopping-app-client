/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";
import { ProductType, StateType } from "@/constants/helpers/type";
import React, { useEffect, useState } from "react";
import PriceFormate from "./PriceFormate";
import { useSelector } from "react-redux";

const ProductPrice = ({ product }: { product: ProductType }) => {
  const { cart, favorite } = useSelector((state: StateType) => state?.shoping);
  console.log(cart, favorite);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);
  const regularPrice = product?.price;
  const discountPrice = regularPrice + product?.discountPercentage / 100;
  console.log(discountPrice);

  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        amount={
          existingProduct
            ? discountPrice * existingProduct?.quantity!
            : discountPrice
        }
        className="text-gray-400 line-through font-normal"
      />
      <PriceFormate
        amount={
          existingProduct
            ? regularPrice * existingProduct?.quantity!
            : regularPrice
        }
        className="text-sky-500 font-semibold"
      />
    </div>
  );
};

export default ProductPrice;
