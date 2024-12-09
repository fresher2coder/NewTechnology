import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PatientItem from "./PatientItem";

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #4caf50;
`;

const Subtitle = styled.h2`
  color: #4caf50;
`;

const Input = styled.input`
  margin: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.danger ? "#f44336" : "#4caf50")};
  color: white;

  &:hover {
    background-color: ${(props) => (props.danger ? "#d32f2f" : "#45a049")};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PatientList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EditContainer = styled.div`
  background-color: #fffbdd;
  padding: 10px;
  border: 1px solid #ffe082;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  ${Input} {
    flex: 1;
  }
`;

const Strong = styled.strong`
  font-size: 16px;
  color: #333;
`;

const API_URL = "http://localhost:5000/patients";

const PatientHistory = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    history: "",
  });

  const [editPatient, setEditPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(API_URL);
      setPatients(response.data);
    } catch (error) {
      console.log("Error fetching patient", eror);
    }
  };

  const addPatient = async () => {
    console.log(newPatient);
    //http req, update the patients state, re-initialize the newPatient
    try {
      const response = await axios.post(API_URL, newPatient);
      setPatients([...patients, response.data]);
      setNewPatient({ name: "", age: "", history: "" });
    } catch (error) {
      console.log("Error adding patient", error);
    }
  };

  const updatePatient = async () => {
    //http put req, id, updated obj
    try {
      const response = await axios.put(
        `${API_URL}/${editPatient.id}`,
        editPatient
      );
      setPatients(
        patients.map((patient) =>
          patient.id === response.data.id ? response.data : patient
        )
      );
      setEditPatient(null);
    } catch (error) {
      console.log("error updating patient", error);
    }
  };

  const deletePatient = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      setPatients(patients.filter((patient) => patient.id !== id));
    } catch (error) {
      console.log("error deleting patient", error);
    }
  };

  return (
    <Container>
      <Title>Patient History</Title>

      {/* Add Patient Form */}
      <Subtitle>Add New Patient</Subtitle>
      <Form>
        <Input
          type="text"
          placeholder="Name"
          value={newPatient.name}
          onChange={(e) =>
            setNewPatient({ ...newPatient, name: e.target.value })
          }
        />
        <Input
          type="number"
          placeholder="Age"
          value={newPatient.age}
          onChange={(e) =>
            setNewPatient({ ...newPatient, age: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="History"
          value={newPatient.history}
          onChange={(e) =>
            setNewPatient({ ...newPatient, history: e.target.value })
          }
        />
        <Button onClick={addPatient}>Add Patient</Button>
      </Form>

      {/* Edit Patient Form */}
      {editPatient && (
        <EditContainer>
          <Subtitle>Edit Patient</Subtitle>
          <Form>
            <Input
              type="text"
              placeholder="Name"
              value={editPatient.name}
              onChange={(e) =>
                setEditPatient({ ...editPatient, name: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Age"
              value={editPatient.age}
              onChange={(e) =>
                setEditPatient({ ...editPatient, age: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="History"
              value={editPatient.history}
              onChange={(e) =>
                setEditPatient({ ...editPatient, history: e.target.value })
              }
            />
            <Button onClick={updatePatient}>Update Patient</Button>
            <Button onClick={() => setEditPatient(null)} danger>
              Cancel
            </Button>
          </Form>
        </EditContainer>
      )}

      {/* Patient List */}
      <Subtitle>Patient List</Subtitle>
      <PatientList>
        {patients.map((patient) => (
          <PatientItem
            key={patient.id}
            patient={patient}
            onEdit={setEditPatient}
            onDelete={deletePatient}
          />
        ))}
      </PatientList>
    </Container>
  );
};

export default PatientHistory;
