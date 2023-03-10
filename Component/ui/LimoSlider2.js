import React from "react";
import Image from "next/image";
import Container from "./Container";
import Slider from "react-slick";
const LimoSlider2 = (props)=> {
    const setting = {
      dots: true,
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
            arrows: true,
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
      <div className="mt-10">
        <Container>
          <div className="font-segoe text-[#312929] md:text-start text-center ">
            <div className="text-[16px] leading-[21.28px] font-[600]">
              {props.searchBy}
            </div>
            <div className="text-[13px] leading-[17.29px] font-normal">
              {props.contentt}
            </div>
          </div>

          <div className="w-full mt-20">
            <Slider {...setting}>
              <div className="img_size">
                <Image src={props.pic1} fill className="custom_img" />
              </div>

              <div className="img_size">
                <Image src={props.pic2} fill className="custom_img" />
              </div>

              <div className="img_size">
                <Image src={props.pic3} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic4} fill className="custom_img" />
              </div>
              <div className=" img_size">
                <Image src={props.pic5} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic6} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic7} fill className="custom_img" />
              </div>

              <div className="img_size">
                <Image src={props.pic1} fill className="custom_img" />
              </div>

              <div className="img_size">
                <Image src={props.pic2} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic3} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic4} fill className="custom_img" />
              </div>
              <div className=" img_size">
                <Image src={props.pic5} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic6} fill className="custom_img" />
              </div>
              <div className="img_size">
                <Image src={props.pic7} fill className="custom_img" />
              </div>
            </Slider>
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
      </div>
    );
};

export default LimoSlider2;