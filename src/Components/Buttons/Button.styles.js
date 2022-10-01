import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import Button from './Button';

export const ButtonStyled = styled(Button)`
  padding: 0.7rem 1.2rem;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.SM};
  box-shadow: 1px 1px 4px ${({ color }) => (color ? color : 'black')};
  border: 1px solid ${({ color }) => (color ? color : 'black')};
  color: ${({ color }) => (color ? color : 'black')};
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

  &:disabled {
    color: ${THEME_STYLES.COLORS.GRAY};
  }
`;
