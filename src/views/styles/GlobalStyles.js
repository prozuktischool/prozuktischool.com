import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* fira-code-regular - latin */
  @font-face {
    font-family: 'Kalpurush';
    font-style: normal;
    font-weight: 400;
    src: local(''),
         url('./assets/fonts/kalpurush.woff2') format('woff2'),
         url('./assets/fonts/kalpurush.woff') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Kalpurush', 'PT Serif', serif;
    font-size: 20px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }
  p {
    line-height: 1.65;
    font-size: 1rem;
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary3};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
    line-height: 1.65;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary3};
  }
  h1 {
    font-size: 2.488rem;
  }
  h2 {
    font-size: 2.074rem;
  }
  h3 {
    font-size: 1.728rem;
  }
  h4 {
    font-size: 1.44rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1rem;
  }
  
  pre {
    border-radius: 8px;
  }
`;

export default GlobalStyle;
