import { useState } from 'react';
import { getUid } from '../firebase/firebase-auth';
import { updateDocFunction } from '../firebase/firebase-firestore';
import { handlerGetListAfterUpdateDelete } from '../handlers/handlerGetListAfterUpdateDelete';
import { handlerSortAndStringOptions } from '../handlers/handlerSortAndStringOptions';

const getInitialValuesUpdateWordsPortal = () => ({
  isOpen: false,
  word1: '',
  word2: '',
  selectedForGames: '',
  idDoc: undefined,
  option1: undefined,
  option2: undefined,
  createdAt: undefined,
});
const useUpdateWordsPortal = () => {
  const [updateWordsPortal, setUpdateWordsPortal] = useState(() =>
    getInitialValuesUpdateWordsPortal()
  );

  const setOpenUpdateWordsPortal = ({
    word1,
    word2,
    selectedForGames,
    option1,
    option2,
    idDoc,
    createdAt,
  }) =>
    setUpdateWordsPortal({
      word1,
      word2,
      selectedForGames,
      option1,
      option2,
      isOpen: true,
      idDoc,
      createdAt,
    });

  const setCloseUpdateWordsPortal = () =>
    setUpdateWordsPortal(() => getInitialValuesUpdateWordsPortal());

  const setWord1 = (newWord) =>
    setUpdateWordsPortal((prev) => ({ ...prev, word1: newWord }));

  const setWord2 = (newWord) =>
    setUpdateWordsPortal((prev) => ({ ...prev, word2: newWord }));

  const setSelectedForGames = () =>
    setUpdateWordsPortal((prev) => ({
      ...prev,
      selectedForGames: !prev.selectedForGames,
    }));

  const handleUpdateWordsPortalSubmit = async (listLength, setListOfWords) => {
    console.log('handleUpdateWords');
    try {
      const uid = getUid();

      const newPairOfLanguages = handlerSortAndStringOptions(
        updateWordsPortal.option1,
        updateWordsPortal.option2
      );

      const path = `${uid}/${newPairOfLanguages}/${updateWordsPortal.idDoc}`;
      const newData = {
        [updateWordsPortal.option1]: updateWordsPortal.word1,
        [updateWordsPortal.option2]: updateWordsPortal.word2,
        selectedForGames: updateWordsPortal.selectedForGames,
        createdAt: updateWordsPortal.createdAt,
      };

      await updateDocFunction(path, newData);

      handlerGetListAfterUpdateDelete(
        updateWordsPortal.option1,
        updateWordsPortal.option2,
        listLength,
        setListOfWords
      );
    } catch (err) {
      console.log(err);
    }
  };

  return {
    updateWordsPortal,
    setOpenUpdateWordsPortal,
    setCloseUpdateWordsPortal,
    setWord1,
    setWord2,
    setSelectedForGames,
    handleUpdateWordsPortalSubmit,
  };
};

export default useUpdateWordsPortal;
