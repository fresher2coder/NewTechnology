import { createContext, useContext, useReducer } from "react";
import { countReducer } from "./CountReducer";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, { count: 1 });

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <>
      <CounterContext.Provider value={{ state, increment, decrement }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export const useCount = () => useContext(CounterContext);
