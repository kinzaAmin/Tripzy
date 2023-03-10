import React from "react";
//import Image from "next/image";
import Card from "./Card";
//import Slider2 from "./Slider2";
import YatchPurpose from "./YatchPurpose";
import Container from "./Container";

const HeliCards = () => {
  return (
    <>
      <Container>
        <div className="mt-8">
          {/* <YatchPurpose
            yatchPurpose="Yachts for Rent"
            subtitle="Luxury, Exclusive and Charter"
            viewBtn="View All"
          /> */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:gap-20 md:gap-[25px] lg:gap-64 md:ml-0 sm:ml-32 ">
            <Card
              heading="Vision Tour"
              subHeading="Trip Duration : 22 Min"
              btn="Hire a Helicopter"
              price1="Price : AED 975/Ride (Per Person)"
              price2="Price : AED 5250/Ride (Private)"
              img="/Images/vision.svg"
            />

            <Card
              heading="Palm Tour"
              subHeading="Trip Duration : 17 Min"
              btn="Hire a Helicopter"
              price1="Price : AED 975/Ride (Per Person)"
              price2="Price : AED 5250/Ride (Private)"
              img="/Images/palm.svg"
            />

            <Card
              heading="Odyssey Tour"
              subHeading="Trip Duration : 40 Min"
              btn="Hire a Helicopter"
              price1="Price : AED 975/Ride (Per Person)"
              price2="Price : AED 5250/Ride (Private)"
              img="/Images/odyssey.svg"
            />
            <Card
              heading="Vision Tour"
              subHeading="Trip Duration : 22 Min"
              btn="Hire a Helicopter"
              price1="Price : AED 975/Ride (Per Person)"
              price2="Price : AED 5250/Ride (Private)"
              img="/Images/vision.svg"
            />

            <Card
              heading="Palm Tour"
              subHeading="Trip Duration : 17 Min"
              btn="Hire a Helicopter"
              price1="Price : AED 975/Ride (Per Person)"
              price2="Price : AED 5250/Ride (Private)"
              img="/Images/palm.svg"
            />

            <Card
              heading="Odyssey Tour"
              subHeading="Trip Duration : 40 Min"
              btn="Hire a Helicopter"
              price1="Price : AED 975/Ride (Per Person)"
              price2="Price : AED 5250/Ride (Private)"
              img="/Images/odyssey.svg"
            />
          </div>
        </div>
      </Container>
      {/* <div>slider will display here</div> */}
    </>
  );
};

export default HeliCards;
