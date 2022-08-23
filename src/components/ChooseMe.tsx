import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Item from './common/Item';

const ChooseMe = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Typography>cica</Typography>
        </Grid>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          {[1, 2, 3].map((k) => (
            <Grid item xs={4} key={k}>
              <Item textAlign="center">three icon</Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChooseMe;
