import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePatientActions } from "./usePatientActions";

// Styled Components
const ListContainer = styled.div`
  width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const Header = styled.h2`
  color: #604cc3;
  text-align: center;
  grid-column: span 3;
  margin-bottom: 20px;
`;

const AddButton = styled(Link)`
  grid-column: span 3;
  display: inline-block;
  background-color: #8fd14f;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #76b537;
  }
`;

const PatientCard = styled.div`
  background-color: #ff6600;
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const PatientName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const ViewDetailsLink = styled(Link)`
  background-color: #604cc3;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5037a3;
  }
`;

const PatientList = () => {
  const { patients, removePatient } = usePatientActions();

  return (
    <ListContainer>
      <Header>Patient List</Header>
      <AddButton to="/add-patient">Add New Patient</AddButton>
      {patients.map((patient) => (
        <PatientCard key={patient.id}>
          <PatientName>{patient.details.name}</PatientName>
          <ViewDetailsLink to={`/patient/${patient.id}`}>
            View Details
          </ViewDetailsLink>
        </PatientCard>
      ))}
    </ListContainer>
  );
};

export default PatientList;
