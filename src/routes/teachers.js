const express = require('express')
const router = express.Router()
const { teachersController: ctrl } = require('../controller')

router.get('/', ctrl.getAllTeachers)
router.get('/:id', ctrl.getOneTeacher)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.createTeacher)
router.put('/:id', ctrl.validations.exists, ctrl.validations.prune, ctrl.validations.complete, ctrl.updateTeacher)

module.exports = router