import React, { useState } from "react";
import Slider1 from "./Slider1";
import YatchCards from "./YatchCards";
import Content from "./Content";
import YatchSlider2 from "./YatchSlider2";
import YatchPurpose from "./YatchPurpose";
import Menu from "./Menu";
//import Helicopter from "./Helicopter";
import LimoSlider from "./LimoSlider";
import Slider2 from "./Slider2";
import CarRentalSlider1 from "./CarRentalSlider1"
import HeliCards from "./HeliCards";
import LimoCards from "./LimoCards";
import CarCards from "./CarCards";
import LimoSlider2 from "./LimoSlider2";
import CarSlider2 from "./CarSlider2";
//import Button2 from "./Button2";
const Yatches = () => {
  const [isYatches, setYatches] = useState(true);
  const [isHelicopter, setHelicopter] = useState(false);
   const [isLimousine, setLimousine] = useState(false);
    const[isCar , setCar]= useState(false)

    const HandleClickYatches = () => {
      setYatches(true)

    }
   const HandleClickHeli =()=> {
    setHelicopter(true)
    setYatches(false)
   
   }

   const HandleClickLimo = ()=> {
    setLimousine(true)
     setYatches(false);
     setHelicopter(false)

   }
   const HandlelickCars = () => {
    setCar(true)
    setYatches(false);
    setLimousine(false);
     setHelicopter(false);
   }

  return (
    <>
      {isYatches ? (
        <Slider1 />
      ) : isHelicopter ? (
        <Slider2 />
      ) : isLimousine ? (
        <LimoSlider />
      ) : isCar ? (
        <CarRentalSlider1 />
      ) : (
        <Slider1 />
      )}
      <Menu
        ClickYatches={HandleClickYatches}
        ClickHeli={HandleClickHeli}
        ClickLimo={HandleClickLimo}
        ClickCars={HandlelickCars}
      />
      {isYatches ? (
        <div className="pt-14  pb-5">
          <YatchPurpose
            yatchPurpose="Yachts for Rent"
            subtitle="Luxury, Exclusive and Charter"
            viewBtn="View All"
          />
        </div>
      ) : isHelicopter ? (
        <div className="pt-8  pb-5">
          <YatchPurpose
            yatchPurpose="Helicopter for Rent"
            subtitle="Adventures & Private tours"
            viewBtn="View All"
          />
        </div>
      ) : isLimousine ? (
        <div className="mt-8">
          <YatchPurpose
            yatchPurpose="Limousine for Rent"
            subtitle="We offer limousine services in our range of high-end vehicles"
            viewBtn="View All"
          />
        </div>
      ) : isCar ? (
        <div className="pt-14  pb-5">
          <YatchPurpose
            yatchPurpose="Car for Rent"
            subtitle="Find Cheap Car Rental Deals and Discounts"
            viewBtn="View All"
          />
        </div>
      ) : (
        <div className="pt-14  pb-5">
          <YatchPurpose
            yatchPurpose="Yachts for Rent"
            subtitle="Luxury, Exclusive and Charter"
            viewBtn="View All"
          />
        </div>
      )}

      {isYatches ? (
        <YatchCards />
      ) : isHelicopter ? (
        <HeliCards />
      ) : isLimousine ? (
        <LimoCards />
      ) : isCar ? (
        <CarCards />
      ) : (
        <YatchCards/>
      )}

      {isYatches ? (
        <YatchSlider2 />
      ) : isHelicopter ? (
        " "
      ) : isLimousine ? (
        <LimoSlider2
          searchBy="Search Limousine By Brands "
          contentt="Get on a road-trip now with the best deals for high-end cars manufactured by top automobile companies in the world. "
          pic1="/Images/pic1.svg"
          pic2="/Images/pic2.svg"
          pic3="/Images/pic3.svg"
          pic4="/Images/pic4.svg"
          pic5="/Images/pic5.svg"
          pic6="/Images/pic6.svg"
          pic7="/Images/pic7.svg"
        />
      ) : isCar ? (
        <CarSlider2 />
      ) : (
        <YatchSlider2 />
      )}

      {isYatches && (
        <div className="mt-12">
          <YatchPurpose
            yatchPurpose="Most Popular Yachts in Dubai"
            subtitle="Luxury, Exclusive and Charter"
            viewBtn="View All"
          />
        </div>
      )}
      {isYatches && <YatchCards />}
      <div className="mt-8">
        {isYatches ? (
          <Content
            Heading="Providing One-Stop Elite Travelling Solution for VIP Cruising"
            paragraph=" Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered. Shift to the top gear to dispense elite travelling experience with our exclusive Fleet of luxurious cars, Yachts, Helicopters and much more. Be it an SUV, compact, convertible, sports cars or Stretch limousines – there is always something for everyone under 1 hood. How? Simply get registered at tripzy.ae, Select your dream ride, Pay online & get your car ride delivered at your doorstep within 60 Minutes. Relish the freedom ofsetting your own Schedule |drive hours encased with chauffeured services and guided tours to roll out the experience of a lifetime with us."
            p1="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered."
            p2="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered."
            p3="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered."
          />
        ) : isHelicopter ? (
          <Content
            Heading="Providing One-Stop Elite Travelling Solution for VIP Cruising"
            paragraph="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered. Shift to the top gear to dispense elite travelling experience with our exclusive Fleet of luxurious cars, Yachts, Helicopters and much more. Be it an SUV, compact, convertible, sports cars or Stretch limousines – there is always something for everyone under 1 hood. How? Simply get registered at tripzy.ae, Select your dream ride, Pay online & get your car ride delivered at your doorstep within 60 Minutes. Relish the freedom ofsetting your own Schedule |drive hours encased with chauffeured services and guided tours to roll out the experience of a lifetime with us."
          />
        ) : isLimousine ? (
          <Content
            Heading="Providing One-Stop Elite Travelling Solution for VIP Cruising"
            paragraph="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered. Shift to the top gear to dispense elite travelling experience with our exclusive Fleet of luxurious cars, Yachts, Helicopters and much more. Be it an SUV, compact, convertible, sports cars or Stretch limousines – there is always something for everyone under 1 hood. How? Simply get registered at tripzy.ae, Select your dream ride, Pay online & get your car ride delivered at your doorstep within 60 Minutes. Relish the freedom ofsetting your own Schedule |drive hours encased with chauffeured services and guided tours to roll out the experience of a lifetime with us."
          />
        ) : isCar ? (
          <Content
            Heading="Providing One-Stop Elite Travelling Solution for VIP Cruising"
            paragraph="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered. Shift to the top gear to dispense elite travelling experience with our exclusive Fleet of luxurious cars, Yachts, Helicopters and much more. Be it an SUV, compact, convertible, sports cars or Stretch limousines – there is always something for everyone under 1 hood. How? Simply get registered at tripzy.ae, Select your dream ride, Pay online & get your car ride delivered at your doorstep within 60 Minutes. Relish the freedom ofsetting your own Schedule |drive hours encased with chauffeured services and guided tours to roll out the experience of a lifetime with us."
          />
        ) : (
          <Content
            Heading="Providing One-Stop Elite Travelling Solution for VIP Cruising"
            paragraph=" Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered. Shift to the top gear to dispense elite travelling experience with our exclusive Fleet of luxurious cars, Yachts, Helicopters and much more. Be it an SUV, compact, convertible, sports cars or Stretch limousines – there is always something for everyone under 1 hood. How? Simply get registered at tripzy.ae, Select your dream ride, Pay online & get your car ride delivered at your doorstep within 60 Minutes. Relish the freedom ofsetting your own Schedule |drive hours encased with chauffeured services and guided tours to roll out the experience of a lifetime with us."
          />
        )}
      </div>
    </>
  );
};

export default Yatches;
