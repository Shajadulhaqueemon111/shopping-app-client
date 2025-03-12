import { paymentImage } from "@/assets";
import AddToCardBtn from "@/components/AddToCardBtn";
import Container from "@/components/Container";
import PriceFormat from "@/components/PriceFormate";
import ProductImages from "@/components/ProductImages";
import ProductPrice from "@/components/ProductPrice";
import GetData from "@/constants/helpers";
import { ProductType } from "@/constants/helpers/type";
import Image from "next/image";

import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
interface Props {
  params: {
    id: string;
  };
}
const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;
  console.log(id);
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await GetData(endpoint);
  console.log(product);
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProductImages images={product?.images} />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product?.title}</h2>
        <div className="flex items-center justify-between gap-1">
          <ProductPrice product={product} />
          <div className="flex items-center justify-center gap-2">
            <div className="text-base text-gray-300  flex items-center gap-1">
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const handelFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);
                return (
                  <MdStar
                    key={index}
                    className={`${
                      filled
                        ? "text-orange-500"
                        : handelFilled
                        ? "text-amber-200"
                        : "text-gray-300"
                    }`}
                  />
                );
              })}
            </div>
            <p
              className="text-base font-semibold
            "
            >{`(${product?.rating?.toFixed(1)})reviews`}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye />
          <span>250+ </span>peoples are viewing this right now
        </p>
        <p className="flex gap-2">
          You are saving{" "}
          <PriceFormat
            amount={product?.discountPercentage / 100}
            className="text-base text-semibold text-blue-400"
          />
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{product?.description}</p>
          <p className="text-base mt-1">{product?.warrantyInformation}</p>
        </div>
        <p>
          {" "}
          Brand:{" "}
          <span className="font-medium text-blue-400">{product?.brand}</span>
        </p>
        <p>
          {" "}
          Category:{" "}
          <span className="font-medium  text-blue-300">
            {product?.category}
          </span>
        </p>
        <p>
          {" "}
          Tags:{" "}
          <span className="font-medium  text-blue-300 gap-2">
            {product?.tags.map((item, index) => (
              <span className=" mr-2" key={index}>
                {item} {index < product?.tags?.length - 1 && ","}
              </span>
            ))}
          </span>
        </p>

        <AddToCardBtn product={product} />
        <div className="bg-gray-300 p-4 text-center flex flex-col mx-auto">
          <Image
            src={paymentImage}
            alt="paymentImage"
            width={400}
            height={400}
          />
          <p>Guaranteed safe & secure checkout</p>
        </div>
      </div>
      <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex items-center gap-10">
        {product?.reviews?.map((item) => (
          <div
            key={item?.reviewerName}
            className="bg-white/80 p-5 border-[1px] border-orange-900/50 rounded-md hover:border-amber-500 hover:bg-white duration-200 flex flex-col gap-1"
          >
            <div>
              <p>{item?.comment}</p>
              <p>{item?.reviewerName}</p>
              <p>{item?.reviewerEmail}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                complexcity is 3 everything is cool!!
                {Array?.from({ length: 5 })?.map((_, index) => (
                  <MdStar
                    key={index}
                    className={`${
                      index < item?.rating
                        ? "text-orange-500"
                        : "text-amber-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
