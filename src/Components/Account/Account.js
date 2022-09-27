import { useContext } from 'react';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import ButtonGoBack from '../Buttons/ButtonGoBack';
import { Wrapper, WrapperForms } from './Account.styles';
import ButtonDeleteAccount from './ButtonDeleteAccount';
import ChangeEmailForm from './ChangeEmailForm';
import ChangePassForm from './ChangePassForm';

const Account = () => {
  console.log('account');
  const { user } = useContext(UserAuthContext);

  return (
    <>
      <Wrapper>
        <ButtonGoBack pathName="/home" />
        <h1>My Account</h1>
        <p>{user.email}</p>
        <WrapperForms>
          <ChangeEmailForm />
          <ChangePassForm />
        </WrapperForms>
        <ButtonDeleteAccount />
      </Wrapper>
    </>
  );
};

export default Account;
