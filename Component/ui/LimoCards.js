import React from "react";
import LimousineCard from "./LimousineCard"
import Container from "./Container";
const LimoCards = ()=>{
return (
  <>
    <div className="mt-8">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:gap-20 md:gap-[25px] lg:gap-64 md:ml-0 sm:ml-32  md:px-auto sm:px-8 px-0 ">
          <LimousineCard
            heading="GMC Limo "
            subHeading="Seats 20 | Doors 4 | Automatic "
            btn="Rent a Limo "
            img="/Images/Lamo.svg"
            price1=" Price : AED 770/Hour"
            price2="Price : AED 5100/Day "
            price3="AED 5100/Day "
            point=" *You will pay deposit at the time of pickup/delivery."
          />
          <LimousineCard
            heading="GMC Limo "
            subHeading="Seats 20 | Doors 4 | Automatic "
            btn="Rent a Limo "
            img="/Images/Lamo.svg"
            price1=" Price : AED 770/Hour"
            price2="Price : AED 5100/Day "
            price3="AED 5100/Day "
            point=" *You will pay deposit at the time of pickup/delivery."
          />
          <LimousineCard
            heading="GMC Limo "
            subHeading="Seats 20 | Doors 4 | Automatic "
            btn="Rent a Limo "
            img="/Images/Lamo.svg"
            price1=" Price : AED 770/Hour"
            price2="Price : AED 5100/Day "
            price3="AED 5100/Day "
            point=" *You will pay deposit at the time of pickup/delivery."
          />
          <LimousineCard
            heading="GMC Limo "
            subHeading="Seats 20 | Doors 4 | Automatic "
            btn="Rent a Limo "
            img="/Images/Lamo.svg"
            price1=" Price : AED 770/Hour"
            price2="Price : AED 5100/Day "
            price3="AED 5100/Day "
            point=" *You will pay deposit at the time of pickup/delivery."
          />
          <LimousineCard
            heading="GMC Limo "
            subHeading="Seats 20 | Doors 4 | Automatic "
            btn="Rent a Limo "
            img="/Images/Lamo.svg"
            price1=" Price : AED 770/Hour"
            price2="Price : AED 5100/Day "
            price3="AED 5100/Day "
            point=" *You will pay deposit at the time of pickup/delivery."
          />
          <LimousineCard
            heading="GMC Limo "
            subHeading="Seats 20 | Doors 4 | Automatic "
            btn="Rent a Limo "
            img="/Images/Lamo.svg"
            price1=" Price : AED 770/Hour"
            price2="Price : AED 5100/Day "
            price3="AED 5100/Day "
            point=" *You will pay deposit at the time of pickup/delivery."
          />
        </div>
      </Container>
    </div>
  </>
);
};

export default LimoCards;