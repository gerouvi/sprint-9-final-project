import { useState } from 'react';
import { getUid } from '../firebase/firebase-auth';
import {
  getDocsFunction,
  getDocsSelectedForGame,
} from '../firebase/firebase-firestore';
import { handlerSortAndStringOptions } from '../handlers/handlerSortAndStringOptions';

const useListWordsGames = () => {
  const [words, setWords] = useState([]);

  //Get all words filtered for the games
  const handlerGetWordsFilteredGames = async (
    option1,
    option2,
    selectedForGames
  ) => {
    console.log('handleGetWordsFilteredGames');
    const uid = getUid();
    const newPairOfLanguages = handlerSortAndStringOptions(option1, option2);
    let data;

    try {
      if (Boolean(selectedForGames === 'true')) {
        data = await getDocsSelectedForGame(
          `users/${uid}/${newPairOfLanguages}`
        );
      } else {
        data = await getDocsFunction(`users/${uid}/${newPairOfLanguages}`);
      }
      const docs = data.docs.map((el) => ({ ...el.data(), id: el.id }));
      setWords(docs);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    words,
    handlerGetWordsFilteredGames,
  };
};

export default useListWordsGames;
