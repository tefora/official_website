import React from "react";
import styles from "../../styles.js";
import {
  Counters,
  Hero,
  Navbar,
  Testimonials,
  Products,
  Services,
  TextSlide,
  CTAsection,
  Footer,
  Projects,
} from "../index.js";

const HomePage = () => {
  return (
    <>
      <div className="w-full bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />

      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.sectionPadding}`}>
            <TextSlide />
          </div>
          <div className={`${styles.paddingBottom}`}>
            <Services />
          </div>
          <div className={`${styles.paddingBottom}`}>
            <Counters />
          </div>
          <div className={`${styles.paddingBottom}`}>
            <Products />
          </div>
          <div className={`${styles.paddingBottom}`}>
            <Testimonials />
          </div>
          <div className={`${styles.paddingBottom}`}>
            <Projects />
          </div>
          <div className={`${styles.paddingBottom}`}>
            <CTAsection />
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
