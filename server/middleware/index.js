import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import override from 'method-override'
import bodyParser from 'body-parser'
import config from '../config'

export default app => {
  if (config.env === 'development') {
    app.use(morgan('dev'))
  } else {
    app.use(compression())
  }

  app.use(cors())
  app.use(override())

  app.use(bodyParser.json({ limit: '10mb' }))
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

  app.use(express.static('./server/public'))
}
