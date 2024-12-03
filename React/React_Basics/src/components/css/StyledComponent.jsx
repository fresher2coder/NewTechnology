import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightBlue;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  color: white;
`;

const Title = styled.h1`
  fontsize: 2rem;
  letterspacing: 2px;
  color: darkBlue;
`;

function StyledComponent() {
  return (
    <>
      <Container>
        <Title>Styled Component</Title>
      </Container>
    </>
  );
}

export default StyledComponent;
