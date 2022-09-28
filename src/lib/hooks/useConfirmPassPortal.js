import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import { reauthenticateWithCredentialFunction } from '../firebase/firebase-auth';

const getInitialValuesConfrimPassPortal = () => ({
  isOpen: false,
  password: '',
  errror: '',
  messageSuccess: '',
});

const useConfirmPassPortal = () => {
  const [confirmPassPortal, setConfrimPassPortal] = useState(() =>
    getInitialValuesConfrimPassPortal()
  );

  const handleConfirmPassPortalFieldChanged = (key, value) => {
    if (key === 'isOpen' && value === false) {
      setConfrimPassPortal(getInitialValuesConfrimPassPortal());
    } else {
      setConfrimPassPortal((prev) => ({ ...prev, [key]: value }));
    }
  };

  const confirmPassSubmit = async (password, triggerNextFunction) => {
    console.log('here');
    try {
      await reauthenticateWithCredentialFunction(password);
      triggerNextFunction();
    } catch (err) {
      console.log(err.code);
      const strError = errorString(err.code);
      setConfrimPassPortal((prev) => ({ ...prev, error: strError }));
    }
  };

  return {
    confirmPassPortal,
    handleConfirmPassPortalFieldChanged,
    confirmPassSubmit,
  };
};

export default useConfirmPassPortal;
