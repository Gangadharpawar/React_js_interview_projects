import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculater from "../Calculater";
import ImageCarausal from "../smallproject/ImageCarausal";
import MiniProject from "../smallproject/MiniProject";
import TodolistApp2 from "../Practice/TodolistApp2";
import TwoNoAddition from "../Practice/TwoNoAddition";
import Searchtext from "../Practice/Searchtext";
import Counter from '../hooks/usestate/Counter'

 function RouteApp() {
  let isLogged= true;
  let data ={
      'st': 'User Not Logged In'
  }
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
            {/* <Route path='/' element={<hr>Hello React Router</hr>}></Route> */}
            <Route path='/'element ={<Home />}/>
            <Route path='/About'element ={<About />}/>
            <Route path='/Contact'element ={<Contact />}/>
            <Route path='/Post/:category' element ={<Post/>}/>
            <Route path='/Post/:category/:id' element ={<Post/>}/>
            <Route path ='/login' element ={<Login/>}/>
            <Route path="/logout" element ={<Logout/>} />
            <Route path ='/dashboard' element ={isLogged ? <Dashboard/> : <Navigate to ='/login' replace state={data}/>}/>
            <Route path='*' element ={<h1>Error 404 Page Not Found </h1>}></Route>
            <Route path="/components/Calculater" element={<Calculater/>}/>
            <Route path="/components/smallproject/ImageCarausal" element={<ImageCarausal/>}/>
            <Route path="/components/smallproject/MiniProject" element={<MiniProject/>}/>
            <Route path="/components/Practice/TodolistApp2" element={<TodolistApp2/>}/>
            <Route path="/components/Practice/TwoNoAddition" element={<TwoNoAddition/>}/>
            <Route path="/components/Practice/Searchtext" element={<Searchtext/>}/>
            <Route path="/components/hooks/usestate/Counter" element={<Counter/>}/>
        </Routes>
    </BrowserRouter>  
    </>
  );
}

export default RouteApp;