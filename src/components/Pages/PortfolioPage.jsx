
import React from "react";
import styles from "../../styles";
import {
  Navbar,
  CTAsection,
  Footer,
  HeroPortfolio,
  OurWork,
  PortfolioItem,
} from "../index";

const PortfolioPage = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <HeroPortfolio />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <OurWork />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <PortfolioItem />
          </div>
        </div>
        
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${styles.paddingBottom}`}>
              <CTAsection />
            </div>
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
