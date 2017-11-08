const express = require('express')
const router = express.Router()
const { coursesController: ctrl } = require('../controller')

router.get('/', ctrl.getAllCourses)
router.get('/:id', ctrl.getOneCourse)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createCourse)
router.put('/:id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateCourse)
router.delete('/:id', ctrl.validations.exists, ctrl.deleteCourse)

module.exports = router