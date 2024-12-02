import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [sum, setSum] = useState(0);
  const add = (a, b) => {
    setSum(() => a + b);
  };
  return (
    <>
      <div className="card">
        <h1>Parent</h1>
        <p>Sum: {sum}</p>
        <Child add={add} />
      </div>
    </>
  );
}

export default Parent;
