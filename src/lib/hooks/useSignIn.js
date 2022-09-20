import { useState } from 'react';
import { errorString } from '../Extras/errorString';
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
      console.log(err.code);
      const strError = errorString(err.code);
      setCredentialsUser((prev) => ({ ...prev, error: strError }));
    }
  };

  return {
    credentialsUser,
    handleFieldChange,
    signInSubmit,
  };
};

export default useSignIn;
