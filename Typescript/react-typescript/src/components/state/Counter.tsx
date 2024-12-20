import React, { useState } from "react";

interface Props {
  initialValue: number;
}

const Counter = ({ initialValue }: Props) => {
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
