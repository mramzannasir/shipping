import React, { useState } from "react";
import logo from "../Images/main-logo.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <nav className="flex flex-col pt-1 md:flex-row md:items-center md:justify-between lg:pt-3">
          <div className="logo cursor-pointer ">
            <Image height={40} width={50} src={logo} alt="Logo of company" />
          </div>
          <div
            onClick={onclick}
            className="absolute right-1 top-2 cursor-pointer text-2xl md:hidden ">
            <ion-icon name={open ? "menu" : "menu"}></ion-icon>
          </div>

          <div
            className={
              "flex text-sm text-gray-800 md:ml-5 md:items-center md:justify-center "
            }>
            <ul
              className={`absolute z-50 flex h-[100vh] flex-col px-2 pt-1 opacity-[.999] md:static md:h-auto  md:flex-row md:items-center md:justify-between md:space-x-3 md:px-0 md:pt-0  ${
                open ? "left-0 top-0 right-20 " : "left-[-900px] top-0"
              } left-0  w-full bg-[#e9e9e9] transition-all duration-700 ease-in md:w-auto md:bg-inherit`}>
              <div className="flex items-center ">
                <div className="logo cursor-pointer ">
                  <Image height={40} src={logo} alt="normal" />
                </div>
                <div
                  onClick={onclick}
                  className="z-index-[0] absolute right-1 top-2 cursor-pointer text-3xl md:hidden">
                  <ion-icon name={open ? "close" : ""}></ion-icon>
                </div>
              </div>

              <li className="my-2 cursor-pointer border-stone-50 text-center font-normal md:my-auto md:border-none">
                Home
              </li>
              <li className="my-2 cursor-pointer text-center font-normal md:my-auto md:border-none md:text-left">
                Education
              </li>
              <li className="my-2 cursor-pointer text-center font-normal md:my-auto md:border-none md:text-left">
                About
              </li>
              <li className="my-2 cursor-pointer text-center font-normal md:my-auto md:border-none md:text-left">
                Contact
              </li>
              <li className="my-2 cursor-pointer text-center font-normal md:my-auto md:border-none md:text-left">
                Services
              </li>
              <li className=" flex justify-center pb-1 md:justify-start">
                <button className="rounded-lg bg-[#fe0000] px-3 py-2 text-sm font-semibold text-white  md:w-auto md:py-2 md:px-3 md:text-base">
                  JOIN WAITING LIST
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
