import React from "react";
import { useParams } from "react-router-dom";
import { userConsumer } from "../context/UserContext";
import styled from "styled-components";

const UserContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Detail = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin: 0.5rem 0;
`;

const Loading = styled.div`
  font-size: 1.5rem;
  color: #777;
  text-align: center;
`;

const Error = styled.div`
  font-size: 1.5rem;
  color: red;
  text-align: center;
`;

function User() {
  const { users, loading, error } = userConsumer();
  const { userId } = useParams();
  const user = users.find((u) => u.id === userId);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <UserContainer>
      {user ? (
        <>
          <Title>{user.name}</Title>
          <Detail>ID: {user.id}</Detail>
          <Detail>Age: {user.age}</Detail>
          <Detail>Occupation: {user.occupation}</Detail>
          <Detail>Address: {user.address}</Detail>
        </>
      ) : (
        <Error>User not found</Error>
      )}
    </UserContainer>
  );
}

export default User;
