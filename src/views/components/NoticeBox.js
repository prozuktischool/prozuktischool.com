import React from 'react';
import Box from './Box';

const NoticeBox = ({ children, variant }) => {
  return <Box className={`notice-box ${variant}`}>{children}</Box>;
};

export default NoticeBox;
