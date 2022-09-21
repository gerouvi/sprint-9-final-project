import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { PortaMessageStyled } from '../Extras/PortalMessageStyled';
import { InputStyled } from '../Form/InputStyled';
import { Form } from './NewPassPortal.styles';

const FormNewPassPortal = ({
  newPassPortal,
  handleFieldNewPassPortalChanged,
  newPassSubmit,
}) => {
  return (
    <>
      {!newPassPortal.error && !newPassPortal.messageSuccess && (
        <>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('submit');
              newPassSubmit();
            }}
          >
            <p>Email:</p>
            <InputStyled
              value={newPassPortal.email}
              onChange={(e) =>
                handleFieldNewPassPortalChanged('email', e.target.value)
              }
            />
            <ButtonStyled color={THEME_STYLES.COLORS.GREEN}>Send</ButtonStyled>
            <ButtonStyled
              type="button"
              color={THEME_STYLES.COLORS.RED}
              onClick={(e) => handleFieldNewPassPortalChanged('isOpen', false)}
            >
              Close
            </ButtonStyled>
          </Form>
        </>
      )}
      {newPassPortal.error && (
        <PortaMessageStyled>
          <p>{newPassPortal.error}</p>
          <ButtonStyled
            onClick={(e) => handleFieldNewPassPortalChanged('isOpen', false)}
          >
            Ok
          </ButtonStyled>
        </PortaMessageStyled>
      )}
      {newPassPortal.messageSuccess && (
        <PortaMessageStyled>
          <p>{newPassPortal.messageSuccess}</p>
          <ButtonStyled
            onClick={(e) => handleFieldNewPassPortalChanged('isOpen', false)}
          >
            Ok
          </ButtonStyled>
        </PortaMessageStyled>
      )}
    </>
  );
};

export default FormNewPassPortal;
