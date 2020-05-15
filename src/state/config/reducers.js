import * as types from './types';

const initialState = {
  theme: {
    name: 'dark',
  },
};

const leadReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_THEME:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default leadReducers;
