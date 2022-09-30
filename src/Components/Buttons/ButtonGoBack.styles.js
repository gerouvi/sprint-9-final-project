import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';

export const ButtonGoBackStyled = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 7px;
  left: 7px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: none;
  background-color: transparent;

  @media screen and (min-width: ${THEME_STYLES.MEDIA_QUERYS.DESKTOP}px) {
    display: none;
  }
`;
