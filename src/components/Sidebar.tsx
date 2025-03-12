"use client";
import { ProductType, StateType } from "@/constants/helpers/type";
import { addToFavorite } from "@/redux/shopingSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ product }: { product: ProductType }) => {
  const { favorite } = useSelector((state: StateType) => state?.shoping);
  console.log(favorite);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    const availableProduct = favorite?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    } else {
      setExistingProduct(null);
    }
  }, [favorite, product, existingProduct]);
  const dispath = useDispatch();
  const hadelFavorite = () => {
    dispath(addToFavorite(product));
    if (existingProduct) {
      toast.success("remove favorite product successfully");
    } else {
      toast.success("added favorite product successfully");
    }
  };
  return (
    <div className="absolute right-2 bottom-44 border flex flex-col text-2xl  bg-white rounded-md border-white overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-200">
      <button className="p-2 hover:bg-sky-500/5 text-sky-400 duration-200 cursor-pointer">
        <FiShoppingCart />
      </button>
      <button className="p-2 hover:bg-sky-500/5 text-sky-400 duration-200 cursor-pointer border-y border-white">
        <LuEye />
      </button>
      <button
        onClick={hadelFavorite}
        className="p-2 hover:bg-sky-500/5 text-sky-400 duration-200 cursor-pointer"
      >
        {existingProduct ? (
          <MdFavorite className="text-sky-400" />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
