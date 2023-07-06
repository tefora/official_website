import React from "react";
import {ServiceItems} from "../index";

export const Services = () => {
  return (
    <section>
      <div className="text-center mb-20">
        <h1 className=" sm:text-[45px] lg:text-[55px] text-[40px] font-bold">
          What We Do?
        </h1>
        <p className="text-[16px] leading-[28px] sm:leading-[31px] md:text-[18px] lg:text-[20px]">
          We specialize in crafting tailored digital solutions
          <br className="hidden sm:block" />
          that drive growth and engagement.
        </p>
      </div>
      <ServiceItems/>
    </section>
  );
};

export default Services;
