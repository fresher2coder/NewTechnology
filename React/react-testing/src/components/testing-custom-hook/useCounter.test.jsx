import { act } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("should initialize with default value and update count correctly", () => {
  const { result } = renderHook(() => useCounter());

  // Initial value
  expect(result.current.count).toBe(0);

  // Increment
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);

  // Decrement
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(0);
});

test("should initialize with a custom value", () => {
  const { result } = renderHook(() => useCounter(10));
  expect(result.current.count).toBe(10);
});
