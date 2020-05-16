import * as types from './types';
import { getConfig, setConfig } from '../../services/ConfigService';

export const toggleTheme = (theme) => {
  const config = getConfig();
  config.theme.name = theme;
  setConfig(config);

  return {
    type: types.TOGGLE_THEME,
    payload: config,
  };
};
