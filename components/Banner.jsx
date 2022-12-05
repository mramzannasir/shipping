/* eslint-disable jsx-a11y/alt-text */
import next from "next";
import React from "react";
import img1 from "../Images/Banner.png";
import Image from "next/image";
import img2 from "../Images/customrts.png";
import img3 from "../Images/team.png";
import img4 from "../Images/locater.png";
const Banner = () => {
  return (
    <>
      <div className="">
        {/*  */}
        <section className="pt-8 xl:pt-10">
          <div className="flex  flex-col items-center md:flex-row xl:justify-center 2xl:items-center 2xl:gap-12">
            <div className="flex flex-col text-center md:text-left ">
              <h1 className="text-[32px] font-bold leading-10 xl:text-4xl 2xl:text-6xl">
                Nigeria logistic simplified
              </h1>
              <p className="my-4 px-[3px] text-center text-[16px] font-normal leading-relaxed text-[#212121] opacity-80 md:my-2 md:px-0 md:text-left">
                We make shipping fast and easy through air freight Logistics at
                affordable prices.
              </p>
              <div className="flex px-3 md:px-0">
                <button className="mx-auto w-full rounded-lg bg-[#fe0000] px-4 py-4 text-sm font-semibold text-white md:mx-0 md:w-auto md:py-2 md:px-3 md:text-base">
                  LETS GET STARTED
                </button>
              </div>
            </div>
            <div className="mt-12 flex justify-center md:mt-0">
              <Image src={img1} className="" alt="normal" priority />
            </div>
          </div>
        </section>
        {/* Lower Box */}
        <section className="mx-auto -mt-6 flex w-full flex-col items-center  justify-center rounded-md bg-white p-4 py-6 opacity-95 shadow-lg md:-mt-2 md:flex-row md:justify-around  md:p-3 md:px-4 md:shadow-2xl xl:p-4 2xl:px-11 ">
          <div className="flex  items-center justify-center  gap-4 md:flex-row xl:gap-6">
            <div className="ico rounded-full bg-white p-3">
              <Image src={img3} alt="normal" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">1000+</h1>
              <p className="text-sm">Fastest Deliveries</p>
            </div>
          </div>
          {/* Line */}
          <div className="my-6 h-[1px] w-full bg-[#6868683b] md:my-0 md:mr-6 md:h-10 md:w-[1px] md:bg-[#68686877] lg:mr-0 xl:h-16"></div>
          <div className="flex  items-center justify-center  gap-4 md:flex-row xl:gap-6">
            <div className="ico rounded-full bg-white p-3">
              <Image src={img2} alt="normal" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">150+</h1>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
          {/* Line */}
          <div className="my-6 h-[1px] w-full bg-[#6868683b] md:my-0 md:mr-6 md:h-10 md:w-[1px] md:bg-[#68686877] lg:mr-0 xl:h-16"></div>
          <div className="flex  items-center justify-center  gap-4 md:flex-row xl:gap-6">
            <div className="ico rounded-full bg-white p-3">
              <Image src={img4} alt="normal" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">100+</h1>
              <p className="text-sm">Nationwide Reach</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Banner;
