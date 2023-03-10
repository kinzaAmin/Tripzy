import React from "react";
const SliderButton = (props)=> {
    return (
      <>
        <div
          className=" bg-[#40C1FB]  cursor-pointer p-3  mt-3   rounded text-center text-[13px] leading-[17px] text-[#FFFFFF] font-[600]"
          style={{ backgroundColor: props.Color, color: props.TextClr }}
        >
          {props.btntitle}
        </div>
      </>
    );
};

export default SliderButton;