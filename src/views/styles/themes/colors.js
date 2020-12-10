import languageColors from '../languageColors.json';

languageColors.React = '#61DAFB';
languageColors.AWS = '#EC7211';

const colors = {
  primary3: '#7950F2',
  primary2: '#845EF7',
  primary1: '#9775FA',
  dark2: '#1c1826',
  dark1: '#272135',
  light2: '#f8f9fa',
  light1: '#E2E4E5',
  error: '#FA5252',
  success: '#51CF66',
  warning: '#FFD43B',
  ...languageColors,
};

export default colors;
