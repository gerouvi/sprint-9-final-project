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

// import { useState } from 'react';
// import { errorString } from '../Extras/errorString';
// import { reauthenticateWithCredentialFunction } from '../firebase/firebase-auth';

// const getInitialValuesConfrimPassPortal = () => ({
//   isOpen: false,
//   password: '',
//   error: '',
//   messageSuccess: '',
//   triggerNextFunction: undefined,
// });

// const useConfirmPassPortal = () => {
//   const [confirmPassPortal, setConfrimPassPortal] = useState(() =>
//     getInitialValuesConfrimPassPortal()
//   );

//   const handleConfirmPassPortalFieldChanged = (key, value, nextFunction) => {
//     if (key === 'isOpen' && value === true) {
//       setConfrimPassPortal((prev) => ({
//         ...prev,
//         isOpen: true,
//         triggerNextFunction: nextFunction,
//       }));
//     } else if (key === 'isOpen' && value === false) {
//       setConfrimPassPortal(() => getInitialValuesConfrimPassPortal());
//     } else {
//       setConfrimPassPortal((prev) => ({ ...prev, [key]: value }));
//     }
//   };

//   const confirmPassSubmit = async (password, triggerFunction) => {
//     try {
//       await reauthenticateWithCredentialFunction(password);
//       triggerFunction();
//     } catch (err) {
//       console.log(err.code);
//       const strError = errorString(err.code);
//       setConfrimPassPortal((prev) => ({ ...prev, error: strError }));
//     }
//   };

//   return {
//     confirmPassPortal,
//     handleConfirmPassPortalFieldChanged,
//     confirmPassSubmit,
//   };
// };

// export default useConfirmPassPortal;
