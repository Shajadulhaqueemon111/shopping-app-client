"use client";
import Image from "next/image";
import React, { useState } from "react";
interface Props {
  images: string[];
}
const ProductImages = ({ images }: Props) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="flex float-start">
      <div>
        {images?.map((item, index) => (
          <Image
            src={item}
            alt="productImage"
            key={index}
            width={200}
            height={200}
            className={`w-24 h-24 object-contain cursor-pointer opaciyt-80 mb-2 p-1 rounded-md border border-gray-300 hover:opacity-100 hover:shadow-lg duration-200 ${
              currentImage == item && "border-gray-500 opacity-100"
            }`}
            onClick={() => setCurrentImage(item)}
          />
        ))}
      </div>
      <div className="bg-gray-100 rounded-md ml-5 max-h-[550px]">
        <Image
          src={currentImage}
          alt="productImage"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
