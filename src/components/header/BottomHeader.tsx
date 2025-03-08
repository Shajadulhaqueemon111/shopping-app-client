import React from "react";
import Container from "../Container";
import { navigation } from "@/constants";
import Link from "next/link";

const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400 ">
      <Container className="flex items-center justify-between py-1">
        <div className="text-xs md:text-sm font-medium flex items-center gap-2 md:gap-5">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="hover:text-blue-500 duration-200"
            >
              {item?.title}
            </Link>
          ))}
          <Link href={"/singin"} className="hover:text-blue-500 duration-200">
            Please login to view your cart
          </Link>
        </div>
        <div>
          <p className="hidden md:inline-flex text-xs text-gray-400 font-medium">
            Hotline: <span className="text-black">+880125689</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
