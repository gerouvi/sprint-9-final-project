import { SelectStyled } from '../Form/SelectStyled';

const GamesWordsOptionsMenu = ({ handlerFieldGameOptionsChanged }) => {
  return (
    <>
      <SelectStyled
        onChange={(e) => {
          if (e.target.value === 'All words') {
            handlerFieldGameOptionsChanged('selectedForGames', false);
          } else {
            handlerFieldGameOptionsChanged('selectedForGames', true);
          }
        }}
      >
        <option value="All words">All words</option>
        <option value="Selected for games">Select words</option>
      </SelectStyled>
    </>
  );
};

export default GamesWordsOptionsMenu;
