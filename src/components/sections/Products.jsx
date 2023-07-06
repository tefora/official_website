import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="text-center relative mt-5">
      <h1 className="absolute text-[60px] md:text-[120px] lg:text-[140px]  font-bold left-0 right-0 -top-[40px] sm:-top-[80px] lg:-top-[90px] -z-1 opacity-01">
        PRODUCTS
      </h1>
      <h2 className=" text-[35px] sm:text-[45px] font-semibold leading-[50px] sm:leading-[57px]">
        We create technology that
        <br /> improves lives
      </h2>
      <p className="mt-5 text-[16px] leading-[28px] sm:leading-[31px] md:text-[18px] lg:text-[20px]">
        We make products we are proud of, and we share them with our families,
        <br />
        friends and those closest to us. Are you curious about what we have
        already built?
      </p>
      <Link>
        <button className="swipe-btn relative bg-primary flex items-center rounded-[10px] font-semibold text-[18px] m-auto mt-10">
          View All Products
          <IoIosArrowDroprightCircle className="text-black text-[32px] round-arrow absolute right-[10px]" />
        </button>
      </Link>
    </div>
  );
};

export default Products;
