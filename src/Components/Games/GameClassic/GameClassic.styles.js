import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Question = styled.p`
  text-transform: capitalize;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  & p {
    margin: 0;
  }
`;

export const Result = styled.span`
  margin: 0;
  height: 10px;
  color: ${({ correct }) => (correct ? 'green' : 'red')};
`;
