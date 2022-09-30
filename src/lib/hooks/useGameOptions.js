import { useState } from 'react';

const getInitialValuesGameOptions = () => ({
  question: undefined,
  answer: undefined,
  result: undefined,
  answerFake: undefined,
  correctColorAnswer: undefined,
  wrongColorAnswer: undefined,
  nextGame: false,
});

const useGameOptions = () => {
  const [gameOpt, setGameOpt] = useState(() => getInitialValuesGameOptions());

  const handlerNewGame = ({
    question,
    answer,
    answerFake,
    correctColorAnswer,
    wrongColorAnswer,
  }) => {
    setGameOpt((prev) => ({
      ...prev,
      question,
      answer,
      answerFake,
      correctColorAnswer,
      wrongColorAnswer,
    }));
  };

  const handlerNextGame = () => {
    setGameOpt((prev) => ({
      question: undefined,
      answer: undefined,
      result: undefined,
      nextGame: !prev.nextGame,
    }));
  };

  const handlerResult = (newResult) => {
    setGameOpt((prev) => ({ ...prev, result: newResult }));
  };

  return {
    gameOpt,
    setGameOpt,
    handlerResult,
    handlerNewGame,
    handlerNextGame,
  };
};

export default useGameOptions;
