import dotenv from 'dotenv'
dotenv.config()

const config = {
  DEV: 'development',
  TEST: 'test',
  PROD: 'production',
  PORT: process.env.PORT || 5000,
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.JWT,
  },
  env: process.env.NODE_ENV,
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