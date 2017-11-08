const express = require('express')
const router = express.Router()
const { unitsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllUnits)
router.get('/:id', ctrl.getOneUnit)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createUnit)
router.put('/:id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateUnit)
router.delete('/:id', ctrl.validations.exists, ctrl.deleteUnit)

module.exports = router