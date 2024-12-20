import React from "react";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import { styled } from "styled-components";

const Header = styled.h2`
  color: #e63946; /* Red shade */
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <div>
      <Header>Patient History Management</Header>
      <PatientForm />
      <PatientList />
    </div>
  );
};

export default App;
