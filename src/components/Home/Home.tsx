import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { homeParagraphs } from './Home.text';
import * as styles from './Home.styles';
import companyImage from './companyPhoto.jpg';

export const Home = () => {
  return (
    <div>
      <Typography variant="h3">Company Name</Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}
      >
        <img src={companyImage} style={{ maxHeight: '40vh' }} />
      </Box>
      {homeParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
