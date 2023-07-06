import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Whyus = () => {
  return (
    <div className="p-0 lg:px-12">
      <h1 className="text-[55px] md:text-[60px] sm:text-[70px] font-bold">
        Why Us?
      </h1>
      <p className="text-gradient font-normal text-[18px]  sm:text-[23px] lg:text-[30px] cursor-pointer my-5">
        <span className="gradient">
          At Tefora, we wield the alchemy of code and creativity to craft
          digital dreams into reality.
        </span>
        <span className="gradient">
          With our pixel-perfect designs, elegant user interfaces, and flawless
          functionality, we weave spells that captivate your audience.
        </span>
        <span className="gradient">
          Trust us to manifest your visions into ethereal software, apps, and
          websites that leave lasting enchantment.
        </span>
      </p>
    <Link>
    <button className="text-white pl-5 sm:text-[18px] rounded-[50px] border-2 flex items-center project-btn flex">
          Start a project with us today
          <AiOutlinePlusCircle className="text-[35px] m-1 plus-icon" />
        </button>
    </Link>
    </div>
  );
};

export default Whyus;
