import Typography from '@mui/material/Typography';
import { homeParagraphs } from './Home.text';
import * as styles from './Home.styles';

export const Home = () => {
  return (
    <div>
      <Typography variant="h3">Home page</Typography>
      {homeParagraphs.map(paragraph => (
        <Typography key={paragraph} sx={styles.paragraphMargin}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
