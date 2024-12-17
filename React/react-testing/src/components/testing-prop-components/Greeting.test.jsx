import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("renders the correct greeting with a name", () => {
  render(<Greeting name="John" />);
  expect(screen.getByText("Hello, John!")).toBeInTheDocument();
});

test("renders the default greeting when no name is provided", () => {
  render(<Greeting />);
  expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
});
