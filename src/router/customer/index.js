import { Router } from 'express'
import get from './get'
import put from './put'
import _id from './_id'

const router = Router()

router.get('/', get)

router.put('/', put)

router.use('/:customerId', _id)

export default router