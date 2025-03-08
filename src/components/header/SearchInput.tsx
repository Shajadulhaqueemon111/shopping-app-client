"use client";
import React, { useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  console.log("search", search);
  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        name="search"
        id=""
        placeholder="search products here..."
        className="h-full w-full border-2 border-indigo-600 px-4 py-2 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        ></RiCloseLine>
      )}
      <span className="w-10 h-10 bg-blue-500/80 inline-flex item-center justify-center text-white absolute top-0 right-0 border border-blue-500 hover:bg-blue-600 duration-200 cursor-pointer">
        <RiSearchLine className="text-xl font-bold mt-2"></RiSearchLine>
      </span>
    </div>
  );
};

export default SearchInput;
