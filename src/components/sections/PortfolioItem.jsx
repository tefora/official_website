import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { portfolioItems } from "../../constants";

const PortfolioItem = () => {
  return (
    <>
      {portfolioItems.map((item) => (
        <div className="bg-[#0B0C0F] p-5 rounded-[20px] mb-10 md:flex gap-5 items-center lg:p-10">
          <div className="md:flex-1">
            <img src={item.img} alt="" className="mb-4 lg:m-auto" />
          </div>
          <div className="p-2 md:flex-1">
            <h4 className="text-[20px] font-medium mb-2 lg:text-[30px]">{item.title}</h4>
            <p>{item.desc} </p>
            <BsArrowRight className="text-white text-[35px] mt-4" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioItem;
