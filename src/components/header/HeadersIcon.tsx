"use client";
import { StateType } from "@/constants/helpers/type";
import Link from "next/link";

import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const HeadersIcon = () => {
  const { cart, favorite } = useSelector((state: StateType) => state?.shoping);

  console.log(cart, favorite);
  return (
    <div className="flex md:inline-flex items-center justify-center gap-3">
      <Link href="/favariout" className="text-2xl relative">
        <MdFavoriteBorder />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
          {favorite?.length > 0 ? favorite?.length : "0"}
        </span>
      </Link>
      <Link href="/cart" className="text-2xl relative">
        <BiShoppingBag className="" />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
          {cart?.length > 0 ? cart?.length : "0"}
        </span>
      </Link>
    </div>
  );
};

export default HeadersIcon;
