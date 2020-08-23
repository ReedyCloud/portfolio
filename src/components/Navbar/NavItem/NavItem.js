import React from "react";
import styled from "styled-components";

const NavItem = ({ title, isActive }) => {
  const StyledItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    color: #4aae9b;
    cursor: pointer;
    transition: background-color 150ms ease;

    &:last-of-type {
      margin-top: auto;
    }

    &:hover {
      background-color: #073642;
      svg {
        color: #b58900;
      }
    }
  `;

  const StyledSpan = styled.span`
    margin-left: 1.5rem;
    font-size: 1.8rem;
    flex-shrink: 0;
    display: ${isActive ? "inilne" : "none"};
  `;

  const StyledSvg = styled.svg`
    width: 5rem;
    min-width: 5rem;
    margin: 0 1.5rem;
    transition: color 150ms ease;
  `;

  return (
    <StyledItem>
      <StyledSvg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="bowling-ball"
        class="svg-inline--fa fa-bowling-ball fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM120 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-96c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm48 144c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
        />
      </StyledSvg>
      {title && <StyledSpan>{title}</StyledSpan>}
    </StyledItem>
  );
};

NavItem.defaultProps = {
  title: "",
};

export default NavItem;
