const express = require('express')
const router = express.Router()
const { studentsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllStudents)
router.get('/:id', ctrl.getOneStudent)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createNewStudent)
router.put('/:id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateStudent)
router.delete('/:id', ctrl.validations.exists, ctrl.deleteStudent)

module.exports = router