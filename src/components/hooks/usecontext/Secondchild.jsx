import React,{useContext} from 'react'
import{lastNameContext} from './Parent'

const Secondchild = () => {
    let [count,incHandler,decHandler] = useContext(lastNameContext)
    return (
        <div>
            Secondchild 

            <p>Count :{count}</p>
            <button onClick={incHandler}>Increment</button>
            <button onClick={decHandler}>Deccrement</button>
        </div>
    )
}
export default Secondchild