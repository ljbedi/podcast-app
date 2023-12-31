import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  top: 0; 
  left: 0;
  right: 0;
  background-color: #333;
  position: fixed;
  border-radius: 5px;
  color: #333;
  padding: 1rem 0;
  z-index: 1000;
  transition: background-color 0.3s ease; 
  position: sticky;
  top: 0;
  width: 100%;

`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: #333;
  width: 100%;
`;

const NavbarLogo = styled.img`
  color: #333;;
  font-weight: bold;
  width: 100px;
  height: 100px;
  background-color: #333;
`;

const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
`;

const LogoLink = styled.a`
  background-color: #333;
`

const NavbarLink = styled.a`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #ffffff;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  position: relative;
  background-color: #333;

  &:hover {
    text-decoration: none;
    color: #fdc300;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: #fdc300;
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
    }
  }

  &:hover:after {
    transform: scaleX(1);
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
        
      {/* <LogoLink href="/"><NavbarLogo  src="/Podcats-logo.png" alt="Logo" /></LogoLink> */}
        <NavbarMenu isOpen={isOpen}>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/">Subscriptions</NavbarLink>
          <NavbarLink href="/">About</NavbarLink>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default NavBarTwo;

{/* <NavbarLogo  src="/Podcats-logo.png" alt="Logo" /> */}