import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import {
  createUserWithEmailAndPasswordFunction,
  sendEmailVerificationFunction,
} from '../firebase/firebase-auth';

const useSignUp = () => {
  const [signUp, setSignUp] = useState({
    email: '',
    password: '',
    error: undefined,
  });

  const handleFieldSignUpChange = (key, value) => {
    setSignUp((prev) => ({ ...prev, [key]: value }));
  };

  const signUpSubmit = async () => {
    setSignUp((prev) => ({ ...prev, error: undefined }));
    try {
      await createUserWithEmailAndPasswordFunction(
        signUp.email,
        signUp.password
      );
      await sendEmailVerificationFunction();
    } catch (err) {
      const strError = errorString(err.code);
      setSignUp((prev) => ({ ...prev, error: strError }));
    }
  };

  return {
    signUp,
    handleFieldSignUpChange,
    signUpSubmit,
  };
};

export default useSignUp;
