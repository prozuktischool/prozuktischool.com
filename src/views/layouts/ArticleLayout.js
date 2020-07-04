import React from 'react';
import { Box, BackToTopButton } from '../components';

const ArticleLayout = ({ children, ...props }) => (
  <Box maxWidth={960} margin="0 auto" p={{ xs: 3, sm: 4 }} {...props}>
    {children}
    <BackToTopButton />
  </Box>
);

export default ArticleLayout;
