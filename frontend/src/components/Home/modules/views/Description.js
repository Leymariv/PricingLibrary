import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Layout from './Layout';
// import backgroundImage from '../../../../../static/images/background.PNG';

// const backgroundImage = "http://media.getty.edu/museum/images/web/download/14333601.jpg"
const backgroundImage = '../../../../../static/images/background.jpg';

export default function ProductHero() {
  return (
    <Layout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
          La Squad Du Kiff
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Welcome to the project hub of La Squad Du Kiff. Enjoy your visit :)
      </Typography>
    </Layout>
  );
}
