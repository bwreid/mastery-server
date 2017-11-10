const express = require('express')
const router = express.Router({ mergeParams: true })
const { classStudentsController: ctrl } = require('../controller')

router.get('/', ctrl.getClassStudents)
router.get('/:student_id', ctrl.validations.exists, ctrl.getOneClassStudent)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createClassStudent)
router.put('/:student_id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateClassStudent)
router.delete('/:student_id', ctrl.validations.exists, ctrl.deleteClassStudent)

module.exports = router