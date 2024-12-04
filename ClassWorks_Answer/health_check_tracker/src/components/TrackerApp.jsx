import React, { useState } from "react";
import HealthForm from "./HealthForm";
import HealthLog from "./HealthLog";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 20px;
`;

const TrackerApp = () => {
  const [healthLogs, setHealthLogs] = useState([]);
  const [patients, setPatients] = useState({}); // Store patient IDs by name

  // Add a new log
  const addHealthLog = (log) => {
    const { name } = log;

    // Check if patient already exists
    if (!patients[name]) {
      // Generate a new ID for new patients
      const newId = `P${Date.now()}`;
      setPatients({ ...patients, [name]: newId });
      log.patientId = newId;
    } else {
      // Use existing ID
      log.patientId = patients[name];
    }

    setHealthLogs([...healthLogs, log]);
  };

  // Delete a log
  const deleteLog = (logId) => {
    setHealthLogs(healthLogs.filter((log) => log.id !== logId));
  };

  return (
    <Container>
      <Header>Health Condition Tracker</Header>
      <HealthForm addLog={addHealthLog} />
      <HealthLog logs={healthLogs} deleteLog={deleteLog} />
    </Container>
  );
};

export default TrackerApp;
