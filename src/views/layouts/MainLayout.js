import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import SiteConfig from '../../../data/SiteConfig';
import { Box, Footer, MainMenu } from '../components';
import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';
import '../styles/themes/material-oceanic.css';

const MainLayout = (props) => {
  const { children, theme, variant = '' } = props;

  return (
    <ThemeProvider theme={themes[theme.name]}>
      <GlobalStyle />
      <>
        <Helmet>
          <meta name="description" content={SiteConfig.siteDescription} />
        </Helmet>
        <MainMenu />
        <Box
          maxWidth={variant === 'fixed' ? 960 : '100%'}
          margin="0 auto"
          p={variant === 'fixed' ? { xs: 3, sm: 4 } : 0}
          minHeight="70vh"
        >
          {children}
        </Box>
        <Footer />
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ config }) => ({
  theme: config.theme,
});

export default connect(mapStateToProps)(MainLayout);
