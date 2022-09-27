import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 25px;

  & h1 {
    margin: 0;
  }

  & p {
    font-weight: bold;
  }
`;

export const WrapperForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: ${THEME_STYLES.MEDIA_QUERYS.DESKTOP}px) {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-bottom: 40px;
  }
`;
