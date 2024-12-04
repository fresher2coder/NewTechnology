import React from "react";
import styled from "styled-components";

// Styled Components
const LogContainer = styled.div`
  margin-top: 20px;
`;

const LogGroup = styled.div`
  margin: 15px 0;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
`;

const LogItem = styled.div`
  background-color: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #d32f2f;
  }
`;

const HealthLog = ({ logs, deleteLog }) => {
  const groupedLogs = logs.reduce((acc, log) => {
    acc[log.patientId] = acc[log.patientId] || [];
    acc[log.patientId].push(log);
    return acc;
  }, {});

  return (
    <LogContainer>
      <h2>Health Logs</h2>
      {Object.keys(groupedLogs).map((patientId) => (
        <LogGroup key={patientId}>
          <h3>Patient ID: {patientId}</h3>
          {groupedLogs[patientId].map((log) => (
            <LogItem key={log.id}>
              <span>
                <strong>Date:</strong> {log.date} |{" "}
                <strong>Temperature:</strong> {log.temperature}°C |{" "}
                <strong>Blood Pressure:</strong> {log.bloodPressure} |{" "}
                <strong>Glucose:</strong> {log.glucose} mg/dL
              </span>
              <DeleteButton onClick={() => deleteLog(log.id)}>
                Delete
              </DeleteButton>
            </LogItem>
          ))}
        </LogGroup>
      ))}
    </LogContainer>
  );
};

export default HealthLog;
