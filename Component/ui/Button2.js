import React,{useState} from "react";
import Image from "next/image";
import Hover from "./Hover";
const Button2 = (props)=> {
const[hoverr , setHover]= useState(false)
const handleMouseEnter = () => {
  setHover(true);
};

const handleMouseLeave = () => {
  setHover(false);
};
    return (
      <>
        <Hover>
          {(hover) => (
            <div
              onClick={() => {
                handleMouseEnter();
              
              }}
              className={`flex gap-2 h-[80px] items-center md:pl-14  cursor-pointer p-4   rounded text-center text-[13px] bg-white leading-[17px] text-[#312929]  font-[600]`}
              style={{
                backgroundColor: hoverr ? "#40C1FB" : "White",
                color: hoverr ? "white" : "#312929",
              }}
            >
              <div className="md:w-6  w-44 md:ml-0 md:p-0 p-3  mb-3 mt-5 ">
                <Image src={props.img} fill className="custom_img" />
              </div>
              <span className=" mb-3 mt-3  hidden md:inline    ">
                {props.btnName}
              </span>
            </div>
          )}
        </Hover>
      </>
    );
};

export default Button2;