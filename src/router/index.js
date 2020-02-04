  
import courier from './courier'
import customer from './customer'
import customerOrder from './customerOrder'
import restaurant from './restaurant'

import { Router } from 'express'

const router = Router()

router.use('/courier', courier)

router.use('/customer', customer)

router.use('/customerOrder', customerOrder)

router.use('/restaurant', restaurant)

export default router
