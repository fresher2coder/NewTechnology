import React from "react";

function UserProfile({ name, age, email, address }) {
  //   const { name, age, email, address } = props;
  return (
    <>
      <div className="userProfile">
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        {email && <p>Email: {email}</p>}
        <p>Address: {address}</p>
      </div>
    </>
  );
}

export default UserProfile;
