import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import MIddleHeader from "./MiddleHeader";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <TopHeader></TopHeader>
      <MIddleHeader></MIddleHeader>
      <BottomHeader></BottomHeader>
    </div>
  );
};

export default Header;
