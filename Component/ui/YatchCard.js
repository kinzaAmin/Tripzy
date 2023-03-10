import React from "react";
import Image from "next/image";
const Card = (props) => {
  return (
    <>
      <div className="md:w-[330px] sm:w-[300px] w-[260px]  font-Segoe h-[490px]rounded-lg p-3 shadow-xl ">
        <div className="flex  ">
          <div className="grid grid-rows-2 gap-1 ml-2 w-[130px] ">
            <span className="text-[16px] leading-[21px] w-[147px] text-[#312929] font-semibold">
              {props.heading}
            </span>
            <span className="text-[13px] leading-[17px]  font-normal text-[#3F3A3A]">
              {props.subHeading}
            </span>
          </div>
          <div className="bg-[#40C1FB] cursor-pointer pt-3  items-center  w-[100px] md:ml-14 ml-6 h-[40px]  rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]">
            {props.btn}
          </div>
        </div>
        <div className=" mt-4  ">
          <div className="w-full">
            <Image
              src={props.img}
              alt="yatch"
              fill
              className="z-0 custom_img rounded-lg"
            />
          </div>
          <div className=" z-20 mt-[-35px] ml-[280px] h-[19px] font-[600] leading-[17.29px] text-[13px] text-[#FFFFFF]">
            <span className=" rounded border border-[#FFFFFF] px-2">
              {props.size}
            </span>
          </div>
        </div>
        <div className="flex md:text-[13px] text-[12px] pt-6 leading-[17px] px-0 font-normal ">
          <div className="text-[#3F3A3A] flex mt-[3px]">4 Berth | 3 Cabin</div>
          <div className="sm:text-[16px] text-[14px] md:ml-10 sm:ml-6  ml-2 leading-[21px]  font-semibold text-[#312929]">
            {props.price}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
