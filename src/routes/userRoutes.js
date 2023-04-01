// cria a primeira rota que não sei o que o usuário

import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)
router.get('/:id', userController.getUserById)

export default router