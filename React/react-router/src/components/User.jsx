import React, { useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([
    { id: 1, name: "Dineshkumar", occupation: "Technical Trainer" },
    { id: 2, name: "Divya Dineshkumar", occupation: "Molucular Biologist" },
    { id: 3, name: "Darwin Divya Dinesh", occupation: "Kinder Garden" },
  ]);
  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId));
  return (
    <>
      <div>
        <h2>{user.name}</h2>
        <h3>{user.occupation}</h3>
      </div>
    </>
  );
}

export default User;
