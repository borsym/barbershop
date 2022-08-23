import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

interface Props {
  children?: ReactNode;
  className?: any;
  variant: 'text' | 'outlined' | 'contained' | undefined;
}

const CostumeButton = ({ children, className, variant }: Props) => {
  return (
    <Button variant={variant} sx={className}>
      {children}
    </Button>
  );
};

export default CostumeButton;
