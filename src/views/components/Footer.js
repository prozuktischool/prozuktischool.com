import React from 'react';
import styled, { withTheme } from 'styled-components';
import { convertNumbers } from 'bn-number-utils';
import { Link } from 'gatsby';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

const MenuContainer = styled.div`
  margin: 64px 0 0 0;
  padding: 32px 0 0 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.dark2};
  border-top: 1px solid ${({ theme }) => theme.colors.dark1};

  ul.mini-site-map {
    display: inline-flex;
    max-width: 700px;
    margin: auto;
    padding: 32px;

    li {
      padding: 4px 8px 0 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dark1};
      border-top: 1px solid ${({ theme }) => theme.colors.dark1};
      border-right: 1px dashed ${({ theme }) => theme.colors.dark1};
      border-left: 1px dashed ${({ theme }) => theme.colors.dark1};

      &:nth-child(2n) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.dark1};
        border-top: 1px solid ${({ theme }) => theme.colors.dark1};
        position: relative;
        top: 22px;
      }

      &:first-child {
        border-left: none;
      }

      &:last-child {
        border-right: none;
        border-left: 1px dashed ${({ theme }) => theme.colors.dark1};
      }

      &::before,
      &::after {
        content: '';
      }
    }
  }
`;

const Footer = ({ theme }) => {
  return (
    <MenuContainer>
      <Flex
        maxWidth={960}
        margin="0 auto"
        justifyContent="space-between"
        pl={3}
        pr={3}
      >
        <ul className="mini-site-map">
          <li>
            <Link to="/about">পরিচিতি</Link>
          </li>
          <li>
            <Link to="/contact">যোগাযোগ</Link>
          </li>
          <li>
            <Link to="/contribution-guide">নির্দেশনা</Link>
          </li>
        </ul>
      </Flex>
      <Flex
        maxWidth={960}
        margin="0 auto"
        justifyContent="space-between"
        pl={3}
        pr={3}
        flexWrap="wrap"
      >
        <Box width={1}>
          <Text textAlign="center" variant="caption" mb={0}>
            এই প্রজেক্টের সম্পূর্ণ সোর্স কোড পাবেন আমাদের{' '}
            <a
              href="https://github.com/bdTechies/prozuktischool.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              গিটহাব রিপোজিটরিতে
            </a>
            ।
          </Text>
        </Box>
        <Box width={1}>
          <Text textAlign="center" variant="caption" mt={1}>
            লেখস্বত্ব &copy;{' '}
            {`${convertNumbers(2016)} - ${convertNumbers(
              new Date().getFullYear()
            )} `}
            <a href="https://prozuktischool.com/">প্রযুক্তি স্কুল</a>
          </Text>
        </Box>
      </Flex>
    </MenuContainer>
  );
};

export default withTheme(Footer);
