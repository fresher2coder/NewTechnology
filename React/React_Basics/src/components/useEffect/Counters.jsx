import React, { useState } from "react";
import Counter from "../state/Counter";

function Counters() {
  const [counters, setCounters] = useState([
    { visible: true, number: 1 },
    { visible: true, number: 5 },
    { visible: true, number: 10 },
    { visible: true, number: 20 },
    { visible: true, number: 50 },
    { visible: true, number: 100 },
  ]);

  const handleUpdate = (event, action) => {
    event.preventDefault();

    // Ensure we get the selected value from the form
    const selectedValue = parseInt(
      event.target.elements.selectedCounter.value,
      10
    );

    // Toggle visibility based on the action
    setCounters((prev) =>
      prev.map((counter) =>
        counter.number === selectedValue
          ? { ...counter, visible: action === "add" }
          : counter
      )
    );
  };

  const visibleCounters = counters.filter((counter) => counter.visible);
  const hiddenCounters = counters.filter((counter) => !counter.visible);

  return (
    <section className="counters-container">
      <section className="counters">
        {visibleCounters.map((counter) => (
          <Counter
            key={counter.number}
            initialValue={counter.number}
            incrementValue={counter.number}
          />
        ))}
      </section>
      <section className="form-con">
        {visibleCounters.length > 0 && (
          <form
            className="remove-form"
            onSubmit={(e) => handleUpdate(e, "delete")}
          >
            <select name="selectedCounter">
              {visibleCounters.map((counter) => (
                <option key={counter.number} value={counter.number}>
                  Counter {counter.number}
                </option>
              ))}
            </select>
            <button type="submit">Delete</button>
          </form>
        )}

        {hiddenCounters.length > 0 && (
          <form
            className="remove-form"
            onSubmit={(e) => handleUpdate(e, "add")}
          >
            <select name="selectedCounter">
              {hiddenCounters.map((counter) => (
                <option key={counter.number} value={counter.number}>
                  Counter {counter.number}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
        )}
      </section>
    </section>
  );
}

export default Counters;
