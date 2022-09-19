import bg from '../../assets/images/bg.png';
import { Wrapper } from './WrapperPage.styles';

const WrapperPage = ({ className }) => {
  const pathName = window.location.pathname;
  return <>{pathName !== '/' && <Wrapper bg={bg} />}</>;
};

export default WrapperPage;
