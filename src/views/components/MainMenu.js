import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { configActions } from '../../state/config';
import Flex from './Flex';
import LogoDark from '../assets/images/logo-dark.svg';
import LogoLight from '../assets/images/logo-light.svg';
import Sun from '../assets/icons/sun.svg';
import Moon from '../assets/icons/moon.svg';

const MenuContainer = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: -1px;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.dark2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark1};

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

const MainMenu = ({ theme, toggleTheme }) => {
  return (
    <MenuContainer>
      <Flex
        maxWidth={960}
        margin="0 auto"
        justifyContent="space-between"
        pl={3}
        pr={3}
      >
        <Link to="/" className="home-url">
          {theme.name === 'dark' ? (
            <LogoDark className="header-logo" />
          ) : (
            <LogoLight className="header-logo" />
          )}
          <span className="site-title">প্রযুক্তি স্কুল</span>
        </Link>
        <ul>
          <li>
            <Link to="/">নীড়পাতা</Link>
          </li>
          <li>
            <Link to="/posts">লেখাসমূহ</Link>
          </li>
          <li>
            <button
              className="theme-toggle"
              type="button"
              title={theme.name === 'dark' ? 'Toggle Light' : 'Toggle Dark'}
              onClick={() => {
                toggleTheme(theme.name === 'dark' ? 'light' : 'dark');
              }}
            >
              {theme.name === 'dark' ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </Flex>
    </MenuContainer>
  );
};

const mapStateToProps = ({ config }) => ({
  theme: config.theme,
});

const mapActionToProps = {
  toggleTheme: configActions.toggleTheme,
};

export default connect(mapStateToProps, mapActionToProps)(MainMenu);
