import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(128, 83, 0);
  padding: 1rem;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px 0px;
  margin: 0;
  font-size: 1.5rem;
  background-color: rgb(166, 108, 1);
  border-radius: 10px;
  box-shadow: 0px 3px 3px rgb(59, 42, 10);
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    color: rgb(248, 210, 144);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Title>Context</Title>
      <Nav>
        <NavList>
          <li>
            <StyledNavLink to="/" activeClassName="active">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/users" activeClassName="active">
              Users
            </StyledNavLink>
          </li>
        </NavList>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
