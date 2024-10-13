import react from "react";

import PracticeExample from './PracticeExample';
import TwoNoAddition from './TwoNoAddition';
import FetchDataAPIExample from "./FetchDataAPIExample";
import TodoListAppEx from"./TodoListAppEx";
import Searchtext from "./Searchtext";
import TodolistApp2 from "./TodolistApp2";

const PracticeApp =()=>{

    return(
         <div>
            <PracticeExample/>
            <TwoNoAddition/>
            <FetchDataAPIExample/>
            {/* <TodoListAppEx/> */}
            <Searchtext/>
            <TodolistApp2/>
        </div>
    )
}

export default PracticeApp;