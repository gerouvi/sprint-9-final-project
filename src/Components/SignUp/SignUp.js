import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import useSignUp from '../../lib/hooks/useSignUp';
import { ButtonGoBackStyled } from '../Buttons/ButtonGoBack.styles';
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

  const { signUp, handleFieldSignUpChange, signUpSubmit } = useSignUp();

  return (
    <>
      <Wrapper>
        <ButtonGoBackStyled />
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
              value={signUp.email}
              type="email"
              onChange={(e) => handleFieldSignUpChange('email', e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <InputStyled
              value={signUp.password}
              type="password"
              onChange={(e) =>
                handleFieldSignUpChange('password', e.target.value)
              }
            />
          </div>
          {signUp.error && <ErrorTextStyled>{signUp.error}</ErrorTextStyled>}
          <ButtonRoundedStyled disabled={!signUp.email || !signUp.password}>
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
