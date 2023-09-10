import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  background-color: #00c7e0;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: auto;
  margin-left: auto;
  width: 200px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo src="PODCATS.png" alt="Logo" />
    </HeaderWrapper>
  );
}

export default Header;