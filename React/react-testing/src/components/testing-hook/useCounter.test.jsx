import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import { useState } from "react"; // useState is used inside the custom hook
import { vi } from "vitest"; // Import vi for mocking if needed
import { useCounter } from "./useCounter"; // Import your custom hook

// Wrapper component that uses the custom hook
function TestComponent({ initialValue }) {
  const { count, increment, decrement } = useCounter(initialValue);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

test("should initialize with a custom value and update on button click", () => {
  // Render the component that uses the custom hook
  render(<TestComponent initialValue={0} />);

  //renderHook - @testing-library/react-hooks

  // Verify initial state (count should be 0)
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  // Click the "Increment" button and verify the count is updated
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();

  // Click the "Decrement" button and verify the count is updated
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("should initialize with a custom initial value", () => {
  // Render the component with a custom initial value for the counter (e.g., 5)
  render(<TestComponent initialValue={5} />);

  // Verify the initial count is 5
  expect(screen.getByText("Count: 5")).toBeInTheDocument();

  // Click the "Increment" button and verify the count is updated
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count: 6")).toBeInTheDocument();

  // Click the "Decrement" button and verify the count is updated
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("Count: 5")).toBeInTheDocument();
});
