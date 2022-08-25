import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Item from './common/Item';
import TextWIcon from './common/TextWIcon';
import CalendarIcon from './Icons/CalendarIcon';
import CissorIcon from './Icons/CissorIcon';
import HappyIcon from './Icons/HappyIcon';

const ChooseMe = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 9, background: '#364F6B' }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={10}
      >
        <Grid item xs={3}>
          <Typography variant="h3">Choose me because...</Typography>
        </Grid>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <TextWIcon icon={<HappyIcon />}>
            <Typography variant="h6">Friendly enviroment</Typography>
          </TextWIcon>
          <TextWIcon icon={<CalendarIcon />}>
            <Typography variant="h6">Fast and easy reservation</Typography>
          </TextWIcon>
          <TextWIcon icon={<CissorIcon />}>
            <Typography variant="h6">professional, precise work</Typography>
          </TextWIcon>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChooseMe;
