import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../config'
import User from '../api/user/userModel'

const checkToken = expressJwt({ secret: config.secrets.jwt })

export const decodeToken = () => (req, res, next) => {
  if (req.headers && req.headers['access-token']) {
    req.headers.authorization = `Bearer ${req.headers['access-token']}`
  }

  checkToken(req, res, next)
}

export const getFreshUser = () => (req, res, next) => {
  User.findById(req.user._id)
    .then(user => {
      if (!user) {
        return errorHandler({ name: 'UnauthorizedError' }, res)
      } else {
        req.user = user
        next()
      }
    }, err => {
      next(err)
    })
}


export const verifyUser = () => (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  // if no username or password then send
  if (!username || !password) {
    return res.status(400).send('You need a username and password')
  }

  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(401).send('No user with the given username')
      }

      if (!user.authenticate(password)) {
        return res.status(401).send('Wrong password')
      }

      req.user = user
      return next()
    }, err => next(err))
  return false
}

export const signToken = (id) =>
  jwt.sign(
    { _id: id },
    config.secrets.jwt,
    { expiresIn: config.expireTime },
  )