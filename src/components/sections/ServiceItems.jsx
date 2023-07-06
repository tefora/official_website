import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "../../styles";
import { services } from "../../constants";
import { Link } from "react-router-dom";

const ServiceItems = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10">
      {services.map((item) => (
        <div
          key={item.id}
          className="p-6 flex flex-col justify-between items-start bg-cover bg-center h-[450px] rounded-[30px] service-card relative"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="overlay"></div>
          <Link to={item.url} className="text-end w-full">
            <div
              className={`${styles.flexCenter} bg-primary rounded-full h-[55px] w-[55px] ms-auto arrow-icon`}
            >
              <BsArrowRightShort className="arrow text-[45px] icon" />
            </div>
          </Link>
          <div>
            <h3 className="font-semibold text-[26px]">{item.title}</h3>
            <h3 className="font-semibold text-[26px]">{item.title2}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceItems;
