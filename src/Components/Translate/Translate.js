import { LANGUAGES_OPTIONS } from '../../lib/constants/langaugesOptions';
import { handleAddWords } from '../../lib/handlers/handlerAddWords';
import useTranslateWords from '../../lib/hooks/useTransalteWords';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { ButtonStyled } from '../Buttons/Button.styles';
import ButtonGoBack from '../Buttons/ButtonGoBack';
import { InputStyled } from '../Form/InputStyled';
import { SelectStyled } from '../Form/SelectStyled';
import { Wrapper } from './Translate.styles';

const Translate = () => {
  const {
    translateWords,
    handleFieldsTranslateWordsChanged,
    handleResetFieldsTranslate,
    translateWordsFetch,
  } = useTranslateWords();
  return (
    <>
      <Wrapper>
        <ButtonGoBack pathName="/home" />
        <h1>Translate</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!translateWords.word2) translateWordsFetch();
            else {
              handleAddWords(
                translateWords.word1,
                translateWords.word2,
                translateWords.option1,
                translateWords.option2,
                handleResetFieldsTranslate
              );
            }
          }}
        >
          <SelectStyled
            value={translateWords.option1}
            onChange={(e) => {
              handleFieldsTranslateWordsChanged('option1', e.target.value);
              localStorage.setItem('translateOpt1', e.target.value);
            }}
          >
            {LANGUAGES_OPTIONS.map((language, index) => (
              <option key={index} value={language.name}>
                {language.name.toUpperCase()}
              </option>
            ))}
          </SelectStyled>
          <InputStyled
            value={translateWords.word1}
            onChange={(e) =>
              handleFieldsTranslateWordsChanged('word1', e.target.value)
            }
          />
          <SelectStyled
            value={translateWords.option2}
            onChange={(e) => {
              handleFieldsTranslateWordsChanged('option2', e.target.value);
              localStorage.setItem('translateOpt2', e.target.value);
            }}
          >
            {LANGUAGES_OPTIONS.map((language, index) => (
              <option key={index} value={language.name}>
                {language.name.toUpperCase()}
              </option>
            ))}
          </SelectStyled>
          <InputStyled
            value={translateWords.word2}
            onChange={(e) =>
              handleFieldsTranslateWordsChanged('word2', e.target.value)
            }
          />
          <ButtonStyled>
            {translateWords.word2 ? 'Add Words' : 'Translate'}
          </ButtonStyled>
          {translateWords.word2 && (
            <ButtonStyled
              onClick={() => handleResetFieldsTranslate()}
              color={THEME_STYLES.COLORS.RED}
            >
              Cancel
            </ButtonStyled>
          )}
          <span>
            *sometimes the API does not translate well, if you do not like the
            translation, amend it and click on "Add Words".
          </span>
        </form>
      </Wrapper>
    </>
  );
};

export default Translate;
