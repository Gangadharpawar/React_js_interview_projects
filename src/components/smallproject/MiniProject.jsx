import Navbar from "./Navbar";
import Textform from "./Textform";
import About from "./About";
import React, { useState } from "react";
import Alert from "./Alert";
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";

export default function MiniProject() {
  const [mode, SetMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const ToggelMode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "gray";
      ShowAlert("Dark Mode Has been Enable", "success");
      document.title = "TextUtels - Dark Mode";
      //     setInterval(() => {
      //       document.title='TextUtels - Is Amazing  Dark Mode';
      //     }, 2000);
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode Has been Enable", "success");
      document.title = "TextUtels - Light Mode";
      //     setInterval(() => {
      //       document.title='Install TextUtels Now';
      //     }, 2000);
    }
  };
  return (
    <>
      <Navbar mode={mode} ToggelMode={ToggelMode} />
      <Alert alert={alert} />
      <div className="container my-3">
    
     <Textform ShowAlert={ShowAlert} heading="Enter Text Here" mode={mode} />
     {/* <BrowserRouter> */}
        <Routes>
            <Route path='/about'element ={<About />}/>  
        </Routes>
        <Routes>
            {/* <Route path='/textform'element ={<Textform   ShowAlert={ShowAlert} heading="Enter Text Here" mode={mode} />}/>   */}
        </Routes>
    {/* </BrowserRouter>  */}
      </div>
    </>
  );
}
