const express = require('express')
const router = express.Router({ mergeParams: true })
const { courseUnitsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllCourseUnits)
router.get('/:unit_id', ctrl.getOneCourseUnit)

module.exports = router