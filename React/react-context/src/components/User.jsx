import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { userConsumer } from "../context/UserContext";

function User() {
  const { users, loading, error } = userConsumer();
  const { userId } = useParams();
  const user = users.find((u) => u.id === userId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {user && (
        <>
          <h1>{user.name}</h1>
          <h3>{user.id}</h3>
          <h3>{user.age}</h3>
          <h3>{user.occupation}</h3>
          <h3>{user.address}</h3>
        </>
      )}
    </>
  );
}

export default User;
