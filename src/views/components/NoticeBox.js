import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const NoticeBox = ({ children, variant }) => {
  return (
    <Box className={`notice-box ${variant}`} p={3} my={5}>
      {children}
    </Box>
  );
};

export default NoticeBox;
