import { useDispatch, useSelector } from "react-redux";
import {
  addPatient,
  updatePatientDetails,
  updatePatientContactInfo,
  updatePatientAddress,
  deletePatient,
  assignDepartmentToPatient,
  assignHospitalToPatient,
  addTreatments,
  assignTreatmentToPatient,
} from "./patientSlice";

export const usePatientActions = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);
  const hospitals = useSelector((state) => state.patients.hospitals);
  const departments = useSelector((state) => state.patients.departments);
  const treatments = useSelector((state) => state.patients.treatments);
  const insurances = useSelector((state) => state.patients.insurances);
  const medications = useSelector((state) => state.patients.medications);

  const addNewPatient = (patient) => {
    dispatch(addPatient(patient));
  };

  const editDetails = (id, details) => {
    dispatch(updatePatientDetails({ id, details }));
  };

  const editContactInfo = (id, contactInfo) => {
    dispatch(updatePatientContactInfo({ id, contactInfo }));
  };

  const editAddress = (id, address) => {
    dispatch(updatePatientAddress({ id, address }));
  };

  const removePatient = (id) => {
    dispatch(deletePatient(id));
  };

  const assignHospital = (patientId, hospitalId) => {
    dispatch(assignHospitalToPatient({ patientId, hospitalId }));
  };

  const assignDepatment = (patientId, departmentId) => {
    dispatch(assignDepartmentToPatient({ patientId, departmentId }));
  };

  const addTreatment = (patientId, treatment) => {
    dispatch(addTreatments({ patientId, treatment }));
  };

  const assignTreatment = (patientId, treatmentId) => {
    dispatch(assignTreatmentToPatient({ patientId, treatmentId }));
  };

  return {
    patients,
    hospitals,
    departments,
    insurances,
    medications,
    treatments,
    addNewPatient,
    editDetails,
    editContactInfo,
    editAddress,
    removePatient,
    assignHospital,
    assignDepatment,
    addTreatment,
    assignTreatment,
  };
};
