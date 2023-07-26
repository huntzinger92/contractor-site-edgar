import { aboutParagraphs } from './About.text';
import Typography from '@mui/material/Typography';
import * as styles from './About.styles';

export const About = () => {
  return (
    <div>
      <Typography variant="h3">About page</Typography>
      {aboutParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
