import React, { useState } from "react";
import { useCounter } from "./useCounter";

function IncrementByAmountApp() {
  const [amount, setAmount] = useState(0);
  const { count, incrementByAmountCount } = useCounter();
  return (
    <>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <h1>Count: {count}</h1>
      <button onClick={() => incrementByAmountCount(parseInt(amount))}>
        Increment
      </button>
    </>
  );
}

export default IncrementByAmountApp;
