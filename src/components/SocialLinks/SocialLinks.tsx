import Link from "next/link";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
const linksData = [
  { icon: <FaGithub></FaGithub>, href: "" },
  { icon: <FaFacebook />, href: "" },
  { icon: <FaLinkedin />, href: "" },
  { icon: <FaEnvelope />, href: "" },
];
const SocialLinks = () => {
  return (
    <div className="flex items-center justify-around py-2 text-white/50 gap-x-2 ">
      {linksData?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="blank"
          className="text-white text-2xl border border-white/20 inline-flex p-2 rounded-full  hover:text-sky-500 hover:border-sky-500 duration-200 cursor-pointer"
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
