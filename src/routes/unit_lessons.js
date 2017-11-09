const express = require('express')
const router = express.Router({ mergeParams: true })
const { unitLessonsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllUnitLessons)
router.get('/:lesson_id', ctrl.validations.exists, ctrl.getOneUnitLesson)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.createUnitLesson)
router.put('/:lesson_id', ctrl.validations.exists, ctrl.validations.prune, ctrl.validations.complete, ctrl.updateUnitLesson)
router.delete('/:lesson_id', ctrl.validations.exists, ctrl.deleteUnitLesson)

module.exports = router
