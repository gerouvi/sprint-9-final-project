import { useState } from 'react';
import { signInWithEmailAndPasswordFunction } from '../firebase/firebase-auth';

const useSignIn = () => {
  const [credentialsUser, setCredentialsUser] = useState({
    email: '',
    password: '',
    error: undefined,
  });

  const handleFieldChange = (key, value) => {
    setCredentialsUser((prev) => ({ ...prev, [key]: value }));
  };

  const signInSubmit = async () => {
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

  return {
    credentialsUser,
    handleFieldChange,
    signInSubmit,
  };
};

export default useSignIn;
