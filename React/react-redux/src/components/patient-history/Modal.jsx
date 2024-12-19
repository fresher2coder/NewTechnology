import React from "react";
import styled from "styled-components";

// Styled Modal Component
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;

const ModalMessage = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalMessage>{message}</ModalMessage>
        <ModalButton onClick={onClose}>Close</ModalButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
