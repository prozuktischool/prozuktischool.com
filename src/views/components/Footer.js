import React from 'react';
import styled, { withTheme } from 'styled-components';
import { convertNumbers } from 'bn-number-utils';
import Flex from './Flex';
import Text from './Text';

const MenuContainer = styled.div`
  margin: 32px 0 0 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.dark2};
  border-top: 1px solid ${({ theme }) => theme.colors.dark1};

  .home-url {
    display: inline-flex;

    .header-logo {
      width: 48px;
      height: 48px;
    }

    .site-title {
      line-height: 48px;
    }
  }

  ul {
    list-style: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    li {
      margin-right: 8px;

      a {
        display: inline-box;
        height: 100%;
        width: 100%;
      }

      .theme-toggle {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;

        svg {
          position: relative;
          top: 6px;
        }
      }

      &:last-child {
        margin-left: 4px;
        margin-right: 0;
        border-left: 1px solid ${({ theme }) => theme.colors.dark1};
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
        <Text textAlign="center" display="block" width="100%">
          লেখস্বত্ব &copy;{' '}
          {`${convertNumbers(2016)} - ${convertNumbers(
            new Date().getFullYear()
          )} `}
          <a href="https://prozuktischool.com/">প্রযুক্তি স্কুল</a>
        </Text>
      </Flex>
    </MenuContainer>
  );
};

export default withTheme(Footer);
