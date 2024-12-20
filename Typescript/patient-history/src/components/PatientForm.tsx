import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../redux/store";
import { addPatient } from "./patientSlice";

const FormContainer = styled.div`
  background: linear-gradient(135deg, #ff7f50, #ff6347);
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  color: white;
`;

const Title = styled.h2`
  color: rgb(255, 240, 247);
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ff69b4;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ff69b4;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  background: #ff4500;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(255, 204, 195);
    color: black;
  }
`;

const PatientForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [history, setHistory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPatient = {
      name,
      age,
      history,
    };

    dispatch(addPatient(newPatient)); // Now this is correctly typed
    setName("");
    setAge(0);
    setHistory("");
  };

  return (
    <FormContainer>
      <Title>Add New Patient</Title>
      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Age:</Label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>History:</Label>
          <Textarea
            rows={4}
            value={history}
            onChange={(e) => setHistory(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Add Patient</Button>
      </StyledForm>
    </FormContainer>
  );
};

export default PatientForm;
