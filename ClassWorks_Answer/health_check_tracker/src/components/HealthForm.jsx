import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin: 10px 0;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
  width: 100%;
  max-width: 300px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #ccc")};
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const HealthForm = ({ addLog }) => {
  const [formData, setFormData] = useState({
    name: "",
    temperature: "",
    bloodPressure: "",
    glucose: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.temperature)
      newErrors.temperature = "Temperature is required.";
    if (!formData.bloodPressure)
      newErrors.bloodPressure = "Blood Pressure is required.";
    if (!formData.glucose) newErrors.glucose = "Glucose level is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create a new log
    const newLog = {
      id: Date.now(),
      name: formData.name,
      temperature: parseFloat(formData.temperature),
      bloodPressure: formData.bloodPressure,
      glucose: parseFloat(formData.glucose),
      date: new Date().toLocaleDateString(),
    };

    addLog(newLog);

    // Reset form
    setFormData({ name: "", temperature: "", bloodPressure: "", glucose: "" });
    setErrors({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </Label>
      <Label>
        Temperature (°C):
        <Input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
          error={errors.temperature}
        />
        {errors.temperature && <ErrorText>{errors.temperature}</ErrorText>}
      </Label>
      <Label>
        Blood Pressure (e.g., 120/80):
        <Input
          type="text"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          error={errors.bloodPressure}
        />
        {errors.bloodPressure && <ErrorText>{errors.bloodPressure}</ErrorText>}
      </Label>
      <Label>
        Glucose Level (mg/dL):
        <Input
          type="number"
          name="glucose"
          value={formData.glucose}
          onChange={handleChange}
          error={errors.glucose}
        />
        {errors.glucose && <ErrorText>{errors.glucose}</ErrorText>}
      </Label>
      <SubmitButton type="submit">Add Log</SubmitButton>
    </Form>
  );
};

export default HealthForm;
