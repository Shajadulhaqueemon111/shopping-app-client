"use client";
import { ProductType, StateType } from "@/constants/helpers/type";
import {
  addToCart,
  decrimentQuantity,
  IncrementQuantity,
} from "@/redux/shopingSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

const AddToCardBtn = ({ product }: { product: ProductType }) => {
  console.log(product);
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

  const dispatch = useDispatch();
  console.log(dispatch);

  const handelAddToCard = () => {
    console.log(product);
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product?.title.substring(0, 10)}... added successfully`);
    }
  };

  return (
    <div>
      {existingProduct ? (
        <div className="flex items-center self-start justify-center gap-2 py-2 mb-2">
          <button
            onClick={() => {
              dispatch(decrimentQuantity(product?.id));
              toast.success("Quantity decremented successfully");
            }}
            disabled={existingProduct.quantity! <= 1}
            className="bg-gray-300 text-black p-2 border-[1px] border-gray-200 hover:border-sky-300 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={() => {
              dispatch(IncrementQuantity(product?.id));
              toast.success("Quantity decremented successfully");
            }}
            className="bg-gray-300 text-black p-2 border-[1px] border-gray-200 hover:border-sky-300 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-gray-300"
          >
            <FaPlus />
          </button>
          <p className="text-base font-semibold w-10 text-center"></p>
        </div>
      ) : (
        <button
          onClick={handelAddToCard}
          className={twMerge(
            "bg-transparent border cursor-pointer border-sky-400 text-black w-full p-2 rounded-full hover:bg-blue-600 hover:text-white"
          )}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AddToCardBtn;
