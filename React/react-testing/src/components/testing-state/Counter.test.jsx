import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("check increment", () => {
  render(<Counter />);

  expect(screen.getByText("Count: 0"));

  const increment = screen.getByText("Increment");
  fireEvent.click(increment);
  expect(screen.getByText("Count: 1"));

  const decrement = screen.getByText("Decrement");
  fireEvent.click(decrement);
  expect(screen.getByText("Count: 0"));
});

test("check increment", () => {
  render(<Counter />);

  expect(screen.getByText("Count: 0"));

  const decrement = screen.getByText("Decrement");
  fireEvent.click(decrement);
  expect(screen.getByText("Count: -1"));

  const increment = screen.getByText("Increment");
  fireEvent.click(increment);
  expect(screen.getByText("Count: 0"));

  fireEvent.click(decrement);
  expect(screen.getByText("Count: -1"));
});
