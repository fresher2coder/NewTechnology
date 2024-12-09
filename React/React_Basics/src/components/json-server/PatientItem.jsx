import React from "react";
import styled from "styled-components";

// Styled Components
const PatientItemContainer = styled.li`
  background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Strong = styled.strong`
  font-size: 16px;
  color: #333;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => (props.danger ? "#f44336" : "#4caf50")};
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.danger ? "#d32f2f" : "#45a049")};
  }
`;

// Component for a single patient item
const PatientItem = ({ patient, onEdit, onDelete }) => {
  return (
    <PatientItemContainer>
      <div>
        <Strong>{patient.name}</Strong> - Age: {patient.age}, History:{" "}
        {patient.history}
      </div>
      <div>
        <Button onClick={() => onEdit(patient)}>Edit</Button>
        <Button danger onClick={() => onDelete(patient.id)}>
          Delete
        </Button>
      </div>
    </PatientItemContainer>
  );
};

export default PatientItem;
