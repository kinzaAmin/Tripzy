import React from "react";
import Image from "next/image";
import Container from "./Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarSlider2 = () => {
  const setting = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
           initialSlide: 2,
          infinite: true,
          dots: true,
          arrows:true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <div className="mt-10">
          <div className="font-segoe text-[#312929] md:text-left text-center">
            <div className="text-[16px] leading-[21.28px] font-[600] md:text-left text-center">
              Search Cars By Brands
            </div>
            <div className="text-[13px] leading-[17.29px] font-normal md:text-left text-center">
              Get on a road-trip now with the best deals for high-end cars
              manufactured by top automobile companies in the world.
            </div>
          </div>

          <div className="w-full mt-14">
            <Slider {...setting}>
              <div className="img_size">
                <Image
                  src="./Images/pic1.svg"
                  fill="true"
                  className="custom_img"
                  alt=""
                />
              </div>

              <div className="img_size ">
                <Image
                  src="./Images/pic2.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>

              <div className="img_size">
                <Image
                  src="./Images/pic3.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className="img_size">
                <Image
                  src="./Images/pic4.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className=" img_size">
                <Image
                  src="./Images/pic5.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className="img_size">
                <Image
                  src="./Images/pic6.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className="img_size">
                <Image
                  src="./Images/pic7.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>

              <div className="img_size">
                <Image
                  src="./Images/pic1.svg"
                  fill="true"
                  className="custom_img"
                  alt=""
                />
              </div>

              <div className="img_size ">
                <Image
                  src="./Images/pic2.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>

              <div className="img_size">
                <Image
                  src="./Images/pic3.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>

              <div className="img_size">
                <Image
                  src="./Images/pic4.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className=" img_size">
                <Image
                  src="./Images/pic5.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className="img_size">
                <Image
                  src="./Images/pic6.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
              <div className="img_size">
                <Image
                  src="./Images/pic7.svg"
                  fill
                  className="custom_img"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* <div className=" ">
            <Slider {...setting}>
              <div className="w-full grid grid-cols-6 gap-4 bg-green-700">
                <div className="w-20">
                  <Image src={props.pic1} fill className="custom_img" />
                </div>

                <div className="w-20">
                  <Image src={props.pic2} fill className="custom_img" />
                </div>

                <div className="w-20">
                  <Image src={props.pic3} fill className="custom_img" />
                </div>
                <div className="w-20">
                  <Image src={props.pic4} fill className="custom_img" />
                </div>
                <div className="w-20">
                  <Image src={props.pic5} fill className="custom_img" />
                </div>
                <div className="w-20">
                  <Image src={props.pic6} fill className="custom_img" />
                </div>
                <div className="w-20">
                  <Image src={props.pic7} fill className="custom_img" />
                </div>
              </div>
            </Slider>
          </div> */}
      </Container>
    </>
  );
};

export default CarSlider2;
