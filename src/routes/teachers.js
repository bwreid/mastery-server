const express = require('express')
const router = express.Router()
const { teachersController: ctrl } = require('../controller')

router.get('/', ctrl.getAllTeachers)
router.get('/:id', ctrl.validations.exists, ctrl.getOneTeacher)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.createTeacher)
router.put('/:id', ctrl.validations.exists, ctrl.validations.prune, ctrl.validations.complete, ctrl.updateTeacher)
router.delete('/:id', ctrl.validations.exists, ctrl.deleteTeacher)

module.exports = router