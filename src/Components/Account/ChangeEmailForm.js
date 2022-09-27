import useConfirmPassPortal from '../../lib/hooks/useConfirmPassPortal';
import useNewEmail from '../../lib/hooks/useNewEmail';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { InputStyled } from '../Form/InputStyled';
import Portal from '../Portals/Portal';
import ConfirmPassPortal from './ConfirmPassPortal';
import { Wrapper } from './FormsStyles.styles';

const ChangeEmailForm = () => {
  const { newEmail, handleFieldNewEmailChanged, newEmailSubmit } =
    useNewEmail();

  const {
    confirmPassPortal,
    handleConfirmPassPortalFieldChanged,
    confirmPassSubmit,
    handleResetNewEmail,
  } = useConfirmPassPortal();

  return (
    <Wrapper>
      <label>Change email:</label>
      <InputStyled
        type="email"
        value={newEmail.email}
        onChange={(e) => handleFieldNewEmailChanged('email', e.target.value)}
      />
      <ButtonStyled
        onClick={() => handleConfirmPassPortalFieldChanged('isOpen', true)}
        color={THEME_STYLES.COLORS.GREEN}
        type="button"
      >
        Change
      </ButtonStyled>
      <Portal isOpen={confirmPassPortal.isOpen}>
        <ConfirmPassPortal
          confirmPassPortal={confirmPassPortal}
          handleConfirmPassPortalFieldChanged={
            handleConfirmPassPortalFieldChanged
          }
          confirmPassSubmit={confirmPassSubmit}
          triggerNextFunction={() => newEmailSubmit(newEmail.email)}
          messageSuccessNextFunction={newEmail.messageSucces}
          messageErrorNextFunction={newEmail.error}
          resetForm={handleResetNewEmail}
        />
      </Portal>
    </Wrapper>
  );
};

export default ChangeEmailForm;
