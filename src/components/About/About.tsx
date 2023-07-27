import { aboutParagraphs } from './About.text';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as styles from './About.styles';
import companyImage from './companyPhoto.jpg';

export const About = () => {
  return (
    <div>
      <Typography variant="h3">About Us</Typography>
      <Box sx={styles.imageContainer}>
        <img src={companyImage} style={styles.image} />
      </Box>
      {aboutParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
