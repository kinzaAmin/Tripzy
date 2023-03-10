import React from "react";


     const Container = ({ children, style = " md:px-10 px-5" }) => {
  return( <div className={`container mx-auto ${style}`}>{children}</div>);
};


export default Container;