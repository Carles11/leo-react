import { Router } from 'express'
import * as ctrl from './schoolController'

const router = Router()

router
  .route('/')
  .get(ctrl.list)

router
  .route('/:schoolId')
  .put(ctrl.update)

router.param('schoolId', ctrl.schoolById)

export default router