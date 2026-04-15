import express from 'express'
import { addProduct, getAllProduct } from '../controllers/product.js'

const router =express.Router()

router.get('/all',getAllProduct)
router.post('/add-product',addProduct)

export default router