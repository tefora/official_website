import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Navigation, EffectFade } from "swiper";
const ProjectDesc = () => {
  return (
    <div className="mt-5 lg:mr-20">
      <Swiper
        effect={"fade"}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
          clickable: true,
        }}
        modules={[Navigation, EffectFade]}
        className="mySwiper "
      >
        <SwiperSlide className="bg-[#0B0C0F]">
          <div className="flex flex-row justify-between">
            <h2 className="text-[25px] sm:text-[40px] font-semibold">01</h2>
            <div>
              <h6 className="text-[18px] sm:text-[25px] font-semibold">
                Tefora Tech
              </h6>
              <p className="text-[16px] sm:text-[22px] font-light">
                UI UX Design{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0B0C0F]">
          <div className="flex flex-row justify-between">
            <h2 className="text-[25px] font-semibold sm:text-[40px]">02</h2>
            <div>
              <h6 className="text-[18px] sm:text-[25px] font-semibold">
                Al-Abrar
              </h6>
              <p className="text-[16px] sm:text-[22px] font-light">
                Web Design{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0B0C0F]">
          <div className="flex flex-row justify-between">
            <h2 className="text-[25px] font-semibold sm:text-[40px]">03</h2>
            <div>
              <h6 className="text-[18px] sm:text-[25px] font-semibold">
                Gzone Tourism
              </h6>
              <p className="text-[16px] sm:text-[22px] font-light">
                Mobile Application{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectDesc;
