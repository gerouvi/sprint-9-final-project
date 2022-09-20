import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import useSignIn from '../../lib/hooks/useSignIn';
import { ButtonRoundedStyled } from '../Buttons/ButtonRounded.styles';
import { InputStyled } from '../Form/InputStyled';
import { LinkText, Wrapper } from './SignIn.styles';

const SignIn = () => {
  console.log('signin');

  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/account');
  }, [user, navigate]);

  const { credentialsUser, handleFieldChange, signInSubmit } = useSignIn();

  return (
    <>
      <Wrapper>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem('emailMemoWords', credentialsUser.email);
            signInSubmit();
          }}
        >
          <div>
            <label>Email:</label>
            <InputStyled
              value={credentialsUser.email}
              type="email"
              onChange={(e) => handleFieldChange('email', e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <InputStyled
              value={credentialsUser.password}
              type="password"
              onChange={(e) => handleFieldChange('password', e.target.value)}
            />
          </div>
          <ButtonRoundedStyled
            disabled={!credentialsUser.email || !credentialsUser.password}
          >
            Go!
          </ButtonRoundedStyled>
        </form>
        <Link to="/signup">
          <LinkText>Don't you have an account? Sing Up!</LinkText>
        </Link>
      </Wrapper>
    </>
  );
};

export default SignIn;
