import { signOutFunction } from '../../lib/firebase/firebase-auth';
import bg from '../../assets/images/logout.png';
import { Button } from './ButtonSingOut.styles';

const ButtonSignOut = (props) => {
  return <Button bg={bg} {...props} onClick={() => signOutFunction()} />;
};

export default ButtonSignOut;
