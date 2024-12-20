import React, { useEffect, useState } from "react";

interface User {
  name: string;
  age: number;
}
function UserProfile() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState<User>({
    name: "Dineshkumar",
    age: 25,
  });
  useEffect(() => {
    setUsers([...users, { user }]);
  }, []);
  return (
    <>
      <h1>name: {user.name}</h1>
      <h1>age: {user.age}</h1>
    </>
  );
}

export default UserProfile;
