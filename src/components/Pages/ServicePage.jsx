import React from "react";
import styles from "../../styles";
import {
  Navbar,
  HeroService,
  Counters,
  ServiceItems,
  CTAsection,
  Footer,
  Whyus,
  WorkProcess,
} from "../index";

const ServicePage = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />

            <HeroService />
        
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <Counters />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingBottom}`}>
            <ServiceItems />
          </div>
        </div>
       <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#0B0C0F]`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <Whyus />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.sectionPadding}`}>
            <WorkProcess />
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

export default ServicePage;
