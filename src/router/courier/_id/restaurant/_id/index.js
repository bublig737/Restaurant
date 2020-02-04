import { Router } from 'express'
import get from './get'
import put from './put'
import remove from './delete'


const router = Router({ mergeParams: true })

router.get('/', get)

router.put('/', put)

router.delete('/', remove)


export default router