import { useRef } from 'react';
import { handlerDeleteWords } from '../../lib/handlers/handlerDeleteWords';
import useObserver from '../../lib/hooks/useObserver';
import useUpdateWordsPortal from '../../lib/hooks/useUpdateWordsPortal';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import { SpinnerStyled } from '../Extras/Spinner.styles';
import Portal from '../Portals/Portal';
import {
  LetterTitle,
  NoSelectedText,
  SelectedText,
  Word,
  WrapperWords,
} from './List.styles';
import UpdateWordsPortal from './UpdateWordsPortal';

const List = ({
  list,
  option1,
  option2,
  handleGetMoreWords,
  lastItem,
  setList,
}) => {
  const letterTitle = useRef();
  const letterFlag = useRef(true);

  const refObserver = useObserver(handleGetMoreWords);

  const {
    updateWordsPortal,
    setOpenUpdateWordsPortal,
    setCloseUpdateWordsPortal,
    setWord1,
    setWord2,
    setSelectedForGames,
    handleUpdateWordsPortalSubmit,
  } = useUpdateWordsPortal();

  return (
    <>
      {list.map((el) => {
        if (!el[option1]) return null;
        if (el[option1][0].toUpperCase() !== letterTitle.current) {
          letterTitle.current = el[option1][0].toUpperCase();
          letterFlag.current = true;
        } else {
          letterFlag.current = false;
        }

        return (
          <div key={el.id}>
            {letterFlag.current && (
              <LetterTitle>{el[option1][0].toUpperCase()}</LetterTitle>
            )}
            <WrapperWords>
              <Word>{el[option1]}</Word>
              <Word>{el[option2]}</Word>

              {el.selectedForGames ? (
                <SelectedText>Selected</SelectedText>
              ) : (
                <NoSelectedText>Not selected</NoSelectedText>
              )}
              <ButtonStyled
                onClick={() => {
                  setOpenUpdateWordsPortal({
                    word1: el[option1],
                    word2: el[option2],
                    selectedForGames: el.selectedForGames,
                    option1: option1,
                    option2: option2,
                    idDoc: el.id,
                    createdAt: el.createdAt,
                  });
                }}
              >
                Modify / Select
              </ButtonStyled>
              <ButtonStyled
                onClick={() => {
                  handlerDeleteWords(
                    option1,
                    option2,
                    el.id,
                    list.length - 1,
                    setList
                  );
                }}
                color={THEME_STYLES.COLORS.RED}
              >
                Delete
              </ButtonStyled>
            </WrapperWords>
          </div>
        );
      })}
      <div ref={refObserver} style={{ height: 1 }}></div>
      {lastItem !== undefined && (
        <>
          <SpinnerStyled />
        </>
      )}
      <Portal isOpen={updateWordsPortal.isOpen}>
        <UpdateWordsPortal
          updateWordsPortal={updateWordsPortal}
          setWord1={setWord1}
          setWord2={setWord2}
          setCloseUpdateWordsPortal={setCloseUpdateWordsPortal}
          setSelectedForGames={setSelectedForGames}
          handleUpdateWordsPortalSubmit={() =>
            handleUpdateWordsPortalSubmit(list.length, setList)
          }
        />
      </Portal>
    </>
  );
};

export default List;
