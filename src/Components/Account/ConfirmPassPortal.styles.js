import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justufy-content: center;
  align-items: center;
  gap: 25px;

  & p {
    margin: 0;
  }

  & div {
    display: flex;
    justufy-content: center;
    align-items: center;
    gap: 12px;
  }
`;
