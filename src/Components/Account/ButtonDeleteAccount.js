import { useState } from 'react';
import { handlerDeleteCollectionsAndSubcollection } from '../../lib/handlers/handlerDeleteCollectionsAndSubcollections';
import { handlerDeleteUserAccount } from '../../lib/handlers/handlerDeleteUserAccount';
import useConfirmPassPortal from '../../lib/hooks/useConfirmPassPortal';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import Portal from '../Portals/Portal';
import ConfirmPassPortal from './ConfirmPassPortal';

const ButtonDeleteAccount = (props) => {
  const {
    confirmPassPortal,
    handleConfirmPassPortalFieldChanged,
    confirmPassSubmit,
  } = useConfirmPassPortal();

  const deleteAccountSubmit = () => {
    handlerDeleteCollectionsAndSubcollection();
    handlerDeleteUserAccount();
    handleConfirmPassPortalFieldChanged('isOpen', false);
  };
  return (
    <>
      <ButtonStyled
        onClick={() => handleConfirmPassPortalFieldChanged('isOpen', true)}
        color={THEME_STYLES.COLORS.RED}
        {...props}
      >
        Delete account
      </ButtonStyled>
      <Portal isOpen={confirmPassPortal.isOpen}>
        <ConfirmPassPortal
          confirmPassPortal={confirmPassPortal}
          handleConfirmPassPortalFieldChanged={
            handleConfirmPassPortalFieldChanged
          }
          confirmPassSubmit={confirmPassSubmit}
          triggerNextFunction={() => deleteAccountSubmit()}
        />
      </Portal>
    </>
  );
};

export default ButtonDeleteAccount;
