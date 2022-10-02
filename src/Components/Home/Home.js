import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { OrderList, TextDescription } from './Home.styles';

const Home = () => {
  const { user } = useContext(UserAuthContext);
  return (
    <TextDescription>
      <div>
        <h1>
          Welcome to <span>Memo Words!</span>
        </h1>
        <h2>
          The website that will help you improve your vocabulary in a fun way!
        </h2>
      </div>

      <OrderList>
        <li>
          You can <span>translate</span> words from any language to any other
          language and add them to your lists
        </li>
        <li>
          You can <span>add</span> words to your lists
        </li>
        <li>
          You can <span>modify</span>, <span>update</span> or{' '}
          <span>delete</span> your words
        </li>
        <li>
          And you can <span>play</span> while memorizing your words!
        </li>
      </OrderList>

      {!user && (
        <>
          <Link to="/signup">
            <ButtonStyled color={THEME_STYLES.COLORS.GREEN}>
              Sign Up
            </ButtonStyled>
          </Link>
          <Link to="/signin">
            <ButtonStyled>Sign In</ButtonStyled>
          </Link>
        </>
      )}
    </TextDescription>
  );
};

export default Home;
