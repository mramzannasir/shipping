import Image from "next/image";
import React from "react";
import img1 from "/Images/docs.png";
import img2 from "/Images/mini-truck.png";
import img3 from "/Images/location-del.png";
const Timeline = () => {
  return (
    <>
      <section className="py-8">
        <h1 className="text-center text-[28px] font-semibold leading-10 ">
          How It Works
        </h1>
        <p className=" text-center text-[16px] font-light leading-7 opacity-80 md:text-sm">
          The plate form is Hassle free and simple to use!
        </p>
        {/* For Mobile */}
        <div className="px-2 md:hidden">
          <div className="flex flex-col justify-center">
            <div className="mx-auto inline-block rounded-full border-4 border-[#FE0000] bg-white p-4">
              <Image
                src={img1}
                alt="ico"
                height={35}
                className="inline-block"
              />
            </div>
            <div className="mx-auto h-[3rem] w-[2px] bg-[#FE0000]"></div>
            <div className="mx-auto rounded-xl bg-white py-4 px-2">
              <h1 className="text-center text-[20px] font-medium leading-6">
                Choose your shipment
              </h1>
              <p className="mt-2 px-2 text-center text-[16px] font-normal leading-6 opacity-[.8]">
                Send in your items to our office or contact us for a pick up.
                Fill our form to document your details which will include
                recipient info and destination of shipment.
              </p>
            </div>
            <div className="mx-auto h-[3rem] w-[2px] bg-[#C2C2C2]"></div>
            <div className="mx-auto inline-block rounded-full border-4 border-[#C2C2C2] bg-white p-4">
              <Image
                src={img2}
                alt="ico"
                height={35}
                className="inline-block"
              />
            </div>
            <div className="mx-auto h-[3rem] w-[2px] bg-[#C2C2C2]"></div>
            <div className="mx-auto rounded-xl bg-white py-4 px-2">
              <h1 className="text-center text-[20px] font-medium leading-6 opacity-50">
                Pick & Ship
              </h1>
              <p className="mt-2 px-2 text-center text-[16px] font-normal leading-6 text-[#212121] opacity-[.5]">
                When your shipment arrives at our office, we will perform a
                final inspection before sending it out to its final destination
              </p>
            </div>
            <div className="mx-auto h-[3rem] w-[2px] bg-[#C2C2C2]"></div>
            <div className="mx-auto inline-block rounded-full border-4 border-[#C2C2C2] bg-white p-4">
              <Image
                src={img3}
                alt="ico"
                height={35}
                className="inline-block"
              />
            </div>
            <div className="mx-auto h-[3rem] w-[2px] bg-[#C2C2C2]"></div>
            <div className="mx-auto rounded-xl bg-white py-4 px-2">
              <h1 className="text-center text-[20px] font-medium leading-6 opacity-50">
                Track Shipment
              </h1>
              <p className="mt-2 px-2 text-center text-[16px] font-normal leading-6 text-[#212121] opacity-[.5]">
                We would send updates as they are available.
              </p>
            </div>
          </div>
        </div>
        {/* For PC and */}
        <div className="hidden md:block ">
          <div className="ml-6 flex items-center lg:ml-12 xl:ml-20 2xl:mt-6 2xl:ml-40">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FE0000] bg-white ">
              <h3 className="m-auto inline-block text-xl font-bold text-[#FE0000]">
                1
              </h3>
            </div>
            <div className="w-[20rem] border-t-4 border-dashed border-[#FE0000] lg:w-[22rem] xl:w-[27rem]"></div>
            <div className=" relative rounded-full border-4 border-[#FE0000] bg-white p-4">
              <Image
                src={img1}
                alt="ico"
                height={35}
                className="inline-block"
              />
              <div className="absolute top-[4.2rem] left-[50%] mx-auto  h-[10rem] w-[3px] bg-[#C2C2C2] opacity-95 xl:h-[17rem] ">
                <div className="absolute h-[60%] w-[3px] rounded-full bg-[#FE0000]"></div>
              </div>
            </div>
            {/* 2nd */}
            <div className="lg:[top-15rem] relative top-[12rem] left-[-4.4rem] xl:top-[18rem] ">
              <div className="absolute flex items-center">
                <div className=" flex items-center">
                  <div className="mx-auto inline-block rounded-full border-4  border-[#C2C2C2] bg-white p-4">
                    <Image
                      src={img2}
                      alt="ico"
                      height={35}
                      className="inline-block"
                    />
                  </div>
                </div>
                <div className="h-[3px] w-[17rem] bg-[#C2C2C2] lg:w-[22rem]  xl:w-[27rem] 2xl:w-[28rem]"></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C2C2C2] bg-white ">
                  <h3 className="m-auto inline-block text-xl font-bold text-[#C2C2C2]">
                    2
                  </h3>
                </div>
                {/* Last Row */}

                <div className="absolute top-16 left-[-.2rem] flex flex-col  items-center">
                  <div className="line-1 h-[15rem] w-[3px] bg-[#C2C2C2] xl:h-[17rem] "></div>
                  <div className="">
                    <div className="mx-auto inline-block rounded-full border-4  border-[#C2C2C2] bg-white p-4">
                      <Image
                        src={img3}
                        alt="ico"
                        height={35}
                        className="inline-block"
                      />
                    </div>
                    <div className="absolute top-[16rem] right-[4.5rem] flex items-center xl:top-[18rem]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C2C2C2] bg-white ">
                        <h3 className="m-auto inline-block text-xl font-bold text-[#C2C2C2]">
                          3
                        </h3>
                      </div>
                      <div className=" h-[3px] w-[20rem] bg-[#C2C2C2] lg:w-[22rem] xl:w-[27rem]   2xl:w-[28rem]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[24rem] right-[23rem] mx-auto w-[20rem] rounded-xl bg-white  py-3 px-1 shadow lg:right-[28rem] 1xl:right-[38rem] 2xl:right-[40rem]">
                  <h1 className="text-xl font-medium opacity-50">
                    Track Shipment
                  </h1>
                  <p className="left mt-2 px-2 text-[16px] font-normal leading-6 opacity-50">
                    We would send updates as they are available.
                  </p>
                </div>
                <div className=" absolute top-[6rem] left-10 w-[20rem] rounded-xl bg-white py-3 px-2 shadow lg:left-12">
                  <h1 className="text-xl font-medium opacity-50">
                    Pick and Ship
                  </h1>
                  <p className="mt-2  text-[16px] font-normal leading-5 opacity-50">
                    When your shipment arrives at our office, we will perform a
                    final inspection before sending it out to its final
                    destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-16 w-[20rem] rounded-xl bg-white py-3 px-1 shadow lg:ml-24 2xl:ml-52">
            <h1 className="text-left text-xl font-medium opacity-80">
              Drop off Your Shipment
            </h1>
            <p className="mt-2  text-[16px] font-normal leading-5 opacity-[.8]">
              Send in your items to our office or contact us for a pick up.Fill
              our form to document your details which will include recipient
              info and destination of shipment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
