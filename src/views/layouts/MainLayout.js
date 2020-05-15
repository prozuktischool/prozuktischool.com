import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import SiteConfig from '../../../data/SiteConfig';
import { Footer, MainMenu } from '../components';
import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';

const MainLayout = (props) => {
  const { children, theme } = props;

  return (
    <ThemeProvider theme={themes[theme.name]}>
      <GlobalStyle />
      <>
        <Helmet>
          <meta name="description" content={SiteConfig.siteDescription} />
        </Helmet>
        <MainMenu />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ config }) => ({
  theme: config.theme,
});

export default connect(mapStateToProps)(MainLayout);
