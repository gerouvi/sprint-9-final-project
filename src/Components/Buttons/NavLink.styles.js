import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  padding: 0.7rem 1.2rem;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.SM};
  box-shadow: 1px 1px 4px ${({ isActive }) => (isActive ? 'green' : 'black')};
  border: 1px solid ${({ isActive }) => (isActive ? 'green' : 'black')};
  color: ${(props) => console.log(props.active)};
  cursor: pointer;
  background-color: ${({ bg }) => (bg ? bg : 'transparent')};

  &:disabled {
    border: 1px solid gray;
    cursor: default;
    box-shadow: none;
  }

  &:active {
    transform: scale(0.8);
  }

  &:disabled:active {
    transform: scale(1);
  }
`;
