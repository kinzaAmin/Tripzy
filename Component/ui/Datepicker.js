import React, {useRef,  useState } from "react";

import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
//import DateTimePicker from "react-datetime-picker";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
const DatePicker = () => {
   const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  // const [value, onChange] = useState(new Date());

  return (
    <div className="bg-white border rounded w-full p-2 mt-2">
      <div className=" flex ">
        <input
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
          className="w-[221px] focus:outline-0"
        />

        <TimePicker
          placeholder="Select Time"
          use12Hours
          showSecond={true}
          focusOnOpen={true}
          format="hh:mm A"
          onChange={(e) => setTime(e.format("LT"))}
        />
        {/* <p> {date}</p> */}
      </div>

      {/* <DateTimePicker
      
        onChange={onChange}
        value={value}
        // amPmAriaLabel="AM/PM"
        // autoFocus={false}
        // closeWidgets="true"
        // format="y-MM-dd h:mm:ss a"
        // isCalendarOpen={true}
        // activeStartDate={new Date(value)}
        // calendarType="US"
        // defaultView="year"
        // formatLongDate={(locale, date) => formatDate(date, "dd MMM YYYY")}
        // showDoubleView={false}
        // prevAriaLabel="Previous"
        // showNavigation={true}
        showNeighboringMonth={false}
        // prevLabel="<"
        // prev2AriaLabel="Jump backwards"
      /> */}
    </div>
  );

  // return (
  //   <div className=" ">
  //     <input
  //       type="date"
  //       onChange={handleChange}
  //       ref={dateInputRef}
  //       className="w-[221px] focus:outline-0"
  //     />
  //     {/* <p> {date}</p> */}
  //   </div>
  // );
};

export default DatePicker;
