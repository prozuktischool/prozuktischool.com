import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SummaryCard, Box, Flex } from '../../views/components';

import Hash from '../assets/icons/hash.svg';

const ColoredHash = styled(Hash)`
  position: relative;
  top: -2px;

  path {
    stroke: ${({ theme }) => theme.colors.primary3};
  }
`;

const TagList = ({ tags = [] }) => {
  return (
    <Flex mx={[0, -2]} flexWrap="wrap">
      {tags.map(
        (tag, index) =>
        index < 6 && (
          <Box key={tag.title} width={[1, 1 / 3]} px={3} py={3}>
            <Link to={`/tags/${kebabCase(tag.title)}/`}>
              <SummaryCard height={100}>
                <ColoredHash /> {tag.title}
              </SummaryCard>
            </Link>
          </Box>
        )
      )}
    </Flex>
  );
};

export default TagList;
