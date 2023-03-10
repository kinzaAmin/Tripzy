import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Button from "./Button";
import SliderButton from "./SliderButton";

const YatchSlider2 = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
  };
  return (
    <>
    
      <div className="z-10 h-[402px] ">
        <Slider {...setting}>
          <div className="lg:w-full md:w-[70%] w-[390px] YatchSlider2_bg relative mt-10 ml-0   bg-center bg-cover bg-no-repeat ">
            <div className="p-[6%] xl:ml-[29%]  lg:ml-10 md:ml-56 sm:ml-36 ml-14 grid grid-cols-1 gap-10  ">
              <div className="md:text-[45px] sm:text-[35px] text-[20px] md:mt-[1%]  leading-[59.85px] font-bold  text-[#FFFFFF] font-Segoe">
                Yachts for The Party
              </div>
              <div className="md:text-[16px] sm:text-[14px] text-[12px] sm:ml-0 ml-[-14%] md:w-[300px] w-[250px] text-center leading-[21.28px]  font-[600] font-Segoe text-[#FFFFFF]   ">
                Spacious. Huge Flybridges. Illuminated 480-12500 AED/Hour
              </div>
              <div className="w-32 text-center pl-9 mt-[-3%] md:ml-20 ">
                {/* <Button
                  title="Book Now"
                  Color="#40C1FB"
                  TextClr=" #FFFFFF"
                  paddingleft="10px"
                  pading="0px"
                /> */}
                <SliderButton btntitle="Book Now" />
              </div>
            </div>
          </div>
          <div className="lg:w-full md:w-[70%] w-[390px] YatchSlider2_bg relative mt-10 ml-0   bg-center bg-cover bg-no-repeat ">
            <div className="p-[6%] xl:ml-[29%]  lg:ml-10 md:ml-56 sm:ml-36 ml-14 grid grid-cols-1 gap-10  ">
              <div className="md:text-[45px] sm:text-[35px] text-[20px] md:mt-[1%]  leading-[59.85px] font-bold  text-[#FFFFFF] font-Segoe">
                Yachts for The Party
              </div>
              <div className="md:text-[16px] sm:text-[14px] text-[12px] sm:ml-0 ml-[-14%] md:w-[300px] w-[250px] text-center leading-[21.28px]  font-[600] font-Segoe text-[#FFFFFF]   ">
                Spacious. Huge Flybridges. Illuminated 480-12500 AED/Hour
              </div>
              <div className="w-32 text-center pl-9 mt-[-3%] md:ml-20 ">
                
                <SliderButton btntitle="Book Now" />
              </div>
            </div>
          </div>

          <div className="lg:w-full md:w-[70%] w-[390px] YatchSlider2_bg relative mt-10 ml-0   bg-center bg-cover bg-no-repeat ">
            <div className="p-[6%] xl:ml-[29%]  lg:ml-10 md:ml-56 sm:ml-36 ml-14 grid grid-cols-1 gap-10  ">
              <div className="md:text-[45px] sm:text-[35px] text-[20px] md:mt-[1%]  leading-[59.85px] font-bold  text-[#FFFFFF] font-Segoe">
                Yachts for The Party
              </div>
              <div className="md:text-[16px] sm:text-[14px] text-[12px] sm:ml-0 ml-[-14%] md:w-[300px] w-[250px] text-center leading-[21.28px]  font-[600] font-Segoe text-[#FFFFFF]   ">
                Spacious. Huge Flybridges. Illuminated 480-12500 AED/Hour
              </div>
              <div className="w-32 text-center pl-9 mt-[-3%] md:ml-20 ">
               
                <SliderButton btntitle="Book Now" />
              </div>
            </div>
          </div>
          <div className="lg:w-full md:w-[70%] w-[390px] YatchSlider2_bg relative mt-10 ml-0   bg-center bg-cover bg-no-repeat ">
            <div className="p-[6%] xl:ml-[29%]  lg:ml-10 md:ml-56 sm:ml-36 ml-14 grid grid-cols-1 gap-10  ">
              <div className="md:text-[45px] sm:text-[35px] text-[20px] md:mt-[1%]  leading-[59.85px] font-bold  text-[#FFFFFF] font-Segoe">
                Yachts for The Party
              </div>
              <div className="md:text-[16px] sm:text-[14px] text-[12px] sm:ml-0 ml-[-14%] md:w-[300px] w-[250px] text-center leading-[21.28px]  font-[600] font-Segoe text-[#FFFFFF]   ">
                Spacious. Huge Flybridges. Illuminated 480-12500 AED/Hour
              </div>
              <div className="w-32 text-center pl-9 mt-[-3%] md:ml-20 ">
               
                <SliderButton btntitle="Book Now" />
              </div>
            </div>
          </div>

        
        </Slider>
      </div>
    </>
  );
};

export default YatchSlider2;
