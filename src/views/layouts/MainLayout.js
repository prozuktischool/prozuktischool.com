import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../views/styles/themes';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import GlobalStyle from '../../views/styles/GlobalStyles';
import { MainMenu, Text } from '../../views/components';

class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <MainMenu />
          {children}
        </div>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
