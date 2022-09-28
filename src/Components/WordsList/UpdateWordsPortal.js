import { ButtonStyled } from '../Buttons/Button.styles';
import { InputStyled } from '../Form/InputStyled';
import { Wrapper } from './UpdateWordsPortal.styles';

const UpdateWordsPortal = ({
  updateWordsPortal,
  setWord1,
  setWord2,
  setCloseUpdateWordsPortal,
  setSelectedForGames,
  handleUpdateWordsPortalSubmit,
}) => {
  return (
    <Wrapper>
      <InputStyled
        value={updateWordsPortal.word1}
        onChange={(e) => setWord1(e.target.value)}
      />

      <InputStyled
        value={updateWordsPortal.word2}
        onChange={(e) => setWord2(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={updateWordsPortal.selectedForGames}
          onChange={setSelectedForGames}
        />
        Select for games
      </label>
      <div>
        <ButtonStyled
          color="green"
          onClick={() => {
            handleUpdateWordsPortalSubmit();
            setCloseUpdateWordsPortal();
          }}
        >
          Modify
        </ButtonStyled>
        <ButtonStyled color="red" onClick={setCloseUpdateWordsPortal}>
          Cancel
        </ButtonStyled>
      </div>
    </Wrapper>
  );
};

export default UpdateWordsPortal;
