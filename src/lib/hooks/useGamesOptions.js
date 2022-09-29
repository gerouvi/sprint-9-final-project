import { useState } from 'react';

const useGamesOptions = () => {
  const [gamesOptions, setGamesOptions] = useState({
    selectedForGames: false,
    game: 'classic',
  });

  const handlerFieldGameOptionsChanged = (key, value) => {
    setGamesOptions((prev) => ({ ...prev, [key]: value }));
  };

  return {
    gamesOptions,
    handlerFieldGameOptionsChanged,
  };
};
export default useGamesOptions;
