const express = require('express')
const router = express.Router({ mergeParams: true })
const { courseUnitsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllCourseUnits)
router.get('/:unit_id', ctrl.validations.exists, ctrl.getOneCourseUnit)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createCourseUnit)
router.put('/:unit_id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateCourseUnit)
router.delete('/:unit_id', ctrl.validations.exists, ctrl.deleteCourseUnit)

module.exports = router