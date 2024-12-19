import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientForm from "../components/patient-history/PatientForm";
import PatientList from "../components/patient-history/PatientList";
import EditPatient from "../components/patient-history/EditPatient";
import PatientDetails from "../components/patient-history/PatientDetails";

const PatientRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/add-patient" element={<PatientForm />} />
        <Route path="/edit-patient/:id" element={<EditPatient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
      </Routes>
    </Router>
  );
};

export default PatientRoute;
