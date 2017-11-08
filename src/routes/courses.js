const express = require('express')
const router = express.Router()
const { coursesController: ctrl } = require('../controller')

router.get('/', ctrl.getAllCourses)
router.get('/:id', ctrl.getOneCourse)

module.exports = router