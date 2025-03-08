import React from "react";
import Container from "../Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className="flex items-center justify-between">
        <p className="w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          <CiDeliveryTruck className="text-2xl text-yellow-300 mr-1"></CiDeliveryTruck>
          Free Express Shipping on orders $570+
        </p>
        <div className="hidden md:inline-flex items-center text-sm text-white">
          <p className="headerMenue">
            English
            <IoChevronDown className="text-xl font-bold"></IoChevronDown>{" "}
          </p>
          <p className="headerMenue">
            USD
            <IoChevronDown className="text-xl font-bold"></IoChevronDown>{" "}
          </p>
          <p className="headerMenue">
            Setting
            <IoChevronDown className="text-xl font-bold"></IoChevronDown>{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
