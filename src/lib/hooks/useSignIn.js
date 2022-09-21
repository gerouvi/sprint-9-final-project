import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import { signInWithEmailAndPasswordFunction } from '../firebase/firebase-auth';

const useSignIn = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
    error: undefined,
  });

  const handleFieldSignInChange = (key, value) => {
    setSignIn((prev) => ({ ...prev, [key]: value }));
  };

  const signInSubmit = async () => {
    setSignIn((prev) => ({ ...prev, error: undefined }));
    try {
      await signInWithEmailAndPasswordFunction(signIn.email, signIn.password);
    } catch (err) {
      console.log(err.code);
      const strError = errorString(err.code);
      setSignIn((prev) => ({ ...prev, error: strError }));
    }
  };

  return {
    signIn,
    handleFieldSignInChange,
    signInSubmit,
  };
};

export default useSignIn;
