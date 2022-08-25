import { Grid, IconProps } from '@mui/material';
import React, { ReactNode, ReactElement } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactElement<IconProps>;
};

const TextWIcon = ({ icon, children }: Props) => {
  return (
    <Grid item xs={4} display="block">
      <Grid item container alignItems="center" justifyContent="center">
        {icon}
      </Grid>
      <Grid item container alignItems="center" justifyContent="center">
        {children}
      </Grid>
    </Grid>
  );
};

export default TextWIcon;
