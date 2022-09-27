import bg from '../../assets/images/goback2.png';
import { ButtonGoBackStyled } from './ButtonGoBack.styles';
import { Link } from 'react-router-dom';

const ButtonGoBack = ({ pathName, ...props }) => (
  <Link to={pathName}>
    <ButtonGoBackStyled bg={bg} {...props} />;
  </Link>
);
export default ButtonGoBack;
