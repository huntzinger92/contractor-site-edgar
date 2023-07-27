import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { homeParagraphs } from './Home.text';
import * as styles from './Home.styles';
import companyImage from './companyPhoto.jpg';

export const Home = () => {
  return (
    <div>
      <Typography variant="h3">Company Name</Typography>
      <Box sx={styles.imageContainer}>
        <img src={companyImage} style={styles.image} />
      </Box>
      {homeParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
