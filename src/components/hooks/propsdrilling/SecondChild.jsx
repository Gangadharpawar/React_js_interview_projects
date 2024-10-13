import React from "react";

const SecondChild = (props) => {
  return (
    <div>
      <button onClick={props.specility}>Father Specility</button>
      <p>
        I am mahadev and my last name is {props.sirName} {props.rootName}
      </p>
    </div>
  );
};
export default SecondChild;
