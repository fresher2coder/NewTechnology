import React from "react";
import User from "../components/User";
import { Link, Outlet } from "react-router-dom";
import { userConsumer } from "../context/UserContext";

function Users() {
  const { users, loading, error } = userConsumer();

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}

export default Users;
