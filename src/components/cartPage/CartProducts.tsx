"use client";
import { ProductType, StateType } from "@/constants/helpers/type";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import CardProduct from "./CardProduct";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shoping);
  console.log(cart);

  return (
    <div>
      {cart?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gary-900 sm:text-4xl">
            Shoping cart
          </h1>
          <section className="lg-col-span-7 ">
            <div className="divide-y  divide-gray-300 border-b border-t border-gray-300">
              {cart?.map((product: ProductType) => (
                <CardProduct key={product?.id} product={product} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="text-center bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you havent added anything yet.
          </p>
          <Link href="/">
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Go to Shoping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
