const API_URL = 'http://localhost:5001/api/'
const options = { 
  method: null, 
  body: null, 
  mode: 'cors', 
  headers: new Headers({ 'Content-Type': 'application/json' })
}

const get = url => request(url, Object.assign({}, options, { method: 'GET' }))

const post = (url, obj) => {
  const postRequest = request(url, Object.assign({}, options, {
    method: 'POST', 
    body: JSON.stringify(obj) 
    })
  )

  return postRequest
} 

const request = async (url, newOptions) => {
  const promise = await fetch(`${API_URL}${url}`, newOptions)
  return promise.json()
}

const publicAPI = {
  get,
  post
}

export default publicAPI