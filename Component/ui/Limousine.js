import React from "react";
import YatchPurpose from "./YatchPurpose";
import LimoCards from "./LimoCards";
import Content from "./Content";
import LimoSlider from "./LimoSlider";
import LimoSlider2 from "./LimoSlider2";

import Menu from "./Menu";
const Limousine = ()=> {
    return (
      <>
        {/* <LimoSlider />
         <Menu/> */}
        <div className="pt-14  mt-8 pb-5">
          <YatchPurpose
            yatchPurpose="Limousine for Rent"
            subtitle="We offer limousine services in our range of high-end vehicles"
            viewBtn="View All"
          />
        </div>

        <LimoCards />

        <div className="mt-8">
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
        </div>
        <div className="mt-8">
          <Content
            Heading="Providing One-Stop Elite Travelling Solution for VIP Cruising"
            paragraph="Welcome to Tripzy.ae – Founded in 2017, we are a leading 1 stop platform to offer luxury ride rental in Dubai at a click. From helicopter tour Dubai, luxury car rental Dubai to luxury yacht rental Dubai, we have got you covered. Shift to the top gear to dispense elite travelling experience with our exclusive Fleet of luxurious cars, Yachts, Helicopters and much more. Be it an SUV, compact, convertible, sports cars or Stretch limousines – there is always something for everyone under 1 hood. How? Simply get registered at tripzy.ae, Select your dream ride, Pay online & get your car ride delivered at your doorstep within 60 Minutes. Relish the freedom ofsetting your own Schedule |drive hours encased with chauffeured services and guided tours to roll out the experience of a lifetime with us."
          />
        </div>
      </>
    );
};

export default Limousine;