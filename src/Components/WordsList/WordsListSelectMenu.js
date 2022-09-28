import { SelectStyled } from '../Form/SelectStyled';

const WordsListSelectMenu = ({
  optionsSelect,
  setOption1Select,
  setOption2Select,
  lastItem,
}) => {
  return (
    <form>
      <div>
        <SelectStyled
          value={optionsSelect.option1}
          onChange={(e) => {
            lastItem.current = 0;
            localStorage.setItem('wordsListOpt1', e.target.value);
            setOption1Select(e.target.value);
          }}
        >
          {optionsSelect.allOptions.map((language) => (
            <option key={`${language}1`} value={language}>
              {language.toUpperCase()}
            </option>
          ))}
        </SelectStyled>
      </div>

      <div>
        <SelectStyled
          value={optionsSelect.option2}
          onChange={(e) => {
            lastItem.current = 0;
            localStorage.setItem('wordsListOpt2', e.target.value);
            setOption2Select(e.target.value);
          }}
        >
          {optionsSelect.allOptions.map((language) => (
            <option key={`${language}2`} value={language}>
              {language.toUpperCase()}
            </option>
          ))}
        </SelectStyled>
      </div>
    </form>
  );
};

export default WordsListSelectMenu;
