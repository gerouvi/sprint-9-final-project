import { Link } from 'react-router-dom';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { OrderList, TextDescription } from './Home.styles';

const Home = () => {
  console.log('home');
  return (
    <TextDescription>
      <p>
        Welcome to <span>memo words</span> the website where you can memorize
        your translated words!
      </p>

      <OrderList>
        <li>
          You can <span>translate</span> words from any langauge to any language
          and add it in your lists
        </li>
        <li>
          You can <span>add</span> words in your lists
        </li>
        <li>
          You can <span>modify</span>, <span>update</span> or{' '}
          <span>delete</span> your words
        </li>
        <li>
          And you can <span>play</span> meanwhile you memorize your words!
        </li>
      </OrderList>

      <Link to="/signup">
        <ButtonStyled color={THEME_STYLES.COLORS.RED}>Sign Up</ButtonStyled>
      </Link>
      <Link to="/signin">
        <ButtonStyled>Sign In</ButtonStyled>
      </Link>
    </TextDescription>
  );
};

export default Home;
