import React from "react";
import { BsArrowRight } from "react-icons/bs";


const ExploreButton = () => {
  return (
    <>
      <div className="flex items-center border-primary solid border w-[230px] h-[180px] rounded-[25px] p-7 relative explore">
        <div className="ms-3">
          <BsArrowRight className="text-white text-[30px] arrow m-auto" />
          <h4 className="text-[22px] mt-1">Explore More</h4>
        </div>
      </div>
    </>
  );
};

export default ExploreButton;
