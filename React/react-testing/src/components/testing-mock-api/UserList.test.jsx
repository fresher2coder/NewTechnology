import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./UserList";
import { expect, vi } from "vitest";
import axios, { AxiosError } from "axios";

vi.mock("axios");

test("data is resolved", async () => {
  const users = [
    { id: 1, name: "Dineshkumar" },
    { id: 2, name: "Divya " },
  ];

  axios.get.mockResolvedValueOnce({ data: users });

  render(<UserList />);

  //loading(true), resolved->list of users loading(false)
  expect(screen.getByText("Loading..."));

  await waitFor(() => {
    for (let user of users) {
      expect(screen.getByText(user.name));
    }
  });

  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
});

test("data is not resolved", async () => {
  axios.get.mockResolvedValueOnce(new AxiosError("Error fetching users"));

  render(<UserList />);

  //loading(true), loading(false)
  expect(screen.getByText("Loading..."));

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
