import React from "react";
import Image from "next/image";
const CarRentalCards = (props) => {
  return (
    <>
      <div className="md:w-[330px] sm:w-[300px] w-[250px]  font-Segoe  rounded-lg   shadow-xl">
        <div className="grid grid-cols-2 sm:gap-10  ">
          <div className="grid grid-rows-2 gap-1 ml-2 w-[120%] ">
            <span className="text-[16px] leading-[21px] text-[#312929] font-semibold">
              {props.heading}
            </span>
            <span className="md:text-[13px] text-[11px]  leading-[17.29px]  font-normal text-[#3F3A3A]">
              {props.subHeading}
            </span>
          </div>
          <div className="bg-[#40C1FB] cursor-pointer pt-3  items-center  w-[80px] ml-10  h-[40px]  rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]">
            {props.btn}
          </div>
        </div>
        <div className=" mt-4 p-3  ">
          <div className="w-full">
            <Image
              src={props.img}
              alt="Car"
              fill
              className="z-0 custom_img rounded-lg"
            />
          </div>
        </div>
        <div className=" p-3 grid grid-cols-1 text-center  gap-2 text-[13px] leading-[17px]  font-normal ">
          <span className="text-[16px] leading-[21px] font-semibold text-[#312929]">
            {props.price1}
          </span>
        </div>
        <div className="rounded-b bg-[#40C1FB]  p-2 text-center ">
          <div className="text-[13px] leading-[17.29px] font-normal font-Segoe">
            Deposit Amount :
            <span className="text-[16px] leading-[21.28px] font-bold">
              {props.price3}
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

export default CarRentalCards;
