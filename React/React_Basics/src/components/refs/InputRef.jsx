import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Form from "./Form";

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function InputRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focusInput();
    }
  }, []);

  return (
    <FormContainer>
      <h2>Login Form</h2>
      <Form ref={inputRef} />
    </FormContainer>
  );
}

export default InputRef;
