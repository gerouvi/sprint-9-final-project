import { signOutFunction } from '../../lib/firebase/firebase-auth';
import bg from '../../assets/images/logout.png';
import { ButtonSignOutStyled } from './ButtonSingOut.styles';

const ButtonSignOut = (props) => (
  <ButtonSignOutStyled bg={bg} {...props} onClick={() => signOutFunction()} />
);

export default ButtonSignOut;
