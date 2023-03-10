import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="  z-30   fixed overflow-auto    w-full  bg-black text-[#ffffff] font-Segoe">
        <div className="bg-[#333]  items-center overflow-hidden  font-Segoe h-12 lg:grid lg:grid-cols-2 flex  text-[10px] leading-[14px] font-bold text-white ">
          <div className="flex xl:w-[100%] md:w-[90%] lg:ml-5 lg:gap-3 gap-1">
            <div className="w-20 lg:ml-0 ml-1  ">
              <Image
                src="./Images/Logo.svg"
                fill
                alt="logo"
                className="custom_img  "
              />
            </div>

            <div className="md:w-[3px] h-5 rotate-[-90] bg-[#D9D9D9] mt-4 "></div>

            <div className="md:flex hidden xl:gap-7 gap-3  font-Segoe     text-center   font-bold text-[14px] leading-[20px]">
              <Link href="/">
                <div className="text-[#17c5be]  border-b-[#17c5be] pt-3  h-12 border-b-[2px] cursor-pointer">
                  HOME
                </div>
              </Link>
              <Link href="/Yatcchhh">
                <div className="cursor-pointer hover:border-[#17c5be] pt-3 h-12 hover:border-b-[2px] ">
                  YACHT
                </div>
              </Link>
              <Link href="/Helicopterr">
                <div className="cursor-pointer hover:border-[#17c5be] pt-3 h-12 hover:border-b-[2px]">
                  HELICOPTER
                </div>
              </Link>

              <Link href="/Limousinee">
                <div className="cursor-pointer hover:border-[#17c5be] pt-3  h-12 hover:border-b-[2px]">
                  LIMO & CHAUFFEUR
                </div>
              </Link>
              <Link href="/CarRentall">
                <div className="cursor-pointer hover:border-[#17c5be]   pt-3  h-12 hover:border-b-[2px]">
                  CAR RENTAL
                </div>
              </Link>
            </div>
          </div>
          <div className="md:flex hidden items-center xl:ml-[46%] lg:ml-[44%] lg:mr-[0%]  mr-[478px]">
            <div className="lg:mr-4 mr-2">
              <div className="grid grid-cols-3 gap-2  ">
                <div className="w-5 ">
                  <img
                    src="./Images/img1.svg"
                    fill
                    alt="header-img"
                    className="custom_img"
                  />
                </div>

                <div className="w-5">
                  <img
                    src="./Images/img2.svg"
                    alt="header-img"
                    fill
                    className="custom_img"
                  />
                </div>
                <div className="w-5">
                  <img
                    src="./Images/img3.svg"
                    alt="header-img"
                    fill
                    className="custom_img"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#40C1FB] items-center lg:w-[254px] w-[193px]   h-[48px] leading-[17px]  lg:text-[13px] md:text-[8px]  font-normal">
              <span className="ml-5 mt-2  ">For Inquiries & Support</span>
              <div className="flex lg:ml-2 mt-1  font-bold   ">
                <span>+971 52 652 0494 </span>
                <div className="w-[2px] h-4 rotate-[-90] bg-[#D9D9D9] ml-2"></div>
                <span className=" "> +971 52 103 6486</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
