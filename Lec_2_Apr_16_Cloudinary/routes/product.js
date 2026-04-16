import express from 'express'
import { addProduct, deleteProduct, getAllProduct } from '../controllers/product.js'

const router =express.Router()

router.get('/all',getAllProduct)
router.post('/add-product',addProduct)
router.delete('/:id',deleteProduct)

export default router