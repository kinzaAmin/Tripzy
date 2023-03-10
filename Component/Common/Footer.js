import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
const Footer = () => {
  return (
    <>
      <div className=" w-full bg-black text-[#ffffff] font-Segoe mt-4 ">
        <Container>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-5">
            <div className=" grid grid-cols-1 gap-3 md:px-0 px-10">
              <div className="w-44 ">
                <img
                  src="/Images/Logo.svg"
                  alt="logo"
                  fill
                  className="custom_img"
                />
              </div>

              <div className="text-[16px] leading-[24px] font-normal font-Segoe  ">
                Tripzy.ae is a leading 1 stop platform to offer luxury ride
                rental in Dubai at a click. Shift to the top gear to dispense
                elite travelling experience with our exclusive Fleet of
                luxurious cars, Yachts, Helicopters and much more. Be it an SUV,
                Saloon, compact, convertible, sports cars or Stretch limousines
                – there is always something for everyone under 1 hood.
              </div>
            </div>
            <div className="grid grid-cols-2 md:gap-10 gap-0 md:px-0  px-10">
              <div className=" text-center md:w-full  w-[70%] ">
                <div className="  text-[20px] leading-[27px] font-Segoe font-[600]">
                  Quick Links
                </div>
                <div className="grid grid-cols-1 gap-7 mt-8 text-[16px] leading-[21px] font-normal ">
                  <div>Home</div>
                  <div>About Us</div>
                  <div>Contact Us</div>
                  <div>Privacy Policy</div>
                  <div>Terms & Condition</div>
                </div>
              </div>

              <div className=" w-[130%]">
                <div className="text-[20px] font-Segoe leading-[27px] font-[600]">
                  Contact Us
                </div>
                <div className=" text-[16px] leading-[21px] sm:w-[280px]  font-normal mt-8 grid grid-cols-1 gap-5 ">
                  <div >Email : info@myride.ae</div>
                  <div >Landline : +971 04 566 7048</div>
                  <div>Phone : +971 52 652 0494</div>
                  <div>Address : Jumeirah Lake Towers, Dubai</div>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 hidden lg:gap-4 ml-40">
              <div className="">
                <span className="text-[20px] font-Segoe leading-[27px] font-[600]">
                  MYRIDE Family
                </span>
                <div className="w-32 mt-8 ">
                  <img
                    src="/Images/myride.svg"
                    alt=""
                    fill
                    className="custom_img"
                  />
                </div>
              </div>
              <div className=" ">
                <span className="text-[20px] font-Segoe leading-[27px] font-[600]">
                  Payment Gateway
                </span>
                <div className="grid grid-cols-4 mt-3 ">
                  <div className="w-10">
                    <Image
                      src="/Images/visa.svg"
                      alt="payment method"
                      fill
                      className="custom_img"
                    />
                  </div>
                  <div className="w-10">
                    <Image
                      src="/Images/payPal.svg"
                      alt="payment method"
                      fill
                      className="custom_img"
                    />
                  </div>

                  <div className="w-10">
                    <Image
                      src="/Images/jcb.svg"
                      alt="payment method"
                      fill
                      className="custom_img"
                    />
                  </div>
                  <div className="w-10">
                    <Image
                      src="/Images/masterCard.svg"
                      alt="payment method"
                      fill
                      className="custom_img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
