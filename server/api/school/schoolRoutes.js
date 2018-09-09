import { Router } from 'express'
import * as ctrl from './schoolController'
import * as auth from '../../auth'

const checkUser = [auth.decodeToken(), auth.getFreshUser()]

const router = Router()

router
  .route('/')
  .get(checkUser, ctrl.list)
  .post(ctrl.create)

router
  .route('/:schoolId')
  .put(checkUser, ctrl.update)

router.param('schoolId', ctrl.schoolById)

export default router