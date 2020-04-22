import React from 'react';
import Box from './Box';
import Text from './Text';

const SectionTitle = ({ title }) => {
  return (
    <Box mt={{ xs: 2, sm: 5 }}>
      <Text variant="h3" textAlign="center">
        {title}
      </Text>
    </Box>
  );
};

export default SectionTitle;
