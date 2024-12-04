import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme"; // Import the theme object

// Styled components using the theme
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};
  padding: ${(props) => props.theme.spacing.padding};
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: ${(props) => props.theme.spacing.margin};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textPrimary};
  padding: ${(props) => props.theme.spacing.margin};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

function ThemeStyledComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Themed Styled Components</Title>
        <p>This example demonstrates theming with styled-components.</p>
        <Button>Click Me</Button>
      </Container>
    </ThemeProvider>
  );
}

export default ThemeStyledComponent;
