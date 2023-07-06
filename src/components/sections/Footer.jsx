import React from "react";
import { socialMedia, footerLinks } from "../../constants";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div>
      <h6 className="text-center mb-6">Follow Our Network</h6>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-5 lg:grid-cols-5 mx-2 sm:mx-0 lg:mx-16 text-center">
        {socialMedia.map((items) => (
          <div className="lg:text-center text-start" key={items.id}>
            <a
              href=""
              className="text-white text-[20px]  lg:text-[28px] font-semibold"
              key={items.id}
            >
              {items.title}
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-start justify-center lg:flex-row flex-col mb-8  mt-24">
        <div className="flex-[1] flex flex-col justify-start mr-0 lg:mr-10 text-center lg:text-start  lg:w-[400px]">
          <img
            src={logo}
            alt="hoobank"
            className="sm:w-[208px] h-[60px] w-[178px] sm:h-[70px] object-contain m-auto lg:m-0"
          />
          <p className="mt-4 max-w-full lg:max-w-[312px] md:px-20 md:mb-10 lg:px-0 ">
            A
            <span className="text-[17px] text-white font-medium">
              &nbsp;Tefora&nbsp;
            </span>
             company crafting meaningful experiences through Research, Design
            and Development.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap  md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]  text-grey-400`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
