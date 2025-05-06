import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SearchInput from "./SearchInput";
import Link from "next/link";

import HeadersIcon from "./HeadersIcon";
import MobileNavigation from "./MobileNavigation";
import Button from "../banner/Button";

// import SingInButton from "./SingInButton";

const MIddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-700">
      <Container className="flex py-5 items-center gap-3 md:gap-6 lg:gap-20 justify-between">
        <Link href="/">
          <Image height={80} width={80} src={logo} alt="logo" priority />
        </Link>
        <SearchInput></SearchInput>
        <div className="hidden md:inline-flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-sm">
            <div>
              {/* <SingInButton></SingInButton> */}
              <Button className="btn  btn-primary">Register</Button>
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
