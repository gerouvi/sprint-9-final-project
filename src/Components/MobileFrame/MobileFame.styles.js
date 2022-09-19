import styled from 'styled-components';

export const MobileDevice = styled.div`
  position: relative;
  margin-top: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border: 8px solid ${(props) => props.theme.COLORS.BLACK};
  border-radius: 32px;
  width: 256px;
  height: 560px;
  box-shadow: 0px 20px 15px #33333335;
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 58px;
  z-index: 30;
  background-color: ${(props) => props.theme.COLORS.BLACK};
  width: 120px;
  height: 24px;
  border-radius: 0px 0px 16px 16px;
`;

export const Camera = styled.div`
  position: absolute;
  top: 4px;
  right: 25px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #1e1f22;
  background-color: #447bb5a6;
`;
export const Speaker = styled.div`
  position: absolute;
  top: 7px;
  right: 40px;
  width: 43.2px;
  height: 4.5px;
  background-color: ${(props) => props.theme.COLORS.GRAY};
  border-radius: 3.2px;
`;

export const ButtonLockUnlock = styled.div`
  position: absolute;
  right: -10px;
  top: 100px;
  width: 2px;
  height: 70px;
  background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
  z-index: 40;
  border-radius: 0px 5px 5px 0px;

  :after {
    position: absolute;
    display: inline-block;
    content: '';
    left: 8.9px;
    width: 70px;
    height: 70px;
    background-color: transparent;
    border-radius: 5px;
  }

  :active {
    transform: translateX(-1px);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LogoLockUnlock = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.COLORS.BLACK};
  top: 130px;
  right: -40px;
  border-radius: 3px;
`;

export const Open = styled.div`
  position: absolute;
  top: -5px;
  left: 2.5px;
  width: 10px;
  height: 10px;
  border: 2px solid ${(props) => props.theme.COLORS.BLACK};
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -0.5px;
    background-color: ${(props) => props.theme.COLORS.BLACK};
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: -5px;
  left: 2.5px;
  width: 10px;
  height: 10px;
  border: 2px solid ${(props) => props.theme.COLORS.BLACK};

  border-radius: 50%;
`;

export const ButtonsLeftSide = styled.div`
  position: absolute;
  left: -10px;
  top: 90px;
  width: 2px;
  height: 40px;
  background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
  z-index: 40;
  border-radius: 5px 0px 0px 5px;

  &::before {
    position: absolute;
    content: '';
    top: -25px;
    width: 2px;
    height: 15px;
    background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
    z-index: 40;
    border-radius: 5px 0px 0px 5px;
  }

  ::after {
    position: absolute;
    content: '';
    top: 50px;
    width: 2px;
    height: 40px;
    background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
    z-index: 40;
    border-radius: 5px 0px 0px 5px;
  }
`;
