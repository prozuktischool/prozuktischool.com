import axios from 'axios';

function parseStatus(status, res) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then((response) => resolve(response));
    } else {
      res.then((response) => {
        return reject({ status, message: response });
      });
    }
  });
}

function requestHeaders(token, type) {
  if (type && type === 'multipart') {
    return {
      Authorization: token ? `${token}` : '',
    };
  }

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token ? `${token}` : '',
  };
}

async function getJSON(response) {
  if (response.status === 204) return '';

  try {
    const data = await response.data; // Parse it as text
    return data;
  } catch (err) {
    return err;
  }
}

const fetch = async ({ url, method, body, type, token }) => {
  const options = {
    method,
    headers: requestHeaders(token, type),
    data:
      method !== 'GET'
        ? type !== 'multipart'
          ? JSON.stringify(body)
          : body
        : null,
  };
  const res = await axios(url, options);
  return parseStatus(res.status, getJSON(res));
};

export default fetch;
