import React from "react";
import { useCount } from "./CounterContext";

function Decrement() {
  const { state, decrement } = useCount();
  return (
    <>
      <div className="btns">
        <button onClick={decrement}>Decrement: {state.count}</button>
      </div>
    </>
  );
}

export default Decrement;
