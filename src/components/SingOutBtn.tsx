"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SingOutBtn = () => {
  return (
    <div>
      <button
        className="cursor-pointer hover:text-blue-600"
        onClick={() => signOut()}
      >
        SingOut
      </button>
    </div>
  );
};

export default SingOutBtn;
