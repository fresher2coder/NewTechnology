import React, { useState } from "react";

function MultiCounter() {
  const [count, setCount] = useState({ countA: 0, countB: 0 });

  const handleCounterA = () => {
    setCount((prevCount) => ({
      ...prevCount,
      countA: prevCount.countA + 1,
    }));
  };
  const handleCounterB = () => {
    setCount((prevCount) => ({
      ...prevCount,
      countB: prevCount.countB + 1,
    }));
  };

  return (
    <>
      <div className="counter">
        <h1>Counter A: {count.countA}</h1>
        <button onClick={handleCounterA}>Increment</button>

        <h1>Counter B: {count.countB}</h1>
        <button onClick={handleCounterB}>Increment</button>
      </div>
    </>
  );
}

export default MultiCounter;
