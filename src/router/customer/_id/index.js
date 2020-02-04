import { Router } from 'express'
import get from './get'
import post from './post'
import remove from './delete'


const router = Router({ mergeParams: true })

router.get('/', get)

router.post('/', post)

router.delete('/', remove)


export default router