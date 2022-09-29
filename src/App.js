import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MobileFrame from './Components/MobileFrame/MobileFrame';
import { ThemeProvider } from 'styled-components';
import { THEME_STYLES } from './styles/THEME_STYLES';
import GlobalStyles from './styles/GlobalStyles';
import Home from './Components/Home/Home';
import Translate from './Components/Translate/Translate';
import AddWords from './Components/AddWords/AddWords';
import WordsList from './Components/WordsList/WordsList';
import Account from './Components/Account/Account';
import Games from './Components/Games/Games';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Wrappers from './Components/Wrappers/Wrappers';
import GameClassic from './Components/Games/GameClassic/GameClassic';
import GameSnake from './Components/Games/GameSnake/GameSnake';

function App() {
  return (
    <ThemeProvider theme={THEME_STYLES}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileFrame />} />
          <Route
            path="/home"
            element={
              <Wrappers navMobile="true">
                <Home />
              </Wrappers>
            }
          />
          <Route
            path="/translate"
            element={
              <Wrappers>
                <Translate />
              </Wrappers>
            }
          />
          <Route
            path="/addwords"
            element={
              <Wrappers>
                <AddWords />
              </Wrappers>
            }
          />
          <Route
            path="/wordslist"
            element={
              <Wrappers>
                <WordsList />
              </Wrappers>
            }
          />
          <Route
            path="/games"
            element={
              <Wrappers>
                <Games />
              </Wrappers>
            }
          />
          <Route
            path="/account"
            element={
              <Wrappers>
                <Account />
              </Wrappers>
            }
          />
          <Route
            path="/signin"
            element={
              <Wrappers>
                <SignIn />
              </Wrappers>
            }
          />
          <Route
            path="/signup"
            element={
              <Wrappers>
                <SignUp />
              </Wrappers>
            }
          />
          <Route
            path="games/classic/:option1/:option2/:selectedForGames"
            element={
              <Wrappers>
                <GameClassic />
              </Wrappers>
            }
          />
          <Route
            path="games/snake/:option1/:option2/:selectedForGames"
            element={
              <Wrappers>
                <GameSnake />
              </Wrappers>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
