import React, { useState, createContext } from "react";
import Firstchild from "./Firstchild";
import Secondchild from "./Secondchild";

export const lastNameContext = createContext();

const Parent = () => {
  const [count, setCount] = useState(1);

  const incHandler = () => {
    setCount(count + 1);
  };
  const decHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <lastNameContext.Provider value={[count, incHandler, decHandler]}>
        <Firstchild />
        <Secondchild />
      </lastNameContext.Provider>
    </div>
  );
};
export default Parent;
