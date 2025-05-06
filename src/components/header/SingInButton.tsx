"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LiaUser } from "react-icons/lia";
import { useRouter } from "next/navigation";

const SingInButton = () => {
  const { data: session } = useSession();
  const router = useRouter(); // use router to redirect

  return (
    <>
      {session?.user ? (
        <div
          onClick={() => signOut()}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <div className="border-2 border-gray-300 p-1.5 rounded-full text-xl ">
            <Image
              src={session?.user?.image as string}
              alt="Image"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
          </div>

          <div>
            <p className="text-sm">{session?.user?.name}</p>
            <p className="font-medium">LogOut</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => router.push("/register")} // 🔁 redirect to custom register page
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <div className="border-2 border-gray-300 p-1.5 rounded-full text-xl ">
            <LiaUser />
          </div>

          <div>
            <p className="text-sm">Hello, Guest</p>
            <p className="font-medium">Register</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingInButton;
