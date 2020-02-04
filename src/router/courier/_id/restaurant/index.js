import { Router } from 'express'
import get from './get'
import _id from './_id'

const router = Router({ mergeParams: true })

router.get('/', get)

router.use('/:restaurantId', _id)

export default router