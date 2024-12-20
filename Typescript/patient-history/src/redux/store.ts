import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../components/patientSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    patients: patientReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
