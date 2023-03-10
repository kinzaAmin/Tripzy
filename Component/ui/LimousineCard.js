import React from "react";
import Image from "next/image";
import Container from "./Container";
const Card = (props) => {
  return (
    <>
      <div className="md:w-[330px] sm:w-[300px] w-[250px]   font-Segoe  rounded-lg   shadow-xl">
        <dliv className="flex  justify-between p-3 ">
          <div className="grid grid-rows-2 gap-1 ml-2">
            <span className="text-[16px] leading-[21px] text-[#312929] font-semibold">
              {props.heading}
            </span>
            <span className="md:text-[13px]  text-[9px]  leading-[17px]  font-normal text-[#3F3A3A]">
              {props.subHeading}
            </span>
          </div>
          <div className="bg-[#40C1FB] cursor-pointer pt-3  items-center  w-[80px]  h-[40px]  rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]">
            {props.btn} 
          </div>
        </dliv>
        <div className=" mt-4 p-3  ">
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
        <div className=" p-3 grid grid-cols-1 text-center  gap-2 p-5 text-[13px] leading-[17px]  font-normal ">
          <span className="text-[16px] leading-[21px] font-semibold text-[#312929]">
            {props.price1}
          </span>
          <div className="w-44 h-[1px] ml-[24%] bg-[#D9D9D9]"></div>
          {/* <span className="text-[#3F3A3A]">4 Berth | 3 Cabin</span> */}
          <span className="text-[16px] leading-[21px] font-semibold text-[#312929]">
            {props.price2}
          </span>
        </div>
        <div className="rounded-b bg-[#40C1FB]  p-2 text-center ">
          <div className="text-[13px] leading-[17.29px] font-normal font-Segoe">
            Deposit Amount :
            <span className="text-[16px] leading-[21.28px] font-bold">
              {" "}
              {props.price3}{" "}
            </span>
          </div>
          <div className="text-[13px] leading-[17.29px] font-normal font-Segoe">
            {props.point}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
