const API_URL = 'http://localhost:5001/api/'
const options = { 
  method: null, 
  body: null, 
  mode: 'cors', 
  headers: new Headers({ 'Content-Type': 'application/json' })
}

const get = url => request(url, Object.assign({}, options, { method: 'GET' }))

const post = (url, obj) => {
  request(url, Object.assign({}, options, {
    method: 'POST', 
    body: JSON.stringify(obj) 
    })
  )
} 

const request = async (url, newOptions) => {
  const promise = await fetch(`${API_URL}${url}`, newOptions)
  const response = await promise.json()
  return response
}

const publicAPI = {
  get,
  post
}

export default publicAPI