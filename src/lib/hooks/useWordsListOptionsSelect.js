import { useState } from 'react';
import { errorString } from '../Extras/errorString';
import { getUid } from '../firebase/firebase-auth';
import { getDocFunction } from '../firebase/firebase-firestore';

const useWordsListOptionsSelect = () => {
  const [optionsSelect, setOptionsSelect] = useState({
    allOptions: [],
    option1: localStorage.getItem('wordsListOpt1') || undefined,
    option2: localStorage.getItem('wordsListOpt2') || undefined,
    error: null,
  });

  const setAllOptionsSelect = (allOptions, option1, option2) =>
    setOptionsSelect((prev) => ({ ...prev, allOptions, option1, option2 }));

  const setOption1Select = (option1) =>
    setOptionsSelect((prev) => ({ ...prev, option1 }));
  const setOption2Select = (option2) =>
    setOptionsSelect((prev) => ({ ...prev, option2 }));

  const setErrorSelect = (error) =>
    setOption1Select((prev) => ({ ...prev, error }));

  const handlerGetOptionsSelect = async () => {
    const uid = getUid();

    try {
      const doc = await getDocFunction(uid);

      const options = [];

      doc.data().languagesResum.forEach((el) => {
        const split = el.split('-');
        options.push(split[0]);
        options.push(split[1]);
      });

      const optionsFiltered = options.filter((el, index) => {
        return options.indexOf(el) === index;
      });

      optionsFiltered.sort();

      const option1LocalStorage = localStorage.getItem('wordsListOpt1');
      const option2LocalStorage = localStorage.getItem('wordsListOpt2');

      setAllOptionsSelect(
        optionsFiltered,
        option1LocalStorage || optionsFiltered[0],
        option2LocalStorage || optionsFiltered[1]
      );
    } catch (err) {
      console.log(err.message);
      const strError = errorString(err.message);
      setErrorSelect(strError);
    }
  };

  return {
    optionsSelect,
    setAllOptionsSelect,
    setOption1Select,
    setOption2Select,
    handlerGetOptionsSelect,
  };
};

export default useWordsListOptionsSelect;
