import { Typography } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';
import React, { ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  className?: any;
  textAlign: 'center' | 'left' | 'right' | undefined;
}

const Item = ({ children, className, textAlign }: Props) => (
  <Typography textAlign={textAlign} className={className}>
    {children}
  </Typography>
);
export default Item;
