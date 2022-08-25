import { Grid, Typography } from '@mui/material';
import React from 'react';
import CostumeButton from './common/CostumeButton';

const LandingPage = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: '#222831',
        boxShadow: '3px 3px 5px 3px rgb(0 0 0 ,0.8)',
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '80vh' }}
      >
        <Grid item xs={3}>
          <Typography variant="h3" gutterBottom>
            Keni&apos;s Barbershop
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <CostumeButton variant={'outlined'}> Book Now! </CostumeButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
