import React, { useState } from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const StyledNavbar = styled.div`
  width: 8rem;
  height: 100vh;
  position: fixed;
  background-color: #021e25;
  transition: width 300ms ease;

  &:hover {
    width: 32rem;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNavbar
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <StyledList>
        <NavItem title="O Mnie" isActive={isOpen} />
        <NavItem title="Projekty" isActive={isOpen} />
        <NavItem title="Kontakt" isActive={isOpen} />
        <NavItem title="Tło" isActive={isOpen} />
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
