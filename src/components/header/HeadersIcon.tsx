import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const HeadersIcon = () => {
  return (
    <div className="flex md:inline-flex items-center justify-center gap-3">
      <Link href="/favriout" className="text-2xl relative">
        <MdFavoriteBorder />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
      <Link href="/addtocard" className="text-2xl relative">
        <BiShoppingBag className="" />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
};

export default HeadersIcon;
