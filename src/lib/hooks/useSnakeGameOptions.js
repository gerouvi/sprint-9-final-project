import { useState } from 'react';

const useSnakeGameOptions = () => {
  const [gameOpt, setGameOpt] = useState({
    answer: undefined,
    answerFake: undefined,
    question: undefined,
    correctColorAnswer: undefined,
    wrongColorAnswer: undefined,
    nextGame: false,
  });

  const handlerNewGameOptions = (
    answer,
    answerFake,
    question,
    correctColorAnswer,
    wrongColorAnswer
  ) => {
    setGameOpt((prev) => ({
      ...prev,
      answer,
      answerFake,
      question,
      correctColorAnswer,
      wrongColorAnswer,
    }));
  };

  const handlerNextGame = () => {
    setGameOpt((prev) => ({ ...prev, nextGame: !prev.nextGame }));
  };

  return {
    gameOpt,
    handlerNewGameOptions,
    handlerNextGame,
  };
};

export default useSnakeGameOptions;
