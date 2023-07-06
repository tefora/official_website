import React from "react";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="flex flex-col  gap-10 items-center sm:flex-row sm:gap-8">
      <div className="text-center sm:text-left">
        <h2 className="text-[30px] font-medium mb-2 lg:text-[40px]">
          Our Works
        </h2>
        <h6 className="text-[18px] lg:text-[20px]">
          Custom tailored solutions we built for our clients to achieve their
          unique business goals.
        </h6>
      </div>
      <div className="border-2 border-primary rounded-[15px] p-5 text-center sm:text-left flex flex-col lg:flex-row items-center md:items-start lg:items-center lg:p-8 lg:gap-10">
        <p className="text-white">
          Have an idea? Let's create your dream digital solution together!
        </p>
        <Link className="bg-primary rounded-[10px] px-6 py-2  mt-5 text-[18px] font-medium flex-none lg:mt-0">
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default OurWork;
