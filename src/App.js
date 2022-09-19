import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MobileFrame from './Components/MobileFrame/MobileFrame';
import { ThemeProvider } from 'styled-components';
import { THEME_STYLES } from './styles/THEME_STYLES';
import GlobalStyles from './styles/GlobalStyles';
import WrapperPage from './Components/WrapperPage/WrapperPage';

function App() {
  return (
    <ThemeProvider theme={THEME_STYLES}>
      <GlobalStyles />
      <BrowserRouter>
        <WrapperPage></WrapperPage>
        <Routes>
          <Route path="/" element={<MobileFrame />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
