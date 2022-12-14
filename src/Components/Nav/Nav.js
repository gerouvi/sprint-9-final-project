import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoMemoWords from '../../assets/images/memoWordsTr.png';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import { ButtonStyled } from '../Buttons/Button.styles';
import { ButtonsMobile, Header, NavMenu, WrapperLogo } from './Nav.styles';

const Nav = ({ navMobile }) => {
  const { user } = useContext(UserAuthContext);
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
              <ButtonStyled disabled={!user}>Translate</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/addwords">
              <ButtonStyled disabled={!user}>Add Words</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/wordslists">
              <ButtonStyled disabled={!user}>Words Lists</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/games">
              <ButtonStyled disabled={!user}>Games</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <ButtonStyled disabled={!user}>Account</ButtonStyled>
            </Link>
          </li>
          {!user && (
            <>
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
            </>
          )}
        </ul>
      </NavMenu>
    </Header>
  );
};

export default Nav;
