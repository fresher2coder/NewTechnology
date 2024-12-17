import { configureStore } from "@reduxjs/toolkit";
//import reducers
import counterReducer from "../components/counter/counterSlice";
import todoReducer from "../components/todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoReducer,
  },
});
