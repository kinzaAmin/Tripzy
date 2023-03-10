import React from "react";
import Image from "next/image";
import Container from "./Container";
import DatePicker from "./Datepicker";
import SliderButton from "./SliderButton";
import Timepicker from "./TimePicker";
//import DateTimePicker from "react-datetime-picker";
const Filter = ()=> {
    return (
      <>
        <div className="mt-8">
          <div className="  flex justify-between mt-2 ">
            <div>
              <span>Pick-up Date & Time</span>
              <div className=" w-[221px] borderrounded mt-2">
                {/* <span>28-06-2023 & 17:00</span>
                <div className="w-4">
                  <Image
                    src="/Images/calendar.svg"
                    fill
                    className="custom_img"
                  />
                </div> */}
                <DatePicker />
              </div>

              {/* <Timepicker /> */}
            </div>

            <div>
              <span>Drop Off Date & Time</span>
              <div className=" w-[221px]  flex justify-between border p-2 rounded mt-2">
                <span>29-06-2023 & 17:00</span>
                <div className="w-4">
                  <Image src="/Images/clock.svg" fill className="custom_img" />
                </div>
              </div>
            </div>

            <div className="">
              <div>Models</div>
              <div className="">
                <select className="w-[148px] border mt-2 p-2 rounded">
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>

            <div className="">
              <div>Brands</div>
              <div className="">
                <select className="w-[256px] border mt-2 p-2 rounded">
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>

            <div className="w-[96px] mt-5  ">
              <SliderButton btntitle="Search" />
            </div>

            <div className="mt-6">
              <div className="">
                <select className="w-[177px] border mt-2 p-2 rounded">
                  <option>Low to High</option>
                  <option>High to Low</option>
                </select>
              </div>
              {/* <select className=" text-black flex w-[177px] border  p-2 rounded">
              
                <div>
                  <option>Low to High</option>
                  <option>High to Low</option>
                </div>
              </select> */}
            </div>
          </div>
        </div>
      </>
    );
};

export default Filter;