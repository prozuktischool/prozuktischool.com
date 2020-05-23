import React from 'react';
import { Link } from 'gatsby';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <Flex display="flex" justifyContent="center" mt={4} p={{ xs: 3, sm: 2 }}>
      <Box mr={3}>
        {previousPagePath && (
          <Link to={previousPagePath}>
            <Button variant="primary">⯇ নতুন লেখা</Button>
          </Link>
        )}
      </Box>

      <Box>
        {nextPagePath && (
          <Link to={nextPagePath}>
            <Button variant="primary">আগের লেখা ⯈</Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default Pager;
