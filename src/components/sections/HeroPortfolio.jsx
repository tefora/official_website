import React from "react";
import styles from "../../styles";


const HeroPortfolio = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter}  bg-cover bg-no-repeat bg-center`}
    >
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexStart} ${styles.sectionPadding} w-full sm:py-20  border-b-2`}
        >
          <div className="w-full">
            <div className="w-full">
              <h1 className="font-bold text-[32px] text-center leading-[50px] sm:text-start md:text-[40px] md:leading-[60px]  lg:leading-[80px]  lg:text-[60px]">
              <span className="text-primary"> Work </span>  Speaks Louder 
              
                <br className="hidden lg:block"/>
                Than Word!
              </h1>
              <p className="text-center text-[16px]  py-5 leading-[28px] sm:text-start sm:leading-[31px] md:text-[18px] lg:text-[20px]">
              We've helped these clients delight users, overcome challenges, 
                <br className="hidden lg:block" /> and grow their businesses. And we can do it for you, too.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroPortfolio