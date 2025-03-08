import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import MIddleHeader from "./MiddleHeader";

const Header = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <MIddleHeader></MIddleHeader>
      <BottomHeader></BottomHeader>
    </div>
  );
};

export default Header;
