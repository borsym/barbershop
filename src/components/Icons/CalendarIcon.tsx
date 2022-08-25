import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type Props = {
  fontSize?: 'small' | 'inherit' | 'large' | 'medium' | undefined;
};

const CalendarIcon = ({ fontSize = 'large' }: Props) => {
  return <CalendarMonthIcon fontSize={fontSize} />;
};

export default CalendarIcon;
