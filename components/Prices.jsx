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
      <section className="mt-32 py-8 md:mt-0">
        <h1 className="text-center text-2xl font-bold md:text-3xl ">
          Shipping Prices
        </h1>
        <p className="my-3 text-center text-xs font-light opacity-80 md:text-sm">
          Our Shipping charges for the shipments
        </p>
        <div>
          <div className="mx-auto flex  w-full flex-col">
            <Slider {...settings}>
              {shippingPrice.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="card color-white mx-2  md:p-3 xl:mx-3  2xl:mx-6">
                    <div className="cardss h- cursor-pointer  rounded-lg bg-[#fafafa] py-4 px-3 pb-8 duration-300 hover:bg-[#ffffff] md:h-[330px] md:px-2 ">
                      <h2 className="font-sm mt-4 text-center font-light">
                        {item.name}
                      </h2>
                      <h1 className="text-center text-xl font-semibold">
                        {item.title}
                      </h1>
                      <div className="mt-4 flex items-center justify-center gap-1 text-center">
                        <h3 className="text-lg font-light ">{item.price}</h3>
                        <h3 className="text-lg font-light text-[#FE0000]">
                          {item.rate}
                        </h3>
                      </div>
                      <hr className="my-4  px-2" />
                      <p className=" text-center">{item.detail_title}</p>
                      <h4 className="mt-3 px-6 text-center text-sm">
                        {item.address}
                      </h4>
                      <button className="my-6  flex w-full items-center justify-center gap-2 rounded-md border-[1px] py-2">
                        <h1 className=" rounded-full bg-green-600 p-[3px] text-xl text-white">
                          {" "}
                          {item.ico}
                        </h1>
                        <h5>{item.phone}</h5>
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
