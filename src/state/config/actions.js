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

//
// export const updateLead = (id, data) => ({
//   type: types.UPDATE_LEAD,
//   meta: {
//     async: true,
//     blocking: true,
//     path: `/leads/${id}`,
//     method: "PUT",
//     body: data
//   }
// });
//
// export const completeLead = (id, data) => ({
//   type: types.COMPLETE_LEAD,
//   meta: {
//     async: true,
//     blocking: true,
//     path: `/leads/${id}/complete`,
//     method: "PUT",
//     body: data
//   }
// });
