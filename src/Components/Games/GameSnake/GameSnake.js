import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPairOfWordsGame from '../../../lib/functions/getPairOfWordsGame';
import useClassicGameOptions from '../../../lib/hooks/useClassicGameOptions';
import useListWordsGames from '../../../lib/hooks/useListWordsGames';

const GameSnake = () => {
  console.log('Snake');
  const { option1, option2, selectedForGames } = useParams();

  const { words, handlerGetWordsFilteredGames } = useListWordsGames();

  useEffect(() => {
    handlerGetWordsFilteredGames(option1, option2, selectedForGames);
  }, [option1, option2, selectedForGames]);

  const { gameOpt, handlerResult, handlerNewGame, handlerNextGame } =
    useClassicGameOptions();

  useEffect(() => {
    if (words.length) {
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

  const [userAnswer, setUserAnswer] = useState('');

  console.log(gameOpt);
  return (
    <>
      <h1>Snake</h1>
      <button onClick={handlerNextGame}>Next</button>
    </>
  );
};

export default GameSnake;
