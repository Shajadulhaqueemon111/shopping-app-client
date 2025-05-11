// app/favourite/page.tsx
"use client";

import FavouriteProduct from "@/components/favoriutePage/FavouriteProduct";
import { ProductType, StateType } from "@/constants/helpers/type";
import Link from "next/link";

import { useSelector } from "react-redux";

const FavouriteAllProduct = () => {
  const { favorite } = useSelector((state: StateType) => state?.shoping);

  return (
    <div className="container mx-auto p-4">
      {favorite?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <section className="lg:flex lg:gap-8">
            {/* Product List */}
            <div className="lg:w-2/3 divide-y divide-gray-300 border-b border-t border-gray-300">
              {favorite?.map((product: ProductType) => (
                <FavouriteProduct key={product?.id} product={product} />
              ))}
            </div>

            {/* Cart Summary */}
          </section>
        </>
      ) : (
        <div className="text-center mx-auto justify-center bg-white shadow-lg rounded-lg p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Favourite List is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you havent added anything yet.
          </p>
          <Link href="/">
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Go to Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavouriteAllProduct;
