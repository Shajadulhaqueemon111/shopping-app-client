import React from "react";

const SearchInput = () => {
  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        name="search"
        id=""
        placeholder="search products here..."
        className="h-full w-full border-2 border-indigo-600 px-4 py-2 outline-none"
      />
    </div>
  );
};

export default SearchInput;
