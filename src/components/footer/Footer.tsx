import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SocialLinks from "../SocialLinks/SocialLinks";

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
    </Container>
  );
};

export default Footer;
