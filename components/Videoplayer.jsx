import React, { useRef, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Videoplayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
    setUpdate(1);
  };
  const handlePause = () => {
    videoRef.current.pause();
    setUpdate(0);
  };

  const [update, setUpdate] = useState(0);

  return (
    <>
      <div className="relative flex">
        <video
          className="relative h-full rounded-xl"
          onClick={handlePause}
          src="/Videos/vid.mp4" // your all videos and images folder make in public folder
          ref={videoRef}
          width="100%"
          height="100%"
          loop>
          Update our Browser
        </video>
        <div className="child absolute top-[50%] left-[50%] inline-block cursor-pointer transition">
          <AiFillPlayCircle
            className={`inline-block text-6xl text-white lg:text-7xl ${
              update === 1 ? "hidden" : ""
            }`}
            onClick={handlePlay}
          />
        </div>
      </div>
    </>
  );
};

export default Videoplayer;
