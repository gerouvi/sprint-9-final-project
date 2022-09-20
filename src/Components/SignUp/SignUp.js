import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPasswordFunction,
  sendEmailVerificationFunction,
} from '../../lib/firebase/firebase-auth';
import useSignUp from '../../lib/hooks/useSignUp';
import { ButtonRoundedStyled } from '../Buttons/ButtonRounded.styles';
import { InputStyled } from '../Form/InputStyled';
import { LinkText, Wrapper } from './SignUp.styles';

const SignUp = () => {
  console.log('signup');
  const { credentialsUser, handleFieldChange, handleSignUp } = useSignUp();
  return (
    <>
      <Wrapper>
        <h1>Sign up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
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
        <Link to="/signin">
          <LinkText>Do you have an account? Sing In!</LinkText>
        </Link>
      </Wrapper>
    </>
  );
};

export default SignUp;
