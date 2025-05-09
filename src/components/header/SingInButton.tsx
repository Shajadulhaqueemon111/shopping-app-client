"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LiaUser } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/authContext/contaxt";

const SignInButton = () => {
  const { data: session, status } = useSession();
  const { user: jwtUser, logout: ctxLogout } = useAuth();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Choose NextAuth user if present, otherwise your context user
  const user = session?.user
    ? { name: session.user.name!, image: session.user.image! }
    : jwtUser
    ? {
        role: jwtUser.role,
        image: jwtUser.profilImage || "/default-avatar.png",
      }
    : null;

  // Render logout if we have any user
  if (user) {
    return (
      <div
        onClick={() => {
          // Clear custom user if any
          if (jwtUser) ctxLogout();
          // Clear NextAuth session if any
          if (session?.user) signOut();
        }}
        className="flex items-center gap-2 text-sm cursor-pointer"
      >
        <div className="border-2 border-gray-300 p-1.5 rounded-full text-xl">
          <Image
            src={user.image}
            alt="Profile"
            width={30}
            height={30}
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <p className="text-sm">{user.role}</p>
          <p className="font-medium btn text-red-500">Logout</p>
        </div>
      </div>
    );
  }

  // Otherwise, show register/login button
  return (
    <div
      onClick={() => router.push("/register")}
      className="flex items-center gap-2 text-sm cursor-pointer"
    >
      <div className="border-2 border-gray-300 p-1.5 rounded-full text-xl">
        <LiaUser />
      </div>
      <div>
        <p className="text-sm">Hello, Guest</p>
        <p className="font-medium text-blue-500">Register</p>
      </div>
    </div>
  );
};

export default SignInButton;
