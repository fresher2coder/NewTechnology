import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePatientActions } from "./usePatientActions"; // Importing the actions
import Modal from "./Modal"; // Importing the Modal

// Styled Components
const DetailsContainer = styled.div`
  width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  color: #604cc3;
  text-align: center;
  margin-bottom: 20px;
`;

const DetailText = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: ${(props) => props.color || "#007bff"};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
`;

const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: #8fd14f;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;

  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #76b537;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const TreatmentForm = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // for redirection after delete
  const {
    removePatient,
    assignDepatment,
    assignHospital,
    addTreatment,
    assignTreatment,
  } = usePatientActions();
  const { patients, hospitals, departments, treatments } = usePatientActions();

  const patient = patients.find((p) => p.id === parseInt(id));
  if (!patient) {
    return <div>Patient not found.</div>;
  }

  const { details, contactInfo, address } = patient;

  // State for hospital, department, and new treatment assignment
  const [selectedHospital, setSelectedHospital] = useState(
    patient.hospitalId || ""
  );
  const [selectedDepartment, setSelectedDepartment] = useState(
    patient.departmentId || ""
  );
  const [newTreatmentName, setNewTreatmentName] = useState(""); // State for new treatment name
  const [newTreatmentStartDate, setNewTreatmentStartDate] = useState(""); // State for new treatment start date
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle the treatment form
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State for modal message

  // Handlers for dropdown selection
  const handleHospitalChange = (e) => setSelectedHospital(e.target.value);
  const handleDepartmentChange = (e) => setSelectedDepartment(e.target.value);

  // Handlers for new treatment form
  const handleTreatmentNameChange = (e) => setNewTreatmentName(e.target.value);
  const handleTreatmentStartDateChange = (e) =>
    setNewTreatmentStartDate(e.target.value);

  // Toggle the treatment form visibility
  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  // Save the assignments (hospital, department, and treatment)
  const handleSave = () => {
    assignHospital(patient.id, selectedHospital);
    assignDepatment(patient.id, selectedDepartment);

    // Create a new treatment and assign it to the patient
    if (newTreatmentName && newTreatmentStartDate) {
      const newTreatment = {
        id: treatments.length > 0 ? treatments.length + 1 : 1, // New treatment ID
        name: newTreatmentName,
        startDate: newTreatmentStartDate,
      };

      // Add new treatment to the treatments array
      addTreatment(patient.id, newTreatment); // Assuming addTreatment handles adding the treatment
      assignTreatment(patient.id, newTreatment.id);

      // Update the modal message and show the modal
      setModalMessage(
        "Hospital, Department, and Treatment Assigned Successfully!"
      );
      setShowModal(true);

      // Reset the form fields
      setNewTreatmentName("");
      setNewTreatmentStartDate("");
      setIsFormVisible(false); // Hide the form after submission
    }

    // Close the modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  // Delete patient
  const handleDelete = () => {
    removePatient(patient.id);
    navigate("/"); // Redirect back to the list after deletion
  };

  return (
    <DetailsContainer>
      <Header>Patient Details</Header>
      <DetailText>Name: {details.name}</DetailText>
      <DetailText>Age: {details.age}</DetailText>
      <DetailText>Disease: {details.disease}</DetailText>
      <DetailText>Phone: {contactInfo.phone}</DetailText>
      <DetailText>Email: {contactInfo.email}</DetailText>
      <DetailText>
        Address: {address.street}, {address.city}, {address.state}
      </DetailText>

      {/* Dropdowns for Assigning Hospital and Department */}
      <Dropdown value={selectedHospital} onChange={handleHospitalChange}>
        <option value="" disabled>
          Select Hospital
        </option>
        {hospitals.map((hospital) => (
          <option key={hospital.id} value={hospital.id}>
            {hospital.name}
          </option>
        ))}
      </Dropdown>

      <Dropdown value={selectedDepartment} onChange={handleDepartmentChange}>
        <option value="" disabled>
          Select Department
        </option>
        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name}: {department.head}
          </option>
        ))}
      </Dropdown>

      {/* Add Treatment Button */}
      <Button onClick={toggleFormVisibility}>Add Treatment</Button>

      {/* Treatment Form - Visible if isFormVisible is true */}
      {isFormVisible && (
        <TreatmentForm>
          <h3>Add New Treatment</h3>
          <input
            type="text"
            placeholder="Treatment Name"
            value={newTreatmentName}
            onChange={handleTreatmentNameChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="date"
            value={newTreatmentStartDate}
            onChange={handleTreatmentStartDateChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <SaveButton onClick={handleSave}>Save Treatment</SaveButton>
        </TreatmentForm>
      )}

      <Buttons>
        <Link to={`/edit-patient/${patient.id}`}>
          <Button color="#604cc3" hoverColor="#5037a3">
            Edit
          </Button>
        </Link>

        <Button color="#dc3545" hoverColor="#b02a37" onClick={handleDelete}>
          Delete
        </Button>
        <BackButton to="/">Back to List</BackButton>
      </Buttons>

      {/* Modal for Popup Message */}
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </DetailsContainer>
  );
};

export default PatientDetails;
