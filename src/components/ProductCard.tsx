import { ProductType } from "@/constants/helpers/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import ProductPrice from "./ProductPrice";
import AddToCardBtn from "./AddToCardBtn";

const ProductCard = ({ product }: { product: ProductType }) => {
  console.log(product);

  return (
    <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md group overflow-hidden relative">
      <Link href={`/products/${product.id}`}>
        <Image
          width={300}
          height={300}
          src={product?.images[0]}
          alt="product image"
          priority={true}
          className="w-full h-64 object-contain hover:scale-110 duration-200"
        />
        <p className="absolute top-2 right-2 bg-orange-400 text-white py-1 px-2 text-xs rounded-lg">
          {product?.discountPercentage}%
        </p>
      </Link>
      <Sidebar product={product} />
      <div className="border-t border-t-white py-2 px-4 flex flex-col justify-between h-40">
        <div>
          <p className="text-sm font-medium  capitalize">{product?.category}</p>
          <h3 className="text-semibold line-clamp-2">{product?.title}</h3>
          <ProductPrice product={product} />
        </div>

        <AddToCardBtn product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
