import mongoose from 'mongoose'
import config from './index'

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect(config.db.url, { useNewUrlParser: true })

  const db = mongoose.connection

  if (config.env !== 'test') {
    /* eslint-disable no-console */
    db.on('connected', () => console.log('[  DB connected.  ]'))
    db.on('error', err => console.error(err))
    db.on('disconnected', () => console.log('[  DB connected.  ]'))
    /* eslint-enable no-console */
  }
}