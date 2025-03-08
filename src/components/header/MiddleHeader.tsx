import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import HeadersIcon from "./HeadersIcon";
import MobileNavigation from "./MobileNavigation";

const MIddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-700">
      <Container className="flex py-5 items-center gap-3 md:gap-6 lg:gap-20 justify-between">
        <Link href="/">
          <Image height={80} width={80} src={logo} alt="logo" />
        </Link>
        <SearchInput></SearchInput>
        <div className="hidden md:inline-flex items-center gap-3">
          <Link href="/singin" className="flex items-center gap-2 text-sm">
            <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
              <LiaUser className="text-xl" />
            </div>
            <div>
              <p className="text-xs">Hellow,Guest</p>
              <p className="font-medium">Login/Register</p>
            </div>
          </Link>
          <HeadersIcon></HeadersIcon>
        </div>
        <MobileNavigation></MobileNavigation>
      </Container>
    </div>
  );
};

export default MIddleHeader;
