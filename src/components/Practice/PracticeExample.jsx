import { useState,useEffect,useContext,useRef,useReducer,useCallback,useMemo} from "react";
import { ReactDOM } from "react-dom";


// Normal JSX Example

// const PracticeExample = () =>{

//     return (

//         <div className="myApp">
//             <h1>JSX Example!</h1>
//         </div>
//     )

// }
// export default PracticeExample;


// 2. Use React State to Update the DOM

const UpdateStatesEx = () =>{

    const [search,setSearch] = useState("");

        return(
            <div className="Apps">
                <h2>1.*Update data from an Input*</h2>
                <div className="input-display">
                    Search Keyword:<b>{search}</b>
                </div>
                <div className="inputs">
                    <input className="input" type="text" value={search} placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)} />
                </div>
            </div>
        );
}

export default UpdateStatesEx;

