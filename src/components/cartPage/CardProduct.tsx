/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ProductType } from "@/constants/helpers/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceFormat from "../PriceFormate";
import AddToCardBtn from "../AddToCardBtn";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/shopingSlice";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

const CardProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const handelRemoveProduct = () => {
    dispatch(removeFromCart(product?.id));
    toast.success("card remove successfully");
  };
  return (
    <div className="flex py-6 sm:py-10 transition-all duration-300 hover:shadow-lg rounded-lg p-4 border border-gray-200 hover:border-sky-500 bg-white">
      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="h-24 w-24 sm:h-48 sm:w-48 border border-sky-800/30 hover:border-sky-600 overflow-hidden flex items-center justify-center rounded-md gap-4 mb-2 mt-3 transition-transform duration-200 hover:scale-105"
      >
        <Image
          src={product?.images[0]}
          alt={product?.title}
          width={300}
          height={300}
          className="h-full w-full p-2 rounded-md object-contain mb-2 hover:scale-110 duration-200"
        />
      </Link>

      {/* Product Details */}
      <div className="ml-4 sm:ml-6 flex flex-1 justify-between">
        <div className="relative flex py-4 sm:py-8 duration-300  rounded-lg p-2  hover:border-sky-500">
          <div className="flex flex-col gap-1 col-span-5">
            {/* Title */}
            <h3 className="text-lg font-semibold w-full mt-2 text-gray-800 hover:text-sky-600 transition-colors">
              {product?.title.substring(0, 80)}
            </h3>

            {/* Brand & Category */}
            <p className="text-sm text-gray-600">
              Brand:{" "}
              <span className="font-bold text-gray-800">{product?.brand}</span>
            </p>
            <p className="text-sm text-gray-600">
              Category:{" "}
              <span className="font-bold text-gray-800">
                {product?.category}
              </span>
            </p>

            {/* Price & Add to Cart */}
            <div className="flex items-center gap-6 mt-2">
              <PriceFormat
                amount={product?.price * product?.quantity!}
                className="text-base font-bold text-sky-700"
              />
              <AddToCardBtn product={product} />
            </div>
            <div>
              {product?.availabilityStatus && (
                <p className="flex items-center gap-3">
                  <FaCheck className="text-blue-600" />
                  <span>In Stack</span>
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span>You are saving</span>
                <PriceFormat
                  className="text-blue-600"
                  amount={
                    product?.price *
                    (product?.discountPercentage / 100) *
                    product?.quantity!
                  }
                />
              </div>
            </div>
          </div>

          {/* Close Button */}
          <div className="absolute right-0 top-0 ">
            <button
              onClick={handelRemoveProduct}
              className="p-2 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-200 shadow-md"
            >
              <IoClose className="cursor-pointer" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
