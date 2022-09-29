import { useState } from 'react';

const getInitialValuesClassicGameOptions = () => ({
  question: undefined,
  answer: undefined,
  result: undefined,
  answerFake: undefined,
  correctColorAnswer: undefined,
  wrongColorAnswer: undefined,
  nextGame: false,
});

const useClassicGameOptions = () => {
  const [gameOpt, setGameOpt] = useState(() =>
    getInitialValuesClassicGameOptions()
  );

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

export default useClassicGameOptions;
