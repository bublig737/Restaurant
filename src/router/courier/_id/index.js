import { Router } from 'express'
import get from './get'
import post from './post'
import remove from './delete'

import restaurant from './restaurant'


const router = Router({ mergeParams: true })

router.get('/', get)

router.post('/', post)

router.delete('/', remove)

router.use('/restaurant', restaurant)



export default router