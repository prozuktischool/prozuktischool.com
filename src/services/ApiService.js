import fetch from '../utils/axios';
import { api } from '../config';

function handleErrors(err, action, next) {
  next({
    type: `${action.type}_failed`,
    payload: err,
    meta: action.meta,
  });

  return err;
}

function handleResponse(res, action, next) {
  next({
    type: `${action.type}_done`,
    payload: res,
    meta: action.meta,
  });

  return res;
}

const apiService = () => (next) => async (action) => {
  const result = next(action);
  if (!action.meta || !action.meta.async) {
    return result;
  }

  const { path, method = 'GET', body, type } = action.meta;

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`);
  }

  const url = `${api}${path}`;

  return fetch({ url, method, body, type })
    .then((res) => handleResponse(res, action, next))
    .catch((error) => {
      if (error.response) {
        return handleErrors(error.response.data, action, next);
      }
      if (error.request) {
        return handleErrors(error.request, action, next);
      }
      return handleErrors(error.message, action, next);
    });
};

export default apiService;
