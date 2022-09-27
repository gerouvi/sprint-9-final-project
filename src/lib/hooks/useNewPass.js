import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import { updatePasswordFunction } from '../firebase/firebase-auth';

const getInitialValuesNewPass = () => ({
  password: '',
  error: '',
  messageSucces: '',
});

const useNewPass = () => {
  const [newPass, setNewPass] = useState(() => getInitialValuesNewPass());

  const handleFieldNewPassChanged = (key, value) => {
    setNewPass((prev) => ({ ...prev, [key]: value }));
  };

  const resetNewPass = () => setNewPass(getInitialValuesNewPass())

  const newPassSubmit = async (newPassword) => {
    try {
      await updatePasswordFunction(newPassword);
      setNewPass((prev) => ({ ...prev, messageSucces: 'Password changed' }));
    } catch (err) {
      console.log(err);
      const strError = errorString(err.code);
      console.log(strError);
      setNewPass((prev) => ({ ...prev, error: strError }));
    }
  };



  return {
    newPass,
    handleFieldNewPassChanged,
    newPassSubmit,
    resetNewPass,
  };
};

export default useNewPass;
