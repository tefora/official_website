import React from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
import ProjectSlide from "./ProjectSlide";

const Projects = () => {
  return (
    <div className="bg-[#0B0C0F] p-5 py-10 sm:p-10 sm:py-16 rounded-[20px] lg:px-24">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="text-center lg:text-start">
          <h2 className=" text-[35px] sm:text-[45px] font-semibold leading-[50px] sm:leading-[57px]">
            Projects
          </h2>
          <p className="mt-5 text-[16px] leading-[28px] sm:leading-[31px] md:text-[18px] lg:text-[20px]">
            We specialize in crafting tailored digital solutions that <br className="hidden sm:block"/> drive
            growth and engagement.
          </p>
        </div>
        <div>
          <Link to="" className={`${styles.btnStyle1} btn-1 my-5`}>
            View More
          </Link>
        </div>
      </div>
      <div>
        <ProjectSlide />
      </div>
    </div>
  );
};

export default Projects;
