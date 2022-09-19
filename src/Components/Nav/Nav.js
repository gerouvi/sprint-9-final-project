import { Link } from 'react-router-dom';
import logoMemoWords from '../../assets/images/memoWordsTr.png';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/ButtonStyled';
import { Header, NavMenu, WrapperLogo } from './Nav.styles';

const Nav = () => {
  return (
    <Header
      displayNone={
        window.screen.width <= THEME_STYLES.MEDIA_QUERYS.DESKTOP &&
        window.location.pathname !== '/home'
      }
    >
      <Link to="/">
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
          {/* {(user || window.screen.availWidth <= THEME_STYLES.MOBILE_SIZE) && (
            <li>
              <Link to="/account">
                <ButtonStyled>Account</ButtonStyled>
              </Link>
            </li>
          )}
          {user && window.screen.availWidth >= THEME_STYLES.TABLET_SIZE && (
            <li>
              <Link to="/">
                <LogOutButton
                  logoLogOut={logoLogOut}
                  onClick={signOutFunction}
                />
              </Link>
            </li>
          )} */}
        </ul>
      </NavMenu>
    </Header>
  );
};

export default Nav;
