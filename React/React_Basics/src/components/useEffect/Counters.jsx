import React, { useState } from "react";
import Counter from "../state/Counter";

function Counters() {
  const [visibleCounters, setCounters] = useState({
    counter1: true,
    counter5: true,
    counter100: true,
  });
  const handleDelete = (event) => {
    event.preventDefault();
    console.log(event.target.selectedCounter.value);
    setCounters((prev) => ({
      ...prev,
      [event.target.selectedCounter.value]: false,
    }));
  };

  return (
    <>
      <section className="counters-container">
        <section className="counters">
          {visibleCounters.counter1 && (
            <Counter initialValue={1} incrementValue={1} />
          )}
          {visibleCounters.counter5 && (
            <Counter initialValue={5} incrementValue={5} />
          )}
          {visibleCounters.counter100 && (
            <Counter initialValue={100} incrementValue={100} />
          )}
        </section>
        <section className="remove-con">
          <form action="" className="remove-form" onSubmit={handleDelete}>
            <select name="selectedCounter" id="">
              <option value="counter1">Counter 1</option>
              <option value="counter5">Counter 5</option>
              <option value="counter100">Counter 100</option>
            </select>
            <button type="submit">Delete</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Counters;
