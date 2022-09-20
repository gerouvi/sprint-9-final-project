import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import {
  createUserWithEmailAndPasswordFunction,
  sendEmailVerificationFunction,
} from '../firebase/firebase-auth';

const useSignUp = () => {
  const [credentialsUser, setCredentialsUser] = useState({
    email: '',
    password: '',
    error: undefined,
  });

  const handleFieldChange = (key, value) => {
    setCredentialsUser((prev) => ({ ...prev, [key]: value }));
  };

  const signUpSubmit = async () => {
    setCredentialsUser((prev) => ({ ...prev, error: undefined }));
    try {
      await createUserWithEmailAndPasswordFunction(
        credentialsUser.email,
        credentialsUser.password
      );
      await sendEmailVerificationFunction();
    } catch (err) {
      const strError = errorString(err.code);
      setCredentialsUser((prev) => ({ ...prev, error: strError }));
    }
  };

  return {
    credentialsUser,
    handleFieldChange,
    signUpSubmit,
  };
};

export default useSignUp;
