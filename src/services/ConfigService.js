export const setConfig = (data) => {
  window.localStorage.setItem('config', JSON.stringify(data));
};

export const getConfig = () => {
  return (
    JSON.parse(window.localStorage.getItem('config')) || {
      theme: { name: 'dark' },
    }
  );
};
