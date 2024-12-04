import styled from "styled-components";

// Create a styled div component
export const Container = styled.div`
  background-color: #8e3e63;
  color: #f6fab9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
`;

// Create a styled h1 component
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

// Create a styled button component with dynamic styling based on props
export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#cae6b2" : "#d2649a")};
  color: ${(props) => (props.primary ? "#8e3e63" : "#f6fab9")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#aed581" : "#f48fb1")};
  }
`;

export const SpecialButton = styled(Button)`
  font-weight: bold;
  border: 2px solid #8e3e63;
`;

export const Btns = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
