import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { FaEdit } from "react-icons/fa"; // Edit Icon for sections
import Modal from "react-modal";

const Container = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: rgb(255, 247, 177);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  text-align: center;
  color: rgb(158, 143, 0);
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.danger ? "#ff4d4f" : "#4caf50")};
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Error = styled.p`
  color: red;
`;

const EditIcon = styled(FaEdit)`
  cursor: pointer;
  color: rgb(158, 143, 0);
  margin-left: 10px;
`;

const ModalContainer = styled.div`
  padding: 20px;
  animation: dropIn 0.5s ease-out forwards; /* Drop animation */

  @keyframes dropIn {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

Modal.setAppElement("#root"); // Set the app element for accessibility

function Profile() {
  const { state, login } = useAuth(); // Access state from AuthContext
  const user = state.user; // Get user from context
  const [formData, setFormData] = useState(user || {});
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [editMode, setEditMode] = useState(false);
  const [sectionToEdit, setSectionToEdit] = useState(null); // Tracks which section to edit
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(user);
    setProfilePic(user?.profilePic);
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, update based on checked value
    if (type === "checkbox") {
      const [section, index, field] = name.split(".");
      setFormData((prevData) => {
        const updatedLanguages = [...prevData.languages];
        updatedLanguages[index][field] = checked;
        return { ...prevData, languages: updatedLanguages };
      });
    } else {
      // For regular text inputs
      const [section, field] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [section]: { ...prevData[section], [field]: value },
      }));
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const updatedUser = { ...formData, profilePic };
      await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
      login(updatedUser); // Update the user in AuthContext
      setEditMode(false); // Exit edit mode
      setSectionToEdit(null); // Reset the section to edit
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${user.id}`);
      alert("Profile deleted successfully!");
      login(null); // Log out the user by setting user to null in AuthContext
    } catch (err) {
      console.error("Error deleting profile:", err);
      setError("Failed to delete profile.");
    }
  };

  const handleEditSection = (section) => {
    setSectionToEdit(section);
    setEditMode(true); // Enable edit mode
  };

  return (
    <Container>
      <Title>My Profile</Title>

      {error && <Error>{error}</Error>}

      {/* Profile Picture Section */}
      <Section>
        <ProfilePic src={profilePic} alt="Profile" />
        <EditIcon onClick={() => handleEditSection("profilePic")} />
      </Section>

      {/* Personal Details Section */}
      <Section>
        <Label>Name:</Label>
        <span>{formData.name}</span>
        <EditIcon onClick={() => handleEditSection("personalDetails")} />
      </Section>

      <Section>
        <Label>Email:</Label>
        <span>{formData.email}</span>
      </Section>

      <Section>
        <Label>Phone:</Label>
        <span>{formData.phone}</span>
      </Section>

      {/* Languages Section */}
      <Section>
        <Label>Languages Known:</Label>
        <ul>
          {formData.languages && formData.languages.length > 0 ? (
            formData.languages.map((lang, index) => (
              <li key={index}>
                <span>{lang.language}</span> - Read: {lang.read ? "Yes" : "No"}{" "}
                / Write: {lang.write ? "Yes" : "No"} / Speak:{" "}
                {lang.speak ? "Yes" : "No"}
              </li>
            ))
          ) : (
            <span>No languages added</span>
          )}
        </ul>
        <EditIcon onClick={() => handleEditSection("languages")} />
      </Section>
      <Button danger onClick={handleDelete}>
        Delete Profile
      </Button>

      {/* Modal for Editing */}
      <Modal
        isOpen={editMode}
        onRequestClose={() => setEditMode(false)}
        contentLabel="Edit Profile Section"
      >
        <ModalContainer>
          <h2>Edit {sectionToEdit}</h2>
          {sectionToEdit === "profilePic" && (
            <div>
              <Label>Upload New Profile Picture:</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </div>
          )}
          {sectionToEdit === "personalDetails" && (
            <div>
              <Label>Name:</Label>
              <Input
                type="text"
                name="personalDetails.name"
                value={formData.name || ""}
                onChange={handleChange}
              />
              <Label>Email:</Label>
              <Input
                type="email"
                name="personalDetails.email"
                value={formData.email || ""}
                onChange={handleChange}
              />
              <Label>Phone:</Label>
              <Input
                type="text"
                name="personalDetails.phone"
                value={formData.phone || ""}
                onChange={handleChange}
              />
            </div>
          )}
          {sectionToEdit === "languages" && (
            <div>
              {formData.languages &&
                formData.languages.map((lang, index) => (
                  <div key={index}>
                    <Label>Language {index + 1}:</Label>
                    <Input
                      type="text"
                      name={`languages.${index}.language`}
                      value={lang.language}
                      onChange={handleChange}
                    />
                    <label>
                      Read
                      <input
                        type="checkbox"
                        name={`languages.${index}.read`}
                        checked={lang.read}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Write
                      <input
                        type="checkbox"
                        name={`languages.${index}.write`}
                        checked={lang.write}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Speak
                      <input
                        type="checkbox"
                        name={`languages.${index}.speak`}
                        checked={lang.speak}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                ))}
            </div>
          )}

          <Button onClick={handleSave}>Save Changes</Button>

          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Profile;
