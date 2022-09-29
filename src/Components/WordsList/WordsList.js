import { useEffect } from 'react';

import useOptionsSelectFiltered from '../../lib/hooks/useOptionsSelectFiltered';
import useWordsList from '../../lib/hooks/useWordsList';

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
  } = useOptionsSelectFiltered('wordsListOpt');

  const {
    list,
    setList,
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
            list={list}
            option1={optionsSelect.option1}
            option2={optionsSelect.option2}
            handleGetMoreWords={handleGetMoreWords}
            lastItem={lastItem.current}
            setList={setList}
          />
        </>
      )}
    </Wrapper>
  );
};

export default WordsList;
