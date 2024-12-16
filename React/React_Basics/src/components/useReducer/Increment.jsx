import React from "react";
import { useCount } from "./CounterContext";

function Increment() {
  const { state, increment } = useCount();
  return (
    <>
      <div className="btns">
        <button onClick={increment}>Increment: {state.count}</button>
      </div>
    </>
  );
}

export default Increment;
