import React, { useState } from "react";

interface Props {}

const ButtonEvent = (props: Props) => {
  const [message, setMessage] = useState<string>("");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMessage("Button Clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <h5>{message}</h5>
    </>
  );
};

export default ButtonEvent;
