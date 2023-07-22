import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper";
import { Testimonial } from "../../constants";

export default function TextSlide() {
  return (
    <>
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
        className="mySwiper testimonial"
      >
        {Testimonial.map((items) => (
          <SwiperSlide key={items.id} className="bg-black">
            <div className="flex flex-col items-center justify-center lg:flex-row-reverse lg:mx-32 lg:p-5">
              <img
                src={items.profile}
                alt="profile"
                className="inset-0 w-36 h-36 object-cover object-top rounded-full lg:rounded-none lg:w-72 lg:h-full -mb-[40px] lg:mb-0"
                loading="lazy"
              />
              <div className="flex flex-col gap-10 p-5 lg:p-8">
                <p className="text-center text-white font-light leading-8 lg:text-start">
                  <FaQuoteLeft className="text-primary text-[30px] mb-4" />
                  {items.review}
                </p>
                <div>
                  <p className="text-center text-white lg:text-start">
                    {items.designation}
                  </p>
                  <img
                    src={items.company}
                    alt="company"
                    loading="lazy"
                    className="h-[30px] m-auto mt-4 lg:mx-0"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
