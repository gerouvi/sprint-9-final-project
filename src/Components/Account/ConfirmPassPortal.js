import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { InputStyled } from '../Form/InputStyled';
import { Wrapper } from './ConfirmPassPortal.styles';

const ConfrimPassPortal = ({
  confirmPassPortal,
  handleConfirmPassPortalFieldChanged,
  confirmPassSubmit,
  triggerNextFunction,
  messageSuccessNextFunction,
  messageErrorNextFunction,
  resetForm,
}) => {
  return (
    <Wrapper>
      {!confirmPassPortal.error &&
        !confirmPassPortal.messageSucces &&
        !messageErrorNextFunction &&
        !messageSuccessNextFunction && (
          <>
            <p>Password:</p>
            <InputStyled
              type="password"
              value={confirmPassPortal.password}
              onChange={(e) =>
                handleConfirmPassPortalFieldChanged('password', e.target.value)
              }
            />
            <div>
              <ButtonStyled
                color={THEME_STYLES.COLORS.GREEN}
                onClick={() => {
                  confirmPassSubmit(
                    confirmPassPortal.password,
                    triggerNextFunction
                  );
                }}
              >
                Ok
              </ButtonStyled>
              <ButtonStyled
                color={THEME_STYLES.COLORS.RED}
                onClick={() => {
                  handleConfirmPassPortalFieldChanged('isOpen', false);
                  resetForm();
                }}
              >
                Cancel
              </ButtonStyled>
            </div>
          </>
        )}
      {(confirmPassPortal.messageSucces ||
        confirmPassPortal.error ||
        messageErrorNextFunction ||
        messageSuccessNextFunction) && (
        <>
          <p>
            {confirmPassPortal.messageSucces}
            {confirmPassPortal.error}
            {messageErrorNextFunction}
            {messageSuccessNextFunction}
          </p>
          <ButtonStyled
            onClick={(e) => {
              handleConfirmPassPortalFieldChanged('isOpen', false);
              resetForm();
            }}
          >
            Ok
          </ButtonStyled>
        </>
      )}
    </Wrapper>
  );
};

export default ConfrimPassPortal;
