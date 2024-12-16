import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: rgb(255, 247, 177);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const FieldSet = styled.fieldset`
  border: 2px solid rgb(158, 143, 0);
  margin-bottom: 20px;
  padding: 10px;
`;

const Legend = styled.legend`
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.3rem;
`;

const Field = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  font-size: 15px;
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  input {
    width: 100%;
  }

  .icon {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

const LanguageContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    flex: 1;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

function UserRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    languages: [
      { id: 1, language: "", read: false, write: false, speak: false },
    ],
  });

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("Name:", name); // Check the name in the console

    // Check if the input belongs to the languages array
    if (name.startsWith("languages")) {
      // Split the name to extract the language field (e.g., language, read, write, speak) and the index
      const [prefix, index, field] = name.split("."); // e.g., "languages", "0", "language"

      // Create a copy of the languages array
      const updatedLanguages = [...formData.languages];

      // If the field is a checkbox (read, write, speak), update it
      if (type === "checkbox") {
        updatedLanguages[index] = {
          ...updatedLanguages[index],
          [field]: checked, // Set to true/false based on checkbox state
        };
      } else {
        // If it's not a checkbox, update the corresponding language field (like language name)
        updatedLanguages[index] = {
          ...updatedLanguages[index],
          [field]: value, // Update the input value for language or other fields
        };
      }

      // Update the form data with the modified languages array
      setFormData({ ...formData, languages: updatedLanguages });
    } else {
      // If it's not part of the languages array, just update the regular form data
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d+$/.test(formData.phone))
      newErrors.phone = "Phone must be a number";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    formData.languages.forEach((lang, index) => {
      if (!lang.language.trim())
        newErrors[`languages.${index}.language`] = "Language name is required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmail = async () => {
    if (!formData.email.trim()) return;
    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${formData.email}`
      );
      if (response.data.length > 0) {
        setEmailError("Email is already registered");
      } else {
        setEmailError("");
      }
    } catch (error) {
      console.error("Error checking email", error);
    }
  };

  const validateUsername = async () => {
    if (!formData.username.trim()) return;
    try {
      const response = await axios.get(
        `http://localhost:3000/users?username=${formData.username}`
      );
      if (response.data.length > 0) {
        setUsernameError("Username is not available");
      } else {
        setUsernameError("");
      }
    } catch (error) {
      console.error("Error checking username", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() && !emailError && !usernameError) {
      try {
        // POST request to JSON-Server to save the form data
        const response = await axios.post(
          "http://localhost:3000/users",
          formData
        );

        console.log("Form submitted successfully", response.data);

        // Redirect to login page after successful registration
        navigate("/login"); // Adjust the path based on your routes
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      }
    }
  };

  const addLanguage = () => {
    const id =
      formData.languages.length > 0
        ? formData.languages[formData.languages.length - 1].id + 1
        : 1;
    setFormData({
      ...formData,
      languages: [
        ...formData.languages,
        { language: "", read: false, write: false, speak: false, id },
      ],
    });
  };

  const removeLanguage = (index) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages.splice(index, 1);
    setFormData({ ...formData, languages: updatedLanguages });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <Legend>Personal Details</Legend>
          <Field>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Error>{errors.name}</Error>
          </Field>

          <Field>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={validateEmail}
            />
            <Error>{errors.email || emailError}</Error>
          </Field>

          <Field>
            <Label>Phone:</Label>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Error>{errors.phone}</Error>
          </Field>
        </FieldSet>

        <FieldSet>
          <Legend>User Credentials</Legend>
          <Field>
            <Label>Username:</Label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={validateUsername}
            />
            <Error>{errors.username || usernameError}</Error>
          </Field>

          <Field>
            <Label>Password:</Label>
            <PasswordContainer>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div
                className="icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </PasswordContainer>
            <Error>{errors.password}</Error>
          </Field>

          <Field>
            <Label>Confirm Password:</Label>
            <PasswordContainer>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div
                className="icon"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </div>
            </PasswordContainer>
            <Error>{errors.confirmPassword}</Error>
          </Field>
        </FieldSet>

        <FieldSet>
          <Legend>Languages Known</Legend>
          <Field>
            <Label>Languages:</Label>
            {formData.languages.map((lang, index) => (
              <LanguageContainer key={lang.id}>
                <Input
                  type="text"
                  name={`languages.${index}.language`} // Correct dynamic name for the language field
                  value={lang.language} // Using `lang` here
                  onChange={handleChange}
                  placeholder="Language"
                />
                <label>
                  <input
                    type="checkbox"
                    name={`languages.${index}.read`} // Using `lang.read` dynamically
                    checked={lang.read} // Accessing `lang.read` directly
                    onChange={handleChange}
                  />
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name={`languages.${index}.write`} // Using `lang.write` dynamically
                    checked={lang.write} // Accessing `lang.write` directly
                    onChange={handleChange}
                  />
                  Write
                </label>
                <label>
                  <input
                    type="checkbox"
                    name={`languages.${index}.speak`} // Using `lang.speak` dynamically
                    checked={lang.speak} // Accessing `lang.speak` directly
                    onChange={handleChange}
                  />
                  Speak
                </label>
                <Button
                  type="button"
                  onClick={() => removeLanguage(index)}
                  disabled={formData.languages.length === 1}
                  danger
                >
                  Remove
                </Button>
              </LanguageContainer>
            ))}

            <Button type="button" onClick={addLanguage}>
              Add Language
            </Button>
          </Field>
        </FieldSet>

        <Buttons>
          <Button type="submit">Register</Button>
          <Button type="reset">Reset</Button>
        </Buttons>
      </form>
    </Container>
  );
}

export default UserRegister;
