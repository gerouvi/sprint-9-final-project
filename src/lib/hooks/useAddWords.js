import { useState } from 'react';

const getInitialValuesTranslateWords = () => ({
  option1: localStorage.getItem('addWordsOpt1') || 'english',
  word1: '',
  option2: localStorage.getItem('addWordsOpt2') || 'spanish',
  word2: '',
  error: undefined,
  correct: undefined,
});

const useAddWords = () => {
  const [addWords, setAddWords] = useState(() =>
    getInitialValuesTranslateWords()
  );

  const handleFieldAddWordsChanged = (key, value) => {
    setAddWords((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFieldsAddWords = () => {
    setAddWords(getInitialValuesTranslateWords());
  };

  return {
    addWords,
    handleFieldAddWordsChanged,
    handleResetFieldsAddWords,
  };
};

export default useAddWords;
