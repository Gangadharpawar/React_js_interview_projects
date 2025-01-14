import './Calculater.css';
import React,{useEffect, useState,useRef} from "react";
const Calculater = () => {

  const [result ,setResult] = useState( " ");
  // const inputRef  = useRef(null);
  // useEffect(() => inputRef.current.focus());

  function handleClick(e){
    setResult(result.concat(e.target.name));
  }

  function backspace(){
    setResult(result.slice(0,result.length -1));
  }
  const clearall =() =>{
    setResult(" ");
  }

  const calculate =() =>{
    try{
      setResult(eval(result).toString())
    }catch(error){
      setResult('error');
    }
  }

  return (
      <div className='main-wrapper'>
    <div className ="wrapper" >
        <div className="calc-app">
        <form>
            {/* <input type="text" value={result} ref ={inputRef} /> */}
            <input type="text" value={result} />
        </form>
          <div className="keypad">
            <button id = "clear" onClick={clearall}>Clear</button>
            <button id = "C" onClick={backspace}>C</button>
            <button name="+" className='operater' onClick={handleClick}>+</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="-" className='operater' onClick={handleClick}>-</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="*" className='operater' onClick={handleClick}>*</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="/" className='operater' onClick={handleClick}>/</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="=" className='equals' onClick={calculate}>=</button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Calculater;
