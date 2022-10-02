import { useContext } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.png';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import { signOutFunction } from '../../lib/firebase/firebase-auth';
import { ButtonStyled } from '../Buttons/Button.styles';
import ButtonSignOut from '../Buttons/ButtonSignOut';
import Nav from '../Nav/Nav';

import {
  ConfrimText,
  Wrapper,
  WrapperButtonVerifyEmail,
} from './WrapperPage.styles';

const WrapperPage = ({ navMobile, children }) => {
  const { user } = useContext(UserAuthContext);
  return (
    <>
      {
        <Wrapper bg={bg}>
          {user && <ButtonSignOut />}
          {user && !user.emailVerified ? (
            <WrapperButtonVerifyEmail>
              <ConfrimText>
                Confirm once you have verified your email
              </ConfrimText>
              <h2>Make sure you have checked your Spam folder</h2>
              <Link to="/signin">
                <ButtonStyled onClick={() => signOutFunction()}>
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
