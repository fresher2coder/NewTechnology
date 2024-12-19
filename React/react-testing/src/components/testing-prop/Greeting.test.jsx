import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("render with the name", () => {
  render(<Greeting name="Dineshkumar" />);

  expect(screen.getByText("Welcome Dineshkumar!"));
});

test("render with the guest", () => {
  render(<Greeting />);

  expect(screen.getByText("Welcome Guest!"));
});

/*
1. getByText()
2. getByRole()
3. getByLabelText()
4. getByTestId()

*/
