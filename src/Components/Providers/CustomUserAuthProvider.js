import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import { auth } from '../../lib/firebase/firebase-config';
import { SpinnerStyled } from '../Spinner/Spinner.styles';

const CustomUserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  if (user === undefined) return <SpinnerStyled />;

  return (
    <UserAuthContext.Provider value={{ user }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default CustomUserAuthProvider;
