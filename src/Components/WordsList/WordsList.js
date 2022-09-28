// import { useCallback, useEffect, useRef, useState } from 'react';
// import { getUid } from '../../lib/firebase/firebase-auth';
// import { getWordsListDocsLimit } from '../../lib/firebase/firebase-firestore';
// import { handlerSortAndStringOptions } from '../../lib/handlers/handlerSortAndStringOptions';
// import useWordsListOptionsSelect from '../../lib/hooks/useWordsListOptionsSelect';
// import ButtonGoBack from '../Buttons/ButtonGoBack';
// import List from './List';
// import { Wrapper } from './WordsList.styles';
// import WordsListSelectMenu from './WordsListSelectMenu';

// const WordsList = () => {
//   const {
//     optionsSelect,
//     setOption1Select,
//     setOption2Select,
//     handlerGetOptionsSelect,
//   } = useWordsListOptionsSelect();

//   const [listOfWords, setListOfWords] = useState([]);

//   const [moreWords, setMoreWords] = useState(0);

//   const limit = 6;

//   const lastItem = useRef(0);

//   console.log(lastItem.current);

//   useEffect(() => {
//     handlerGetOptionsSelect();
//   }, []);

//   useEffect(() => {
//     if (optionsSelect.allOptions.length) {
//       handleGetListOfWords(
//         optionsSelect.option1,
//         optionsSelect.option2,
//         lastItem,
//         limit,
//         setListOfWords
//       );
//     }
//   }, [
//     optionsSelect.allOptions.length,
//     optionsSelect.option1,
//     optionsSelect.option2,
//     moreWords,
//   ]);

//   const moreWordsFunction = useCallback(() => {
//     setMoreWords((prev) => prev + 1);
//   }, []);

//   return (
//     <Wrapper>
//       <ButtonGoBack pathName="/home" />
//       <h1>Words List</h1>
//       {optionsSelect.error && <h2>Error</h2>}
//       {!optionsSelect.option1 && <h2>No Words</h2>}
//       {optionsSelect.option1 && (
//         <>
//           <WordsListSelectMenu
//             optionsSelect={optionsSelect}
//             setOption1Select={setOption1Select}
//             setOption2Select={setOption2Select}
//             lastItem={lastItem}
//           />
//           <List
//             list={listOfWords}
//             option1={optionsSelect.option1}
//             option2={optionsSelect.option2}
//             moreWordsFunction={moreWordsFunction}
//             lastItem={lastItem.current}
//             setListOfWords={setListOfWords}
//           />
//         </>
//       )}
//     </Wrapper>
//   );
// };

// const handleGetListOfWords = async (
//   option1,
//   option2,
//   lastItem,
//   limit,
//   setWords
// ) => {
//   const uid = getUid();
//   //order options
//   const optionsOrder = handlerSortAndStringOptions(option1, option2);

//   try {
//     const data = await getWordsListDocsLimit(
//       `users/${uid}/${optionsOrder}`,
//       option1,
//       lastItem.current,
//       limit
//     );

//     const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

//     if (lastItem.current === 0) setWords(docs);
//     else setWords((prev) => [...prev, ...docs]);

//     lastItem.current = data.docs[data.docs.length - 1];
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export default WordsList;

import { useCallback, useEffect, useRef, useState } from 'react';
import { getUid } from '../../lib/firebase/firebase-auth';
import { getWordsListDocsLimit } from '../../lib/firebase/firebase-firestore';
import { handlerSortAndStringOptions } from '../../lib/handlers/handlerSortAndStringOptions';
import useWordsList from '../../lib/hooks/useWordsList';
import useWordsListOptionsSelect from '../../lib/hooks/useWordsListOptionsSelect';
import ButtonGoBack from '../Buttons/ButtonGoBack';
import List from './List';
import { Wrapper } from './WordsList.styles';
import WordsListSelectMenu from './WordsListSelectMenu';

const WordsList = () => {
  const {
    optionsSelect,
    setOption1Select,
    setOption2Select,
    handlerGetOptionsSelect,
  } = useWordsListOptionsSelect();

  const {
    listOfWords,
    setListOfWords,
    moreWords,
    handleGetMoreWords,
    lastItem,
    handleGetListOfWords,
  } = useWordsList();

  useEffect(() => {
    handlerGetOptionsSelect();
  }, []);

  useEffect(() => {
    if (optionsSelect.allOptions.length) {
      handleGetListOfWords(optionsSelect.option1, optionsSelect.option2);
    }
  }, [
    optionsSelect.allOptions.length,
    optionsSelect.option1,
    optionsSelect.option2,
    moreWords,
  ]);

  return (
    <Wrapper>
      <ButtonGoBack pathName="/home" />
      <h1>Words List</h1>
      {optionsSelect.error && <h2>Error</h2>}
      {!optionsSelect.option1 && <h2>No Words</h2>}
      {optionsSelect.option1 && (
        <>
          <WordsListSelectMenu
            optionsSelect={optionsSelect}
            setOption1Select={setOption1Select}
            setOption2Select={setOption2Select}
            lastItem={lastItem}
          />
          <List
            list={listOfWords}
            option1={optionsSelect.option1}
            option2={optionsSelect.option2}
            handleGetMoreWords={handleGetMoreWords}
            lastItem={lastItem.current}
            setListOfWords={setListOfWords}
          />
        </>
      )}
    </Wrapper>
  );
};

export default WordsList;
