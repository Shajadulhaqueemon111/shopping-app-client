import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SearchInput from "./SearchInput";

const MIddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-700">
      <Container className="flex py-5 items-center gap-3 md:gap-6 lg:gap-20 justify-between">
        <Image height={80} width={80} src={logo} alt="logo" />
        <SearchInput></SearchInput>
        <div>Navigation Menue</div>
      </Container>
    </div>
  );
};

export default MIddleHeader;
