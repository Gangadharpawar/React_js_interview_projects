import React, { useState,useRef,useEffect } from "react";

/*const Userefcomp = () => {
  //const userRef = useRef();
  // useEffect(()=>{
  //     userRef.current.focus()
  // })

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const hideMeRef = useRef();
  const counterRef = useRef(1);
  const greetMeHandler = () => {
    alert(`Hello ${firstnameRef.current.value} ${lastnameRef.current.value}`);
  };

  const hideHandler = () =>{
    hideMeRef.current.style.display = "none";
  }

  useEffect(()=>{
    console.log(counterRef.current)
  })
  return (
    <div>
      <input type="text" name="firstname" id="firstname" ref={firstnameRef} />
      <br />
      <input type="text" name="lastname" id="lastname" ref={lastnameRef} />
      <br />

      <button onClick={greetMeHandler}>Submit</button><br /><br />

      <div style={{border:'1px solid black'}} ref={hideMeRef} onClick={hideHandler}>
        The National Pledge is an oath of allegiance to the Republic of India.
        It is commonly recited by Indians in unison at public events, especially
        in schools, and during the Independence Day and Republic Day
        celebrations. It is commonly found printed in the opening pages of
        school textbooks and calendars.
      </div>

      <h2>Count :{counterRef.current}</h2>

    </div>
  );
};
export default Userefcomp; */

const Userefcomp = () =>{
    const [name,setName] = useState("")

    const managePrevval = useRef();

    const inputHandler = (e) =>{
        managePrevval.current = name;
        setName(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={inputHandler} name="name" value={name}/>

            <p>My Current Value : {name}</p>
            <p>My Previous Value : {managePrevval.current}</p>
        </div>
    )
}

export default Userefcomp;