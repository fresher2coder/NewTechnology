import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return (
    <form action="">
      <div className="input-group">
        <label htmlFor="username">UserName</label>
        <input type="text" name="username" id="username" ref={inputRef} />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="btns">
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </div>
      <button
        type="button"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        Focus
      </button>
    </form>
  );
});

export default Form;
