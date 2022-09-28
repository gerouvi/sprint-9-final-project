import { LANGUAGES_OPTIONS } from '../../lib/constants/langaugesOptions';
import { handleAddWords } from '../../lib/handlers/handlerAddWords';
import useAddWords from '../../lib/hooks/useAddWords';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import ButtonGoBack from '../Buttons/ButtonGoBack';
import { InputStyled } from '../Form/InputStyled';
import { SelectStyled } from '../Form/SelectStyled';
import { Wrapper } from './AddWords.styles';

const AddWords = () => {
  console.log('Add words');

  const { addWords, handleFieldAddWordsChanged, handleResetFieldsAddWords } =
    useAddWords();
  return (
    <>
      <Wrapper>
        <ButtonGoBack pathName="/home" />
        <h1>AddWords</h1>;
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleAddWords(
              addWords.word1,
              addWords.word2,
              addWords.option1,
              addWords.option2,
              handleResetFieldsAddWords
            );
          }}
        >
          <SelectStyled
            value={addWords.option1}
            onChange={(e) => {
              handleFieldAddWordsChanged('option1', e.target.value);
              localStorage.setItem('addWordsOpt1', e.target.value);
            }}
          >
            {LANGUAGES_OPTIONS.map((language, index) => (
              <option key={index} value={language.name}>
                {language.name.toUpperCase()}
              </option>
            ))}
          </SelectStyled>
          <InputStyled
            value={addWords.word1}
            onChange={(e) =>
              handleFieldAddWordsChanged('word1', e.target.value)
            }
          />
          <SelectStyled
            value={addWords.option2}
            onChange={(e) => {
              handleFieldAddWordsChanged('option2', e.target.value);
              localStorage.setItem('addWordsOpt2', e.target.value);
            }}
          >
            {LANGUAGES_OPTIONS.map((language, index) => (
              <option key={index} value={language.name}>
                {language.name.toUpperCase()}
              </option>
            ))}
          </SelectStyled>
          <InputStyled
            value={addWords.word2}
            onChange={(e) =>
              handleFieldAddWordsChanged('word2', e.target.value)
            }
          />
          <ButtonStyled>Add Words</ButtonStyled>
          {(addWords.word1 || addWords.word2) && (
            <ButtonStyled
              onClick={() => handleResetFieldsAddWords()}
              color={THEME_STYLES.COLORS.RED}
            >
              Cancel
            </ButtonStyled>
          )}
        </form>
      </Wrapper>
    </>
  );
};

export default AddWords;
