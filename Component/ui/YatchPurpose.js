import React from "react";
import Container from "./Container";
const yatchPurpose = (props) => {
  return (
    <>
      <Container>
        <div className="flex justify-between w-full font-Segoe  ">
          <div className="grid grid-rows-2   md:text-left text-center ">
            <span className="text-[16px] leading-[21.28px] font-[600] text-[#312929]">
              {props.yatchPurpose}
            </span>
            <div className="text-[13px]   leading-[17.29px] font-normal text-[#3F3A3A]">
              {props.subtitle}
            </div>
          </div>
          <div className="bg-[#40C1FB] cursor-pointer hidden md:inline p-3 w-[100px] rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]">
            {props.viewBtn}
          </div>
        </div>
      </Container>
    </>
  );
};

export default yatchPurpose;
