import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPatients, deletePatient, updatePatient } from "./patientSlice";

import styled from "styled-components";

interface StyledButtonProps {
  color?: string;
  hoverColor?: string;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 2rem;
  color: #333;
`;

const Header = styled.h2`
  color: #e63946; /* Red shade */
  text-align: center;
`;

const PatientListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const PatientCard = styled.li`
  background: #fff0f5; /* Light magenta shade */
  border: 2px solid #ff7f50; /* Coral shade */
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PatientInfo = styled.p`
  margin: 0.5rem 0;
`;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.color || "#e63946"}; /* Default red */
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor || "#d62828"}; /* Darker red */
  }
`;

const ModalHeader = styled.h2`
  color: #ff7f50; /* Coral shade */
  text-align: center;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ff7f50; /* Coral shade */
  border-radius: 5px;
  font-size: 1rem;
`;

const ModalTextarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ff7f50; /* Coral shade */
  border-radius: 5px;
  font-size: 1rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

Modal.setAppElement("#root");

const PatientList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { patients, loading, error } = useSelector(
    (state: RootState) => state.patients
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deletePatient(id));
  };

  const handleEdit = (patient: any) => {
    setCurrentPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPatient(null);
  };

  const handleSave = () => {
    if (currentPatient) {
      dispatch(updatePatient(currentPatient));
    }
    closeModal();
  };

  if (loading) return <p>Loading patients...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Container>
        <Header>Patient List</Header>
        <PatientListContainer>
          {patients.map((patient) => (
            <PatientCard key={patient.id}>
              <h3>{patient.name}</h3>
              <PatientInfo>Age: {patient.age}</PatientInfo>
              <PatientInfo>History: {patient.history}</PatientInfo>
              <StyledButton
                color="#ff7f50" /* Coral */
                hoverColor="#ff6347" /* Tomato */
                onClick={() => handleEdit(patient)}
              >
                Edit
              </StyledButton>
              <StyledButton
                color="#e63946" /* Red */
                hoverColor="#d62828" /* Darker red */
                onClick={() => handleDelete(patient.id)}
              >
                Delete
              </StyledButton>
            </PatientCard>
          ))}
        </PatientListContainer>

        {/* Modal for editing a patient */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Patient"
          style={{
            content: {
              padding: "2rem",
              borderRadius: "10px",
              backgroundColor: "#ffe4e1" /* Light pink */,
              width: "500px",
              margin: "0 auto",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <ModalHeader>Edit Patient</ModalHeader>
          {currentPatient && (
            <ModalForm>
              <div>
                <label>Name:</label>
                <ModalInput
                  type="text"
                  value={currentPatient.name}
                  onChange={(e) =>
                    setCurrentPatient({
                      ...currentPatient,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Age:</label>
                <ModalInput
                  type="number"
                  value={currentPatient.age}
                  onChange={(e) =>
                    setCurrentPatient({
                      ...currentPatient,
                      age: +e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>History:</label>
                <ModalTextarea
                  value={currentPatient.history}
                  onChange={(e) =>
                    setCurrentPatient({
                      ...currentPatient,
                      history: e.target.value,
                    })
                  }
                />
              </div>
              <ModalFooter>
                <StyledButton
                  color="#ff7f50"
                  hoverColor="#ff6347"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </StyledButton>
                <StyledButton
                  color="#bbb"
                  hoverColor="#999"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </StyledButton>
              </ModalFooter>
            </ModalForm>
          )}
        </Modal>
      </Container>
    </>
  );
};

export default PatientList;
