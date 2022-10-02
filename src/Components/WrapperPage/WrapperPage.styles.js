import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 60px;
  min-height: 100vh;
  padding-bottom: 20px;

  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  @media screen and (min-width: ${THEME_STYLES.MEDIA_QUERYS.DESKTOP}px) {
    padding-top: 0px;
  }
`;

export const ConfrimText = styled.h1`
  max-width: 500px;
`;
export const WrapperButtonVerifyEmail = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-contern: center;
  align-items: center;
  text-align: center;
`;
