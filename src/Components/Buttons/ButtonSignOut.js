import { signOutFunction } from '../../lib/firebase/firebase-auth';

const ButtonSignOut = (props) => {
  return (
    <button {...props} onClick={() => signOutFunction()}>
      SignOut
    </button>
  );
};

export default ButtonSignOut;
