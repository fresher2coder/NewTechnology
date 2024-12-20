import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for a Patient
interface Patient {
  id: number;
  name: string;
  age: number;
  history: string;
}

// Define the initial state
interface PatientState {
  patients: Patient[];
  loading: boolean;
  error: string | null;
}

const initialState: PatientState = {
  patients: [],
  loading: false,
  error: null,
};

// API Base URL
const API_URL = "http://localhost:3000/patients";

// Async Thunks
export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const response = await axios.get<Patient[]>(API_URL);
    return response.data;
  }
);

export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (newPatient: Omit<Patient, "id">) => {
    const response = await axios.post<Patient>(API_URL, newPatient);
    return response.data;
  }
);

export const updatePatient = createAsyncThunk(
  "patients/updatePatient",
  async (updatedPatient: Patient) => {
    const response = await axios.put<Patient>(
      `${API_URL}/${updatedPatient.id}`,
      updatedPatient
    );
    return response.data;
  }
);

export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch patients
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch patients.";
      })
      // Add patient
      .addCase(addPatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.patients.push(action.payload);
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add patient.";
      })
      // Update patient
      .addCase(updatePatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.patients.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) state.patients[index] = action.payload;
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update patient.";
      })
      // Delete patient
      .addCase(deletePatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = state.patients.filter((p) => p.id !== action.payload);
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete patient.";
      });
  },
});

export default patientSlice.reducer;
