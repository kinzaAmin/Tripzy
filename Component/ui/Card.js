import React from "react";
import Image from "next/image";
const Card = (props) => {
  return (
    <>
      <div className="md:w-[330px] sm:w-[300px] w-[250px]  font-Segoe h-[490px]rounded-lg sm:p-3 shadow-xl">
        <dliv className="flex  ">
          <div className="grid grid-rows-2 gap-1 ml-2 w-[130px]">
            <span className="text-[16px] leading-[21px] text-[#312929] font-semibold">
              {props.heading}
            </span>
            <span className="md:text-[13px] text-[11px]  leading-[17px]  font-normal text-[#3F3A3A]">
              {props.subHeading}
            </span>
          </div>
          <div className="bg-[#40C1FB] cursor-pointer pt-3  items-center  w-[130px] ml-5  h-[40px]  rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]">
            {props.btn}
          </div>
        </dliv>
        <div className=" mt-4  ">
          <div className="w-full">
            <Image
              src={props.img}
              alt="yatch"
              fill
              className="z-0 custom_img rounded-lg"
            />
          </div>
          {/* <div className=" z-20 mt-[-35px] ml-[280px] h-[19px] font-[600] leading-[17.29px] text-[13px] text-[#FFFFFF]">
              <span className=" rounded border border-[#FFFFFF] px-2">
                {props.size}
              </span>
            </div> */}
        </div>
        <div className="grid grid-cols-1 md:ml-8 gap-2  p-1 text-[13px] leading-[17px]  font-normal ">
          <span className="text-[16px]  sm:mt-2 mt-1 leading-[21px] font-semibold text-[#312929]">
            {props.price1}
          </span>
          <div className="w-44 h-[1px] ml-6   sm:mt-2  bg-[#D9D9D9]"></div>
          {/* <span className="text-[#3F3A3A]">4 Berth | 3 Cabin</span> */}
          <span className="text-[16px] leading-[21px] sm:pb-0 pb-2 sm:mt-2  font-semibold text-[#312929]">
            {props.price2}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
