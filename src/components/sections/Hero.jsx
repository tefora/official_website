import React from "react";
import styles from "../../styles";
import PlayButton from "./PlayButton";
import ExploreButton from "./ExploreButton";

const Hero = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexStart} w-full py-20`}>
          <div className="w-full">
            <div className="w-full lg:w-[1000px]">
              <h1 className="font-bold text-[32px] text-center leading-[50px] sm:text-start md:text-[40px] md:leading-[65px]  lg:leading-[90px]  lg:text-[60px] ">
                Elevate Your World <br /> Empowering
                <span className="text-primary"> Digital</span> Horizons
              </h1>
              <p className="text-center text-[16px]  py-5 leading-[28px] sm:text-start sm:leading-[31px] md:text-[18px] lg:text-[20px] ">
                Empowering Digital Solutions: Igniting Transformation for a
                Limitless Tomorrow, Where Innovation Meets Possibility and
                Technology Unleashes the Extraordinary Potential Within Your
                Reach.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <PlayButton />
              <ExploreButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
