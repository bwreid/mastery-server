const express = require('express')
const router = express.Router({ mergeParams: true })
const { unitLessonsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllUnitLessons)
router.get('/:lesson_id', ctrl.getOneUnitLesson)

module.exports = router