import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPairOfWordsGame from '../../../lib/functions/getPairOfWordsGame';
import useGameOptions from '../../../lib/hooks/useGameOptions';
import useListWordsGames from '../../../lib/hooks/useListWordsGames';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';
import { ButtonStyled } from '../../Buttons/Button.styles';
import ButtonGoBack from '../../Buttons/ButtonGoBack';
import { ButtonNoSubmitStyled } from '../../Buttons/ButtonNoSubmit.styles';
import { InputStyled } from '../../Form/InputStyled';
import { Form, Question, Result, Wrapper } from './GameClassic.styles';

const GameClassic = () => {
  const { option1, option2, selectedForGames } = useParams();

  const { words, handlerGetWordsFilteredGames } = useListWordsGames();

  useEffect(() => {
    handlerGetWordsFilteredGames(option1, option2, selectedForGames);
  }, [option1, option2, selectedForGames]);

  const { gameOpt, handlerResult, handlerNewGame, handlerNextGame } =
    useGameOptions();

  useEffect(() => {
    if (words.length > 1) {
      const { question, answer } = getPairOfWordsGame(words);
      handlerNewGame({ question, answer });
    }
  }, [words, gameOpt.nextGame]);

  const [userAnswer, setUserAnswer] = useState('');

  return (
    <Wrapper>
      <ButtonGoBack pathName="/games" />
      <h1>Game Classic</h1>

      {words.length > 1 ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit');
            if (userAnswer.toLowerCase().trim() === gameOpt.answer)
              handlerResult(true);
            else handlerResult(false);
          }}
        >
          <Question>{gameOpt.question}?</Question>
          <InputStyled
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          {gameOpt.result !== undefined && (
            <>
              <Result correct={gameOpt.result}>
                {gameOpt.result === true && 'Correct'}
                {gameOpt.result === false && `Incorrect`}
              </Result>
              {gameOpt.result === false && <span>{gameOpt.answer}</span>}
            </>
          )}
          {gameOpt.result === undefined && userAnswer && (
            <ButtonStyled color={THEME_STYLES.COLORS.RED}>Check</ButtonStyled>
          )}
          {gameOpt.result !== undefined && (
            <ButtonNoSubmitStyled
              onClick={() => {
                handlerNextGame();
                setUserAnswer('');
              }}
            >
              Next
            </ButtonNoSubmitStyled>
          )}
        </Form>
      ) : (
        <h2>Not enough words</h2>
      )}
    </Wrapper>
  );
};

export default GameClassic;
