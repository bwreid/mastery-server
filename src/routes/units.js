const express = require('express')
const router = express.Router()
const { unitsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllUnits)
router.get('/:id', ctrl.getOneUnit)

module.exports = router