import { Router } from 'express'

import * as userController from '../controllers/users.controller'
import userValidation from '../validation/users.validation'

const router = Router()

router.get('', userController.getUsers)

router.get('/:id', userController.getUserById)

router.post('/', [userValidation], userController.postUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

export default router
