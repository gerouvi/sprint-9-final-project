import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import useNewPassPortal from '../../lib/hooks/useNewPassPortal';
import useSignIn from '../../lib/hooks/useSignIn';
import ButtonGoBack from '../Buttons/ButtonGoBack';

import { ButtonRoundedStyled } from '../Buttons/ButtonRounded.styles';
import { ErrorTextStyled } from '../Extras/ErrorText.styles';
import { InputStyled } from '../Form/InputStyled';
import Portal from '../Portals/Portal';
import NewPassPortal from './NewPassPortal';
import { LinkText, Wrapper } from './SignIn.styles';

const SignIn = () => {
  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/account');
  }, [user, navigate]);

  const { signIn, handleFieldSignInChange, signInSubmit } = useSignIn();

  const { newPassPortal, handleFieldNewPassPortalChanged, newPassSubmit } =
    useNewPassPortal();

  return (
    <>
      <Wrapper>
        <ButtonGoBack pathName="/home" />
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signInSubmit();
          }}
        >
          <div>
            <label>Email:</label>
            <InputStyled
              value={signIn.email}
              type="email"
              onChange={(e) => handleFieldSignInChange('email', e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <InputStyled
              value={signIn.password}
              type="password"
              onChange={(e) =>
                handleFieldSignInChange('password', e.target.value)
              }
            />
          </div>
          {signIn.error && <ErrorTextStyled>{signIn.error}</ErrorTextStyled>}
          <ButtonRoundedStyled disabled={!signIn.email || !signIn.password}>
            Go!
          </ButtonRoundedStyled>
        </form>

        <div>
          <LinkText
            onClick={() => handleFieldNewPassPortalChanged('isOpen', true)}
          >
            Forgotten password?
          </LinkText>
        </div>
        <Link to="/signup">
          <LinkText>Don't you have an account? Sign Up!</LinkText>
        </Link>
        <Portal isOpen={newPassPortal.isOpen}>
          <NewPassPortal
            newPassPortal={newPassPortal}
            handleFieldNewPassPortalChanged={handleFieldNewPassPortalChanged}
            newPassSubmit={newPassSubmit}
          />
        </Portal>
      </Wrapper>
    </>
  );
};

export default SignIn;
