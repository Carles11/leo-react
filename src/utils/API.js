import config from '../config'

const { API_URL, API_AUTH, API_TOKEN } = config.api

const getOptions = () => {
  const ACCESS_TOKEN = localStorage.getItem(API_TOKEN) && localStorage.getItem(API_TOKEN) !== 'undefined'
  ? localStorage.getItem(API_TOKEN)
  : ''

  return {
    method: null, 
    body: null, 
    mode: 'cors', 
    headers: new Headers({ 
      'Content-Type': 'application/json',
      'access-token':  ACCESS_TOKEN
    })
  }
}

const request = async (url, newOptions, auth) => {
  try {
    const URL = auth ? `${API_AUTH}${url}` : `${API_URL}${url}`
    const promise = await fetch(URL, newOptions)

    if (promise.statusText === 'Unauthorized') {
      return { success: false, data: {} }
    }

    return promise.json()

  } catch (err) {
    return err.json()
  }
}

export const get = url => request(url, Object.assign({}, getOptions(), { method: 'GET' }))

export const post = (url, obj, auth = false) => request(
  url, 
  Object.assign({}, getOptions(), { method: 'POST', body: JSON.stringify(obj) }),
  auth
)
