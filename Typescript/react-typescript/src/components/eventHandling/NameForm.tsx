import React, { useState } from "react";

interface Props {}

const NameForm = (props: Props) => {
  const [name, setName] = useState<string>("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Name"
      />
      <p>My name is {name}</p>
    </>
  );
};

export default NameForm;
