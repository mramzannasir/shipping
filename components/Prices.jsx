/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shippingPrice } from "../Assets/Data";
const Prices = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  console.log(shippingPrice);
  return (
    <>
      <section className="mt-3 py-4 md:mt-0">
        <h1 className="text-center text-[28px] font-semibold leading-10 ">
          Shipping Prices
        </h1>
        <p className="my-3 px-2 text-center font-light leading-7 text-[16] text-black opacity-80">
          Our Shipping charges for the shipments
        </p>
        <div>
          <div className="mx-auto flex  w-full flex-col">
            <Slider {...settings}>
              {shippingPrice.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="card color-white mx-2 flex items-center  md:p-3 xl:mx-3  2xl:mx-6">
                    <div className="cardss  flex-1 cursor-pointer  rounded-lg bg-[#e66060] py-4 px-3 pb-8 duration-300 hover:bg-[#ffffff] md:h-[330px] md:px-2 ">
                      <h1 className="font-sm mt-4 text-center text-[16px] font-normal leading-8">
                        {item.name}
                      </h1>
                      <h1 className="text-center text-[23px] font-semibold">
                        {item.title}
                      </h1>
                      <div className="mt-1 flex items-center justify-center gap-1 text-center">
                        <h3 className="text-[18px]  leading-5">{item.price}</h3>
                        <h3 className="text-[18px] font-semibold text-[#FE0000]">
                          {item.rate}
                        </h3>
                      </div>
                      <hr className="my-2 px-2" />
                      <h1 className=" text-center text-[16px] font-normal leading-5 opacity-80">
                        {item.detail_title}
                      </h1>
                      <h1 className="mt-3 px-2 text-center text-[16px] font-normal leading-7">
                        {item.address}
                      </h1>
                      <button className="my-6  flex w-full items-center justify-center gap-2 rounded-md border-[1px] py-2">
                        <h1 className=" rounded-full bg-[#29A71A] p-[3px] text-xl text-white">
                          {" "}
                          {item.ico}
                        </h1>
                        <h1 className="text-[16px] font-semibold leading-5">
                          {item.phone}
                        </h1>
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
