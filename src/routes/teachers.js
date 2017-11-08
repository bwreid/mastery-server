const express = require('express')
const router = express.Router()
const { teachersController: ctrl } = require('../controller')

router.get('/', ctrl.getAllTeachers)

module.exports = router