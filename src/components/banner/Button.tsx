/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: any;
}
const Button = ({ children, className, href, onClick }: Props) => {
  return (
    <div>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "bg-blue-500/80 text-white py-2 px-6 hover:bg-blue-700 cursor-pointer duration-200",
            className,
            onClick
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(
            "bg-blue-500/80 text-white py-2 px-6 hover:bg-blue-700 cursor-pointer duration-200",
            className,
            onClick
          )}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
