import bg from '../../assets/images/bg.png';
import { Wrapper } from './WrapperPage.styles';

const WrapperPage = ({ children }) => {
  const pathName = window.location.pathname;
  return <>{pathName !== '/' && <Wrapper bg={bg}>{children}</Wrapper>}</>;
};

export default WrapperPage;
