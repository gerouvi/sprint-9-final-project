import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import useSignUp from '../../lib/hooks/useSignUp';
import { ButtonRoundedStyled } from '../Buttons/ButtonRounded.styles';
import { ErrorTextStyled } from '../Extras/ErrorText.styles';
import { InputStyled } from '../Form/InputStyled';
import { LinkText, Wrapper } from './SignUp.styles';

const SignUp = () => {
  console.log('signup');

  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/account');
  }, [user, navigate]);

  const { credentialsUser, handleFieldChange, signUpSubmit } = useSignUp();

  return (
    <>
      <Wrapper>
        <h1>Sign up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpSubmit();
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
          {credentialsUser.error && (
            <ErrorTextStyled>{credentialsUser.error}</ErrorTextStyled>
          )}
          <ButtonRoundedStyled
            disabled={!credentialsUser.email || !credentialsUser.password}
          >
            Go!
          </ButtonRoundedStyled>
        </form>
        <Link to="/signin">
          <LinkText>Do you have an account? Sing In!</LinkText>
        </Link>
      </Wrapper>
    </>
  );
};

export default SignUp;
