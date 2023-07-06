import React from "react";
import styles from "../../styles";
import { counters } from "../../constants";
import CountUp from "react-countup";

const Counters = () => {
  return (
    <div
      className={`grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4  bg-[#0B0C0F] px-10 sm:px-12 py-10 sm:py-14 rounded-[20px]`}
    >
      {counters.map((items) => (
        <div key={items.id} className="text-center lg:text-start">
          <h2 className="text-primary text-[40px] lg:text-[50px] font-semibold">
            <CountUp end={items.count} enableScrollSpy scrollSpyOnce />+
          </h2>
          <h5 className="lg:text-[22px] text-[18px]">{items.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Counters;
