import { useState } from 'react';
import useConfirmPassPortal from '../../lib/hooks/useConfirmPassPortal';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import Portal from '../Portals/Portal';
import ConfirmPassPortal from './ConfirmPassPortal';

const ButtonDeleteAccount = (props) => {
  const {
    confirmPassPortal,
    handleConfirmPassPotalFieldChanged,
    confirmPassSubmit,
  } = useConfirmPassPortal();

  const [deleteAccount, setDeleteAccount] = useState({
    error: '',
    messageSuccess: '',
  });

  const deleteAccountSubmit = () => {};
  return (
    <>
      <ButtonStyled
        onClick={() => handleConfirmPassPotalFieldChanged('isOpen', true)}
        color={THEME_STYLES.COLORS.RED}
        {...props}
      >
        Delete account
      </ButtonStyled>
      <Portal isOpen={confirmPassPortal.isOpen}>
        <ConfirmPassPortal
          confirmPassPortal={confirmPassPortal}
          handleConfirmPassPotalFieldChanged={
            handleConfirmPassPotalFieldChanged
          }
          confirmPassSubmit={confirmPassSubmit}
          triggerNextFunction={() => deleteAccountSubmit()}
          messageSuccessNextFunction={deleteAccount.messageSuccess}
          messageErrorNextFunction={deleteAccount.error}
        />
      </Portal>
    </>
  );
};

export default ButtonDeleteAccount;

// import { THEME_STYLES } from '../../styles/THEME_STYLES';
// import { ButtonStyled } from '../Buttons/Button.styles';

// const ButtonDeleteAccount = ({
//   handleConfirmPassPotalFieldChanged,
//   ...props
// }) => {
//   const deleteAccountSubmit = () => {};
//   return (
//     <>
//       <ButtonStyled
//         onClick={() =>
//           handleConfirmPassPotalFieldChanged('isOpen', true, () =>
//             deleteAccountSubmit()
//           )
//         }
//         color={THEME_STYLES.COLORS.RED}
//         {...props}
//       >
//         Delete account
//       </ButtonStyled>
//     </>
//   );
// };

// export default ButtonDeleteAccount;
