import { ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar/NavBar';
import { theme } from './constants/globalStyles';
import { ROUTES } from './constants/routes';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';
import { ResponsiveAppContainer } from './components/ResponsiveAppContainer/ResponsiveAppContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ResponsiveAppContainer>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
      </ResponsiveAppContainer>
    </ThemeProvider>
  );
}

export default App;
