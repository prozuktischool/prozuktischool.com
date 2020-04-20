import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Flex from './Flex';
import LogoLight from '../assets/images/logo-light.svg';
import LogoDark from '../assets/images/logo-dark.svg';

const MenuContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.dark2};
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.dark2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark1};

  .header-logo {
    width: 48px;
    height: 48px;
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

      &:last-child {
        margin-right: 0;
      }

      &::before,
      &::after {
        content: '';
      }
    }
  }
`;

const MainMenu = () => {
  return (
    <MenuContainer>
      <Flex
        maxWidth={960}
        margin="0 auto"
        justifyContent="space-between"
        pl={2}
        pr={2}
      >
        <Link to="/">
          <LogoDark className="header-logo" /> <span>প্রযুক্তি স্কুল</span>
        </Link>
        <ul>
          <li>
            <Link to="/">নীড়পাতা</Link>
          </li>
          <li>
            <Link to="/all-posts">লেখাসমূহ</Link>
          </li>
        </ul>
      </Flex>
    </MenuContainer>
  );
};

export default MainMenu;
