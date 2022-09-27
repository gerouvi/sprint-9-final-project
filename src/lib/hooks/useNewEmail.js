import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import { updateEmailFunction } from '../firebase/firebase-auth';

const getInitialValuesNewEmail = () => ({
  email: '',
  error: '',
  messageSucces: '',
});

const useNewEmail = () => {
  const [newEmail, setNewEmail] = useState(() => getInitialValuesNewEmail());

  const handleFieldNewEmailChanged = (key, value) => {
    setNewEmail((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetNewEmail = () => setNewEmail(getInitialValuesNewEmail());

  const newEmailSubmit = async (newEmail) => {
    try {
      await updateEmailFunction(newEmail);

      setNewEmail((prev) => ({
        ...prev,
        messageSucces:
          "Email changed, check your emails and finish the precess. Don't forget spams!",
      }));
    } catch (err) {
      console.log(err.code);
      const strError = errorString(err.code);
      setNewEmail((prev) => ({ ...prev, error: strError }));
    }
  };

  return {
    newEmail,
    handleFieldNewEmailChanged,
    newEmailSubmit,
    handleResetNewEmail,
  };
};

export default useNewEmail;
