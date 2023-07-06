import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const PlayButton = () => {
  return (
    <>
      <Link className="video-btn border-primary my-3 text-white solid border-2 rounded-[90px] flex items-center relative mb-10 sm:mb-0 text-[20px]">
        <div className="rounded-full bg-primary flex items-center justify-center w-[55px] h-[55px] play-btn">
          <BsFillPlayFill className="text-black text-[30px] play-icon" />
        </div>
        Play Video
      </Link>
    </>
  );
};

export default PlayButton;
