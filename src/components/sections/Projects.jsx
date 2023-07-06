import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { slide1, slide2, slide3 } from "../../assets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Navigation } from "swiper";

function App() {
  return (
    <div className="flex items-center justify-center w-full projects">
      <div className="container">
        <Swiper 
          // loop={true}
          effect={"coverflow"}
          speed={1000}
          direction={"vertical"}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          // slideToClickedSlide={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 500,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className=" h-[458px] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage:  `url(${slide1})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[458px] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide2})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[458px] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide3})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[458px] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide2})` }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[458px] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide3})` }}></div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
