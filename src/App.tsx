import { ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar/NavBar';
import { theme } from './constants/globalStyles';
import { ROUTES } from './constants/routes';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
