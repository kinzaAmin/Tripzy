import React from "react";
//import Image from "next/image";
const Button = (props) => {

  return (
    <>
      <div
        className="flex  text-center cursor-pointer "
        style={{
          backgroundColor: props.Color,
          color: props.TextClr,
          paddingLeft: props.paddingleft,
        }}
      >
        <div
          className=" cursor-pointer p-2 pl-12 mt-3   rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]"
          style={{ backgroundColor: props.Color, color: props.TextClr }}
        >
          {props.title}
        </div>
      </div>
    </>
  );
};
export default Button;
