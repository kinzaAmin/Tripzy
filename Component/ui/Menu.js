import React,{useState} from "react";
import Button from "./Button";
import Image from "next/image";
import Yatches from "./Yatches";
import Helicopter from "./Helicopter";
import Limousine from "./Limousine";
import CarRental from "./CarRental";
import Button2 from "./Button2";

const Menu = (props)=> {
  const [Hover, setHover] = useState(false);
// const [yatchbtn , setYatchbtn]=useState(true)
// const[Helibtn , setHelibtn]=useState(false)
// const [Limobtn, setLimobtn] = useState(false);
// const[Carbtn ,setCarbtn]=useState(false)
// const[isYatch , setYatch]=useState(true)
// const [isHeli , setHeli]=useState(false)
// const [isLimo, setLimo] = useState(false);
// const [isCar, setCar] = useState(false);

// const handleYatch = ()=> {
//   setYatch(true)
// }
//  const handleHeli = ()=> {
//   setHeli(true)
//   setYatch(false)
//   setLimo(false)
//   setCar(false)
//  }

//  const handleLimo = ()=> {
//  setLimo(true)
//  setYatch(false);
//  setHeli(false)
//   setCar(false);
//  }
//  const handleCar = ()=> {
//   setCar(true)
//   setYatchbtn(false)
//   setHeli(false);
//   setLimo(false);
//  }


// const showYatchbtn =()=> {
//   setYatchbtn(true)
//    setHelibtn(false);
//    setLimobtn(false);
//    setCarbtn(false);
// }
// const ShowHelibtn = ()=> {
//   setHelibtn(true)
//   setYatchbtn(false)
//   setLimobtn(false)
//   setCarbtn(false)
// }
// const ShowLimobtn= ()=> {
//   setLimobtn(true)
//   setYatchbtn(false)
//   setHelibtn(false)
//   setCarbtn(false)
// }
// const ShowCarbtn = () => {
//   setCarbtn(true);
//   setLimobtn(false);
//   setYatchbtn(false);
//   setHelibtn(false);
// };

    return (
      <>
        <div className="  md:w-[788px] h-[40px] sm:w-[550px] w-[200px]  bg-white rounded-lg z-20 grid grid-cols-4  md:h-14 font-Segoe  md:ml-20 sm:ml-14 ml-3 relative mt-[-68px] shadow-md ">
          <div className="shadow cursor-pointer" onClick={props.ClickYatches}>
            <Button2 img="/Images/yatchbtn.svg"
             btnName="Yatch" />
          </div>
          <div className="shadow " onClick={props.ClickHeli}>
            <Button2
              img="/Images/Heli.svg"
              btnName="Helicopter"
            />
          </div>
          <div className="shadow cursor-pointer" onClick={props.ClickLimo}>
            <Button2
              img="/Images/Limobtn.svg"
              btnName="Limousine"
            />
          </div>
          <div className="shadow cursor-pointer" onClick={props.ClickCars}>
            <Button2
              img="/Images/Carbtn.svg"
              btnName="CarRental"
            />
          </div>
        </div>

        {/* <div className="  w-[788px]  bg-white rounded-lg z-20 grid grid-cols-4  h-14 font-Segoe  ml-20 relative mt-[-20px] shadow-md ">
          <div
            className="shadow cursor-pointer"
            onClick={() => {
              props.ClickYatches;
              showYatchbtn();
              // handleYatch();
            }}
          >
            {yatchbtn ? (
              <Button2 img="Images/yatchbtn.svg" btnName="Yatch" />
            ) : (
              <Button
                title="Yacht"
                Color="#FFFFFF"
                TextClr=" #312929"
                paddingleft="40px"
              />
            )}
          </div>
          <div
            className="shadow"
            onClick={() => {
              props.ClickHeli;
              ShowHelibtn();
              //  handleHeli();
            }}
          >
            {Helibtn ? (
              <Button2 img="Images/Heli.svg" btnName="Helicopter" />
            ) : (
              <Button
                title="Helicopter"
                Color="#FFFFFF"
                TextClr="#312929 "
                paddingleft="30px"
              />
            )}
          </div>
          <div
            className="shadow cursor-pointer"
            onClick={() => {
              props.ClickLimo;
              ShowLimobtn();
              // handleLimo();
            }}
          >
            {Limobtn ? (
              <Button2 img="Images/Limobtn.svg" btnName="Limousine" />
            ) : (
              <Button
                title="Limousine"
                Color="#FFFFFF"
                TextClr="#312929 "
                paddingleft="30px"
              />
            )}
          </div>
          <div
            className="shadow cursor-pointer"
            onClick={() => {
              props.ClickCars;
              ShowCarbtn();
              // handleCar();
            }}
          >
            {Carbtn ? (
              <Button2 img="/Images/Carbtn.svg" btnName="Car Rentals" />
            ) : (
              <Button
                title="Car Rentals"
                Color="#FFFFFF"
                TextClr="#312929 "
                paddingleft="30px"
              />
            )}
          </div>
        </div> */}

        {/* {yatchbtn && <Button2 />}
        {Helibtn && <Button2 />}
        {Limobtn && <Button2 />}
        {Carbtn && <Button2 />} */}
        {/* {isYatch && <Yatches/>}
        {isHeli && <Helicopter/>}
        {isLimo && <Limousine/>}
        {isCar && <CarRental/>} */}
      </>
    );
}
export default Menu;