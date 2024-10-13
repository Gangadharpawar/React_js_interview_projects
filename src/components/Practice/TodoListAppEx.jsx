import react from "react";
import { useState,useEffect,useContext,useRef,useReducer,useCallback,useMemo} from "react";


const TodoListAppEx =()=> {

        const [newitem,setnewitem] =useState("");
        const[item,setitems ] = useState([]);

        const Additem =()=>{
            if(!newitem){
                alert("Enter An item ");
                return;
            }
            const item ={
                id:Math.floor(Math.random() * 100),
                value:newitem
            };
            setitems(oldList =>[...oldList,item]);
            setnewitem("");
        }

        // const Deleteitem =() => {
        //     const newArray = item.filter( item => item.id !==id);
        //     setitems(newArray);
        // }

        return(    
            <div className="App">
                {/* 1.header */}
            <h1>4**Todo List </h1>
           
            {/* 2.input and Button */}
             <input type="text" placeholder="Add item " value= {newitem} onChange ={ e=>setnewitem(e.target.value)}/>
            <button onClick={()=>Additem()}>Add</button>
            {/* 3.list of Item  */}
            <ul>
                 {
                    item.map( item =>{
                        return(
                            <li key={item.id}>{item.value} </li>
                            // <button onClick={() =>Deleteitem(item.id)}>X</button>
                        )
                    })
                 }
            </ul>

            </div>
        )
}

export default TodoListAppEx;