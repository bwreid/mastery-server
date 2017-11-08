const express = require('express')
const router = express.Router()
const { coursesController: ctrl } = require('../controller')

router.get('/', ctrl.getAllCourses)

module.exports = router