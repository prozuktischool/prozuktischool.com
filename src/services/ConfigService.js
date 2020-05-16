export const setConfig = (data) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('config', JSON.stringify(data));
  }
};

export const getConfig = () => {
  if (typeof window !== 'undefined') {
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
