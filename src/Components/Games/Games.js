// import { useEffect } from 'react';
// import useGamesOptions from '../../lib/hooks/useGamesOptions';
// import useListWordsGames from '../../lib/hooks/useListWordsGames';
// import useOptionsSelectFiltered from '../../lib/hooks/useOptionsSelectFiltered';
// import { ButtonStyled } from '../Buttons/Button.styles';
// import ButtonGoBack from '../Buttons/ButtonGoBack';
// import { SpinnerStyled } from '../Extras/Spinner.styles';
// import { Wrapper } from './Games.styles';
// import GamesChooseGameMenu from './GamesChooseGameMenu';
// import GamesLanguagesMenu from './GamesLanguagesMenu';
// import GamesWordsOptionsMenu from './GamesWordsOptionsMenu';

// const Games = () => {
//   console.log('Games');

//   const {
//     optionsSelect,
//     setOption1Select,
//     setOption2Select,
//     handlerGetOptionsSelect,
//   } = useOptionsSelectFiltered('gamesOpt');

//   useEffect(() => {
//     handlerGetOptionsSelect();
//   }, []);

//   const { gamesOptions, handlerFieldGameOptionsChanged } = useGamesOptions();

//   const { words, handlerGetWordsFilteredGames } = useListWordsGames();
//   useEffect(() => {
//     handlerGetWordsFilteredGames(
//       optionsSelect.option1,
//       optionsSelect.option2,
//       gamesOptions.selectedForGames
//     );
//   }, [
//     optionsSelect.option1,
//     optionsSelect.option2,
//     gamesOptions.selectedForGames,
//   ]);

//   console.log(words);

//   return (
//     <Wrapper>
//       <ButtonGoBack pathName="/home" />
//       {!gamesOptions.play && <h1>Games</h1>}
//       {!optionsSelect.allOptions.length &&
//         !optionsSelect.error &&
//         !gamesOptions.play && <SpinnerStyled />}

//       {optionsSelect.error && !gamesOptions.play && (
//         <h2>{optionsSelect.error}</h2>
//       )}
//       {optionsSelect.allOptions.length &&
//         !optionsSelect.error &&
//         !gamesOptions.play && (
//           <>
//             <GamesLanguagesMenu
//               optionsSelect={optionsSelect}
//               setOption1Select={setOption1Select}
//               setOption2Select={setOption2Select}
//             />
//             <GamesWordsOptionsMenu
//               handlerFieldGameOptionsChanged={handlerFieldGameOptionsChanged}
//             />
//             <GamesChooseGameMenu
//               gamesOptions={gamesOptions}
//               handlerFieldGameOptionsChanged={handlerFieldGameOptionsChanged}
//             />
//             {words.length > 2 ? (
//               <ButtonStyled
//                 onClick={() => handlerFieldGameOptionsChanged('play', true)}
//                 color="green"
//               >
//                 Play!
//               </ButtonStyled>
//             ) : (
//               'No words to play'
//             )}
//           </>
//         )}

//       {/* {gamesOptions.game === 'classic' && gamesOptions.play && (
//         <GameClassic words={words} setGamesOptions={setGamesOptions} />
//       )}
//       {gamesOptions.game === 'snake' && gamesOptions.play && (
//         <GameSnake words={words} setGamesOptions={setGamesOptions} />
//       )} */}
//     </Wrapper>
//   );
// };

// export default Games;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGamesOptions from '../../lib/hooks/useGamesOptions';
import useListWordsGames from '../../lib/hooks/useListWordsGames';
import useOptionsSelectFiltered from '../../lib/hooks/useOptionsSelectFiltered';
import { ButtonStyled } from '../Buttons/Button.styles';
import ButtonGoBack from '../Buttons/ButtonGoBack';
import { SpinnerStyled } from '../Extras/Spinner.styles';
import { Wrapper } from './Games.styles';
import GamesChooseGameMenu from './GamesChooseGameMenu';
import GamesLanguagesMenu from './GamesLanguagesMenu';
import GamesWordsOptionsMenu from './GamesWordsOptionsMenu';

const Games = () => {
  console.log('Games');

  const {
    optionsSelect,
    setOption1Select,
    setOption2Select,
    handlerGetOptionsSelect,
  } = useOptionsSelectFiltered('gamesOpt');

  useEffect(() => {
    handlerGetOptionsSelect();
  }, []);

  const { gamesOptions, handlerFieldGameOptionsChanged } = useGamesOptions();

  return (
    <Wrapper>
      <ButtonGoBack pathName="/home" />
      {!gamesOptions.play && <h1>Games</h1>}
      {!optionsSelect.allOptions.length &&
        !optionsSelect.error &&
        !gamesOptions.play && <SpinnerStyled />}

      {optionsSelect.error && !gamesOptions.play && (
        <h2>{optionsSelect.error}</h2>
      )}
      {optionsSelect.allOptions.length &&
        !optionsSelect.error &&
        !gamesOptions.play && (
          <>
            <GamesLanguagesMenu
              optionsSelect={optionsSelect}
              setOption1Select={setOption1Select}
              setOption2Select={setOption2Select}
            />
            <GamesWordsOptionsMenu
              handlerFieldGameOptionsChanged={handlerFieldGameOptionsChanged}
            />
            <GamesChooseGameMenu
              gamesOptions={gamesOptions}
              handlerFieldGameOptionsChanged={handlerFieldGameOptionsChanged}
            />
            <Link
              to={`${gamesOptions.game}/${optionsSelect.option1}/${optionsSelect.option2}/${gamesOptions.selectedForGames}`}
            >
              <ButtonStyled color="green">Play!</ButtonStyled>
            </Link>
          </>
        )}

      {/* {gamesOptions.game === 'classic' && gamesOptions.play && (
        <GameClassic words={words} setGamesOptions={setGamesOptions} />
      )}
      {gamesOptions.game === 'snake' && gamesOptions.play && (
        <GameSnake words={words} setGamesOptions={setGamesOptions} />
      )} */}
    </Wrapper>
  );
};

export default Games;
