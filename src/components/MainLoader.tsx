import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const MainLoader = () => {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-4 items-center justify-center z-50">
      <div className="w-52 p-6 rounded-lg bg-blue-800 flex items-center justify-center relative animate-pulse">
        <Image
          src={logo}
          height={60}
          width={60}
          alt="logo"
          className="w-44 h-auto object-contain"
          priority
        />
      </div>

      {/* Animated Spinner */}
      <div className="relative flex flex-col items-center">
        <div className="w-14 h-14 border-8 border-gray-300 rounded-full relative"></div>
        <div className="w-14 h-14 border-8 border-t-blue-600 border-r-blue-400 border-b-transparent border-l-transparent rounded-full absolute animate-spin"></div>
      </div>

      {/* Loading Text with Wave Animation */}
      <p className="text-lg font-semibold tracking-wide text-blue-700 animate-bounce">
        Loading<span className="animate-ping">.</span>
        <span className="animate-ping delay-100">.</span>
        <span className="animate-ping delay-200">.</span>
      </p>
    </div>
  );
};

export default MainLoader;
