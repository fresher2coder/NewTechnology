import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePatientActions } from "./usePatientActions";

// Styled Components for form
const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f5f5f5; /* Light gray background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #604cc3; /* Purple title */
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  transition: border 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #8fd14f; /* Green border on focus */
    background-color: #f1f9f1; /* Light green background on focus */
  }

  &:hover {
    border-color: #604cc3; /* Purple border on hover */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff6600; /* Orange background */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e65c00; /* Darker orange on hover */
    transform: scale(1.05); /* Slight grow effect */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(255, 102, 0, 0.5); /* Focus outline */
  }
`;

const PatientForm = () => {
  const { patients, addNewPatient, updateExistingPatient } =
    usePatientActions();
  const navigate = useNavigate();
  const { id } = useParams();

  const [patient, setPatient] = useState({
    id: "",
    details: {
      name: "",
      age: "",
      disease: "",
    },
    contactInfo: {
      phone: "",
      email: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
    },
  });

  useEffect(() => {
    if (id) {
      const patientToEdit = patients.find((p) => p.id === id);
      if (patientToEdit) {
        setPatient(patientToEdit);
      }
    }
  }, [id, patients]);

  const handleInputChange = (e, field, nestedField) => {
    const { name, value } = e.target;

    if (nestedField) {
      setPatient((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [nestedField]: value,
        },
      }));
    } else {
      setPatient((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateExistingPatient(patient);
    } else {
      addNewPatient({ ...patient, id: Date.now().toString() });
    }
    navigate("/"); // Redirect to home after submitting the form
  };

  return (
    <FormContainer>
      <FormTitle>{id ? "Edit Patient" : "Add Patient"}</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={patient.details.name}
          onChange={(e) => handleInputChange(e, "details", "name")}
          placeholder="Name"
          required
        />
        <InputField
          type="number"
          value={patient.details.age}
          onChange={(e) => handleInputChange(e, "details", "age")}
          placeholder="Age"
          required
        />
        <InputField
          type="text"
          value={patient.details.disease}
          onChange={(e) => handleInputChange(e, "details", "disease")}
          placeholder="Disease"
          required
        />
        <InputField
          type="text"
          value={patient.contactInfo.phone}
          onChange={(e) => handleInputChange(e, "contactInfo", "phone")}
          placeholder="Phone"
          required
        />
        <InputField
          type="email"
          value={patient.contactInfo.email}
          onChange={(e) => handleInputChange(e, "contactInfo", "email")}
          placeholder="Email"
          required
        />
        <InputField
          type="text"
          value={patient.address.street}
          onChange={(e) => handleInputChange(e, "address", "street")}
          placeholder="Street"
          required
        />
        <InputField
          type="text"
          value={patient.address.city}
          onChange={(e) => handleInputChange(e, "address", "city")}
          placeholder="City"
          required
        />
        <InputField
          type="text"
          value={patient.address.state}
          onChange={(e) => handleInputChange(e, "address", "state")}
          placeholder="State"
          required
        />
        <Button type="submit">{id ? "Update Patient" : "Add Patient"}</Button>
      </form>
    </FormContainer>
  );
};

export default PatientForm;
