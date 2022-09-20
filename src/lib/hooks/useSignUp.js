import { useState } from 'react';
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

  const handleSignUp = async () => {
    setCredentialsUser((prev) => ({ ...prev, error: undefined }));
    try {
      await createUserWithEmailAndPasswordFunction(
        credentialsUser.email,
        credentialsUser.password
      );
      await sendEmailVerificationFunction();
    } catch (err) {
      setCredentialsUser((prev) => ({ ...prev, error: err.message }));
    }
  };

  return {
    credentialsUser,
    handleFieldChange,
    handleSignUp,
  };
};

export default useSignUp;
