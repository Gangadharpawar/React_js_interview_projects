import { useState,useEffect,useContext,useRef,useReducer,useCallback,useMemo} from "react";
import { ReactDOM } from "react-dom";



const TwoNoAddition =()=>{

    const [number1,setNumber1] = useState();
    const [number2,setNumber2] = useState();
    const [total,setTotal] = useState(number1 + number2);

    const CalculateTotal =()=>{

        setTotal(parseInt(number1) + parseInt(number2));
    }

    const CalculateMultiplication =()=>{

        setTotal(number1 * number2);
    }

    const CalculateSubtraction =()=>{

        setTotal(number1 - number2);
    }

    const CalculateDivision  =()=>{

        setTotal(number1 / number2);
    }
    
    const Addnumber1 =(e) =>{
        setNumber1(e.target.value);
    }

    const Addnumber2 =(e) =>{
        setNumber2(e.target.value)
    }
    

    return(

        <div className="MyApp">
            <h2>2**Addition of two Number**</h2>
            <div className="input-types">
                <input type="text" value={number1} onChange={Addnumber1} name="number1" style={{width:595}}/><br></br>
                <input type="text" value={number2} onChange={Addnumber2} name="number2" style={{width:595}}/>
            </div>
            <button onClick={CalculateTotal}>Addition</button>
            <button onClick={CalculateSubtraction}>  subtraction</button>
            <button onClick={CalculateMultiplication}> Multiplication</button>
            <button onClick={CalculateDivision}> Division</button>
            <h2>ANSWER:{total}</h2>
        </div>
    );

}

export default TwoNoAddition;