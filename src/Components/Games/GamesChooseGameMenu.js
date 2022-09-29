import { SelectStyled } from '../Form/SelectStyled';

const GamesChooseGameMenu = ({
  gamesOptions,
  handlerFieldGameOptionsChanged,
}) => {
  return (
    <SelectStyled
      value={gamesOptions.game}
      onChange={(e) => handlerFieldGameOptionsChanged('game', e.target.value)}
    >
      <option value="classic">Classic</option>
      <option value="snake">Snake</option>
    </SelectStyled>
  );
};
export default GamesChooseGameMenu;
