import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="absolute right-2 bottom-44 border flex flex-col text-2xl  bg-white rounded-md border-white overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-200">
      <button className="p-2 hover:bg-sky-500/5 text-sky-400 duration-200 cursor-pointer">
        <FiShoppingCart />
      </button>
      <button className="p-2 hover:bg-sky-500/5 text-sky-400 duration-200 cursor-pointer border-y border-white">
        <LuEye />
      </button>
      <button className="p-2 hover:bg-sky-500/5 text-sky-400 duration-200 cursor-pointer">
        <MdFavorite />
      </button>
    </div>
  );
};

export default Sidebar;
