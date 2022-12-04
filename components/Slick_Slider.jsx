/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../Assets/Data";

const Slick_Slider = () => {
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

  return (
    <>
      <section className="py-6">
        <h1 className="2xl:5xl text-center text-3xl font-bold md:text-4xl">
          Services
        </h1>
        <p className="my-4 text-center text-base font-normal leading-5">
          We offer outstanding services on time, every time at affordable rates.
        </p>
        <div className="mx-auto flex  w-full flex-col">
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item, index) => (
              <>
                <div
                  key={index}
                  className="card color-white  mx-2 md:p-3 xl:mx-3  2xl:mx-6">
                  <div className="cardss h-[280px] cursor-pointer rounded-lg bg-[#fafafa] px-6  py-4 duration-300 hover:bg-[#ffffff] md:h-[290px]">
                    <img
                      className="mx-auto"
                      src={item.Image}
                      alt="normal"
                      srcSet=""
                    />
                    <h1 className="mt-6 text-center text-xl font-semibold">
                      {item.title}
                    </h1>
                    <p className="mt-4 mb-2 text-center text-sm font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Slick_Slider;
