import { configureStore } from "@reduxjs/toolkit";
//import reducers
import counterReducer from "../components/counter/counterSlice";
import todoReducer from "../components/todo/todoSlice";
import patientReducer from "../components/patient-history/patientSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoReducer,
    patients: patientReducer,
  },
});
