const { Router} = require('express')
const UserController = require('../Controllers/UserController')
const UserService = require('../Services/UserService')
const UserRepository = require('../Repositories/UserRepository')
const userModel = require('../Models/userModel')
const productModel = require('../Models/productModel')

const userRepository = new UserRepository(userModel)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const userRouter = new Router()

//userRouter.get('/', (req, res) => userController.get(req, res) )
userRouter.get('/', userController.get.bind(userController))
userRouter.post('/', userController.post.bind(userController))

module.exports = userRouter