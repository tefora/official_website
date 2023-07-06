import React from "react";
import styles from "../../styles";
import { BsFillPlayFill } from "react-icons/bs";
import PlayButton from "./PlayButton";

const HeroService = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter}  bg-cover bg-no-repeat bg-center bg-bg-service`}
    >
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexStart} ${styles.sectionPadding} w-full sm:py-20`}
        >
          <div className="w-full">
            <div className="w-full">
              <h1 className="font-bold text-[32px] text-center leading-[50px] sm:text-start md:text-[34px] md:leading-[50px]  lg:leading-[75px]  lg:text-[55px] ">
                Create Your
                <span className="text-primary"> Digital Future </span>
                <br className="hidden lg:block"/> Extensible,
                 Secured and Innovative
              </h1>
              <p className="text-center text-[16px]  py-5 leading-[28px] sm:text-start sm:leading-[31px] md:text-[18px] lg:text-[20px]">
                We offer wide range of services.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between">
           <PlayButton/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroService;
