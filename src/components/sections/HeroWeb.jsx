import React from "react";
import styles from "../../styles";
import PlayButton from "./PlayButton";

const HeroWeb = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter}  bg-cover bg-no-repeat bg-center bg-bg-web`}
    >
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexStart} ${styles.sectionPadding} w-full sm:py-20`}
        >
          <div className="w-full">
            <div className="w-full">
              <h1 className="font-bold text-[32px] text-center leading-[50px] sm:text-start md:text-[40px] md:leading-[60px]  lg:leading-[80px]  lg:text-[60px]">
                Custom
                <span className="text-primary"> Web Design </span>
                & <br className="hidden lg:block"/>
                Development
              </h1>
              <p className="text-center text-[16px]  py-5 leading-[28px] sm:text-start sm:leading-[31px] md:text-[18px] lg:text-[20px]">
                We are a custom web design and development company with a focus
                <br className="hidden lg:block" /> on simple, intuitive and high performance design &
                development.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
              <PlayButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroWeb;
