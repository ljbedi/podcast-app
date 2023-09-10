import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  position: fixed;
  /* top: 0; 
  left: 0;
  right: 0;
  background-color: #333;
  color: #fff;
  
  z-index: 1000;
  transition: background-color 0.3s ease; */
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NavbarLogo = styled.img`
  color: #fff;
  font-weight: bold;
  width: 100px;
  height: 100px;
`;

const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogo  src="/Podcats-logo.png" alt="Logo" />
        <NavbarMenu isOpen={isOpen}>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/">Subscriptions</NavbarLink>
          <NavbarLink href="/">About</NavbarLink>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default NavBar;