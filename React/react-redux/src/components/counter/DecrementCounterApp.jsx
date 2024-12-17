import React from "react";
import { useCounter } from "./useCounter";

function DecrementCounterApp() {
  const { count, decrementCount } = useCounter();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}

export default DecrementCounterApp;
