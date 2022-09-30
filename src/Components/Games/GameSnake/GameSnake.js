import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getPairOfWordsGame from '../../../lib/functions/getPairOfWordsGame';
import useGameOptions from '../../../lib/hooks/useGameOptions';
import useListWordsGames from '../../../lib/hooks/useListWordsGames';
import ButtonGoBack from '../../Buttons/ButtonGoBack';
import { Wrapper } from './GameSnake.styles';

import GameSnakeField from './GameSnakeField';

const GameSnake = () => {
  const { option1, option2, selectedForGames } = useParams();

  const { words, handlerGetWordsFilteredGames } = useListWordsGames();

  useEffect(() => {
    handlerGetWordsFilteredGames(option1, option2, selectedForGames);
  }, [option1, option2, selectedForGames]);

  const { gameOpt, handlerNewGame, handlerNextGame } = useGameOptions();

  useEffect(() => {
    if (words.length > 1) {
      const {
        question,
        answer,
        answerFake,
        correctColorAnswer,
        wrongColorAnswer,
      } = getPairOfWordsGame(words);

      handlerNewGame({
        question,
        answer,
        answerFake,
        correctColorAnswer,
        wrongColorAnswer,
      });
    }
  }, [words, gameOpt.nextGame]);

  return (
    <Wrapper>
      <ButtonGoBack pathName="/games" />
      <h1>Snake</h1>
      {words.length > 1 ? (
        <GameSnakeField gameOpt={gameOpt} handlerNextGame={handlerNextGame} />
      ) : (
        <h2>Not enough words</h2>
      )}
    </Wrapper>
  );
};

export default GameSnake;
