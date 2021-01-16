import { Router } from 'express'

import * as productController from '../controllers/products.controller'

const router = Router()

router.get('', productController.getProducts)

router.get('/:id', productController.getProductById)

router.post('/', productController.postProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

export default router
