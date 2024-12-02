import React, { useState } from "react";

function Counter({ initialValue, incrementValue }) {
  //let count = 0;
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + incrementValue);
    //console.log(count);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - incrementValue);
    //console.log(count);
  };

  const handleIncrement5 = () => {
    for (let i = 0; i < 5; i++) {
      handleIncrement();
    }
  };
  return (
    <>
      <div className="counter">
        <h1>Count: {count}</h1>
        <div className="btns">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleIncrement5}>Increament 5x</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
