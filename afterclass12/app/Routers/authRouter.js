const { Router } = require('express')

const UsersRepository = require('../Repositories/UsersRepository')
const UsersService = require('../Services/UsersService')
const AuthController = require('../Controllers/AuthController')

const authRouterFn = () => {
  const usersRepository = new UsersRepository()
  const usersService = new UsersService(usersRepository)
  const authController = new AuthController(usersService)

  const authRouter = Router()

  authRouter.post('/login', authController.login.bind(authController))
  authRouter.post('/signup', authController.signUp.bind(authController))

  return authRouter
}

module.exports = authRouterFn
