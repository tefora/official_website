import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import { Autoplay, EffectCreative } from "swiper";

export default function TextSlide() {
  return (
    <>
      <p className="text-white text-center sm:text-[18px] mb-8">HELLO THERE</p>
      <Swiper
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <h5 className="font-semibold text-[20px] md:text-[23px] lg:text-[40px] h-[144px] sm:h-[180px]">
            Driving digital success with innovative solutions for businesses.
            <span className="text-primary"> Partner with us.</span>
          </h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className="font-semibold text-[20px] md:text-[23px] lg:text-[40px] h-[144px] sm:h-[180px]">
            Empowering businesses with innovative
            <span className="text-primary">&nbsp;digital solutions&nbsp;</span>
            for growth and success.
          </h5>
        </SwiperSlide>
        <SwiperSlide>
          <h5 className="font-semibold text-[20px] md:text-[23px] lg:text-[40px] h-[144px] sm:h-[180px]">
            Helping <span className="text-primary">businesses</span> achieve
            digital success through innovative solutions.
            <span className="text-primary"> Your growth is our priority.</span>
          </h5>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
