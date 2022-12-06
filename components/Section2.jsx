/* eslint-disable @next/next/no-img-element */
import React from "react";
import Videoplayer from "./Videoplayer";
import { AiFillRightCircle } from "react-icons/ai";

const Section2 = () => {
  return (
    <>
      <section className="my-6 md:mt-14 2xl:mt-16">
        <h1 className="mb-2 text-center text-2xl font-semibold md:hidden">
          Why you should <br /> chose us
        </h1>
        {/* Parent */}
        <div className="flex flex-col gap-2  md:flex-row xl:gap-8 2xl:justify-center 2xl:gap-12 ">
          {/* _________________________________Child_________________________________________ */}
          <div className="flex flex-1 md:justify-end">
            <img src="/Images/Bitmap.png" className="rounded-md" alt="Images" />
          </div>

          {/* _________________________________Child_________________________________________ */}
          <div className="mt-2 flex-1 md:mt-0">
            <h1 className="hidden text-xl font-semibold md:block md:text-3xl lg:font-bold">
              Why you should <br /> chose us
            </h1>
            {/*  */}
            <div className="mt-2 xl:mt-6">
              <div className="flex items-center gap-2 ">
                <div>
                  <AiFillRightCircle className="text-xl text-[#fe0000] xl:text-2xl" />
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold">Speed</h1>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#6C6C6C]">
                Fastest logistics company servicing Nigerian community. We
                deliver within 1 week.
              </p>
            </div>
            <div className="mt-2 xl:mt-6">
              <div className="flex items-center gap-2 ">
                <div>
                  <AiFillRightCircle className="text-xl text-[#fe0000] xl:text-2xl" />
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold">Pricing</h1>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#6C6C6C]">
                We provide competitive pricing while moving twice as fast as our
                competitors
              </p>
            </div>
            <div className="mt-2 xl:mt-6">
              <div className="flex items-center gap-2 ">
                <div>
                  <AiFillRightCircle className="text-xl text-[#fe0000] xl:text-2xl" />
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold">
                    Customer Services
                  </h1>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#6C6C6C]">
                We pay attention to our customers needs and work tirelessly to
                meet them.
              </p>
            </div>
            <div className="mt-2 xl:mt-6">
              <div className="flex items-center gap-2 ">
                <div>
                  <AiFillRightCircle className="text-xl text-[#fe0000] xl:text-2xl" />
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold">
                    Spacial Prices for Wholesaler
                  </h1>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#6C6C6C]">
                We offer pocket-friendly rates for Clients who ship item in bulk
                with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section2;
