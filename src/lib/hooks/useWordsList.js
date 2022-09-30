import { useCallback, useRef, useState } from 'react';
import { getUid } from '../firebase/firebase-auth';
import { getWordsListDocsLimit } from '../firebase/firebase-firestore';
import { handlerSortAndStringOptions } from '../handlers/handlerSortAndStringOptions';

const useWordsList = () => {
  const [list, setList] = useState([]);

  const [moreWords, setMoreWords] = useState(0);

  const limit = 6;

  const lastItem = useRef(0);

  const handleGetMoreWords = useCallback(() => {
    setMoreWords((prev) => prev + 1);
  }, []);

  const handleGetListOfWords = async (option1, option2) => {
    const uid = getUid();
    //order options
    const optionsOrder = handlerSortAndStringOptions(option1, option2);

    try {
      const data = await getWordsListDocsLimit(
        `users/${uid}/${optionsOrder}`,
        option1,
        lastItem.current,
        limit
      );

      const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      if (lastItem.current === 0) setList(docs);
      else {
        setList((prev) => [...prev, ...docs]);
      }

      lastItem.current = data.docs[data.docs.length - 1];
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    list,
    setList,
    moreWords,
    setMoreWords,
    lastItem,
    handleGetMoreWords,
    handleGetListOfWords,
  };
};

export default useWordsList;
