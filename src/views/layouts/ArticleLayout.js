import React from 'react';
import { Box, ScrollToTopButton } from '../components';

const ArticleLayout = ({ children, ...props }) => (
  <Box maxWidth={960} margin="0 auto" p={{ xs: 3, sm: 4 }} {...props}>
    {children}
    <ScrollToTopButton />
  </Box>
);

export default ArticleLayout;
