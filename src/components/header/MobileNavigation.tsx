"use client";

import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { navigation } from "@/constants";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <>
      {/* Menu Icon */}
      <div
        className="text-2xl md:hidden text-gray-500 hover:text-blue-500 duration-200 cursor-pointer"
        onClick={open}
      >
        <RiMenuFill />
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/90">
            <DialogPanel
              transition
              className="w-[94%] space-y-4  border border-white rounded-md absolute top-8 m-44 bg-black  p-6 duration-300 "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white">Navigation Menue</h3>
                <button
                  onClick={close}
                  className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40"
                >
                  <MdClose></MdClose>
                </button>
              </div>
              <div className="flex flex-col gap-5 border  p-5">
                {navigation?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.href}
                    onClick={close}
                    className="text-white hover:text-sky-400 relative group flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-sky-400"></span>
                    {item?.title}
                    <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-sky-400 duration-200"></span>
                  </Link>
                ))}
              </div>
              <SocialLinks></SocialLinks>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
