import React from 'react';
import ContentCutIcon from '@mui/icons-material/ContentCut';

type Props = {
  fontSize?: 'small' | 'inherit' | 'large' | 'medium' | undefined;
};

const CissorIcon = ({ fontSize = 'large' }: Props) => {
  return <ContentCutIcon fontSize={fontSize} />;
};

export default CissorIcon;
