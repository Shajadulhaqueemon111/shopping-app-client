import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: string;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return (
    <div>
      <h2
        className={twMerge(
          "text-xl font-semibold flex items-center",
          className
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
