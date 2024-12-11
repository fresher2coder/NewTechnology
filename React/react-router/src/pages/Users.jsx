import React, { useState } from "react";
import User from "../components/User";
import { Link, Outlet } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Dineshkumar", occupation: "Technical Trainer" },
    { id: 2, name: "Divya Dineshkumar", occupation: "Molucular Biologist" },
    { id: 3, name: "Darwin Divya Dinesh", occupation: "Kinder Garden" },
  ]);
  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default Users;
