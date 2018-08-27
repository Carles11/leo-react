import config from '../config'

const { API_URL, API_AUTH, API_TOKEN } = config.api
const ACCESS_TOKEN = localStorage.getItem(API_TOKEN) && localStorage.getItem(API_TOKEN) !== 'undefined'
  ? localStorage.getItem(API_TOKEN)
  : ''

const options = { 
  method: null, 
  body: null, 
  mode: 'cors', 
  headers: new Headers({ 
    'Content-Type': 'application/json',
    'access-token':  ACCESS_TOKEN
  })
}

const get = url => request(url, Object.assign({}, options, { method: 'GET' }))

const post = (url, obj, auth = false) => {
  const body = JSON.stringify(obj)
  const postRequest = request(
    url, 
    Object.assign({}, options, { method: 'POST', body }),
    auth
  )

  return postRequest
} 

const request = async (url, newOptions, auth) => {
  try {
    const URL = auth ? `${API_AUTH}${url}` : `${API_URL}${url}`
    const promise = await fetch(URL, newOptions)
    return promise
    
  } catch (err) {
    return err
  }
}

const publicAPI = {
  get,
  post
}

export default publicAPI