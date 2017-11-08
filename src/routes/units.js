const express = require('express')
const router = express.Router()
const { unitsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllUnits)
router.get('/:id', ctrl.getOneUnit)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createUnit)

module.exports = router