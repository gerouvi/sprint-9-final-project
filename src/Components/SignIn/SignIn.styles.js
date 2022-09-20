import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 30px;

  h1 {
    margin-bottom: 50px;
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const LinkText = styled.button`
  margin-top: 20px;
  border: none;
  background-color: transparent;
  color: #3735ac;
  cursor: pointer;
`;
