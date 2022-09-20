import { useContext } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.png';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import { ButtonStyled } from '../Buttons/Button.styles';
import { ButtonSignOutStyled } from '../Buttons/ButtonSingOut.styles';
import Nav from '../Nav/Nav';

import { Wrapper, WrapperButtonVerifyEmail } from './WrapperPage.styles';

const WrapperPage = ({ navMobile, children }) => {
  const { user } = useContext(UserAuthContext);
  return (
    <>
      {
        <Wrapper bg={bg}>
          {user && <ButtonSignOutStyled />}
          {user && !user.emailVerified ? (
            <WrapperButtonVerifyEmail>
              <h1>
                Click when you have had verified your email, it can be in your
                spams!
              </h1>
              <Link to="/account">
                <ButtonStyled onClick={() => window.location.reload()}>
                  Click!
                </ButtonStyled>
              </Link>
            </WrapperButtonVerifyEmail>
          ) : (
            <>
              <Nav navMobile={navMobile} />
              {children}
            </>
          )}
        </Wrapper>
      }
    </>
  );
};

export default WrapperPage;
