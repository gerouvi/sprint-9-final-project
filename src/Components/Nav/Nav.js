import { Link } from 'react-router-dom';
import logoMemoWords from '../../assets/images/memoWordsTr.png';
import { ButtonStyled } from '../Buttons/Button.styles';
import { ButtonsMobile, Header, NavMenu, WrapperLogo } from './Nav.styles';

const Nav = ({ navMobile }) => {
  return (
    <Header navMobile={navMobile}>
      <Link to="/home">
        <WrapperLogo>
          <img src={logoMemoWords} alt="logo memo words" />
        </WrapperLogo>
      </Link>
      <NavMenu>
        <ul>
          <li>
            <Link to="/translate">
              <ButtonStyled>Translate</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/addwords">
              <ButtonStyled>Add Words</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/wordslist">
              <ButtonStyled>Words List</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/games">
              <ButtonStyled>Games</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <ButtonStyled>Account</ButtonStyled>
            </Link>
          </li>

          <ButtonsMobile>
            <Link to="/signin">
              <ButtonStyled>Sign In</ButtonStyled>
            </Link>
          </ButtonsMobile>
          <ButtonsMobile>
            <Link to="/signup">
              <ButtonStyled>Sign Up</ButtonStyled>
            </Link>
          </ButtonsMobile>
        </ul>
      </NavMenu>
    </Header>
  );
};

export default Nav;
