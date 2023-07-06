import { useState } from "react";
import { accordion1, accordion2, accordion3, accordion4 } from "../../assets";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { accordions } from "../../constants";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(1);

  let activeImg;
  if (activeIndex === 1) {
    activeImg = accordion1;
  } else if (activeIndex === 2) {
    activeImg = accordion2;
  } else if (activeIndex === 3) {
    activeImg = accordion3;
  } else if (activeIndex === 4) {
    activeImg = accordion4;
  }

  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <h1 className="font-bold text-[30px] sm:text-[45px]  mb-2 text-start">
        What We Offer?
      </h1>
      <p className="text-start text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] mb-10 max-w-full lg:max-w-[500px]">
        We specialize in crafting tailored digital solutions
         that drive growth and engagement.
      </p>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div>
          {accordions.map((item, index) => (
            <Accordion
              key={item.id}
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
              onClick={() => setActiveIndex(item.id)}
            >
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className={`text-white text-[18px]  hover:text-white bg-[#22242B] px-6 py-5 rounded-[10px] border-0 ${
                  index === accordions.length - 1 ? "mb-0" : "mb-3"
                }`}
              >
                <h6>{item.title}</h6>
              </AccordionHeader>
              <AccordionBody
                className={`pb-4 px-2  ${
                  index === accordions.length - 1 ? "pt-4" : "pt-0"
                }`}
              >
                <p className="text-[16px] font-normal">{item.content}</p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
        <div
          className="w-auto h-[350px] flex-none bg-cover bg-no-repeat bg-center rounded-[15px] lg:w-[350px] lg:h-auto"
          style={{ backgroundImage: `url(${activeImg})` }}
        ></div>
      </div>
    </div>
  );
}
