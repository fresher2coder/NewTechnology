import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { usePatientActions } from "./usePatientActions";

// Styled Components
const FormContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f5f5f5; /* Light Gray Background */
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SectionContainer = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  color: #604cc3; /* Purple Title */
  margin-bottom: 15px;
`;

const InputField = styled.input`
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #ddd;
  background-color: #fff;
  font-size: 1rem;
  color: #333;
  margin-bottom: 15px;
  transition: border 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #8fd14f; /* Green border on focus */
    background-color: #f1f9f1; /* Light green background on focus */
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff6600; /* Orange Background */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e65c00; /* Darker Orange */
    transform: scale(1.05); /* Slight grow effect */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(255, 102, 0, 0.5); /* Focus outline */
  }
`;

const EditSection = ({ sectionName, fields, onSave }) => {
  const [formData, setFormData] = useState(fields);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSave(formData);
  };

  return (
    <SectionContainer>
      <SectionTitle>Edit {sectionName}</SectionTitle>
      <form onSubmit={handleSubmit}>
        {Object.keys(fields).map((field) => (
          <InputField
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            placeholder={`Enter ${field}`}
          />
        ))}
        <Button type="submit">Save {sectionName}</Button>
      </form>
    </SectionContainer>
  );
};

const EditPatient = () => {
  const { id } = useParams();
  const { patients, editDetails, editContactInfo, editAddress } =
    usePatientActions();
  const navigate = useNavigate();

  const patient = patients.find((p) => p.id === parseInt(id));

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <FormContainer>
      <EditSection
        sectionName="Details"
        fields={patient.details}
        onSave={(details) => {
          editDetails(parseInt(id), details);
          navigate("/"); // Navigate to home after saving
        }}
      />
      <EditSection
        sectionName="Contact Info"
        fields={patient.contactInfo}
        onSave={(contactInfo) => {
          editContactInfo(parseInt(id), contactInfo);
          navigate("/"); // Navigate to home after saving
        }}
      />
      <EditSection
        sectionName="Address"
        fields={patient.address}
        onSave={(address) => {
          editAddress(parseInt(id), address);
          navigate("/"); // Navigate to home after saving
        }}
      />
    </FormContainer>
  );
};

export default EditPatient;
