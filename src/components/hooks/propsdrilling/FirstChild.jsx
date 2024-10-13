import React from "react";
import Rohan from "./Rohan";
import Rohini from "./Rohini";

const FirstChild = (props) => {
  const rootName = "Gangadhar";
  return (
    <div>
      <button onClick={props.specility}>Father Specility</button>I am ganadhar
      and my last name is {props.sirName} {props.rootName}
      <Rohan sirName={props.sirName} rootName={rootName} />
      <Rohini sirName={props.sirName} rootName={rootName} />
    </div>
  );
};

export default FirstChild;
