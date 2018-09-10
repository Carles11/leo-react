const config = {
  DEV: 'development',
  TEST: 'test',
  PROD: 'production',
  PORT: process.env.REACT_APP_PORT || 5001,
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.REACT_APP_JWT || 'just a token',
  },
  env: process.env.NODE_ENV || 'development',
}

let envConfig

try {
  if (config.env === 'test') {
    envConfig = require('./testing.js')
  } else {
    envConfig = require(`./${config.env}.js`)
  }
} catch (e) {
  envConfig = {}
}

module.exports = Object.assign({}, config, envConfig)