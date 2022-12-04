import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <section className="pt-8">
        <footer className="2xl:space-x- flex w-[100%] flex-col md:flex-row md:space-x-32 lg:space-x-52 xl:space-x-64">
          <div className="mx-auto md:mx-0">
            <div>
              <Image
                src="/Images/main-logo.png"
                width={50}
                height={50}
                alt="Logo"
                className="mx-auto md:mx-0"
              />
            </div>
            <div>
              <h6 className="mt-3 mb-3 text-center  text-sm font-semibold md:text-left xl:mt-8">
                Follow Us on
              </h6>
              <div className="flex items-center gap-2 text-xl  text-[#FE0000] 2xl:text-2xl">
                <div>
                  <BsTwitter className="cursor-pointer transition-all duration-300" />
                </div>
                <div>
                  <GrFacebookOption className="cursor-pointer transition-all duration-300 " />
                </div>
                <div>
                  <AiOutlineInstagram className="cursor-pointer transition-all duration-300 " />
                </div>
                <div>
                  <FaLinkedinIn className="cursor-pointer transition-all duration-300 " />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] flex-col justify-between  gap-6 text-center md:flex-row md:gap-0 md:text-left">
            <div className="mt-4 md:mt-0">
              <ul className="flex  flex-col space-y-2 md:space-y-4">
                <li className="text-lg font-medium">Home</li>
                <li className="text-sm font-light opacity-60">About Us</li>
                <li className="text-sm font-light opacity-60">Pricing</li>
              </ul>
            </div>
            <div>
              <ul className="flex  flex-col space-y-2 md:space-y-4">
                <li className="text-lg font-medium">Quick Links</li>
                <li className="text-sm font-light opacity-60">Services</li>
                <li className="text-sm font-light opacity-60">
                  Shipping Calender
                </li>
                <li className="text-sm font-light opacity-60">How it Works</li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <li className="text-lg font-medium">React Us At</li>
                <li className="flex items-center justify-center gap-2 md:justify-start">
                  <div>
                    <HiOutlineEnvelope className=" rounded-full bg-[#FE0000] p-[3px] text-2xl text-white " />
                  </div>
                  <div>
                    <a
                      className="text-sm font-light text-[#FE0000]"
                      href="mailto:support@ssaflogistics.com">
                      support@ssaflogistics.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-center gap-2 md:justify-start">
                  <div>
                    <IoCall className=" rounded-full bg-[#FE0000] p-[3px] text-2xl text-white " />
                  </div>
                  <div>
                    <a
                      className="text-sm font-light text-[#FE0000]"
                      href="tel:+1(346) 3819573">
                      +1(346) 3819573
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
