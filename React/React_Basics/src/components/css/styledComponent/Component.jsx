import React from "react";

//Named Export
import {
  Container,
  Title,
  Btns,
  Button,
  SpecialButton,
} from "./StyledComponents";

function StyleComponent() {
  return (
    <Container>
      <Title>Styled Components Example</Title>
      <p>This example shows how styled-components work.</p>
      <Btns>
        <Button primary>Primary Button</Button>
        <Button>Secondary Button</Button>
        <SpecialButton>Special Button</SpecialButton>
      </Btns>
    </Container>
  );
}

export default StyleComponent;
