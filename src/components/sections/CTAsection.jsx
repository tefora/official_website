import React from "react";
import { Link } from "react-router-dom";

const CTAsection = () => {
  return (
    <div className="bg-cta-bg bg-cover bg-center p-5 sm:p-20 rounded-[30px]">
      <div className="text-center">
        <h6 className=" mb-8">Got An Idea?</h6>
        <h2 className="text-[30px] sm:text-[40px] font-semibold leading-[50px]">
          Let’s craft brilliance
          <br /> together!
        </h2>
        <Link className="text-primary border-2 border-primary btn-1 rounded-[90px] px-6 py-3 mt-8">
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default CTAsection;
