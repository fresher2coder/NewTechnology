import React, { useEffect } from "react";
import User from "../components/User";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { userConsumer } from "../context/UserContext";
import styled from "styled-components";
import { useAuth } from "../context/SecuredContext";

const UsersContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1.2rem;

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;

const Loading = styled.div`
  font-size: 1.5rem;
  color: #777;
`;

const Error = styled.div`
  font-size: 1.5rem;
  color: red;
`;

function Users() {
  const { isLoggedIN } = useAuth();
  const { users, loading, error } = userConsumer();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIN) {
      navigate("/login");
      return;
    }
  }, []);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <UsersContainer>
      <Title>Users</Title>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </UserItem>
        ))}
      </UserList>
      <Outlet />
    </UsersContainer>
  );
}

export default Users;
