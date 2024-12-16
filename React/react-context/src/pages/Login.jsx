import React, { useState } from "react";
import { useAuth } from "../context/SecuredContext";
import styled from "styled-components";

// Styled-components for the button and message
const StyledButton = styled.button`
  background-color: rgb(91, 0, 210);
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: rgb(0, 144, 93);
  }
`;

const SuccessMessage = styled.div`
  color: green;
  font-size: 18px;
  margin-top: 10px;
`;

function Login() {
  const { setIsLoggedIN } = useAuth();
  const [message, setMessage] = useState("");

  const handleAuth = () => {
    setIsLoggedIN(true);
    setMessage("Login successful!");
  };

  return (
    <>
      <StyledButton onClick={handleAuth}>Login</StyledButton>
      {message && <SuccessMessage>{message}</SuccessMessage>}
    </>
  );
}

export default Login;
