import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [
    {
      id: 1,
      details: {
        name: "dinesh",
        age: 30,
        disease: "Flu",
      },
      contactInfo: {
        phone: "9587458625",
        email: "dinesh@example.com",
      },
      address: {
        street: "dk street",
        city: "Chennai",
        state: "TamilNadu",
      },
      hospitalId: 101,
      departmentId: 201,
      treatmentId: 301,
      insuranceId: 401,
      medicationId: 501,
    },
  ],
  hospitals: [
    { id: 101, name: "City General Hospital", location: "Central Chennai" },
    { id: 102, name: "Central Hospital", location: "West Chennai" },
    { id: 103, name: "North Hospital", location: "North Chennai" },
    { id: 104, name: "East General Hospital", location: "East Chennai" },
  ],
  departments: [
    { id: 201, name: "General Medicine", head: "Dr. Kumar" },
    { id: 202, name: "General Medicine", head: "Dr. Devi" },
    { id: 203, name: "General Medicine", head: "Dr. Thanga" },
  ],
  treatments: [
    { id: 301, name: "Flu Treatment Package", startDate: "2024-12-01" },
  ],
  insurances: [
    { id: 401, name: "Health Plus Insurance", policyNumber: "HP12345" },
  ],
  medications: [
    {
      id: 501,
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice a day",
    },
  ],
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action) => {
      // Calculate the next patient ID based on the last patient's ID
      const nextId =
        state.patients.length > 0
          ? state.patients[state.patients.length - 1] + 1
          : 1;
      const newPatient = { ...action.payload, id: nextId };
      state.patients.push(newPatient);
    },
    updatePatientDetails: (state, action) => {
      const { id, details } = action.payload;
      const patient = state.patients.find((p) => p.id === id);
      if (patient) {
        patient.details = details;
      }
    },
    updatePatientContactInfo: (state, action) => {
      const { id, contactInfo } = action.payload;
      const patient = state.patients.find((p) => p.id === id);
      if (patient) {
        patient.contactInfo = contactInfo;
      }
    },
    updatePatientAddress: (state, action) => {
      const { id, address } = action.payload;
      const patient = state.patients.find((p) => p.id === id);
      if (patient) {
        patient.address = address;
      }
    },
    deletePatient: (state, action) => {
      state.patients = state.patients.filter((p) => p.id !== action.payload);
    },
    assignHospitalToPatient: (state, action) => {
      const { patientId, hospitalId } = action.payload;
      const patient = state.patients.find((p) => p.id === patientId);
      if (patient) {
        patient.hospitalId = hospitalId;
      }
    },
    assignDepartmentToPatient: (state, action) => {
      const { patientId, departmentId } = action.payload;
      const patient = state.patients.find((p) => p.id === patientId);
      if (patient) {
        patient.departmentId = departmentId;
      }
    },
    // New: Add a treatment to the global treatments array
    addTreatments: (state, action) => {
      const nextId =
        state.treatments.length > 0
          ? state.treatments[state.treatments.length - 1].id + 1
          : 1;
      const newTreatment = { ...action.payload, id: nextId };
      state.treatments.push(newTreatment);
    },

    // New: Assign a treatment to a patient
    assignTreatmentToPatient: (state, action) => {
      const { patientId, treatmentId } = action.payload;
      const patient = state.patients.find((p) => p.id === patientId);
      if (patient) {
        patient.treatmentId = treatmentId; // Assign treatment to the patient
      }
    },
  },
});

export const {
  addPatient,
  updatePatientDetails,
  updatePatientContactInfo,
  updatePatientAddress,
  deletePatient,
  assignHospitalToPatient,
  assignDepartmentToPatient,
  addTreatments,
  assignTreatmentToPatient,
} = patientSlice.actions;
export default patientSlice.reducer;
