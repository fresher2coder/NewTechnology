import { configureStore } from "@reduxjs/toolkit";
//import reducers
import counterReducer from "../components/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
