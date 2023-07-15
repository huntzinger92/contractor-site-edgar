import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ROUTES } from '../../constants/routes';
import * as styles from './NavBar.styles';

export interface IBigNavBarProps {
  handleNavItemClick: (pathname: string) => void;
  pages: { navText: string; route: string }[];
}

export const BigNavBar = ({ handleNavItemClick, pages }: IBigNavBarProps) => {
  return (
    <Box sx={styles.bigNavBarContainer}>
      <Box sx={styles.mediumLogoContainer}>
        <Button
          href={ROUTES.HOME}
          sx={styles.mediumAppBarButtons}
          variant="contained"
        >
          LOGO
        </Button>
      </Box>
      <Box
        sx={styles.mediumNavBarButtonsContainer}
        data-testid="full-nav-links"
      >
        {pages.map(({ navText, route }) => (
          <Button
            key={navText}
            onClick={() => handleNavItemClick(route)}
            sx={styles.mediumAppBarButtons}
            variant="contained"
          >
            {navText}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
