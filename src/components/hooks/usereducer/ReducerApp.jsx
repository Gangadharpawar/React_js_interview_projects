import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const initialState2 = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      if (state.count === 1)
        return {
          count: 1,
        };
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const reducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case "INCREMENT2":
      return {
        count: state.count + 1,
      };
    case "DECREMENT2":
      if (state.count === 1)
        return {
          count: 1,
        };
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const ReducerApp = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const [counter2, dispatch2] = useReducer(reducer2, initialState2);

  return (
    <div>
      <div>
        <h2>Count : {counter.count}</h2>
        <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
      <br />

      <div>
        <h2>Count2 : {counter2.count}</h2>
        <button onClick={(e) => dispatch2({ type: "INCREMENT2" })}>
          Increment2
        </button>
        <button onClick={(e) => dispatch2({ type: "DECREMENT2" })}>
          Decrement2
        </button>
      </div>
    </div>
  );
};
export default ReducerApp;
