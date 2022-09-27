import useConfirmPassPortal from '../../lib/hooks/useConfirmPassPortal';
import useNewPass from '../../lib/hooks/useNewPass';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { InputStyled } from '../Form/InputStyled';
import Portal from '../Portals/Portal';
import ConfirmPassPortal from './ConfirmPassPortal';
import { Wrapper } from './FormsStyles.styles';

const ChangePassForm = () => {
  const { newPass, handleFieldNewPassChanged, newPassSubmit, resetNewPass } =
    useNewPass();
  const {
    confirmPassPortal,
    handleConfirmPassPortalFieldChanged,
    confirmPassSubmit,
  } = useConfirmPassPortal();
  return (
    <Wrapper>
      <label>Change password:</label>
      <InputStyled
        value={newPass.password}
        type="password"
        onChange={(e) => handleFieldNewPassChanged('password', e.target.value)}
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
          triggerNextFunction={() => newPassSubmit(newPass.password)}
          messageSuccessNextFunction={newPass.messageSucces}
          messageErrorNextFunction={newPass.error}
          resetForm={resetNewPass}
        />
      </Portal>
    </Wrapper>
  );
};

export default ChangePassForm;
