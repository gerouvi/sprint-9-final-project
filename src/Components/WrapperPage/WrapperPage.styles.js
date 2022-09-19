import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 20px;

  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;
