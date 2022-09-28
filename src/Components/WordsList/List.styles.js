import styled from 'styled-components';

export const WrapperWords = styled.div`
  padding: 2em;
  margin-bottom: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & p {
    margin: 0;
  }
`;
export const LetterTitle = styled.h4`
  border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
`;
export const Word = styled.p`
  text-transform: capitalize;
`;

export const SelectedText = styled.p`
  color: green;
`;

export const NoSelectedText = styled.p`
  color: red;
`;
