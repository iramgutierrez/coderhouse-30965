const express = require('express')
const mealController = require('../controllers/meal.controller')
const mealAPI = require('../api/meal.api')

const router = express.Router()

router.get('/menu', mealController.getMenuController)
router.get('/api/menu', mealAPI.getMenuAPI)

module.exports = router
