import React from "react";
import { Serviceprocess } from "../../constants";

const ServiceProcess = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <p className="text-center text-[17px] lg:text-[25px] leading-[31px] mb-3">
        Process
      </p>
      <h1 className="font-bold text-[30px] sm:text-[45px]  text-center">
        Our Web <span className="text-primary">Development</span> Process
      </h1>
      <div className="flex flex-wrap mt-16 lg:mx-20">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none gap-8 lg:gap-10 sm:gap-8 flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {Serviceprocess.map((item) => (
              <li key={item.id} className="-mb-px last:mr-0 flex-auto text-center">
                <a
                  className={`
                  text-sm font-semibold uppercase px-5 py-4 shadow-lg block leading-normal rounded-[8px]
                  ${
                    openTab === item.id
                      ? "text-primary bg-dark border border-1 border-primary"
                      : "text-grey-400 border border-1 border-grey-400"
                  }
                `}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(item.id);
                  }}
                  data-toggle="tab"
                  href={`#${item.link}`}
                  role="tablist"
                >
              {item.tabtitle}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-dark w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
              {Serviceprocess.map((item)=>(
                  <div key={item.id} className={openTab === item.id ? "block" : "hidden"} id={item.link}>
                 <div className="flex flex-col sm:flex-row">
                  <img src={item.image} alt="" className="md:h-[300px] lg:h-[400px]" />
                 <div>
                  <h4 className="text-white text-[30px] mb-5 font-semibold">{item.header}</h4>
                 <p className="text-[16px] sm:text-[18px]">
                   {item.desc}
                  </p>
                 </div>
                 </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceProcess;
