import { Link,NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <>
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
        </ul> */}
        <ul className="navbar-nav">
            <li className="nav-item active"><NavLink to ="/" style={({isActive }) =>{return {backgroundColor :isActive ?'#CDDC39':' '}}}  className="nav-link">Home</NavLink> </li>
            <li className="nav-item active"><NavLink to ="/about" style={({isActive}) =>{return {backgroundColor :isActive ?'#CDDC39':' '}}} className="nav-link">About</NavLink> </li>
            <li className="nav-item active"><NavLink to ="/contact" style={({isActive}) =>{return {backgroundColor :isActive ?'#CDDC39':' '}}} className="nav-link">Contact</NavLink> </li>
           <li className="nav-item active"><NavLink to ='/post/mobile' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">Post</NavLink></li> 
     
            {/* <li className="nav-item active"><NavLink to ='/post/mobile/1' style={({isActive}) =>{ return{backgroundColor :isActive ?'red': ' '}}} className="nav-link">Post with Id</NavLink></li>  */}


            <li className="nav-item active"><NavLink to ='/components/Calculater' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">Calculater</NavLink></li> 
            <li className="nav-item active"><NavLink to ='/components/smallproject/ImageCarausal' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">ImageCarausal</NavLink></li> 
            <li className="nav-item active"><NavLink to ='/components/smallproject/MiniProject' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">MiniProject</NavLink></li>
            <li className="nav-item active"><NavLink to ='/components/Practice/TodolistApp2' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">TodolistApp2</NavLink></li>  
            <li className="nav-item active"><NavLink to ='/components/Practice/TwoNoAddition' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">TwoNoAddition</NavLink></li>  
            <li className="nav-item active"><NavLink to ='/components/Practice/Searchtext' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">Searchtext</NavLink></li> 
            <li className="nav-item active"><NavLink to ='/components/hooks/usestate/Counter' style={({isActive}) =>{ return{backgroundColor :isActive ?'#CDDC39': ' '}}} className="nav-link">Counter</NavLink></li>   
           </ul>
        </nav>
        </>
    )

}

export default Navbar;