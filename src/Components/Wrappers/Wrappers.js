import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import CustomUserAuthProvider from '../Providers/CustomUserAuthProvider';
import WrapperPage from '../WrapperPage/WrapperPage';

const Wrappers = ({ navMobile, children }) => {
  return (
    <CustomUserAuthProvider>
      <ProtectedRoutes>
        <WrapperPage navMobile={navMobile}>{children}</WrapperPage>
      </ProtectedRoutes>
    </CustomUserAuthProvider>
  );
};

export default Wrappers;
