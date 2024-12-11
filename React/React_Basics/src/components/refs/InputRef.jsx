import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import style from "styled-components";

const FormContainer = style.div`
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
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <>
      <FormContainer>
        <h2>Login Form</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="username">UserName</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={inputRef}
            />
          </div>
          <div className="btns">
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </FormContainer>
    </>
  );
}

export default InputRef;
