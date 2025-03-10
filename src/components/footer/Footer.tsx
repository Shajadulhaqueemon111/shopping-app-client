import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SocialLinks from "../SocialLinks/SocialLinks";
import Title from "./Title";
import Link from "next/link";
import { navigation } from "@/constants";
import { GoDotFill, GoLocation } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
      <div className="gap-y-5">
        <Image className="h-40 w-40" src={logo} alt="logo" />
        <p>
          We are a team of designers and developers that create high quality
          WordPress
        </p>
        <SocialLinks iconStyle="bg-white border border-blue-500 shadow-md text-black p-3 text-lg hover:text-blue-600 cursor-pointer duration-200 rounded-md"></SocialLinks>
      </div>
      <div className="mt-10">
        <Title>My Account</Title>
        <div className="flex flex-col gap-3 p-5">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className=" flex items-center gap-x-2 hover:text-blue-500"
            >
              <GoDotFill size={10} />
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Title>Information</Title>
        <div className="flex flex-col gap-3 p-5">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className=" flex items-center gap-x-2 hover:text-blue-500"
            >
              <GoDotFill size={10} />
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 gap-4 ">
        <Title>Talk To Us</Title>
        <p>
          Got Questions? Call us <br />{" "}
          <span className="text-xl font-bold">+670 413 90 762</span>
        </p>
        <p className="flex  gap-2">
          <TfiEmail className="mt-1"></TfiEmail>mdshajdulhaueemon@gmail.com
        </p>
        <p className="flex ">
          <GoLocation className="mt-1"></GoLocation>Dhaka, Bangladesh
        </p>
      </div>
    </Container>
  );
};

export default Footer;
