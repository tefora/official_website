import React from "react";
import styles from "../../styles";
import {
  Navbar,
  Counters,
  CTAsection,
  Footer,
  HeroWeb,
  ServiceDesc,
  WhatWeOffer,
  ServiceProcess,
  Services,
  PortfolioBtn,
} from "../index";

const WebDevelopment = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <HeroWeb />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <ServiceDesc />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#0B0C0F]`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <WhatWeOffer />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <ServiceProcess />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingBottom}`}>
            <Services/>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingBottom}`}>
            <Counters />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingBottom}`}>
            <PortfolioBtn />
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

export default WebDevelopment;
