import { useState,useRef,useEffect} from "react";

const Counter = () =>{

 const [count ,setCount] = useState(0);

//  const prevValue = useRef('')
//   useEffect(() => {
//     prevValue.current = count;
//   }, [count]);


//  if (count >=11) {
//      setCount( 5 + 1 );
//    }
 const inc =()=>{
    setCount(count + 1 );
 }
 const dec = ()=>{
     count===0? setCount(count) : setCount(count - 1 );;
     // setCount(count - 1 );
 }
 return(
      <div className="wraper" style={{paddingTop:20}}>
            <button  onClick={inc}>INCREMENT</button>
            <label style={{color :"red", fontSize:35}}>Count:{count}</label>
            
           <button disabled ={count===0} onClick={dec} >DECREMENT</button>
           {/* {prevValue.current} */}
      </div>
 )

}

export default Counter;