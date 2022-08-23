import React, { ReactElement } from 'react';
import CostumeButton from './common/CostumeButton';
import KeniBarberShopIcon from './Icons/KeniBarberShopIcon';

import { Grid, Typography, Link } from '@mui/material';
import { ROUTEING } from '../routeing';
import { Route } from '../types/types';

const NavBar = () => {
  const renderButtons = ROUTEING.map(
    (el: Route): ReactElement => (
      <CostumeButton variant="outlined" key={el.page} className={{ m: 2 }}>
        <Link href={el.href}>{el.page}</Link>
      </CostumeButton>
    )
  );

  const renderTitleWithIcon = (
    <Typography variant="h6" gutterBottom color="red" sx={{ m: 2 }}>
      <KeniBarberShopIcon /> Kenin&apos;s Barbershop
    </Typography>
  );

  return (
    <Grid container spacing={2} sx={{ gridArea: 'header', bgcolor: '#232228' }}>
      <Grid item xs={8} alignItems="center">
        {renderTitleWithIcon}
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end">
        {renderButtons}
      </Grid>
    </Grid>
  );
};

export default NavBar;
