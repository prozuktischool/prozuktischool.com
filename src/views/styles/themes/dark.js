import colors from './colors';

const breakpoints = ['576px', '768px', '992px', '1200px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  name: 'dark',
  typography: {
    fontFamily: '"Kalpurush", "PT Serif", sans-serif',
    fontSize: '20px',
    lineHeight: 1.65,
    fontWeight: '400',
    h1: {
      fontSize: '2.488rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.074rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.728rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.44rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.2rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.833rem',
      lineHeight: 1.65,
      fontWeight: 400,
    },
  },
  colors: {
    ...colors,
    text: colors.light2,
    background: colors.dark2,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints,
};
