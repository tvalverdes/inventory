import { Router } from 'express'
import { getProducts } from '../services/product'

const router = Router()

router.get('/', (_, res) => res.send(getProducts()))
router.post('/', (_, res) => res.send('Hello World!'))

export default router
