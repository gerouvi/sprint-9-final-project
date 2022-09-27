import { LANGUAGES_OPTIONS } from '../constants/langaugesOptions';

const { useState } = require('react');

const getInitialValuesTranslateWords = () => ({
  option1: localStorage.getItem('translateOpt1') || 'english',
  word1: '',
  option2: localStorage.getItem('translateOpt2') || 'spanish',
  word2: '',
  error: undefined,
  correct: undefined,
});

const useTranslateWords = () => {
  const [translateWords, setTranslateWords] = useState(() =>
    getInitialValuesTranslateWords()
  );

  const handleFieldsTranslateWordsChanged = (key, value) => {
    setTranslateWords((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFieldsTranslate = () => {
    setTranslateWords(getInitialValuesTranslateWords());
  };

  const wordsSubmit = async () => {
    const codeOpt1 = LANGUAGES_OPTIONS.filter(
      (language) => language.name === translateWords.option1
    )[0].code;

    const codeOpt2 = LANGUAGES_OPTIONS.filter(
      (language) => language.name === translateWords.option2
    )[0].code;

    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${translateWords.word1}e&langpair=${codeOpt1}|${codeOpt2}`
      );
      const data = await res.json();

      console.log(data);

      setTranslateWords((prev) => ({
        ...prev,
        word2: data.responseData.translatedText,
      }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    translateWords,
    handleFieldsTranslateWordsChanged,
    handleResetFieldsTranslate,
    wordsSubmit,
  };
};

export default useTranslateWords;
