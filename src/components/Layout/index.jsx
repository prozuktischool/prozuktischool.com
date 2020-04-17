import React from 'react';
import {Helmet} from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../views/styles/themes';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import GlobalStyle from '../../views/styles/GlobalStyles';
import { Text } from '../../views/components';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <Text variant="h1" textAlign="center">
            <Link to="/">{config.siteTitle}</Link>
          </Text>
          {children}
        </div>
      </ThemeProvider>
    );
  }
}
