import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPasswordFunction } from '../../lib/firebase/firebase-auth';
import { ButtonRoundedStyled } from '../Buttons/ButtonRounded.styles';
import { InputStyled } from '../Form/InputStyled';
import { LinkText, Wrapper } from './SignIn.styles';

const SignIn = () => {
  console.log('signin');
  const [credentialsUser, setCredentialsUser] = useState({
    email: '',
    password: '',
    error: undefined,
  });

  const handleSignInWithEmailAndPassword = async () => {
    setCredentialsUser((prev) => ({ ...prev, error: undefined }));
    try {
      await signInWithEmailAndPasswordFunction(
        credentialsUser.email,
        credentialsUser.password
      );
    } catch (err) {
      setCredentialsUser((prev) => ({ ...prev, error: err.message }));
    }
  };
  return (
    <>
      <Wrapper>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem('emailMemoWords', credentialsUser.email);

            handleSignInWithEmailAndPassword();
          }}
        >
          <div>
            <label>Email:</label>
            <InputStyled
              value={credentialsUser.email}
              type="email"
              onChange={(e) =>
                setCredentialsUser((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label>Password:</label>
            <InputStyled
              value={credentialsUser.password}
              type="password"
              onChange={(e) =>
                setCredentialsUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
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
