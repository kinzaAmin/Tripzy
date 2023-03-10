import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import SliderButton from "./SliderButton";

const Slider1 = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="  z-10 ">
        <Slider {...setting}>
          <div className="md:w-full  yatch_sliderImg relative mt-10 ml-0 bg-right  bg-cover bg-no-repeat ">
            <div className="  md:p-64">
              <div className="w-24 md:mt-[-20%] mt-[-80%] md:ml-[40%] ml-[-70%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF]  md:ml-[30%] ml-[-120%] ">
                An online portal that lets you book
              </span>
              <div className="w-20 text-center  md:ml-[40%] ml-[-70%]">
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>

          <div className="w-full  yatch_sliderImg relative mt-10 ml-0  bg-right bg-cover font-Segoe bg-no-repeat">
            <div className=" p-64  ">
              <div className="w-24 mt-[-20%] ml-[-10%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px]  font-Segoe text-[#FFFFFF] ml-[-10%] ">
                An online portal that lets you book
              </span>
              <div className="w-20 text-center ml-[-10%]">
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>

          <div className="w-full   yatch_sliderImg relative mt-10 ml-0  bg-right bg-cover bg-no-repeat">
            <div className=" p-64  ">
              <div className="w-24 mt-[-20%] ml-[-10%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF] ml-[-10%] ">
                An online portal that lets you book
              </span>
              <div className="w-20 text-center ml-[-10%]">
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>

          <div className="w-full  yatch_sliderImg relative mt-10 ml-0  bg-right bg-cover bg-no-repeat">
            <div className=" p-64  ">
              <div className="w-24 mt-[-20%] ml-[-10%] ">
                <Image
                  src="/Images/Frame.svg"
                  alt="tripzy"
                  fill
                  className="custom_img"
                />
              </div>
              <span className="text-[16px] leading-[21.28px] text-[#FFFFFF] ml-[-10%] ">
                An online portal that lets you book
              </span>
              <div className="w-20 text-center ml-[-10%]">
                <SliderButton btntitle="Explore" />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* <div className="lg:w-[40%] w-[85%] bg-white rounded-lg z-20 grid grid-cols-4  h-20 font-Segoe  ml-20 relative mt-[-20px] shadow-md ">
        <div className="shadow">
          <Button
            title="Yacht"
            Color="#FFFFFF"
            TextClr=" #312929"
            paddingleft="40px"
          />
        </div>
        <div className="shadow">
          <div className=" flex gap-2 lg:pl-5   cursor-pointer lg:p-2 p-5  rounded text-center text-[13px] bg-[#40C1FB] leading-[17px] text-[#FFFFFF] font-[600]">
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

export default Slider1;
