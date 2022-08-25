import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

type Props = {
  fontSize?: 'small' | 'inherit' | 'large' | 'medium' | undefined;
};

const HappyIcon = ({ fontSize = 'large' }: Props) => {
  return <EmojiEmotionsIcon fontSize={fontSize} />;
};

export default HappyIcon;
