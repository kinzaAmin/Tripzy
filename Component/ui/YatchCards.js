import React from "react";
//import Image from "next/image";
import YatchCard from "./YatchCard";
//import Slider2 from "./Slider2";
//import YatchPurpose from "./YatchPurpose";
import Container from "./Container";

const YatchCards = () => {
  return (
    <>
      <Container>
        <div className=" ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:gap-20 md:gap-[25px] lg:gap-64 md:ml-0 sm:ml-32 ml-0 ">
            <YatchCard
              heading="55 Feet luxury Yacht"
              subHeading="Persons : 22 Persons"
              btn="Hire a Yacht"
              price="Price : AED 945/Hour"
              img="/Images/LuxaryYatch.svg"
            />

            <YatchCard
              heading="45 Feet Yacht"
              subHeading="Persons : 10 Persons"
              btn="Hire a Yacht"
              price="Price : AED 945/Hour"
              img="/Images/45feet.svg"
            />

            <YatchCard
              heading="52 Feet Royal Yacht"
              subHeading="Persons : 15 Persons"
              btn="Hire a Yacht"
              price="Price : AED 945/Hour"
              img="/Images/RoyalYatch.svg"
            />
            <YatchCard
              heading="55 Feet luxury Yacht"
              subHeading="Persons : 22 Persons"
              btn="Hire a Yacht"
              price="Price : AED 945/Hour"
              img="/Images/LuxaryYatch.svg"
            />

            <YatchCard
              heading="45 Feet Yacht"
              subHeading="Persons : 10 Persons"
              btn="Hire a Yacht"
              size="55ft"
              price="Price : AED 945/Hour"
              img="/Images/45feet.svg"
            />

            <YatchCard
              heading="52 Feet Royal Yacht"
              subHeading="Persons : 15 Persons"
              btn="Hire a Yacht"
              price="Price : AED 945/Hour"
              img="/Images/RoyalYatch.svg"
            />
          </div>
        </div>
      </Container>
      {/* <div>slider will display here</div> */}
    </>
  );
};

export default YatchCards;
