import React, { useState } from "react";
import Container from "./Container";
const Content = (props)=> {
  const[isRead ,setRead]=useState(false)
  const[Readbtn ,setReadbtn]=useState(true)
    return (
      <>
        <div className="mt-8">
          <Container>
            <div className="text-[16px] leading-[21.28px] font-[600px] md:text-left text-center font-Segoe ">
              {props.Heading}
            </div>

            <div className="text-[13px] leading-[17.29px] mt-4 font-normal font-Segoe text-[#3F3A3A] md:text-left text-center">
              {props.paragraph}
              {Readbtn ? (
                <div
                  className="text-[#40C1FB] cursor-pointer"
                  onClick={() => {
                    setRead(!isRead);
                    setReadbtn(false);
                  }}
                >
                  Readmore
                </div>
              ) : (
                " "
              )}
              {isRead && (
                <div className={` mt-4 font-Segoe md:text-left text-center`}>
                  <div className="mt-2">{props.p1}</div>
                  <div className="mt-2">{props.p2}</div>
                  <div className="mt-2">{props.p3}</div>
                  <div className="mt-5 text-[16px] leading-[21.98px] font-[600]">
                    Take Water | Roads | skies like a King with Luxury rides
                    like never before!
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>
      </>
    );
};

export default Content;