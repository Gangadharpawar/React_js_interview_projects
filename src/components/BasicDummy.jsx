import React from 'react'

const BasicDummy = () => {

    const ChildBasicComp = () =>{
        return(
            <div>I am basic Child comp </div>
        )
    }

    return (
        <div>
            I am basic Parent comp
            <ChildBasicComp />
        </div>
    )
}
export default BasicDummy