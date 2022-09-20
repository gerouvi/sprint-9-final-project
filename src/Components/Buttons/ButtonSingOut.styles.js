import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 7px;
  right: 7px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
