import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Button from "./Button";
import SliderButton from "./SliderButton";

const LimoSlider = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="z-10 w-full ">
        <Slider {...setting}>
          <div className="w-full   Limo_slider relative mt-10   bg-right bg-cover bg-no-repeat ">
            <div className="  p-64 ">
              <div className="w-24 mt-[-20%] ml-[40%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF]  ml-[30%] ">
                An online portal that lets you book
              </span>
              <div className="w-20 text-center   ml-[40%]">
                {/* <Button
                  title="Explore"
                  Color="#40C1FB"
                  TextClr=" #FFFFFF"
                  paddingleft="10px"
                  pading="0px"
                /> */}
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>

          <div className="w-full   Limo_slider relative mt-10 ml-0  bg-right bg-cover bg-no-repeat ">
            <div className="  p-64 ">
              <div className="w-24 mt-[-20%] ml-[40%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF]  ml-[30%] "></span>
              <div className="w-20 text-center  ml-[40%]">
                {/* <Button
                  title="Explore"
                  Color="#40C1FB"
                  TextClr=" #FFFFFF"
                  paddingleft="10px"
                  pading="0px"
                /> */}
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>

          <div className="w-full   Limo_slider relative mt-10 ml-0  bg-right bg-cover bg-no-repeat ">
            <div className="  p-64 ">
              <div className="w-24 mt-[-20%] ml-[40%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF]  ml-[30%] "></span>
              <div className="w-20 text-center  ml-[40%]">
                {/* <Button
                  title="Explore"
                  Color="#40C1FB"
                  TextClr=" #FFFFFF"
                  paddingleft="10px"
                  pading="0px"
                /> */}
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>

          <div className="w-full   Limo_slider relative mt-10 ml-0  bg-right bg-cover bg-no-repeat ">
            <div className="  p-64 ">
              <div className="w-24 mt-[-20%] ml-[40%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF]  ml-[30%] "></span>
              <div className="w-20 text-center  ml-[40%]">
                {/* <Button
                  title="Explore"
                  Color="#40C1FB"
                  TextClr=" #FFFFFF"
                  paddingleft="10px"
                  pading="0px"
                /> */}
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* <div className="w-[40%] bg-white rounded-lg z-20 grid grid-cols-4  font-Segoe  ml-20 relative mt-[-20px] shadow-md ">
        <div className="shadow">
          <Button
            title="Yacht"
            Color="#FFFFFF"
            TextClr=" #312929"
            paddingleft="40px"
          />
        </div>
        <div className="shadow">
          <div className=" flex gap-2 pl-5 cursor-pointer p-2  rounded text-center text-[13px] bg-[#40C1FB] leading-[17px] text-[#FFFFFF] font-[600]">
            <div className="w-6">
              <Image src="/Images/Heli.svg" fill className="custom_img" />
            </div>
            <span>Helicopter</span>
          </div>
        </div>
        <div className="shadow">
          <Button
            title="Limousine"
            Color="#FFFFFF"
            TextClr="#312929 "
            paddingleft="30px"
          />
        </div>
        <div className="shadow">
          <Button
            title="Car Rentals"
            Color="#FFFFFF"
            TextClr="#312929 "
            paddingleft="30px"
          />
        </div>
      </div> */}
    </>
  );
};

export default LimoSlider;
