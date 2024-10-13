import React from 'react'
import UsestateComp from './usestate/UsestateComp'
// import EffectComp from './useeffect/EffectComp'
// import ReducerApp from './usereducer/ReducerApp'
// import Userefcomp from './useref/Userefcomp'
// import Parent from './propsdrilling/Parent'
// import Parent from './usecontext/Parent'
import Counter from './usestate/Counter'

const HooksApp = () => {
    return (
        <div>
            <UsestateComp/>
             {/* <EffectComp/> */}
             {/* <ReducerApp /> */}
              {/* <Userefcomp /> */}
            {/* <Parent/>            */}
           <Counter />
        </div>
    )
}
export default HooksApp