import React from "react";
import { workProcess } from "../../constants";

const WorkProcess = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-[30px] sm:text-[45px]  mb-2 text-center">
          The Work Process
        </h1>
        <p className="text-center text-[16px]  leading-[28px] sm:leading-[31px] md:text-[18px] lg:text-[20px] lg:px-10">
          This is how we proceed with all our initiatives. Following all
          industry standards, we ensure that the products we develop and release
          meet the best standards. We never settle.
        </p>
      </div>
      <div className="mt-10 lg:mx-32">
        {workProcess.map((item) => (
          <div
            key={item.id}
            className="border-1 border border-[#333333] p-4 flex flex-col items-center justify-center md:items-start mb-5 md:mb-8 rounded-[15px] gap-5 lg:gap-3 md:flex-row"
          >
            <div className="bg-[#0B0C0F] w-full md:flex-none md:h-full md:w-[200px] rounded-[15px]">
              <img src={item.img} alt="" className=" m-auto" />
            </div>
            <div className="text-center md:text-start lg:p-5">
              <h3 className="text-[25px] mb-2 font-semibold  lg:text-[30px]">
                {item.title}
              </h3>
              <p className=" text-[15px] lg:text-[16px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkProcess;
