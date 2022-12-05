// @refresh reset
import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Section2 from "./Section2";
import Slick_Slider from "./Slick_Slider";
import CalenderSection from "./CalenderSection";
import Timeline from "./Timeline";
import Prices from "./Prices";
import Location from "./Location";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="px-2 xl:px-20 2xl:px-28">
          <Navbar />
        </div>
        <div className="bg-[#f9f9f9] px-2 xl:px-20 2xl:px-28">
          <Banner />
        </div>
        <div className="px-2 xl:px-20 2xl:px-28">
          <Section2 />
        </div>
        <div className="px-2 xl:px-20 2xl:px-28">
          <Slick_Slider />
        </div>
        <div className="px-2 xl:px-20 2xl:px-28">
          <CalenderSection />
        </div>
        <div className="Tbox h-[70rem] w-full">
          <div className="px-2 xl:px-20 2xl:px-28">
            <Timeline />
          </div>
        </div>
        <div className="px-2 xl:px-20 2xl:px-28">
          <Prices />
        </div>
        <div className="px-2 xl:px-20 2xl:px-28">
          <Location />
        </div>
        <div className="bg-[#fafafa]">
          <div className="px-2 xl:px-20 2xl:px-28">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
