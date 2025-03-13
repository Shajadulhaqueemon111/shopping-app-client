"use client";
import GetData from "@/constants/helpers";
import { ProductType } from "@/constants/helpers/type";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

const SearchInput = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filterProduct, setFilterProduct] = useState<ProductType[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const GetProductData = async () => {
      try {
        const endpoint = "https://dummyjson.com/products";
        const data = await GetData(endpoint);
        setProducts(data?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    GetProductData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (item: ProductType) =>
        item.title.toLowerCase().includes(search.toLowerCase()) // Case insensitive search
    );
    setFilterProduct(filtered);
  }, [search, products]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchContainerRef}
      className="hidden md:inline-flex flex-1 h-10 relative"
    >
      <input
        type="text"
        name="search"
        placeholder="Search products here..."
        className="h-full w-full border-2 border-indigo-600 px-4 py-2 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
      <span className="w-10 h-10 bg-blue-500/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-blue-500 hover:bg-blue-600 duration-200 cursor-pointer">
        <RiSearchLine className="text-xl font-bold"></RiSearchLine>
      </span>

      {/* Search Suggestions Dropdown with Scroll */}
      {isInputFocused && search && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md z-50 max-h-60 overflow-y-auto">
          {filterProduct.length > 0 ? (
            <ul onClick={() => setSearch("")}>
              {filterProduct.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {product.title}
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 p-4">
              No products found, please try again.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
