import { aboutFirstParagraph } from './About.text';

export const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#2d3359' }}>About page</h1>
      <p style={{ textAlign: 'center' }}>{aboutFirstParagraph}</p>
    </div>
  );
};
