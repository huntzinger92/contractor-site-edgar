import { aboutParagraphs } from './About.text';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as styles from './About.styles';
import companyImage from './companyPhoto.jpg';

export const About = () => {
  return (
    <div>
      <Typography variant="h3">About Us</Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}
      >
        <img src={companyImage} style={{ maxHeight: '40vh' }} />
      </Box>
      {aboutParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
