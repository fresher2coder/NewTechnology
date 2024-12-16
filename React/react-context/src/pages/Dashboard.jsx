import React, { useEffect } from "react";
import { useAuth } from "../context/SecuredContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #dc3545;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

function Dashboard() {
  const { isLoggedIN, setIsLoggedIN } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIN) {
      navigate("/login");
    }
  }, [isLoggedIN, navigate]);

  const handleLogout = () => {
    setIsLoggedIN(false);
    navigate("/login");
  };

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <StyledButton onClick={handleLogout}>Log Out</StyledButton>
    </DashboardContainer>
  );
}

export default Dashboard;
