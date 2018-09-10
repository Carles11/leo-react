require('babel-core/register')
require('babel-polyfill')

module.exports = {
  logging: false,
  db: {
    url: process.env.REACT_APP_MONGODB_URI,
  },
}