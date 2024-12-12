import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: rgb(52, 46, 40);
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

function Footer() {
  return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
