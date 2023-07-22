import React from "react";
import { BsArrowLeftShort,BsArrowRightShort } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Navigation } from "swiper";
import { projects } from "../../constants";

function ProjectSlide() {
  return (
    <div className="flex flex-col mt-10 sm:mt-0 lg:flex-row lg:items-center lg:gap-10 lg:mt-10">
      <div className="flex items-center justify-center w-full h-[210px] sm:h-[550px] projects">
        <div className="container">
          <Swiper
            effect={"coverflow"}
            speed={1000}
            direction={"vertical"}
            // grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            slideToClickedSlide={false}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            freeMode={false}
            coverflowEffect={{
              rotate: 5,
              stretch: 450,
              depth: 100,
              modifier: 1.1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}

            modules={[EffectCoverflow, Navigation]}
            className="swiper-container"
          >
          {projects.map((items)=>(
              <SwiperSlide>
              <div
                className=" h-[470px] w-full bg-contain bg-center bg-no-repeat sm:h-[440px]"
                style={{ backgroundImage: `url(${items.image})` }}
              ></div>
            </SwiperSlide>
          ))}
           
          </Swiper>
        </div>
      </div>
      <div className="slider-controler flex flex-row gap-5 justify-center relative z-10 lg:flex-col">
        <div className="swiper-prev slider-arrow h-[40px] w-[40px] flex items-center justify-center rounded-full bg-primary">
        <BsArrowLeftShort className="arrow text-[40px] icon text-black" />
        </div>
        <div className="swiper-next slider-arrow h-[40px] w-[40px] flex items-center justify-center rounded-full bg-primary">
        <BsArrowRightShort className="arrow text-[40px] icon text-black" />
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;
