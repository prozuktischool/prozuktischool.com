import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';
import SummaryCard from './SummaryCard';

import Hash from '../assets/icons/hash.svg';

const ColoredHash = styled(Hash)`
  position: relative;
  top: -2px;

  path {
    stroke: ${({ theme }) => theme.colors.primary3};
  }
`;

const TagList = ({ tags = [], showAllTagsButton = false }) => {
  return (
    <Flex mx={[0, -2]} flexWrap="wrap">
      {tags.map(
        (tag, index) =>
          index < 6 && (
            <Box key={tag.title} width={[1, 1 / 3]} px={3} py={3}>
              <Link to={`/tags/${kebabCase(tag.title)}/`}>
                <SummaryCard height={100}>
                  <ColoredHash />
                  {tag.title}
                </SummaryCard>
              </Link>
            </Box>
          )
      )}
      {tags.length > showAllTagsButton && (
        <Box p={3} width={1} display="block" textAlign="center">
          <Link to="/tags">
            <Button variant="primary">সকল ট্যাগ দেখুন</Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default TagList;
