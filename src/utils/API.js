import config from '../config';

const { API_URL, API_AUTH, API_TOKEN } = config.api;
// console.log({ API_URL, API_AUTH, API_TOKEN });
const getOptions = () => {
  const ACCESS_TOKEN =
    localStorage.getItem(API_TOKEN) &&
    localStorage.getItem(API_TOKEN) !== 'undefined'
      ? localStorage.getItem(API_TOKEN)
      : '';
  // console.log('ACCESS_TOKENasss', localStorage.getItem(API_TOKEN));
  return {
    method: null,
    body: null,
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
      'access-token': ACCESS_TOKEN,
    }),
  };
};

const request = async (url, newOptions, auth) => {
  // console.log({ url });
  // console.log({ API_AUTH });
  // console.log({ API_URL });
  try {
    const URL = auth ? `${API_AUTH}${url}` : `${API_URL}${url}`;
    const promise = await fetch(URL, newOptions);

    if (promise.statusText === 'Unauthorized') {
      return { success: false, data: 'User Unauthorized!' };
    }

    return promise.json();
  } catch (err) {
    if (!Object.keys(err).length) {
      // @todo - Conexion err and/or unit tests
      return err;
    }

    return err.json();
  }
};

export const get = (url) =>
  request(url, Object.assign({}, getOptions(), { method: 'GET' }));

export const post = (url, obj, auth = false) =>
  request(
    url,
    Object.assign({}, getOptions(), {
      method: 'POST',
      body: JSON.stringify(obj),
    }),
    auth,
  );

export const update = (url, obj, auth = false) =>
  request(
    url,
    Object.assign({}, getOptions(), {
      method: 'PUT',
      body: JSON.stringify(obj),
    }),
    auth,
  );

export const remove = (url) =>
  request(url, Object.assign({}, getOptions(), { method: 'DELETE' }));
