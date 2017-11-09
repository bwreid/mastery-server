const express = require('express')
const router = express.Router()
const { lessonsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllLessons)
router.get('/:id', ctrl.validations.exists, ctrl.getOneLesson)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.createLesson)
router.put('/:id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateLesson)
router.delete('/:id', ctrl.validations.exists, ctrl.deleteLesson)

module.exports = router
