import React from 'react'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

const Parent = () => {
    const rootName = "Narsing";
    const sirName = "Pawar";

    const WrestlerHandler = () =>{
        alert('My father was a reputed wrestler in his young days')
    }
    return (
        <div>
            <FirstChild sirName={sirName} rootName={rootName} specility={WrestlerHandler}/>
            <SecondChild sirName={sirName} rootName={rootName} specility={WrestlerHandler}/>
        </div>
    )
}
export default Parent