import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 600px;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to the Home Page</Title>
      <Description>
        This is the main page of the application. Feel free to explore and
        navigate to other sections using the menu.
      </Description>
    </HomeContainer>
  );
}

export default Home;
