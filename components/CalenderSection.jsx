import React, { useState } from "react";
import Calender from "./Calender";

const CalenderSection = () => {
  return (
    <>
      <section className="py-4 md:py-8">
        <h1 className="text-center text-[28px] font-semibold leading-10 lg:text-[40px]">
          Shipment Calendar
        </h1>
        <p className="mt-2 text-center  text-[14px] font-light leading-7  tracking-wide text-[black] opacity-80 lg:text-[16]">
          Check out the dates we will be shipping from your City and send in
          your items to our office.
        </p>
        <div className="mt-2 flex w-[100%]  flex-col gap-5 md:mt-4 md:flex-row">
          {/* Child 1 */}
          <div className="scrl flex w-[100%] flex-1 flex-row  gap-4 overflow-x-scroll pb-2 md:h-[16rem] md:w-[20%] md:flex-col md:gap-0 md:space-y-4 md:overflow-y-scroll md:pb-0  md:pr-2 lg:items-center ">
            {/* Its mini selection child */}
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center  font-normal text-[#212121]  hover:font-medium hover:text-[#FE0000]   md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2 text-[14px]  opacity-70  md:ml-4 md:w-auto md:p-0">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center  font-normal   text-[#212121] hover:font-medium hover:font-medium hover:text-[#FE0000] md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2   text-[14px] opacity-70 md:ml-4 md:w-auto md:p-0">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center font-normal   text-[#212121] hover:font-medium hover:font-medium hover:text-[#FE0000]  md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2  text-[14px] opacity-70 md:ml-4 md:w-auto md:p-0">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center font-normal  text-[#212121] hover:font-medium  hover:text-[#FE0000] md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2   text-[14px] opacity-70 md:ml-4 md:w-auto md:p-0">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center font-normal   text-[#212121] hover:font-medium hover:text-[#FE0000] md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2   text-[14px] opacity-70 md:ml-4 md:w-auto md:p-0">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center  font-normal     text-[#212121] hover:font-medium  hover:text-[#FE0000] md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2 text-[14px]  opacity-70 md:ml-4 md:w-auto md:p-0 ">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center  font-normal    text-[#212121] hover:font-medium  hover:text-[#FE0000] md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2 text-[14px]  opacity-70 md:ml-4 md:w-auto md:p-0 ">
                HOUSTON TO LAGOS
              </h4>
            </div>
            <div className="sid cursor-pointer rounded-md   border-[1px] text-center   font-normal   text-[#212121] hover:font-medium hover:text-[#FE0000] md:p-2 md:text-left lg:w-[100%]">
              <h4 className="w-[10rem] p-2 text-[14px]  opacity-70 md:ml-4 md:w-auto md:p-0 ">
                HOUSTON TO LAGOS
              </h4>
            </div>
          </div>
          {/* Child 2 */}
          <div className="flex-1 md:w-[70%]">
            <Calender />
          </div>
        </div>
      </section>
    </>
  );
};
export default CalenderSection;
