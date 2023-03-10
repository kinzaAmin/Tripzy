import React from "react";
import CarRentalCards from "./CarRentalCards";
import Container from "./Container";
import YatchPurpose from "./YatchPurpose";
const CarCards = ()=> {
    return (
      <>
        <div className="mt-8">
          <Container>
            {/* <div className="mt-8 px-10">
            <YatchPurpose
              yatchPurpose="Car for Rent"
              subtitle="Find Cheap Car Rental Deals and Discounts"
              viewBtn="View All"
            />
          </div> */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-14    mt-4">
              <CarRentalCards
                heading=" Mercedes-Benz S 500"
                subHeading="Seats 4| Doors 4 | Automatic "
                btn=" Rent a Car"
                img="/Images/Car.svg"
                price1=" Price : AED 5100/Day"
                price3=" AED 7,000  "
                point=" *You will pay deposit at the time of pickup/delivery. "
              />

              <CarRentalCards
                heading=" Ferrari Portofino"
                subHeading="Seats 2 | Doors 2 | Automatic "
                btn=" Rent a Car"
                img="/Images/Car2.svg"
                price1=" Price : AED 5100/Day"
                price3="AED 7,000 "
                point=" *You will pay deposit at the time of pickup/delivery. "
              />

              <CarRentalCards
                heading=" Ferrari 488 GTB"
                subHeading="Seats 2 | Doors 2 | Automatic "
                btn="Rent a Car"
                img="/Images/Car3.svg"
                price1=" Price : AED 5100/Day"
                price3=" AED 7,000 "
                point=" *You will pay deposit at the time of pickup/delivery. "
              />
              <CarRentalCards
                heading=" Mercedes-Benz S 500"
                subHeading="Seats 4 | Doors 4 | Automatic "
                btn=" Rent a Car"
                img="/Images/Car.svg"
                price1=" Price : AED 5100/Day"
                price3=" AED 7,000  "
                point=" *You will pay deposit at the time of pickup/delivery. "
              />

              <CarRentalCards
                heading=" Ferrari Portofino"
                subHeading="Seats 2 | Doors 2 | Automatic "
                btn=" Rent a Car"
                img="/Images/Car2.svg"
                price1=" Price : AED 5100/Day"
                price3="AED 7,000 "
                point=" *You will pay deposit at the time of pickup/delivery. "
              />

              <CarRentalCards
                heading=" Ferrari 488 GTB"
                subHeading="Seats 2 | Doors 2 | Automatic "
                btn="Rent a Car"
                img="/Images/Car3.svg"
                price1=" Price : AED 5100/Day"
                price3=" AED 7,000 "
                point=" *You will pay deposit at the time of pickup/delivery. "
              />
            </div>
          </Container>
        </div>
      </>
    );
};

export default CarCards;