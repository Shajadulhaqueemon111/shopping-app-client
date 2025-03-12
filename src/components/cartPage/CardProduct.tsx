import { ProductType } from "@/constants/helpers/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProduct = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <Link
        href={`/products/${product.id}`}
        className="h-24 w-24 sm:h-48 sm:w-48 border border-sky-800/30 hover:border-sky-600 overflow-hidden flex items-center justify-center rounded-md gap-4 mb-2 mt-3"
      >
        <Image
          src={product?.images[0]}
          alt="image"
          width={300}
          height={300}
          className="h-full w-full p-2 rounded-md object-contain mb-2 hover:scale-110 duration-200"
        />
      </Link>
    </div>
  );
};

export default CardProduct;
