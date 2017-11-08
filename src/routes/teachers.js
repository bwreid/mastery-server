const express = require('express')
const router = express.Router()
const { teachersController: ctrl } = require('../controller')

router.get('/', ctrl.getAllTeachers)
router.get('/:id', ctrl.getOneTeacher)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.createTeacher)

module.exports = router