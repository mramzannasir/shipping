/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Locations } from "../Assets/Data";
import Image from "next/image";

const Location = () => {
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
        <h1 className="text-center text-[28px] font-semibold leading-10">
          Our Locations
        </h1>
        <p className="mt-6 text-center text-[16px] font-light leading-7 text-black opacity-80">
          We currently have four physical locations. Three operating
          offices/warehouse
        </p>

        <Slider {...settings}>
          {Locations.map((item, index) => (
            <>
              <div
                key={index}
                className="card color-white mx-3  items-center   md:mx-6 2xl:mx-8">
                <div className="cardss  cursor-pointer rounded-lg bg-[#fafafa] px-6 py-4 shadow-xl  duration-300 hover:bg-[#ffffff]">
                  <img
                    className="h-auto w-full  xl:h-[15rem]"
                    src={item.Img}
                    alt="locations"
                  />
                  <p className="mt-2 text-center text-[16px] font-light leading-7 text-black opacity-80">
                    {item.loc}
                  </p>
                  <button className="mt-6 w-full rounded-lg border-[1px] border-[#FE0000] py-2 text-center text-[16px] font-semibold leading-5 text-[#FE0000]">
                    <a href="https://www.google.com/maps/place/12763+Capricorn+St+%23900,+Stafford,+TX+77477,+USA/@29.6353995,-95.5694544,17z/data=!3m1!4b1!4m5!3m4!1s0x8640e7d0d20fffff:0x375fb3e9bc47e7ad!8m2!3d29.6353949!4d-95.5672657">
                      VIEW LOCATION
                    </a>
                  </button>
                  <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-md border-[1px] py-2">
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
      </section>
    </>
  );
};

export default Location;
