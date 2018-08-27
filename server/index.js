import express from 'express'
import colors from 'colors/safe'

import config from './config'
import mongoose from './config/mongoose'
import middleware from './middleware'
import api from './api'
import auth from './auth/routes'

const { PORT, env } = config
const app = express()

mongoose()
middleware(app)

app.use('/api', api)
app.use('/auth', auth)
app.use('/*', (req, res) => res.status(401).send('This is a private API'))

app.listen(PORT, () => console.log(`Listening on port ${colors.rainbow(PORT)} in ${colors.rainbow(env)}`))