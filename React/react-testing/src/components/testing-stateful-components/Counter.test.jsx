import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("increments and decrements the count", () => {
    render(<Counter />);

    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    // Initial state
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    // Simulate increment
    fireEvent.click(incrementButton);
    expect(screen.getByText("Count: 2")).toBeInTheDocument();

    // Simulate decrement
    fireEvent.click(decrementButton);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});

/*
<button>Increment</button>
screen.getByRole('button', { name: 'Increment' });

<button aria-label="Increment button">Increment</button>
screen.getByLabelText("Increment button");

<button data-testid="increment-btn">Increment</button>
screen.getByTestId("increment-btn");


*/
