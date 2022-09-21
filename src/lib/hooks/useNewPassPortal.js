import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import { sendPasswordResetEmailFunction } from '../firebase/firebase-auth';

const getInitialValuesNewPassPortal = () => ({
  isOpen: false,
  email: '',
  error: '',
  messageSuccess: '',
});

const useNewPassPortal = () => {
  const [newPassPortal, setNewPassPortal] = useState(() =>
    getInitialValuesNewPassPortal()
  );

  const handleFieldNewPassPortalChanged = (key, value) => {
    if (key === 'isOpen' && value === false)
      setNewPassPortal(() => getInitialValuesNewPassPortal());
    else setNewPassPortal((prev) => ({ ...prev, [key]: value }));
  };

  const newPassSubmit = async () => {
    try {
      await sendPasswordResetEmailFunction(newPassPortal.email);
      handleFieldNewPassPortalChanged(
        'messageSuccess',
        'Email sended, check your spams!'
      );
    } catch (err) {
      const strError = errorString(err.code);
      console.log(strError);
      handleFieldNewPassPortalChanged('error', strError);
    }
  };

  return {
    newPassPortal,
    handleFieldNewPassPortalChanged,
    newPassSubmit,
  };
};

export default useNewPassPortal;
