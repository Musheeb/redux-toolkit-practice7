import { useSelector, useDispatch } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByValue,
  resetAll,
} from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);
  const addedValue = Number(userInput) || 0;
  const reset = () => {
    setUserInput(0);
    dispatch(resetAll());
  };
  return (
    <div>
      <h1>Current Counter : {count}</h1>
      <button onClick={() => dispatch(incrementByOne())}>+</button>
      <button onClick={() => dispatch(decrementByOne())}>-</button>
      <div>
        <input
          type="text"
          value={addedValue}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(addedValue))}>
          Add Value
        </button>
        <button onClick={reset}>Reset All</button>
      </div>
    </div>
  );
}
