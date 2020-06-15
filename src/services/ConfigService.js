import { isBrowser } from '../config';

export const setConfig = (data) => {
  if (isBrowser) {
    window.localStorage.setItem('config', JSON.stringify(data));
  }
};

export const getConfig = () => {
  if (isBrowser) {
    return (
      JSON.parse(window.localStorage.getItem('config')) || {
        theme: { name: 'dark' },
      }
    );
  }

  return {
    theme: { name: 'dark' },
  };
};
