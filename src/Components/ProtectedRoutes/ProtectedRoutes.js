// import { useContext, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { UserAuthContext } from '../../lib/contexts/UserAuthContext';

// const ProtectedRoutes = ({ children }) => {
//   console.log('protected routes');
//   const { user } = useContext(UserAuthContext);

//   const navigate = useNavigate();
//   const location = useLocation();

//   // useEffect(() => {
//   //   console.log(location.pathname, user);
//   //   if (user !== undefined) {
//   //     console.log('LOCATION', location.pathname);
//   //     if (location.pathname === 'signin' || location.pathname === 'signup') {
//   //       navigate(location.pathname);
//   //     } else {
//   //       navigate('/home');
//   //     }
//   //     // if (
//   //     //   user === null &&
//   //     //   (location.pathname !== 'signin' || location.pathname !== 'signup')
//   //     // ) {
//   //     //   navigate('/home');
//   //     // }
//   //   }
//   // }, [navigate, user, location.pathname]);

//   return children;
// };

// export default ProtectedRoutes;

import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';

const PATHNAMES_NO_PROTECTED = ['/home', '/signin', '/signup'];

const ProtectedRoutes = ({ children }) => {
  console.log('protected routes');
  const { user } = useContext(UserAuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!PATHNAMES_NO_PROTECTED.includes(location.pathname)) {
      if (user === null) {
        navigate('/home');
      }
    }
  }, [navigate, user, location.pathname]);

  return children;
};

export default ProtectedRoutes;
