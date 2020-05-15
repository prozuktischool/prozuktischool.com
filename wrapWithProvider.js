import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/state/store';
import { getConfig } from './src/services/ConfigService';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  const initialState = {};
  const initialConfig = getConfig();
  initialState.config = initialConfig;

  const store = createStore(initialState);

  return <Provider store={store}>{element}</Provider>;
};
