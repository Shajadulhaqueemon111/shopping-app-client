import React from "react";
import { twMerge } from "tailwind-merge";

const AddToCardBtn = () => {
  return (
    <div>
      <button
        className={twMerge(
          "bg-transparent border border-sky-400 text-black w-full p-2 rounded-full hover:bg-blue-600 hover:text-white"
        )}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCardBtn;
