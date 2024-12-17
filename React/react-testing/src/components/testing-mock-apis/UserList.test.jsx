import { render, screen } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";

jest.mock("axios");

test("fetches and displays users", async () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  axios.get.mockResolvedValueOnce({ data: users });

  render(<UserList />);

  // Check for user names in the document
  for (const user of users) {
    expect(await screen.findByText(user.name)).toBeInTheDocument();
  }
});
